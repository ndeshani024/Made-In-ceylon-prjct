const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");

searchIcon.addEventListener("click", () => {
  searchInput.style.display =
    searchInput.style.display === "block" ? "none" : "block";
});
