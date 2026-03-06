import emblems from "./table.mjs";

function initalizeAccordion(className) {
    var acc = document.getElementsByClassName(className);
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }
}
initalizeAccordion("accordion");

const emblemsContent = document.querySelector("#emblem_content");
function renderEmblems(emblem) {
    return `<button class="emblem_accordion">${emblem.name}</button>
            <div class="panel">
                <h3>${emblem.line}</h3>
                <img class="emblem" src="${emblem.imageSrc}" alt="${emblem.imageAlt}">
                <p>
                    ${emblem.description}
                </p>
                <hr>
                <table class="center">
                    ${emblem.baseLine}
                    ${emblem.table}
                </table>
            </div>`;
}
emblemsContent.innerHTML = emblems.map(renderEmblems).join("");
initalizeAccordion("emblem_accordion");

function search_emblem() {
    let input = document.getElementById("searchInput").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("emblem_accordion");
    
    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = emblemsContent;
        }
    }
}

function init() {
    document.querySelector("#searchInput").addEventListener("keyup", search_emblem)
}

init();