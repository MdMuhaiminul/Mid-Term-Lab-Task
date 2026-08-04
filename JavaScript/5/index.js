const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const textInput = document.getElementById("textInput").value;
    const textErr = document.getElementById("textErr");
    const result = document.getElementById("result");
    const characterCount = document.getElementById("characterCount");
    const wordCount = document.getElementById("wordCount");
    const reversedText = document.getElementById("reversedText");

    textErr.innerHTML = "";
    result.style.display = "none";

    if (textInput.trim() == "") {
        textErr.innerHTML = "text cannot be empty";
    }
    else {
        const totalCharacters = textInput.length;
        const words = textInput.trim().split(/\s+/);
        const totalWords = words.length;
        const reverseText = textInput.split("").reverse().join("");

        characterCount.innerText = totalCharacters;
        wordCount.innerText = totalWords;
        reversedText.innerText = reverseText;

        result.style.display = "block";
    }
})
