document.getElementById("kitKat-btn").addEventListener('click', function(){
    const quantity = document.getElementById("kitKat-quantity").value;
    const kitKatCost = quantity * 200;
    setInnerText("chocolate", kitKatCost);
    
});

document.getElementById("rose-btn").addEventListener('click', function(){
    const quantity = document.getElementById("rose-quantity").value;
    const roseCost = quantity * 100;
    setInnerText("rose", roseCost);
});

document.getElementById("diary-btn").addEventListener("click", function(){
    const quantity = document.getElementById("diary-quantity").value;
    const diaryCost = quantity * 300;
    setInnerText("diary", diaryCost)
})


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}