const menuItems = {
    "Home": "index.html",
    "Works": "works.html",
    "Gallery": "gallery.html",
    "About": "about.html"
};

const header = document.createElement("header");
header.setAttribute("id", "header");

const mobileMenuButton = document.createElement("label");
mobileMenuButton.setAttribute("for", "mobile-menu-checkbox");
mobileMenuButton.setAttribute("class", "mobile-menu-button");

for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    mobileMenuButton.appendChild(span);
}

const navbar = document.createElement("nav");
navbar.setAttribute("class", "navbar");

const mobileMenu = document.createElement("input");
mobileMenu.setAttribute("type", "checkbox");
mobileMenu.setAttribute("id", "mobile-menu-checkbox");

const websiteName = document.createElement("label");
websiteName.innerHTML = "Arnold";

navbar.append(websiteName);
navbar.appendChild(mobileMenuButton);
navbar.appendChild(mobileMenu);
header.append(navbar);
document.body.appendChild(header);

for (const [label, link] of Object.entries(menuItems)) {
    const a = document.createElement("a");
    a.setAttribute("href", link);
    a.innerHTML = label;
    navbar.appendChild(a);
}