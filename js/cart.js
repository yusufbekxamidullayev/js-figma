// let cart = [];

// let productFilter = products.filter(el => el.discount > 0)
// let lastFourProducts = products.slice(products.length - 7, products.length)
// let badge = document.getElementById("badge");

//     filter(el => el.discount > 0)
//     .forEach(el => {
//         productCards.innerHTML +=
//             `      <div class="max-w-[300px] w-full h-[390px] bg-white rounded-lg shadow overflow-hidden mt-[30px]">
//                             <div class="relative">
//                                 <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[3]}" alt="Молоко Простоквашино"
//                                     class=" object-cover">
//                                     <div class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">
//                                     -${el.discount}%
//                             </div>
//                             </div>
                            
//                             <div class="p-4">
//                                 <h3 class="text-gray-600 text-lg ">
//                                     ${el.description}
//                                 </h3>
//                                 <div class="flex items-baseline mb-4">
//                                     <span class="text-xl font-bold text-gray-900 mr-2">${el.price} ₽</span>
//                                 </div>
//                                ${el.rating === 5 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                 </div>` : el.rating === 4.5 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-half.png" alt="">
//                                 </div>` : el.rating === 4 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                 </div>` : el.rating === 3.5 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-half.png" alt="">
//                                 </div>` : el.rating === 3 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                 </div>` : el.rating === 2.5 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-half.png" alt="">
//                                 </div>` : el.rating === 2 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                 </div>` : el.rating === 1.5 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                     <img src="/assets/image/star-half.png" alt="">
//                                 </div>` : el.rating === 1 ? `
//                                  <div class="flex items-center gap-[3px]">
//                                     <img src="/assets/image/star-full.png" alt="">
//                                 </div>` : ""

//             }
//                                 <button
//                                     onClick="addToCart(${el.id})"
//                                     class="mt-[10px] w-full bg-green-600 hover:bg-[#FF6633] text-white font-semibold py-2 rounded transition-colors duration-500 ease-in-out">
//                                     <a href="">В корзину</a>
//                                 </button>
//                             </div>
//                         </div>
//     `
//     })

// function addToCart(id){
//     let item = products.find((el) =>el.id === id)
//     cart.push(item)    
//     badge.textContent = cart.length;
// }