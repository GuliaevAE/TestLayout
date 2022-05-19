
let order = document.querySelector('#order')
let modalOrder = document.querySelector('#modalOrder')
let modalWindow = document.querySelector('#window')
let modalMenu = document.querySelector('#modalMenu')
let closeForModalMenu = document.querySelector('#closeForModalMenu')
let closeForModalOrder = document.querySelector('#closeForModalOrder')
let menuButton = document.querySelector('#menuButton')
let back = document.querySelector('.back')

order.addEventListener("click", ()=>modalOrder.classList = "shadow active")
menuButton.addEventListener("click", ()=>modalMenu.classList = "shadow active")

modalOrder.addEventListener("click", (e) => {

    if (e.target === modalOrder || e.target === closeForModalOrder) {
        modalOrder.classList = "shadow"
        
        
    }
})

modalMenu.addEventListener("click", (e)=>{
    if (e.target === modalMenu || e.target === closeForModalMenu) {
        modalMenu.classList = "shadow"
    }
})

