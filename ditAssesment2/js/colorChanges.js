function update(){
    // Get the input from html
    var userInput = document.getElementById("picker");
    // Update the div with the new color
    document.getElementById('colorChanger').style.backgroundColor = userInput.value;
    document.getElementById('colorChanger').style.border = '2px solid #000'
}