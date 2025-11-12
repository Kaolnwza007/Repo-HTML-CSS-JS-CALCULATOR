# Repo-HTML-CSS-JS-CALCULATOR

HTML >>>>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Homework.css">
    <title>เครื่องคิดเลขขขขขข</title>
</head>
<body>
    <div class="calculator-container">
        <h1 class="calculator-title">เครื่องคิดเลข</h1>

        <div class="calculator-inputs">
            <input id="x" type="number" placeholder="ตัวเลขแรก" class="calculator-number">
            
            <select id="symbol" class="calculator-number">
                <option value="add">บวก +</option>
                <option value="subtract">ลบ -</option>
                <option value="multiply">คูณ x</option>
                <option value="divide">หาร /</option>
            </select>
            
            <input id="y" type="number" placeholder="ตัวเลขที่สอง" class="calculator-number">

            <button class="calculator-button" onclick="Calculate()">คำนวณ</button>
        </div>

        <div class="calculator-result">
            <h2>คำตอบ</h2>
            <p id="result">-</p>
        </div>
    </div>

    <script src="Homework.js"></script>
</body>
</html>

CSS >>>>>

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #1a1a1a, #333);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: white;
}


.calculator-container {
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    text-align: center;
    width: 350px;
}


.calculator-title {
    font-size: 2em;
    color: #f3ef0f;
    margin-bottom: 30px;
    text-shadow: 2px 2px 5px #ff0000;
}


.calculator-number, select {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    font-size: 1em;
    border-radius: 10px;
    border: none;
    background-color: #111;
    color: #00bfff;
    text-align: center;
    box-shadow: inset 0 0 5px #00bfff;
    transition: 0.2s;
}

.calculator-number:focus, select:focus {
    background-color: #00bfff;
    color: black;
    outline: none;
}


.calculator-button {
    width: 85%;
    padding: 12px;
    margin-top: 15px;
    font-size: 1.1em;
    color: #fff;
    background-color: #ff4500;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 5px 10px rgba(255, 69, 0, 0.5);
}

.calculator-button:hover {
    background-color: #ff6347;
    transform: translateY(-2px);
}


.calculator-result {
    margin-top: 30px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
}

.calculator-result h2 {
    color: #f0c677;
    margin-bottom: 10px;
}

#result {
    font-size: 1.5em;
    font-weight: bold;
    color: #00ff00;
}


JS >>>>

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
