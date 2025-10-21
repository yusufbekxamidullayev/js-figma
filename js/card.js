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
                                    <a class="flex items-center justify-center gap-[20px]" href="/cart.html">
                                        <img src="/assets/image/shopping.png" alt="savat">
                                        <p class="text-[#FFFFFF] text-[24px]">В корзину</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    
    `
})