let productCards = document.querySelector(".product-cards")

let FourProducts = products.slice(products.length - 36, products.length)

    .map(el => {
        productCards.innerHTML += `
        <div class="max-w-[300px] w-full h-[390px] bg-white rounded-lg shadow overflow-hidden mt-[30px] ">
                        <div class="relative">
                            <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[2]}" alt="Молоко Простоквашино" class=" object-cover">
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
                            <button class="mt-[10px] w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors duration-500 ease-in-out">
                                <a href="">В корзину</a>
                            </button>
                        </div>
                    </div>
        `
    })