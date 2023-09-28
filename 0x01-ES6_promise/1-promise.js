<<<<<<< HEAD
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
=======
const getFullResponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success'
      };
      resolve(response);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
};

export default getFullResponseFromAPI;
>>>>>>> cdc321f1ed5b3c5dea9b916bdd33f4a947117745

