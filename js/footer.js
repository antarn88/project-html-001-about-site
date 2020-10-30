const footer = document.createElement("footer");
footer.setAttribute("id", "footer");

const jumpUpBtn = document.createElement("button");
jumpUpBtn.innerHTML = "⬆";
jumpUpBtn.setAttribute("id", "jump-up-btn");

document.body.appendChild(footer);
footer.appendChild(jumpUpBtn);