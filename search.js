// document;
// document.getElementById("search").addEventListener("click", () => {
//   let searchInput = document.getElementById("search-input").value.toUpperCase();
//   let img = document.querySelector(".img");
//   let productsName = document.querySelector(".item-name");
//   let card = document.querySelector(".product-lol");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "78a198c0edmshfc7972957faa84cp1060fejsn663dc93fdacd",
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

fetch("https://youtube-v38.p.rapidapi.com/search/?q=mindx&hl=en&gl=US", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.contents);
    for (let i of data.contents) {
      console.log(i);
      let card = document.createElement("div");
      card.classList.add("card");

      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");

      let image = document.createElement("img");
      // image.setAttribute("src", i.image);
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);

      let container = document.createElement("div");
      container.classList.add("container");

      let name = document.createElement("h5");
      name.classList.add("product-name");
      // name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      let price = document.createElement("h6");
      // price.innerText = "$" + i.price;
      container.appendChild(price);

      card.appendChild(container);
      document.getElementById("ax").appendChild(card);
    }
  });
