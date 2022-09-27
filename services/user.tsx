const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export async function getUser() {
  try {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${BASE_URL}/api/users/me`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function updateUser(user) {
  try {
    const token = localStorage.getItem('token');
    const options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${BASE_URL}/api/users/${user.id}`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
