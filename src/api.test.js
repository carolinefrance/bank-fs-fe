const axios = require('axios');

/* Write: test function provided by Jest takes two parameters: 
- a description of the test 
- a callback function that contains your test logic

test('should check connectivity between front end and back end', async () => {
    // Test logic goes here
  });
*/

// Simulate API requests: simulate the API requests made by the front end using Axios; make a GET request to an endpoint on your back end.
test('should check connectivity between front end and back end', async () => {
    const response = await axios.get('/api/users');
    // Add assertions to verify the response
    expect(response.status).toBe(200);
  });

  // Add assertions: After making the API request, you can add assertions to verify the response from the back end. Assertions help you define the expected behavior of the API and check if it matches the actual response.
  test('should check connectivity between front end and back end', async () => {
    const response = await axios.get('/api/users');
    
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ message: 'Success' });
  });

  // Run the tests: You can run your Jest tests by executing the jest command in your terminal. Jest will automatically find and execute all the test files in your project.