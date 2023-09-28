// Importing uploadPhoto and createUser from utils.js
const { uploadPhoto, createUser } = require('./utils.js');

// Async function to upload photo and create user
async function asyncUploadUser() {
  try {
    // Call the asynchronous functions and await their responses
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Return the response object in the required format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fail, catch the error and throw it
    throw error;
  }
}

// Example usage
async function main() {
  try {
    const response = await asyncUploadUser();
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

