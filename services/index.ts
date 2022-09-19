const BASE_URL = process.env.LOCAL_URL;

export async function verify(token) {
  const response = await fetch(`${BASE_URL}/auth/local/verifyAccount/${token}`);
  return response.json();
}
