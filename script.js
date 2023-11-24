document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('message')) {
    const receivedData = urlParams.get('message');
    const receivedDataDiv = document.getElementById('receivedData');
    receivedDataDiv.innerHTML = `Received Data: ${receivedData}`;
  } else {
    console.log('No message received');
  }
});
