import { products } from "/src/assets/js/data.js";

const shop = document.querySelector("#root");

const shopFun = () => {
  shop.innerHTML = products
    .map((item) => {
      //
      let { id, image, title, price } = item;
      return `
            <div id="${id}" class="box mb-4">
                <div class="img_box">
                    <img src="${image}" alt="image">
                </div>
                <div class="text-center py-3 font-mono">
                    <h1>${title}</h1>
                    <h2 class="text-red-700 mt-2 font-bold">$ ${price}.00</h2>
                    
                    <button onclick="addCart(${id})">Add to Cart</button>
                        
                </div>
            </div>
            
            `;
    })
    .join("");
};
shopFun();

//
//
