function buttonclick(val)
{
    document.getElementById("screen").value += val;
}

function clearScreen()
{
    document.getElementById("screen").value="";
}

function calculate(){
    var text= document.getElementById("screen").value;
    try {
        var result = eval(text);
        document.getElementById("screen").value = result;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}

function backspace(){
    var text = document.getElementById("screen").value;
    document.getElementById("screen").value = text.substring(0, text.length - 1);
}

function squareRoot() {
    var text = document.getElementById("screen").value;
    try {
        var result = Math.sqrt(eval(text));
        document.getElementById("screen").value = result;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}