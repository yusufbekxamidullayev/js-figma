let cartsCards = document.querySelector(".carts-cards");
let carts = JSON.parse(localStorage.getItem("cart") || "[]");
let isExist = false;

function showCartProducts(content, data) {
    content.innerHTML= "";
    data.map((el) => {
        content.innerHTML += `
       <div class="max-w-[900px] w-full bg-white shadow overflow-hidden mt-[30px] ">
                       <div class="flex">
                           <div class="flex items-center  gap-[10px]">
                            <div class="relative pl-[10px] py-[10px]">
                               <img class="max-w-[100px] w-full rounded-[5px] aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[0]}" alt="Молоко Простоквашино" class=" object-cover">
                            </div>
                            <div class="p-4">
                               <h3 class="text-gray-600 text-md line-clamp-[3]">
                                ${el.description}
                               </h3> 
                            </div>
                        </div>    
                            <div class="flex items-baseline mb-4">
                                <span class="text-xl font-bold text-gray-900 mr-2">${el.price}₽</span>
                            </div>
                            
                            ${isExist = carts.find((car) => car.id === el.id) ? `
                                  <div class="grid grid-cols-3 mt-[10px] w-[100px] h-[40px] bg-green-600 rounded-[5px] hover:bg-[#FF6633] text-white font-semibold py-[2px] rounded  ">
                                <button
                                onClick="{decrease(${el.id})}"
                                class="bg-green-600 text-[24px] text-[white] flex items-center justify-center">-</button>
                                <span class="bg-green-600 text-[24px] text-[white] flex items-center justify-center" id="qty">${(carts.find((item) => item.id === el.id)).qty}</span>
                                <button
                                 onClick="increase(${el.id})"
                                class="bg-green-600 text-[24px] text-[white] flex items-center justify-center">+</button>
                            </div>
                                ` : `
                                  <button onClick="addToCart(${el.id})" class="mt-[10px] w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors ">
                                <a href="">В корзину</a>
                            </button>
                                
                       </div>`
            }
                            
                            
        </div>
        </div>
        </div>            
        `
    })

}

showCartProducts(cartsCards , carts)

function increase(id) {
    let item = carts.find((el) => el.id === id);
    item.qty += 1;
    localStorage.setItem("cart", JSON.stringify(carts));
    showProducts(cartsCards, carts)
}

function decrease(id) {
    let item = carts.find((el) => el.id === id);
    item.qty -= 1;
    if (item.qty <= 0) {
        carts = carts.filter((el) => el.id !== id)
        localStorage.setItem("cart", JSON.stringify(carts));
    }
    badge.textContent = carts.length;
    showProducts(cartsCards, carts)
}
