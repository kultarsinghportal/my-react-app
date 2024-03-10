// APIHealthCheck.js
import axios from 'axios';

const checkApiHealth = async (apiEndpoint) => {
  try {
    const response = await axios.get(apiEndpoint);
    const isWorking = response.data.toLowerCase().includes('working');
    return isWorking;
  } catch (error) {
    console.error(`Error fetching ${apiEndpoint}:`, error);
    return false;
  }
};

export default checkApiHealth;
