const password = document.getElementById("password");
const indicator = document.getElementById("strengthIndicator");

password.addEventListener("input", checkStrength);

function checkStrength() {
    const length = password.value.length;

    if (length === 0) {
        indicator.textContent = "";
    }
    else if (length < 4) {
        indicator.textContent = "Very Weak";
    }
    else if (length >= 4 && length <= 7) {
        indicator.textContent = "Weak";
    }
    else if (length >= 8 && length <= 11) {
        indicator.textContent = "Medium";
    }
    else if (length >= 12 && length <= 15) {
        indicator.textContent = "Strong";
    }
    else {
        indicator.textContent = "Very Strong";
    }
}