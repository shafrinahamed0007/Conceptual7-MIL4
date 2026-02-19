// const mainText = document.getElementById("mainTitle");
// console.log(mainText.innerText);
// mainText.innerText = "Hello Developer"

// const mainText = document.querySelector("#mainText");

// const listItem = document.querySelectorAll(".fruts");
// console.log(listItem[0].innerHTML)

// const listItems = document.getElementsByClassName("fruts");
// console.log(listItem[0].innerHTML);

// const mainDiv = document.getElementById("mainDiv");
// console.log(mainDiv);

// const mainDiv = document.querySelector("#mainDiv");
// console.log(mainDiv.children[0]);

// const img = document.querySelector("img");
// console.log(img);

// img.setAttribute('alt', 'updated.jpg')

const listItems = document.getElementsByClassName("fruts");
// console.log(listItems[0]);

for (const listItem of listItems) {
  listItem.style.color = "red";
  listItem.style.backgroundColor = "black";
}

const btn = document.getElementById("btn");
const countText = document.getElementById("count");

btn.addEventListener("click", function () {
  let currentCount = parseInt(countText.innerText);
  currentCount++;
  countText.innerText = currentCount;
});

const minusBtn = document.getElementById("btn1");

minusBtn.addEventListener("click", function () {
  let currentCount = parseInt(countText.innerText);
  currentCount--;
  countText.innerText = currentCount;
});

const wishlistBtns = document.querySelectorAll(".wishlist-btn-card");

wishlistBtns.forEach((wishlistBtn) => {
  wishlistBtn.addEventListener("click", function () {
    
    let wishCount = document.getElementById("wishCount");
    let wishCountValue = parseInt(wishCount.innerText);
    wishCountValue++;
    wishCount.innerText = wishCountValue;
    
  });
});
