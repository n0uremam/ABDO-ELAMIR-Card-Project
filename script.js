const branches = document.querySelectorAll(".branch");
const mapFrame = document.getElementById("mapFrame");

branches.forEach(branch => {
  branch.addEventListener("click", () => {
    const mapUrl = branch.dataset.map;
    mapFrame.src = mapUrl;

    document.getElementById("map").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});
