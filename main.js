let elList = document.querySelector('#list');
let elList2 = document.querySelector('#list2');
let elAddBtn = document.querySelector('#addBtn');
let elSubtitle = document.querySelector('#subtitle');
let elTax = document.querySelector('#tax');
let elTotal = document.querySelector('#total');



const arrFood = [
    {   
        id: 1,
        imgUrl: "https://pngimage.net/wp-content/uploads/2018/05/fatia-pizza-png-2.png",
        name: "Pepperoni",
        price: 10
    },
    {   
        id: 2,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_5fsT42_8JRbjWucJxRiTaaBSvt1HaP6D-ReOkUmRJ3oI7i8pbS1lZUXkUAszM1uB2E&usqp=CAU",
        name: "Cheesy",
        price: 20
    },
    {   
        id: 3,
        imgUrl: "https://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        name: "Margarita",
        price: 30
    },
    {   
        id: 4,
        imgUrl: "https://pngimg.com/uploads/pizza/pizza_PNG44077.png",
        name: "Hawaaiian",
        price: 40
    },
    {   
        id: 5,
        imgUrl: "https://pngimg.com/uploads/pizza/pizza_PNG44077.png",
        name: "Chopar",
        price: 50
    }
];

for (let i = 0; i < arrFood.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
    <li class="list-item">
        <img class="pizza-img" src="${arrFood[i].imgUrl}" alt="pizza">
        <div class="in-box">
            <h3 class="name">${arrFood[i].name}</h3>
            <p class="sum">$  ${arrFood[i].price}</p>
            <button onclick="getAdd(${arrFood[i].id})" class="add-btn">Add to Card</button>
        </div>
    </li>
    `;
    elList.appendChild(li);
}

let newArr = [];

function getAdd(id) {
    for (let i = 0; i < arrFood.length; i++) {
        if (id == arrFood[i].id) {
            newArr.push(arrFood[i]);
        }
    }

    let subtotal = 0;
    let tax = 0;
    let total = 0;

    for (let j = 0; j < newArr.length; j++) {
        subtotal += newArr[j].price;
        tax = (subtotal * 0.1);
        total = subtotal + tax;
        if (j == newArr.length-1) {
            let li = document.createElement("li");
            li.className = "list-item2";
            li.innerHTML = `
                <img class="pizza-img" src="${newArr[j].imgUrl}" alt="pizza">
                <div class="in-box">
                    <h3 class="name">${newArr[j].name}</h3>
                    <p class="sum">$ ${newArr[j].price}</p>
                    <button onclick = "elRemove(${j})" class="remove-btn"><i class='bx bx-trash'></i></button>
                </div>
        `  
            elSubtitle.innerHTML =`Subtitle: ${subtotal} $`;
            elTax.innerHTML =`Tax: ${tax}$`;
            elTotal.innerHTML = `Total: ${total} $`;
            elList2.appendChild(li);
        }
    }
    
}


function  elRemove(index) {
    let newRemoveArr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (index != i) {
            newRemoveArr.push(newArr[i]);
        }
    }

    newArr = newRemoveArr;
    
    elList2.innerHTML = "";
    subtotal = 0;
    tax = 0;
    total = 0;

    for (let i = 0; i < newArr.length; i++) {
        let li = document.createElement("li");
        li.className = "list-item2";
        li.innerHTML = `
            <img class="pizza-img" src="${newArr[i].imgUrl}" alt="pizza">
            <div class="in-box">
                <h3 class="name">${newArr[i].name}</h3>
                <p class="sum">$ ${newArr[i].price}</p>
                <button onclick = "elRemove(${i})" class="remove-btn"><i class='bx bx-trash'></i></button>
            </div>
    `  
        subtotal += newArr[i].price;
        tax = (subtotal * 0.1);
        total = subtotal + tax;
        elSubtitle.innerHTML =`Subtitle: ${subtotal} $`;
        elTax.innerHTML =`Tax: ${tax}$`;
        elTotal.innerHTML = `Total: ${total} $`;
        elList2.appendChild(li);
    }  
    
    if (newArr.length == 0) {
        subtotal = 0;
        tax = 0;
        total = 0;
        elSubtitle.innerHTML =`Subtitle: ${subtotal} $`;
        elTax.innerHTML =`Tax: ${tax}$`;
        elTotal.innerHTML = `Total: ${total} $`;
    } 
}














