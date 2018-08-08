export function getRedirctUrl ({type, avatar}) {
  let url;
  if (!avatar) {
    url = 'userinfo';
  } else {
    url = 'list'
  }
  return url;
}