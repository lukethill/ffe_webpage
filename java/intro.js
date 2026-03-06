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
