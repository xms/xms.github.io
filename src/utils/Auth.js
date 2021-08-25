export function checkAuth() {
  return !!sessionStorage.getItem('userid');
}

export default {};
