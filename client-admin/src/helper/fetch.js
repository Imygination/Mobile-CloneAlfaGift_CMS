const baseUrl = "http://localhost:3000";

async function fetchData(path) {
  try {
    const response = await fetch(`${baseUrl}/${path}`);
    console.log(response, "<<<<<<<< response helper");
    if (!response.ok) {
      const error = await response.json();
      throw { error };
    }
    const result = await response.json();
    return result
  } catch (error) {
    console.log(error, "<<<<< error helper");
    throw error;
  }
}

export default fetchData;
