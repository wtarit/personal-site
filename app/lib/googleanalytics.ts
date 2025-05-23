import { useEffect, useState } from "react"

export const useGoogleAnalytics = (
    gaMeasurementId: string,
  ) => {
    const [isInitialized, setIsInitialized] = useState(false)
    useEffect(() => {
      const loadScript = () => {
        // gaMeasurementId is optional so not all devs need it to run the app
        // @ts-ignore
        if (!window.gtag && gaMeasurementId) {
          // Create the script element
          const script = document.createElement('script')
          script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
          script.async = true
          // Append the script to the document
          document.head.appendChild(script)
          // Initialize gtag when the script is loaded - this could be done before
          script.onload = () => {
            // @ts-ignore
            window.dataLayer = window.dataLayer || []
            // @ts-ignore
            function gtag() {
              // @ts-ignore
              window.dataLayer.push(arguments)
            }
            // @ts-ignore
            window.gtag = gtag
            // @ts-ignore
            window.gtag('js', new Date().toISOString())
            // @ts-ignore
            window.gtag('config', gaMeasurementId, {
              debug_mode: false, // I keep this here to remember where to toggle debug
            })
            // Mark as initialized
            setIsInitialized(true)
          }
        } else {
          // gtag is already available, mark as initialized
          setIsInitialized(true)
        }
      }
      loadScript()
    }, [gaMeasurementId])
    return isInitialized
  }
  