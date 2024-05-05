/*
Append three handlers to the function:
When the Promise resolves, return an object with the following attributes
status : 200
body : success
When the Promise rejects, return an empty Error object
For every resolution, log Got a response from the API to the console
*/
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  });
}
handleResponseFromAPI(true)
  .then((response) => {
    console.log('Got a response from the API');
    return (response);
  })
  .catch((error) => {
    console.log('Error', error);
  });
