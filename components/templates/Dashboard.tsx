"use client"
import { useProject } from "@/store/project"
import { scrollToSection, SECTIONS } from "@/lib/navigation"

// Helper function to get CSS custom property values
const getCSSVar = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

export default function Dashboard() {
  const { website } = useProject(s => s.project)
  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-4" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      
      {/* Header */}
      <div className="flex items-center justify-between py-20 px-6" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Dashboard</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            className="button-secondary px-4 py-2 text-sm font-medium"
            onClick={() => {
              // Simulate export functionality
              const data = "Dashboard Report\n\nTotal Revenue: $45,231\nNew Customers: 2,350\nActive Projects: 12\nConversion Rate: 3.24%";
              const blob = new Blob([data], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'dashboard-report.txt';
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Export Report
          </button>
          <button 
            className="button-accent px-4 py-2 text-sm font-medium"
            onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}
          >
            Add Widget
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div id={SECTIONS.DASHBOARD.STATS} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Total Revenue</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>$45,231</p>
              <p className="text-sm" style={{ color: 'var(--color-primary)' }}>+20.1% from last month</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>New Customers</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>2,350</p>
              <p className="text-sm" style={{ color: 'var(--color-primary)' }}>+15.3% from last month</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary)', borderRadius: 'var(--radius)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Active Projects</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>12</p>
              <p className="text-sm" style={{ color: 'var(--color-primary)' }}>3 completed this week</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)', borderRadius: 'var(--radius)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
          </div>
        </div>

        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Conversion Rate</p>
              <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>3.24%</p>
              <p className="text-sm" style={{ color: 'var(--color-primary)' }}>+0.4% from last month</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius)' }}>
              <svg className="w-6 h-6" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div id={SECTIONS.DASHBOARD.CHARTS} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="surface-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Revenue Overview</h3>
            <div className="flex items-center gap-2">
              <button 
                className="button-accent px-3 py-1 text-sm font-medium"
                onClick={() => {
                  // Simulate data filtering
                  const chartBars = document.querySelectorAll('[data-chart-bar]');
                  chartBars.forEach((bar, index) => {
                    const heights = [65, 45, 80, 55, 70, 85, 95];
                    (bar as HTMLElement).style.height = `${heights[index]}%`;
                  });
                }}
              >
                7D
              </button>
              <button 
                className="px-3 py-1 text-sm font-medium" 
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={() => {
                  // Simulate data filtering
                  const chartBars = document.querySelectorAll('[data-chart-bar]');
                  chartBars.forEach((bar, index) => {
                    const heights = [45, 60, 35, 70, 55, 40, 65];
                    (bar as HTMLElement).style.height = `${heights[index]}%`;
                  });
                }}
              >
                30D
              </button>
              <button 
                className="px-3 py-1 text-sm font-medium" 
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={() => {
                  // Simulate data filtering
                  const chartBars = document.querySelectorAll('[data-chart-bar]');
                  chartBars.forEach((bar, index) => {
                    const heights = [30, 50, 25, 60, 40, 35, 55];
                    (bar as HTMLElement).style.height = `${heights[index]}%`;
                  });
                }}
              >
                90D
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 80, 55, 70, 85, 95].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  data-chart-bar
                  className="w-full rounded-t transition-all duration-500" 
                  style={{ 
                    height: `${height}%`, 
                    backgroundColor: 'var(--color-primary)',
                    minHeight: '20px'
                  }}
                />
                <span className="text-xs mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text)' }}>Top Products</h3>
          <div className="space-y-4">
            {[
              { name: 'Premium Widget', sales: 1240, revenue: '$12,400' },
              { name: 'Standard Package', sales: 890, revenue: '$8,900' },
              { name: 'Basic Plan', sales: 650, revenue: '$3,250' },
              { name: 'Enterprise Suite', sales: 320, revenue: '$16,000' }
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--color-text)' }}>{product.name}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{product.sales} sales</p>
                  </div>
                </div>
                <p className="font-semibold" style={{ color: 'var(--color-text)' }}>{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div id={SECTIONS.DASHBOARD.ACTIVITY} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 surface-card p-6">
          <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text)' }}>Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New customer registered', user: 'John Doe', time: '2 minutes ago', type: 'user' },
              { action: 'Payment received', user: 'Sarah Wilson', time: '15 minutes ago', type: 'payment' },
              { action: 'Project completed', user: 'Mike Chen', time: '1 hour ago', type: 'project' },
              { action: 'New order placed', user: 'Emily Davis', time: '2 hours ago', type: 'order' },
              { action: 'Support ticket resolved', user: 'Alex Johnson', time: '3 hours ago', type: 'support' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3" style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius)' }}>
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: index === 0 ? 'var(--color-accent)' : 'var(--color-primary)', borderRadius: 'var(--radius)' }}>
                  <svg className="w-4 h-4" style={{ color: 'var(--color-primary-contrast)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium" style={{ color: 'var(--color-text)' }}>{activity.action}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-6">
          <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-text)' }}>Quick Actions</h3>
          <div className="space-y-3">
            <button 
              className="w-full button-secondary p-3 text-left"
              onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Create New Project</span>
              </div>
            </button>
            <button 
              className="w-full button-secondary p-3 text-left"
              onClick={() => scrollToSection(SECTIONS.DASHBOARD.ACTIVITY)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Invite Team Member</span>
              </div>
            </button>
            <button 
              className="w-full button-secondary p-3 text-left"
              onClick={() => scrollToSection(SECTIONS.DASHBOARD.CHARTS)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>View Analytics</span>
              </div>
            </button>
            <button 
              className="w-full button-secondary p-3 text-left"
              onClick={() => {
                // Simulate settings panel opening
                const settingsModal = document.createElement('div');
                settingsModal.innerHTML = `
                  <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                    <div style="background: var(--color-bg); padding: 2rem; border-radius: var(--radius); max-width: 400px; width: 90%;">
                      <h3 style="color: var(--color-text); margin-bottom: 1rem;">Dashboard Settings</h3>
                      <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">Configure your dashboard preferences and notifications.</p>
                      <button onclick="this.parentElement.parentElement.remove()" style="background: var(--color-primary); color: var(--color-primary-contrast); padding: 0.5rem 1rem; border: none; border-radius: var(--radius); cursor: pointer;">Close</button>
                    </div>
                  </div>
                `;
                document.body.appendChild(settingsModal);
              }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="surface-footer py-20 px-6 mt-16" style={{ borderRadius: 'var(--radius)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center surface-primary">
                  <span className="text-white font-bold text-sm">CAF</span>
                </div>
                <span className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>ChooseAFeel</span>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Create perfect color palettes with confidence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Tools</h3>
              <ul className="space-y-3">
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}>Documentation</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.CHARTS)}>Figma Integration</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.ACTIVITY)}>VS Code Extension</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}>API Access</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.CHARTS)}>Templates</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.ACTIVITY)}>Color Games</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Connect</h3>
              <ul className="space-y-3">
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.ACTIVITY)}>Get Support</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}>Community</button></li>
                <li><button className="transition-colors hover:underline text-left" style={{ color: 'var(--color-text-secondary)' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-primary')} onMouseLeave={(e) => (e.target as HTMLElement).style.color = getCSSVar('--color-text-secondary')} onClick={() => scrollToSection(SECTIONS.DASHBOARD.CHARTS)}>GitHub</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>Support Me</h3>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Love my tool? Help me grow by sharing with fellow designers.</p>
              <button 
                className="transition-colors hover:underline font-medium" 
                style={{ color: 'var(--color-primary)' }} 
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '0.8'} 
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onClick={() => scrollToSection(SECTIONS.DASHBOARD.STATS)}
              >
                Share with friends
              </button>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
            <p>&copy; 2024 ChooseAFeel. Made with ❤️ for designers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
