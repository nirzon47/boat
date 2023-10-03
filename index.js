const blockP = document.querySelectorAll(".footer-collection-block");
const subBlock = document.querySelectorAll(".sub-block");
const expandCollIcon = document.querySelectorAll(".expand-collection-icon");

blockP.forEach((block, index) => {
  block.addEventListener("click", () => {
    // Toggle visibility of the corresponding .sub-block element
    subBlock[index].classList.toggle("hidden");

    // Change inner text of corresponding expand-collection-icon element based on subBlock visibility
    if (subBlock[index].classList.contains("hidden")) {
      expandCollIcon[index].innerText = "+";
    } else {
      expandCollIcon[index].innerText = "-";
    }

    // Hide other visible .sub-block elements and reset their expand-collection-icon texts
    for (let i = 0; i < subBlock.length; i++) {
      if (i !== index && !subBlock[i].classList.contains("hidden")) {
        subBlock[i].classList.add("hidden");
        expandCollIcon[i].innerText = "+";
      }
    }
  });
});

// Check screen size and apply initial hidden state and icon text
if (window.innerWidth < 768) {
  subBlock.forEach((sub, index) => {
    sub.classList.add("hidden");
    expandCollIcon[index].innerText = "+";
  });
}
