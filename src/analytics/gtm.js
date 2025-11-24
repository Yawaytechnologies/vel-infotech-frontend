// src/analytics/gtm.js
export function pushToDataLayer(obj = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

export function trackPageView() {
  const { pathname, search, hash } = window.location;
  pushToDataLayer({
    event: 'page_view',
    page_location: window.location.href,
    page_path: `${pathname}${search}${hash || ''}`,
    page_title: document.title || undefined,
  });
}
