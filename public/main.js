const topMenu = document.getElementById("ct-top-menu-items");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // click to toggle-top-menu-icon
    topMenu.classList.toggle("ct-top-menu-extended");
    topMenu.classList.toggle("hidden");
  } else {
    // click outside from toggle-top-menu-icon
    if (topMenu.classList.contains("ct-top-menu-extended")) {
      topMenu.classList.remove("ct-top-menu-extended");
      topMenu.classList.add("hidden");
    }
  }
});
