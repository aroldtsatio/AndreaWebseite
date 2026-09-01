const topButton = document.getElementById("topButton");

if (topButton) {
  topButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("top").scrollIntoView({
      behavior: "smooth"
    });
  });
}
