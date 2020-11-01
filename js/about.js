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

function messageValidator() {
    if (message.value.length < 20) {
        alert("Az üzenet legalább 20 karakter hosszú legyen!");
        message.focus();
        return false;
    }
    return true;
}

function formValidator() {
    if (nameValidator() && emailValidator() && messageValidator()) {
        emailSender();
    }
}

function emailSender() {
    let senderName = name.value;
    let senderAddress = email.value;
    let e = "olg.acn@taiidnmz.laaorclom";
    let myEmail = `${e[4]}${e[6]}${e[8]}${e[4]}${e[1]}${e[0]}${e[5]}${e[15]}${e[10]}${e[3]}${e[4]}${e[21]}${e[6]}${e[0]}${e[1]}${e[12]}${e[7]}${e[2]}${e[14]}${e[4]}${e[10]}${e[1]}${e[3]}${e[5]}${e[0]}${e[14]}`;
    let emailSubject = escape(`Message from ${senderName} (${senderAddress})`);
    let messageBody = escape(message.value);
    let a = document.createElement("a");
    a.setAttribute("href", `mailto:${myEmail}?subject=${emailSubject}&body=${messageBody}`);
    a.click();
    name.value = "";
    email.value = "";
    message.value = "";
}
