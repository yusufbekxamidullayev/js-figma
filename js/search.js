let search = document.getElementById("search")
let searchCards = document.querySelector(".search-cards")

let searchExist = false;
searchExist ? searchCards.classList.remove("hidden") : searchCards.classList.add("hidden");


search.addEventListener("input", function (e) {

    searchCards.innerHTML = "";

    let serachValue = e.target.value;
    let serachProduct = products.filter((el) => el.name.toLowerCase().includes(serachValue.toLowerCase()))



    serachValue ? searchExist = true : searchExist = false;
    searchExist ? searchCards.classList.remove("hidden") : searchCards.classList.add("hidden");

    serachProduct.length === 0 ? searchCards.textContent = "Bunday mahsulot topilmadi.." : serachProduct.map((el) => {
        searchCards.innerHTML += `
            <a href="/товар.html?id=${el.id}"
            class="search-card  flex gap-[20px] items-center border-[2px] border-[greentellow] rounded-[5px] p-[3px]">
                            <img class="h-[80px] w-[100px] object cover" src=${el.images[0]} alt="">
                            <div>
                                <h1>${el.name}</h1>
                                <p>${el.description}</p>
                            </div>
             </a>
        `
    })
})



let input = document.getElementById("input")
let inputCards = document.querySelector(".input-cards")

let inputExist = false;
inputExist ? inputCards.classList.remove("hidden") : inputCards.classList.add("hidden");


input.addEventListener("input", function (e) {

    inputCards.innerHTML = "";

    let inputValue = e.target.value;
    let inputProduct = products.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()))



    inputValue ? inputExist = true : inputExist = false;
    inputExist ? inputCards.classList.remove("hidden") : inputCards.classList.add("hidden");

    inputProduct.length === 0 ? inputCards.textContent = "Bunday mahsulot topilmadi.." : inputProduct.map((el) => {
        inputCards.innerHTML += `
            <a href="/товар.html?id=${el.id}"
            class="search-card  flex flex-col gap-[20px] items-center border-[2px] border-[greentellow] rounded-[5px] p-[3px]">
                            <img class="h-[110px] w-full object cover" src=${el.images[0]} alt="">
                            <div>
                                <h1 class="font-bold">${el.name}</h1>
                                <p>${el.description}</p>
                            </div>
             </a>
        `
    })
})