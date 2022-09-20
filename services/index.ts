const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/api/auth/local/login`, options);
  return response.json();
}

export async function verify(token) {
  const response = await fetch(`${BASE_URL}/api/auth/local/verify-account/${token}`);
  return response.json();
}

export async function signup(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/api/users/create`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
