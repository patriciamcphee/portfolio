export function getBaseUrl() {
  if (typeof window === 'undefined') return '/api/feedback'
  const hostname = window.location.hostname
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3002/api/feedback'
  }
  return '/api/feedback'
}
