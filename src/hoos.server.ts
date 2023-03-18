

export function handleFetch({ event, request, fetch }) {
  console.log("adfa");
    request.headers.set('Authorization', 'Bearer ' + "adfdsf");
  

  return fetch(request);
}
