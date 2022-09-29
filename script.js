var request = new XMLHttpRequest();
request.open('GET', 'https://nuusijosxa.execute-api.ap-southeast-1.amazonaws.com/books', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      conosle.log(data)
  }
}

request.send();