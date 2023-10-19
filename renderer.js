console.log("Hello from renderer!");

window.addEventListener("load", () => {
  const button = document.getElementById("my-button");
  button.addEventListener("click", () => {
    window.ipc.onMyButtonClick();
  });
});
