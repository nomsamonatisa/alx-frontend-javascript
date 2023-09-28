<<<<<<< HEAD
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const successful = true; // Simulating a successful response
      if (successful) {
        resolve('API response data');
      } else {
        reject(new Error('API request failed'));
      }
    }, 2000); // Simulating a 2-second delay (replace with actual API call)
  });
}

// Example usage
getResponseFromAPI()
  .then((response) => {
    console.log('API response:', response);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
=======
const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const responseData = { message: 'API response data' };
      resolve(responseData);
    }, 1000); // Simulate a delay of 1 second
  });
};

export default getResponseFromAPI;
>>>>>>> cdc321f1ed5b3c5dea9b916bdd33f4a947117745

