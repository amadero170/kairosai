// Google Analytics 4 events. No-op until NEXT_PUBLIC_GA_ID is set and gtag has loaded.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
