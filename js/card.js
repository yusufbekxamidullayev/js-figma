let productCards = document.querySelector(".cards")

let productFilter = products.filter(el => el.discount > 0)
let lastFourProducts = products.slice(products.length - 7, products.length)

    .filter(el => el.discount > 0)
    .forEach(el => {
        productCards.innerHTML +=
            `
            <div class="max-w-[350px] w-full h-[400px] bg-white rounded-lg shadow overflow-hidden mt-[30px]">
                <a href="../товар.html?id=${el.id}">
                   <div class="">
                            <div class="relative">
                                <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[3]}" alt="Молоко Простоквашино"
                                    class=" object-cover">
                                    <div class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">
                                    -${el.discount}%
                            </div>
                            </div>
                            
                            <div class="p-4">
                                <h3 class="text-gray-600 text-lg line-clamp-[2]">
                                    ${el.description}
                                </h3>
                                <div class="flex items-baseline mb-[10px]">
                                    <span class="text-xl font-bold text-gray-900 mr-2">${el.price} ₽</span>
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
                                <button
                                    class="mt-[20px] w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors duration-500 ease-in-out">
                                    <a href="">В корзину</a>
                                </button>
                            </div>
                    </div>
             </a>           
            </div>
    `
    })



let path = new URLSearchParams(window.location.search)

let id = path.get("id")

let singleProduct = document.querySelector(".single-product")

let idProduct = products.filter((el) => el.id == id);

idProduct.map((el) => {
    singleProduct.innerHTML += `
                    <div class="pt-[15px] flex flex-col gap-[40px] md:flex md:flex-row xl:gap-[200px]">
                        <div class="flex flex-row justify-center gap-[0px] pr-[10px]  sm:flex-row gap-[20px]">
                            <div class="px-[10px] flex flex-col gap-[8px] sm:flex sm:flex-col items-center gap-[5px]">
                                ${el.images.map((el) => {
                                    return ` <img class="w-[70px] sm:w-[100px]  object-cover " src="${el}" alt="">`
                                }).join(" ")
                                }
                            </div>   
                            <img class="w-[270px] sm:w-[350px]" src="${el.images[0]}" alt="">
                        </div>
                        <div>
                            <div class="flex items-center justify-between gap-[40px] px-[20px] sm:flex-row items-center  lg:flex-row items-center justify-between">
                                <div>
                                    <p class="text-[24px] text-[#606060]">${el.price} ₽</p>
                                    <p class="text-[12px] text-[#BFBFBF]">Обычная цена</p>
                                </div>
                                <div>
                                    <p class="text-[36px] text-[#414141] font-bold">${el.price - (el.price * el.discount) / 100} ₽</p>
                                    <p class="text-[12px] text-[#BFBFBF]">С картой Северяночки</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center pt-[16px]">
                                <button class="w-[250px] h-[50px] bg-[#FF6633] rounded-[4px] md:mt-[70px]">
                                    <a class="flex items-center justify-center gap-[20px]" href="">
                                        <img src="/assets/image/shopping.png" alt="savat">
                                        <p class="text-[#FFFFFF] text-[24px]">В корзину</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    
    `
})




let loadingScreen = document.getElementById("loading");

window.addEventListener("load", function () {
    loadingScreen.classList.add("hidden")
})