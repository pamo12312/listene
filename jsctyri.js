document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert("Klikli jste na položku: " + event.target.textContent);
    }
});