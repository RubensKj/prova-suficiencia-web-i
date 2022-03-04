export function getItem(key: string): string | null {
  return localStorage.getItem(key);
}

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}