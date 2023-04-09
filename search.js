document
  .getElementsByClassName("btn btn-outline-success")
  .addEventListener("click", () => {
    let searchInput = document
      .getElementsByClassName("btn btn-outline-success")
      .value.toUpperCase();
    let img = document.querySelectorAll(".img");
    let productsName = document.querySelectorAll(".h1");
    let card = document.querySelectorAll(".product-items");

    productsName.forEach((items, index) => {
      if (items.innerText.includes(searchInput)) {
        card[index].style.display = "";
      } else {
        card[index].style.display = "none";
      }
    });
  });
