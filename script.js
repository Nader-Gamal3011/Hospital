document.addEventListener("DOMContentLoaded", function() {
    const text = "We Provide Medical Services"; 
    const textElement = document.querySelector('.typing');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 0); 
        }
    }

    typeText();
});

