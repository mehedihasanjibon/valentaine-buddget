document.getElementById("kitKat-btn").addEventListener('click', function(){
    const quantity = getInputValue("kitKat-quantity");
    const kitKatCost = quantity * 200;
    setInnerText("chocolate", kitKatCost);
    total();
});

document.getElementById("rose-btn").addEventListener('click', function(){
    const quantity = getInputValue("rose-quantity")
    const roseCost = quantity * 100;
    setInnerText("rose", roseCost);
    total();
});

document.getElementById("diary-btn").addEventListener("click", function(){
    const quantity = getInputValue("diary-quantity");
    const diaryCost = quantity * 300;
    setInnerText("diary", diaryCost)
    total();
})


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value); 
}

function total(params){
    const chocolate = document.getElementById("chocolate").innerText;
    const rose = document.getElementById("rose").innerText;
    const diary = document.getElementById("diary").innerText;
    const totalSum = parseInt(chocolate)+ parseInt(rose) + parseInt(diary);
    setInnerText("total", totalSum);
}

document.getElementById("promoApplyBtn").addEventListener("click",function(){
    const promoCode = getInputValue("promo-code");
    if(promoCode === 101){
        const total = document.getElementById("total").innerText;
        const sum = total - parseInt(total) * 0.1;
        setInnerText("all-total", sum);
    }
    else{
        alert("wrong promo code try again with valid code");
    }

})