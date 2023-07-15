

let url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";


async function getMenu(){
    try{
            //fetching the array objects from the url
            let response = await fetch(url);
            foodItems=await response.json();//converting the response to js object
            console.log("**********Menu****************")
            printItems(foodItems);

            console.log("")

            //creating userOrder object for user with 3 random itmes from foodItems
            let userOrder = await foodOrder(foodItems);
            console.log("**********User Ordered Items****************")
            printItems(userOrder);

            console.log("")

            //generation orderStatus object with "order_status" and "paid" properties for the order created by user
            let orderStatus= await prepreOrder();
            console.log("**********Order Status****************")
            console.log(orderStatus);

            console.log("")
    
            //updating the "paid" status to true in orderStatus object
            orderStatus = await payOrder(orderStatus);
            console.log("**********Order Payment****************")
            console.log(orderStatus);

            //alerting Thank You if the "paid" status in orderStatus object is true
            if(orderStatus.paid){
                setTimeout(thankYou,500);
            }
    }
    catch(error){
        console.log(error);
    }
}

function printItems(object){
    for(let i in object){
        console.log(object[i].name);
    }
}

async function foodOrder(foodItems){
    await wait(2500);
    let userOrder={};
    for(let i=0;i<3;i++){
        let ranInd=Math.floor(Math.random()*foodItems.length)
        let item=foodItems[ranInd];
        let key=i+1+"."+item.name;
        userOrder[key]=item;
    }
    return userOrder;
}

async function prepreOrder(){
    await wait(1500);
    let orderStatus={};
    orderStatus["order_status"]=true;
    orderStatus["paid"]=false;
    return orderStatus;
}

async function payOrder(order){
    await wait(1000);
    order["paid"]=true;
    return order;
}

function thankYou(){
    alert("Thank You");
}

async function wait(ms){
    return new Promise((resolve) => {
        setTimeout(()=>{resolve()},ms);
    });
}

// getMenu();