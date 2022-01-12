function cb(response) {
  var message = `Page viewed ${response.value} times.`;
  document.getElementById('visits').innerText = message;
}
