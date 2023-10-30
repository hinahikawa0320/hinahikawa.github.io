function password() {
    var h = document.getElementById("pass").value;
    var f = "0320"

    if (h == f) {
        window.location.href = "index.html";
    } else
        document.getElementById("span1").textContent = "パスワードが違います";

}
