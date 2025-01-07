// Define your reCAPTCHA site key
const siteKey = "6Le5o7AqAAAAAEQsnm90SvPU4KZxBAxEOb-iSwbx"; // Replace this with your actual site key

// Function to inject the site key into the reCAPTCHA div
window.onload = function() {
    var recaptchaContainer = document.getElementById("recaptcha-container");
    if (recaptchaContainer) {
        recaptchaContainer.setAttribute("data-sitekey", siteKey);
    }
};