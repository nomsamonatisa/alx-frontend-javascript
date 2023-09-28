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

