const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export  async function createPost(post) {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    };
    const response = await fetch(`${BASE_URL}/api/blogpost/create`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
