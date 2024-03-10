// URLHealthCheck.js
const checkUrlHealth = async (url) => {
    try {
      const response = await fetch(url, { method: 'GET' });
      return response.ok;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return false; // Return false if there's an error fetching the URL
    }
  };
  
  export default checkUrlHealth;
  