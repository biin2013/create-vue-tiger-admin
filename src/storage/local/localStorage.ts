export function setLocalStorage(key: string, data: any, expires = null): void {
  window.localStorage.setItem(key, JSON.stringify({ data, expires }));
}

export function getLocalStorage(key: string, defaults = null): any {
  const obj = JSON.parse(window.localStorage.getItem(key) || '');
  if (!obj) {
    return defaults;
  }

  if (obj.expires && obj.expires <= new Date().getTime()) {
    removeLocalStorage(key);
    return defaults;
  }

  return obj.data || defaults;
}

export function removeLocalStorage(key: string): void {
  window.localStorage.removeItem(key);
}

export function clearLocalStorage(): void {
  window.localStorage.clear();
}
