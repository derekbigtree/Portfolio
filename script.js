// Writing Section - Interactive Tiles
const writingProjects = [
  { title: "Story 1", cover: "story1-cover.jpg", description: "A tale of adventure" },
  { title: "Story 2", cover: "story2-cover.jpg", description: "Mystery unfolds" }
];

document.getElementById('accomplishments').innerHTML += `
  <ul style="color: white; font-size: 1.2em;">
  </ul>
`;

function openSidebar () {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar () {
  document.getElementById("sidebar").style.width = "0";
}

window.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById("openSidebarBtn");
  const close = document.getElementById("closeSidebarBtn");

  if (open && close) {
    open.addEventListener("click", openSidebar);
    close.addEventListener("click", closeSidebar);
  } else {
    console.warn("Sidebar buttons not found");
  }
});