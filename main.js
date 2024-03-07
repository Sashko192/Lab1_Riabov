    // Функція для знаходження суми та добутку цифр числа
    function findSumAndProduct(number) {
        const numberStr = number.toString();
        let sum = 0;
        let product = 1;

        for (let i = 0; i < numberStr.length; i++) {
            const digit = parseInt(numberStr[i]);
            sum += digit;
            product *= digit;
        }

        return { sum, product };
    }

    function Result() {
        const inputNumber = document.getElementById("TWO").value;
        const { sum, product } = findSumAndProduct(inputNumber);
        // Виводимо результат на сторінку
        document.getElementById("resultParagraph").innerHTML = `Сума цифр: ${sum}<br>Добуток цифр: ${product}`;
    }
//   ____________________________________________________________________________

function generatePassword() {
    const passwordLength = 12; // Встановіть бажану довжину пароля
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters.charAt(randomIndex);
    }

    document.getElementById("generatedPassword").textContent = generatedPassword;
}
//   ____________________________________________________________________________

function countWords() {
    const textInput = document.getElementById("TWO").value;
    
    // Використовуємо регулярний вираз для видалення зайвих пробілів та обчислення кількості слів
    const wordCount = textInput.trim().split(/\s+/).filter(word => word !== "").length;

    document.getElementById("wordCountResult").textContent = `Кількість слів: ${wordCount}`;
}
// ________________________________ФОТО ВНИЗ____
function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}


