function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Example usage
getFullResponseFromAPI(true)
  .then((response) => {
    console.log('API response:', response);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

