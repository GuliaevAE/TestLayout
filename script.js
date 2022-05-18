
let order = document.querySelector('#order')
let modalOrder = document.querySelector('#modalOrder')
let modalWindow = document.querySelector('#window')
let back = document.querySelector('.back')
order.addEventListener("click", ClickOrder)
modalOrder.addEventListener("click", (e)=>{
    
    if(e.target!==modalWindow && modalOrder.classList == "shadow active"){
        modalOrder.classList ="shadow"
    }
})

function ClickOrder(){
    modalOrder.classList ="shadow active"
}