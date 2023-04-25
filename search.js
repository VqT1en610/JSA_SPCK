const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "78a198c0edmshfc7972957faa84cp1060fejsn663dc93fdacd",
        "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com"
    }
};

document.getElementById("search").addEventListener("click", () => {
    fetch("https://youtube-v38.p.rapidapi.com/search/?q=childrens%20days%20&hl=en&gl=US", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.contents);

            for (let i of data.contents.slice(0, 10)) {
                console.log(i);
                let card = document.createElement("div");
                card.classList.add("card");

                let imgContainer = document.createElement("div");
                imgContainer.classList.add("container");

                let image = document.createElement("img");
                image.setAttribute("src", i.image);
                imgContainer.appendChild(image);
                card.appendChild(imgContainer);

                let container = document.createElement("div");
                container.classList.add("container");

                let name = document.createElement("h5");
                name.classList.add("product-name");
                // name.innerText = i.productName.toUpperCase();
                imgContainer.appendChild(name);

                // let price = document.createElement("h6");
                // // price.innerText = "$" + i.price;
                // container.appendChild(price);

                card.appendChild(container);
                document.getElementById("ax").appendChild(card);

                name.innerText = i.video.title;
                image.setAttribute = i.video.thumbnails[0].url;
            }
        });
});
