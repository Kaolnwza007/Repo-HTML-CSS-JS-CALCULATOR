function Calculate(){
    let x = +document.getElementById("x").value
    let y = +document.getElementById("y").value
    let symbol = document.getElementById("symbol").value
    let answer
        if (symbol == "add") {
        answer = x + y
    }
    else if (symbol == "subtract" ) {
        answer = x - y
    }
    else if (symbol == "multiply") {
        answer = x * y
    }
    else {
        answer = x / y
    }
document.getElementById("result").innerText = answer
}