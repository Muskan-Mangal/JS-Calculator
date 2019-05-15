function expression(x)
{

  document.getElementById("display").value += x;
}
window.addEventListener("error", handleError, true);

function clears()
{
  document.getElementById("display").value="";
}

function solve()
{
  document.getElementById("display").value = eval(document.getElementById("display").value);
}

function handleError(evt) {
if (evt.message) {
  alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
} else {
  alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
}
}
