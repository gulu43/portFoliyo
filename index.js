document.querySelectorAll(".toggle_Card").forEach(card => {
    card.addEventListener("click", function () { 
        let content = this.querySelector(".toggleContent"); 
        content.style.display = content.style.display === "none" ? "block" : "none";
    });
});
