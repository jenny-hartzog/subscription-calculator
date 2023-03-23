let subTypeElement = document.querySelector("select#subscription");
let subDurationElement = document.querySelector("select#months");
let result = document.querySelector(".result");
let subType = "basic";
let subDuration = 1;
/*
console.log(subTypeElement);
console.log (subDurationElement);
console.log(result);
console.log(subType);
console.log(subDuration);
*/

subTypeElement.addEventListener("change", function(e){
    subType = e.target.value;
    updateSubscriptionDiv();
    //console.log(subType);
})

subDurationElement.addEventListener("change", function(e){
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    //console.log(subDuration);
})

let updateSubscriptionDiv = function(){
    let monthlyCost = 5;
    if (subType === "standard"){
        monthlyCost = 7;
    }else if(subType === "premium"){
        monthlyCost = 10;
    }
    let total = subDuration * monthlyCost;
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
}

