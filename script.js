let obj = [
    "😁 + 👂 + 😁 + 👂",
    "Sirikkadhey Sirikkadhey",
    "💡 + 🧐 + 🧚‍♀️ + ?",
    "Oliyelae Therivathu Devathaiya",
    "🔥 + 🔺 + 🌨 + 💧",
    "Annul Maelae",
    "💧 + 💧 + 💧 + 🌧",
    "Thuli Thuli Thuli Malaiyai",
    "🥭 + 🐦 + 🌻 + 🐦",
    "Mankuyile Poonkuyile",
    "&#128545; + &#129397; + 🐦 + N",
    "Kovakkara Kiliye Ennai",
    "🌙 + &#128072; + &#127780; + 🔺",
    "Nila Athu Vanathu Melae",
    "🌥️ + 🔥 + 🌙 + 😴 ",
    "Agayam Theepidicha Nila Thoonguma",
    "☎️ + 🔔 + 😁 + 👧",
    "Telephone Manipol Siripaval Ivala",
    "1️⃣ + 🤏 + 🪷 + N",
    "Oru Chinna Thamarai Ennai",
    // "&#; + &#; + &#; + &#;",
    // "",
    // "&#; + &#; + &#; + &#;",
    // ""
];
let n=-1;
document.querySelector("#nxt").addEventListener("click", () => changeSlide(1));
document.querySelector("#prev").addEventListener("click", () => changeSlide(-1));

function changeSlide(slide) {
    n=n+slide;
    if (n < 0) {
        n = obj.length - 1;
    } else if (n === obj.length) {
        n = 0;
    }
    document.querySelector("h1").innerHTML = obj[n];
}