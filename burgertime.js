let buy = document.querySelector(".Buy");
let Cheese = document.querySelector(".Cheese");
let Meat = document.querySelector(".Meat");
let Onion = document.querySelector(".Onion");
let Salad = document.querySelector(".Salad");
let Tomato = document.querySelector(".Tomato");
let Pickle = document.querySelector(".Pickle");
let total = document.querySelector(".total");

Cheese.addEventListener("click" , (e) => {
         e.preventDefault()
         total.textContent = +total.textContent + 2
})
Meat.addEventListener("click" , (e) => {
         e.preventDefault()
         total.textContent = +total.textContent + 5
})
Onion.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 1;
});
Salad.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 1;
});
Tomato.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 2;
});
Pickle.addEventListener("click", (e) => {
  e.preventDefault();
  total.textContent = +total.textContent + 3;
});


buy.addEventListener("click", () => {
    let a = Math.round(Math.random() * (35 - 10) + 10);
    alert(`To'lov Amalga Oshirildi Sizning Ochertingiz ${a}` );

});









function show_meat() {
    document.getElementById("meat")
            .style.display = "block";
}
function hide_meat() {
  document.getElementById("meat")
          .style.display = "none";
          total.textContent = +total.textContent - 5
}


function show_cheese() {
  document.getElementById("cheese")
          .style.display = "block";
}
function hide_cheese() {
document.getElementById("cheese")
        .style.display = "none";
        total.textContent = +total.textContent - 2
}

function show_pickle() {
  document.getElementById("pickle")
          .style.display = "block";
}
function hide_pickle() {
document.getElementById("pickle")
        .style.display = "none";
        total.textContent = +total.textContent - 3
}

function show_onion() {
  document.getElementById("onion")
          .style.display = "block";
}
function hide_onion() {
document.getElementById("onion")
        .style.display = "none";
        total.textContent = +total.textContent - 5
}

function show_tomato() {
  document.getElementById("tomato")
          .style.display = "block";
}
function hide_tomato() {
document.getElementById("tomato")
        .style.display = "none";
        total.textContent = +total.textContent - 5
}

function show_salad() {
  document.getElementById("salad")
          .style.display = "block";
}
function hide_salad() {
document.getElementById("salad")
        .style.display = "none";
        total.textContent = +total.textContent - 5
}
