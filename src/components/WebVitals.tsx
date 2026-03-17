'use client'
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      })
    }

    // In production, you would send this to GA or your analytics endpoint
    if (typeof window !== 'undefined' && (window as any).gtag === 'function') {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}
