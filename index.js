const yesBtn = document.querySelector("#yesBtn");
//const noBtn = document.querySelector("#noBtn");

yesBtn.addEventListener("click", function () {
  alert("Ya somos nobios Meibis :p");
});

// noBtn.addEventListener("click", function () {
//   alert("Dar 3 mortales con un oso en la espalda");
// });

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  noBtn.style.setProperty("top", randomY + "%");
  noBtn.style.setProperty("left", randomX + "%");
  noBtn.style.setProperty("transform", `translate(-${randomX}%,-${randomY}%)`);
});
