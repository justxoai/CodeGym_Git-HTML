function checkPalindrome(inputText) {
    let reverstText = inputText.split('').reverse().join('');

    for (i = 0; i < inputText.length; i++) {
        if (reverstText[i] != inputText[i]) {
            return false;
        }
    }

    return true;
}

function getTextValue() {
    let inputText = document.getElementById("inputValue").value;

    if(checkPalindrome(inputText))
        document.getElementById("outputValue").innerHTML = "Your text: " + inputText + " is a Palindrome Text";
    else
        document.getElementById("outputValue").innerHTML = "Your text: " + inputText + " is not a Palindrome Text";
}