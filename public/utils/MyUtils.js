export function checkUserOS(arr) {
  if (arr?.length === 0) {
    return false;
  }
  const userAgent = window.navigator.userAgent;

  for (const item of arr) {
    if (userAgent.indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
}
