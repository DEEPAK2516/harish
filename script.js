document.addEventListener('DOMContentLoaded', function () {
  // Get the parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check if the 'message' parameter is present
  if (urlParams.has('message')) {
    const receivedData = urlParams.get('message');

    // Display the received data on the page
    const receivedDataDiv = document.getElementById('receivedData');
    receivedDataDiv.innerHTML = `Received Data: ${receivedData}`;
  } else {
    console.log('No message received');
  }
});
