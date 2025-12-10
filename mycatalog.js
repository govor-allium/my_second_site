function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()
    }
    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()
    }
}
    let cards = [
  {
    "id": "1",
    "title": "Соль",
    "vendor_code": "111",
    "description": "Для начертания защиты и проверки незванных гостей хлебом-солью",
    "price": 100,
    "img": "salt.webp"
  },
  {
    "id": "2",
    "title": "Мел",
    "vendor_code": "222",
    "description": "Для начертания защитных символов и не только защитных",
    "price": 50,
    "img": "chalk.webp"
  },
  {
    "id": "3",
    "title": "Сборник инструкций",
    "vendor_code": "333",
    "description": "В сказке ложь? Да в ней намек. Урок рекомендуется к изучению",
    "price": 200,
    "img": "tales.webp"
  },
  {
    "id": "4",
    "title": "Свеча с запахами",
    "vendor_code": "444e",
    "description": "На случай отключения электричества: отпугивать ходящих во тьме",
    "price":850,
    "img": "candle.jpg"
  },
  {
    "id": "5",
    "title": "Чай успокоительный",
    "vendor_code": "445e",
    "description": "Защищает от тараканов в голове",
    "price": 560,
    "img": "tea.webp"
  },
  {
    "id": "6",
    "title": "Календарь тематический",
    "vendor_code": "4446e",
    "description": "Чтобы помнить Все...",
    "price": 498,
    "img": "calendar.jpg"
  },
  {
    "id": "7",
    "title": "Складной нож",
    "vendor_code": "447e",
    "description": "Для самообороны, обрядов и разрезания тортиков",
    "price": 700,
    "img": "knife.jpg"
  },
  {
    "id": "8",
    "title": "Оберег защитный",
    "vendor_code": "448e",
    "description": "Инструкции по применению и противопоказания узнавать при заказе",
    "price": 870,
    "img": "orig.webp"
  },
  {
    "id": "9",
    "title": "Футболка тематическая",
    "vendor_code": "444e",
    "description": "Оверсайз",
    "price": 975,
    "img": "Tshort.jpg"
  },
  {
    "id": "10",
    "title": "Кот Баюн",
    "vendor_code": "44410e",
    "description": "Он не ответит, но может быть от этого и является лучшим собеседником?",
    "price": 1005,
    "img": "cat.webp"
  },
  {
    "id": "11",
    "title": "Шишки сосновые",
    "vendor_code": "44411e",
    "description": "Для замученных городских жителей (по согласованию можно дополнить снегом/цветами/осенними листьями в зависмости от времени года)",
    "price": 1100,
    "img": "bumps.webp"
  }
]
    
async function getResponce() {
    content = cards.slice(0, 11)
console.log(content)
    content_price=content.sort((a, b) => a.price - b.price);

    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
    content_filter= content_price.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.description.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

let node_for_insert = document.getElementById("node_for_insert")
    for (let key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена: ${content_filter[key].price} руб.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text" >!!Заказать!! <input class="w-25" type="text" value="0" name="check"></p>
                </li>
                `
         }
    }

async function getResponce1() {
    content = cards.slice(0, 11)

    console.log(content)
    let key

    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); 
    const nameB = b.title.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();
    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.description.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);


    let node_for_insert = document.getElementById("node_for_insert")
    for (let key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_filter[key].img}>
                <h5 class="card-title">${content_filter[key].title}</h5>
                <p class="card-text">${content_filter[key].description}. Цена ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text" >Заказать <input class="w-25" type="checkbox" name="check" value="0" onClick='this.value = this.checked ? 1 : 0'></p>
                </li>
                        `
            }

}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("price").addEventListener("change", sort);
    document.getElementById("title").addEventListener("change", sort);
    document.getElementById("search").addEventListener("change", sort);
    sort(); 
});