let homeCards = document.getElementById("home-cards");
let loadingScreen = document.getElementById("loading");
let badge = document.getElementById("badge");
let cart = [];
let isExist;

badge.textContent = cart.length

function showProducts(content, data) {
    console.log(isExist);
    content.innerHTML = "";
    


    data.map((el) => {
        content.innerHTML += `
        <div class="max-w-[300px] w-full h-[390px] bg-white rounded-lg shadow overflow-hidden mt-[30px] ">
                        <div class="relative">
                            <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[0]}" alt="Молоко Простоквашино" class=" object-cover">
                        </div>
                        <div class="p-4">
                            <h3 class="text-gray-600 text-lg">
                                ${el.description}
                            </h3> 
                            <div class="flex items-baseline mb-4">
                                <span class="text-xl font-bold text-gray-900 mr-2">${el.price}₽</span>
                            </div>
                            ${el.rating === 5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 4.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 4 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 3.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 3 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 2.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 2 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 1.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 1 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : ""

            }
                            ${     isExist = cart.find((car) => car.id === el.id)  ? `
                                  <div class="grid grid-cols-3 mt-[10px] w-full bg-green-600 rounded-[5px] hover:bg-[#FF6633] text-white font-semibold py-[2px] rounded  ">
                                <button
                                onClick="{decrease(${el.id})}"
                                class="bg-green-600 text-[24px] text-[white] flex items-center justify-center">-</button>
                                <span class="bg-green-600 text-[24px] text-[white] flex items-center justify-center" id="qty">${(cart.find((item) => item.id === el.id)).qty}</span>
                                <button
                                 onClick="increase(${el.id})"
                                class="bg-green-600 text-[24px] text-[white] flex items-center justify-center">+</button>
                            </div>
                                ` : `
                                  <button onClick="addToCart(${el.id})" class="mt-[10px] w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors ">
                                <a href="">В корзину</a>
                            </button>
                                `
            }
                            
                            
                        </div>
                    </div>
        `
    })

}

showProducts(homeCards, products)


function addToCart(id) {
    let item = products.find((el) => el.id === id);
    item.qty = 1;
    cart.push(item);
    badge.textContent = cart.length
    showProducts(homeCards, products)
}


function increase(id){
    let item = cart.find((el) => el.id === id);
    item.qty += 1;
    showProducts(homeCards, products)
}

function decrease(id){
    let item = cart.find((el) => el.id === id);
    item.qty -= 1;
    if(item.qty <= 0){
        cart = cart.filter((el) => el.id !== id)
    }
    showProducts(homeCards, products)
}

window.addEventListener("load", function () {
    loadingScreen.classList.add("hidden")
})