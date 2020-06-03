function showInput() {
    document.getElementById('alertDiv').style.display = "block";
    var nama = document.getElementById('name').value;
    var e_mail = document.getElementById('email').value;
    document.getElementById("showNama").innerHTML = nama;
    document.getElementById("showEmail").innerHTML = e_mail;
}

function showNavbar() {
    var navigation = document.getElementById("topNavbar");
    if (navigation.className === "navbar") {
      navigation.className += " responsive";
    } else {
      navigation.className = "navbar";
    }
  }