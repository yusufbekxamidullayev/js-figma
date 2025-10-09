let productCards = document.querySelector(".cards")

products.map((el) => {
    productCards.innerHTML +=
    `
                            <div class="w-[300px] h-[390px] bg-white rounded-lg shadow overflow-hidden mt-[30px] ">
                            <div class="relative">
                                <img class="w-full transform hover:scale-110 transition-transform duration-300 ease"
                                    src="${el.images[0]}" alt="Молоко Простоквашино" class="object-cover">

                                <div class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">
                                    -50%
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="text-gray-800 text-lg font-medium mb-2">
                                    Г/Ц Блинчики с мясом вес, Россия
                                </h3>

                                <div class="flex items-baseline mb-4 pt-[25px]">
                                    <span class="text-xl font-bold text-gray-900 mr-2">44,50 ₽</span>
                                    <span class="text-sm line-through text-gray-400">50,50 ₽</span>
                                </div>
                                <div class="pb-[10px]">
                                    <img src="/assets/images/yulduz.png" alt="">
                                </div>
                                <button
                                    class="w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors duration-500 ease-in-out">
                                    <a href="">В корзину</a>
                                </button>
                            </div>
                        </div>
    `
})

