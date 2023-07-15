let url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";



async function getMenu(){
    let res = await fetch(url);
    foodItems=await res.json();
    // printItems(foodItems);
    let userOrder = await foodOrder(foodItems);
    printItems(userOrder);
    // let orderPrep=prepreOrder(foodItems);
}

function printItems(foodItems){
    for(let i in foodItems){
        console.log(foodItems[i].name);
    }
}

async function foodOrder(foodItems){
    // await wait(2500
    let userOrder={};
    for(let i=0;i<3;i++){
        let ranInd=Math.floor(Math.random()*foodItems.length)
        console.log(ranInd);
        let item=foodItems[ranInd];
        userOrder[item.name]=item;
    }
    return userOrder;
}

async function prepreOrder(foodItems){

}

function wait(ms){
    return new Promise((resolve) => {
        setTimeout(()=>{resolve()},ms);
    });
}

getMenu();