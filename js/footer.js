const footer = document.createElement("footer");
footer.setAttribute("id", "footer");

const a = document.createElement("a");
a.setAttribute("href", "#header");

const upArrow = document.createElement("img");
upArrow.setAttribute("src", "https://img.icons8.com/emoji/48/000000/up-arrow-emoji.png");
upArrow.setAttribute("alt", "Felfele nyíl");

a.innerHTML = upArrow.outerHTML;

document.body.appendChild(footer);
footer.appendChild(a);