let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

function nameValidator() {
    if (name.value.length < 5) {
        alert("A névnek legalább 5 karakter hosszúnak kell lennie!");
        name.focus();
        return false;
    }
    return true;
}

function emailValidator() {
    if (!(String(email.value).includes("@") && String(email.value).split(".").length >= 2)) {
        alert("Érvényes email címet adj meg!");
        email.focus();
        return false;
    }
    return true;
}

function formValidator() {
    if (nameValidator() && emailValidator()) {
        emailSender();
    }
}

function emailSender() {
    let senderName = name.value;
    let senderAddress = email.value;
    let myEmail = "antaloczi.arnold@gmail.com";
    let emailSubject = escape(`Message from ${senderName} (${senderAddress})`);
    let messageBody = escape(message.value);
    let a = document.createElement("a");
    a.setAttribute("href", `mailto:${myEmail}?subject=${emailSubject}&body=${messageBody}`);
    a.click();
}
