import { useEffect, useRef } from 'react'

// The app is a sophisticated vanilla JS application with DOM-based rendering.
// React wraps it cleanly: React owns the root mount, vanilla JS owns the inner DOM.
export default function App() {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    // Load Chart.js
    const chartScript = document.createElement('script')
    chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
    chartScript.onload = () => {
      // Load lucide icons
      const lucideScript = document.createElement('script')
      lucideScript.src = 'https://unpkg.com/lucide@latest'
      lucideScript.onload = () => {
        // Load the core app logic
        const appScript = document.createElement('script')
        appScript.src = '/mantiq-core.js'
        document.head.appendChild(appScript)
      }
      document.head.appendChild(lucideScript)
    }
    document.head.appendChild(chartScript)
  }, [])

  return (
    <>
      <div id="app" className="min-h-screen" />
      <div id="notification-container" className="fixed bottom-10 right-10 z-[110] space-y-3" />
    </>
  )
}
