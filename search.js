document
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  let img = document.querySelectorAll(".img");
  let productsName = document.querySelectorAll(".item-name");
  let card = document.querySelectorAll(".product-lol");
  
  productsName.forEach((items, index) => {
      if (items.innerText.toUpperCase().includes(searchInput)) {
          card[index].classList.remove("hide");
      } else {
          card[index].classList.add("hide");
      }
  });
});

