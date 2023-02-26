// callbacks, callback hell, pyramid of doom
// Asynchronous programming

const heading1 = document.querySelector(".heading1");

setInterval(() => {
  heading1.textContent = "Hello Sandy";
  heading1.style.color = "violet";
}, 2000);

heading1.addEventListener("click", (e) => {
  console.log("hey");
});
