function year() {
var d = new Date();
var n = d.getFullYear();
currentyear.innerHTML = n;
}
window.onload = year