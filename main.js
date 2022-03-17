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

function findFood (id) {
    for (let i = 0; i < arrFood.length; i++) {
        if (id == arrFood[i].id) {
            return arrFood[i]
        }
    }
}

function checkArray (item) {
    

    if (!newArr.length) {
        const newFood = item
        newFood.count = 1
       return newArr.push(newFood)
    }

    for (let i = 0; i < newArr.length; i++) {
        if (item.id === newArr[i].id) {
            return newArr[i].count = newArr[i].count + 1
        }
    }

    const newFood = item
        newFood.count = 1

    newArr.push(newFood)
}

function deleteFood (id) {
    const arr = [];

    for (let i = 0; i < newArr.length; i++) {
        if (id === newArr[i].id) {
            if (newArr[i].count > 1) {
                const newFood = newArr[i]

                newFood.count = newFood .count - 1;

                arr.push(newFood)
            }
        } else {
            arr.push(newArr[i]);
        }
    }

    newArr = arr
    renderCardFood()
}

function renderCardFood () {
    elList2.innerHTML = '';

    let subtitle = 0

    for (let i = 0; i < newArr.length; i++) {
        let li = document.createElement("li");
            li.className = "list-item2";
            li.innerHTML = `
                <img class="pizza-img" src="${newArr[i].imgUrl}" alt="pizza">
                <div class="in-box">
                    <button class="count-btn">${newArr[i].count}</button>
                    <h3 class="name">${newArr[i].name}</h3>
                    <p class="sum">$ ${newArr[i].price * newArr[i].count}</p>
                    <button class="push-btn" onclick="addButton(${i})">+</button>
                    <button onclick = "removeButton(${i})" class="remove-btn">-</button>
                </div>
        `

        subtitle += newArr[i].count * newArr[i].price
        elList2.appendChild(li);
    }

    let taxiPrice = subtitle * 0.1
    
    elTax.innerHTML =`Tax: ${taxiPrice}$`;
    elTotal.innerHTML = `Total: ${subtitle + taxiPrice} $`
    elSubtitle.innerHTML =`Subtitle: ${subtitle} $`;

}

function addButton (foodIndex) {
    newArr[foodIndex].count = newArr[foodIndex].count + 1

    renderCardFood()
}

function removeButton (foodIndex) {
    let foundFood = newArr[foodIndex]
    if (foundFood.count > 1) {
        foundFood.count = foundFood.count - 1
        return  renderCardFood()
    }

    let arr = []

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id !== foundFood.id ) {
            arr.push(newArr[i]) 
        }
    }

    newArr = arr

    renderCardFood()
}


function getAdd(id) {
    let foundFood = findFood(id)

    checkArray(foundFood)

    renderCardFood();    
}

