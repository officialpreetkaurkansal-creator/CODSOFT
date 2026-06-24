const display = document.getElementById("display");

function addToScreen(value){
    display.value += value;
}

function resetScreen(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
