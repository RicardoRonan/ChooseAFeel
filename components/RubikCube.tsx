"use client"
import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three-stdlib'
import TWEEN from '@tweenjs/tween.js'

interface RubikCubeProps {
  colors: {
    front: string
    back: string
    top: string
    bottom: string
    right: string
    left: string
  }
  size?: number
  spacing?: number
  animationDuration?: number
  onZoomIn?: () => void
  onZoomOut?: () => void
}

interface Cubie {
  mesh: THREE.Group
  coord: [number, number, number]
}

export default function RubikCube({ 
  colors, 
  size = 1, 
  spacing = 0.1, 
  animationDuration = 300,
  onZoomIn,
  onZoomOut
}: RubikCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<any>(null)
  const cubiesRef = useRef<Cubie[]>([])
  const animationIdRef = useRef<number | null>(null)
  const dragStateRef = useRef<{
    startFace: THREE.Face | null
    startPoint: THREE.Vector3 | null
    hitObject: THREE.Object3D | null
  } | null>(null)

  const [isInitialized, setIsInitialized] = useState(false)
  const [currentZoom, setCurrentZoom] = useState(1)
  const [showZoomFeedback, setShowZoomFeedback] = useState(false)
  const isInitializingRef = useRef(false)

  // Listen for zoom changes to keep state in sync
  const handleZoomChange = () => {
    if (controlsRef.current) {
      const distance = controlsRef.current.getDistance()
      const zoomRatio = distance / 20 // Normalize to 0-1 range
      setCurrentZoom(zoomRatio)
    }
  }

  // Convert hex color to Three.js color
  const hexToColor = (hex: string) => {
    return new THREE.Color(hex)
  }

  // Zoom functions that mimic scroll zoom behavior
  const handleZoomIn = () => {
    if (controlsRef.current) {
      // Use OrbitControls zoom methods to mimic scroll wheel behavior
      const zoomSpeed = 0.1
      const currentDistance = controlsRef.current.getDistance()
      const newDistance = currentDistance * (1 - zoomSpeed)
      
      // Apply zoom limits similar to OrbitControls
      const minDistance = 1.5
      const maxDistance = 20
      const clampedDistance = Math.max(minDistance, Math.min(maxDistance, newDistance))
      
      // Update the zoom by adjusting the target distance
      controlsRef.current.dollyIn(zoomSpeed)
      controlsRef.current.update()
      
      // Update our zoom state for feedback
      const zoomRatio = clampedDistance / (maxDistance - minDistance + minDistance)
      setCurrentZoom(zoomRatio)
      
      // Show feedback
      setShowZoomFeedback(true)
      setTimeout(() => setShowZoomFeedback(false), 1000)
      
      onZoomIn?.()
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      // Use OrbitControls zoom methods to mimic scroll wheel behavior
      const zoomSpeed = 0.1
      const currentDistance = controlsRef.current.getDistance()
      const newDistance = currentDistance * (1 + zoomSpeed)
      
      // Apply zoom limits similar to OrbitControls
      const minDistance = 1.5
      const maxDistance = 20
      const clampedDistance = Math.max(minDistance, Math.min(maxDistance, newDistance))
      
      // Update the zoom by adjusting the target distance
      controlsRef.current.dollyOut(zoomSpeed)
      controlsRef.current.update()
      
      // Update our zoom state for feedback
      const zoomRatio = clampedDistance / (maxDistance - minDistance + minDistance)
      setCurrentZoom(zoomRatio)
      
      // Show feedback
      setShowZoomFeedback(true)
      setTimeout(() => setShowZoomFeedback(false), 1000)
      
      onZoomOut?.()
    }
  }

  // Build a single cubie
  const buildCubie = useCallback((x: number, y: number, z: number, cubieSize: number, currentSpacing: number): THREE.Group => {
    const group = new THREE.Group()
    const half = cubieSize / 2

    // Create 6 faces with appropriate colors
    const faceGeoms = new THREE.PlaneGeometry(cubieSize, cubieSize)
    const faces = [
      { dir: [0, 0, 1], color: z === 1 ? colors.front : '#000000' }, // front
      { dir: [0, 0, -1], color: z === -1 ? colors.back : '#000000' }, // back
      { dir: [0, 1, 0], color: y === 1 ? colors.top : '#000000' }, // top
      { dir: [0, -1, 0], color: y === -1 ? colors.bottom : '#000000' }, // bottom
      { dir: [1, 0, 0], color: x === 1 ? colors.right : '#000000' }, // right
      { dir: [-1, 0, 0], color: x === -1 ? colors.left : '#000000' } // left
    ]

    faces.forEach(face => {
      const material = new THREE.MeshBasicMaterial({ 
        color: face.color, 
        side: THREE.DoubleSide,
        transparent: face.color === '#000000',
        opacity: face.color === '#000000' ? 0 : 1
      })
      const mesh = new THREE.Mesh(faceGeoms, material)
      mesh.position.set(
        face.dir[0] * half,
        face.dir[1] * half,
        face.dir[2] * half
      )
      mesh.lookAt(new THREE.Vector3().copy(mesh.position).multiplyScalar(2))
      group.add(mesh)
    })

    group.position.set(x * (cubieSize + currentSpacing), y * (cubieSize + currentSpacing), z * (cubieSize + currentSpacing))
    return group
  }, [colors])

  // Initialize Three.js scene
  const initializeScene = useCallback(() => {
    if (!containerRef.current || isInitializingRef.current) return
    
    isInitializingRef.current = true

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    const cubeSize = size + spacing * 2 // Account for spacing
    const distance = Math.max(cubeSize * 3, 5) // Minimum distance of 5
    camera.position.set(distance, distance, distance)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    // Improve mobile touch interactions
    controls.enablePan = true
    controls.enableZoom = true
    controls.enableRotate = true
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    }
    // Set zoom limits to match scroll behavior
    controls.minDistance = 1.5
    controls.maxDistance = 20
    controls.zoomSpeed = 1.0
    controlsRef.current = controls

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Build the cube
    const cubies: Cubie[] = []
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cubie = buildCubie(x, y, z, size, spacing)
          scene.add(cubie)
          cubies.push({ mesh: cubie, coord: [x, y, z] })
        }
      }
    }
    cubiesRef.current = cubies

    // Event listeners for interaction
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()

    const onPointerDown = (event: PointerEvent) => {
      pointer.x = (event.clientX / width) * 2 - 1
      pointer.y = -(event.clientY / height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      
      const intersects = raycaster.intersectObjects(cubies.map(c => c.mesh), true)
      if (intersects.length > 0) {
        const hit = intersects[0]
        dragStateRef.current = {
          startFace: hit.face as THREE.Face,
          startPoint: hit.point,
          hitObject: hit.object
        }
        renderer.domElement.style.cursor = 'grabbing'
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!dragStateRef.current) {
        // Update cursor style
        pointer.x = (event.clientX / width) * 2 - 1
        pointer.y = -(event.clientY / height) * 2 + 1
        raycaster.setFromCamera(pointer, camera)
        const intersects = raycaster.intersectObjects(cubies.map(c => c.mesh), true)
        if (intersects.length > 0) {
          renderer.domElement.style.cursor = 'grab'
        } else {
          renderer.domElement.style.cursor = 'auto'
        }
        return
      }
      // Handle drag logic here
    }

    const onPointerUp = (event: PointerEvent) => {
      if (dragStateRef.current) {
        // Determine rotation and animate
        // For now, just reset drag state
        dragStateRef.current = null
        renderer.domElement.style.cursor = 'auto'
      }
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown)
    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('pointerup', onPointerUp)

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      TWEEN.update()
      if (controlsRef.current) {
        controlsRef.current.update()
      }
      renderer.render(scene, camera)
    }
    animate()

    // Add event listener for zoom changes
    controls.addEventListener('change', handleZoomChange)

    setIsInitialized(true)
    isInitializingRef.current = false
  }, [size, spacing, buildCubie])

  // Update colors when props change
  const updateColors = useCallback(() => {
    if (!isInitialized || !sceneRef.current) return

    cubiesRef.current.forEach(cubie => {
      cubie.mesh.children.forEach((faceMesh, index) => {
        if (faceMesh instanceof THREE.Mesh && faceMesh.material instanceof THREE.MeshBasicMaterial) {
          const face = faceMesh
          const material = face.material
          
          // Determine which face this is based on position
          const pos = face.position
          let newColor = '#000000'
          
          if (pos.z > 0) newColor = colors.front
          else if (pos.z < 0) newColor = colors.back
          else if (pos.y > 0) newColor = colors.top
          else if (pos.y < 0) newColor = colors.bottom
          else if (pos.x > 0) newColor = colors.right
          else if (pos.x < 0) newColor = colors.left
          
          material.color.set(newColor)
          material.transparent = newColor === '#000000'
          material.opacity = newColor === '#000000' ? 0 : 1
        }
      })
    })
  }, [colors, isInitialized])

  // Initialize on mount
  useEffect(() => {
    const container = containerRef.current
    initializeScene()
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (rendererRef.current && container) {
        container.removeChild(rendererRef.current.domElement)
      }
      // Clean up controls event listener
      if (controlsRef.current) {
        controlsRef.current.removeEventListener('change', handleZoomChange)
      }
    }
  }, [initializeScene])

  // Only update colors when they change, don't rebuild the entire scene

  // Update colors when props change - only when colors actually change
  useEffect(() => {
    if (isInitialized) {
      updateColors()
    }
  }, [colors, isInitialized, updateColors])

  // Camera adjustment is now handled in initializeScene

  // Handle resize and orientation changes
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return
      
      const container = containerRef.current
      const width = container.clientWidth
      const height = container.clientHeight
      
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    // Handle both resize and orientation change events
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', () => {
      // Delay to ensure the viewport has updated
      setTimeout(handleResize, 100)
    })
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
      <div 
        ref={containerRef} 
        className="w-full h-full"
      />
      
      {/* Zoom buttons - visible on mobile and tablet */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-2 lg:hidden z-10">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-lg sm:text-xl font-bold text-gray-800 hover:text-gray-900 transition-all duration-200 active:scale-95 backdrop-blur-sm touch-manipulation"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
            minHeight: '40px',
            minWidth: '40px'
          }}
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-lg sm:text-xl font-bold text-gray-800 hover:text-gray-900 transition-all duration-200 active:scale-95 backdrop-blur-sm touch-manipulation"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
            minHeight: '40px',
            minWidth: '40px'
          }}
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {/* Zoom feedback */}
      {showZoomFeedback && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:hidden z-20">
          <div 
            className="px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)'
            }}
          >
            <span className="text-sm font-medium">
              {controlsRef.current ? 
                `Zoom: ${Math.round((controlsRef.current.getDistance() / 20) * 100)}%` : 
                'Zoom'
              }
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
