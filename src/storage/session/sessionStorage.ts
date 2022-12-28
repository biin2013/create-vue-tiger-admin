export function setSessionStorage(
  key: string,
  data: any,
  expires = null
): void {
  window.sessionStorage.setItem(key, JSON.stringify({ data, expires }));
}

export function getSessionStorage(key: string, defaults = null): any {
  const obj = JSON.parse(window.sessionStorage.getItem(key) || '');
  if (!obj) {
    return defaults;
  }

  if (obj.expires && obj.expires <= new Date().getTime()) {
    removeSessionStorage(key);
    return defaults;
  }

  return obj.data || defaults;
}

export function removeSessionStorage(key: string): void {
  window.sessionStorage.removeItem(key);
}

export function clearSessionStorage(): void {
  window.sessionStorage.clear();
}
