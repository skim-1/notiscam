let getScamScore = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      alert(JSON.parse(xhr.response).msg);
      let scamScore = JSON.parse(xhr.response).msg;
      if (!scamScore.length) {
          let scamText = "";
          if (scamScore < 0.45) {
            scamText = "This is fact!";
          } else if (scamScore > 0.55) {
            scamText = "This is fake!";
          } else {
            scamText = "I'm not sure!";
          }
          document.getElementById("scoreText").innerHTML = scamText;
      } else {
        document.getElementById("text").value = JSON.parse(xhr.response).msg;
      }
    }
  }
  xhr.open("POST", 'http://127.0.0.1:5000/news', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  if (document.getElementById('text').value.substring(0, 7) !== 'http://') {
    xhr.send(JSON.stringify({
      text:document.getElementById('text').value
    }));
  }
}
window.onload = () => {
}
