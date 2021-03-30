const xhr = new XMLHttpRequest();
const main = document.getElementById("main");

$("#categorie-accommodation").click(function () {
  xhr.onload = function () {
    if ((this.status = 200)) {
      main.innerHTML = xhr.responseText;
    } else {
      console.warn("Did not receive 200 OK from response!");
    }
  };

  xhr.open("get", "accommodation.html");
  window.location.reload();
  xhr.send();
});
