let getScamScore = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      let scamScore = JSON.parse(xhr.response).percent;
      let scamText = "";
      if (scamScore < 0.45) {
        scamText = "This is fact!";
      } else if (scamScore > 0.55) {
        scamText = "This is fake!";
      } else {
        scamText = "I'm not sure!";
      }
      document.getElementById("scoreText").innerHTML = scamText;
      document.getElementById("text").value = JSON.parse(xhr.response).msg;
      }
    }
  xhr.open("POST", 'http://127.0.0.1:5000/summary', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  if (document.getElementById('text').value.substring(0, 7) !== 'http://') {
    xhr.send(JSON.stringify({
      text:document.getElementById('text').value
    }));
  }
}
window.onload = () => {
}
