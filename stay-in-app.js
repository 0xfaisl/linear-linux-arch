function isLinear(url, base) {
  try {
    const { protocol, hostname } = new URL(url, base);
    return protocol === 'https:' && (hostname === 'linear.app' || hostname.endsWith('.linear.app'));
  } catch {
    return false;
  }
}

if (typeof window !== 'undefined') {
  const open = window.open;
  window.open = function (url, ...args) {
    if (isLinear(url, location.href)) {
      location.assign(url);
      return window;
    }
    return open.call(this, url, ...args);
  };

  addEventListener('click', (event) => {
    const link = event.target.closest?.('a[target="_blank"]');
    if (link && isLinear(link.href, location.href)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(link.href);
    }
  }, true);
} else {
  module.exports = { isLinear };
}
