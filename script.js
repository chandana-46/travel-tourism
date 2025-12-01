// Search destinations
document.getElementById("search").addEventListener("keyup", function() {
    let text = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let name = card.getAttribute("data-name");

        if (name && name.toLowerCase().includes(text)) {
            card.style.display = "block";
        } else if (name) {
            card.style.display = "none";
        }
    });
});

// Button interaction
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Feature coming soon!");
    });
});
