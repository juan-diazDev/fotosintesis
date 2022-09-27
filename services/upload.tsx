async function uploadFile(data) {
  try {
    const options = {
      method: "POST",
      body: data,
    };
    const response = await fetch(`https://api.cloudinary.com/v1_1/juanito-om/image/upload`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export default uploadFile;
