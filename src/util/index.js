export function getRedirctUrl ({type, avatar}) {
  let url;
  if (!avatar) {
    url = 'userinfo';
  }
  return url;
}