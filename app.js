var expression = "";
var output = document.getElementById("input");

function clicked (s){
    expression += s;
    output.value = expression;
}
function calculate () {
    output.value = eval(expression);
}
function reset () {
    expression = "";
    output.value = "";
}