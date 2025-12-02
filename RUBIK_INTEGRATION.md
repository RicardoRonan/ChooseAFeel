# Rubik's Cube Integration

This document describes the Rubik's Cube integration added to the ColourPal project.

## Overview

The Rubik's Cube feature allows users to visualize their color palettes in a 3D interactive cube. Users can:

- See their theme colors applied to a 3D Rubik's cube
- Interact with the cube using mouse controls
- Customize cube properties (size, spacing, animation speed)
- Export cube configurations

## Components Added

### 1. RubikCube.tsx
The main Three.js component that renders the 3D cube:
- Uses Three.js for 3D rendering
- Implements mouse interaction (drag to rotate, scroll to zoom)
- Supports real-time color updates
- Handles responsive resizing

### 2. RubikPanel.tsx
The control panel for cube customization:
- Color pickers for each cube face
- Size and spacing controls
- Animation speed adjustment
- Export functionality

### 3. templates/RubikCube.tsx
The template wrapper that integrates with the existing theme system:
- Connects cube colors to the project's theme palette
- Provides a polished UI with instructions
- Shows color legend

## Integration Points

### Project Store
- Added `"rubik"` as a new project type
- Updated type definitions

### Navigation
- Added "Rubik's Cube" option to the template dropdown
- Added "Cube" tab to sidebar when Rubik template is selected

### Sidebar
- Auto-switches to "Cube" tab when Rubik template is selected
- Shows RubikPanel with cube-specific controls

## Features

### 3D Interaction
- **Mouse Controls**: Click and drag to rotate the cube
- **Zoom**: Mouse wheel to zoom in/out
- **Orbit**: Right-click and drag to orbit around the cube
- **Responsive**: Automatically adjusts to container size

### Color Integration
- **Theme Sync**: Cube colors automatically sync with the current theme
- **Real-time Updates**: Colors update immediately when changed in the theme panel
- **Custom Colors**: Each face can be customized independently

### Customization Options
- **Cube Size**: Adjust the overall size of the cube (0.5x to 2x)
- **Spacing**: Control spacing between cubies (0 to 0.5)
- **Animation Speed**: Set rotation animation duration (100ms to 1000ms)

### Export Features
- **Screenshot**: Capture the current cube state as PNG
- **Configuration Export**: Export cube settings for sharing

## Technical Details

### Dependencies Added
- `three`: 3D graphics library
- `@types/three`: TypeScript definitions
- `@tweenjs/tween.js`: Animation library

### Performance Considerations
- Uses `requestAnimationFrame` for smooth 60fps rendering
- Implements proper cleanup to prevent memory leaks
- Responsive design that adapts to different screen sizes

### Browser Compatibility
- Requires WebGL support
- Works on modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for unsupported browsers

## Usage

1. Select "Rubik's Cube" from the template dropdown
2. The sidebar will automatically switch to the "Cube" tab
3. Use the color controls to customize each face
4. Interact with the cube using mouse controls
5. Adjust cube properties using the sliders
6. Export your cube configuration

## Future Enhancements

- Rotation animations for cube faces
- Multiple cube configurations
- Advanced lighting options
- VR/AR support
- Cube solving algorithms visualization
