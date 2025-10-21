let productCard = document.querySelector(".product-card")

let FourProduct = products.slice(products.length - 7, products.length)

    .forEach(el => {
    productCard.innerHTML += `
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

let sectionCards = document.querySelector(".section-cards")

    .map(el => {
        sectionCards.innerHTML +=
            `
           <div class="max-w-[350px] w-full h-[400px] bg-white rounded-lg shadow overflow-hidden mt-[30px]">
                <a href="../товар.html?id=${el.id}">
                   <div class="">
                            <div class="relative">
                                <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[2]}" alt="Молоко Простоквашино"
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
    });

