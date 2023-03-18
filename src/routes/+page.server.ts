
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, parent, data }: any) {
  console.log("adf");
  const formData = new FormData()
  formData.append("username", "Chris[]");
  formData.append("usernasme", "Chris");
  const response = await fetch(`http://localhost:4000/repor`, { 
  method: 'POST',
  body: formData,
  headers: {
      'Authorization': `Bearer xxxxx`,
  }
});
}