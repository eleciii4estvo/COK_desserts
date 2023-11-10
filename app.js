//открывем модальное окно при клике на кнопку
document.querySelector("#info_about_content_btn").addEventListener("click", function(){
    document.querySelector("#modal_about_content").classList.add("open")
})

//закрываем модальное окно при клике на крестик
document.querySelector("#close_modal_btn").addEventListener("click", function(){
    document.querySelector("#modal_about_content").classList.remove("open")
})

//закрываем модальное окно при клике на темную область экрана
document.querySelector("#modal_about_content .modal_box").addEventListener("click", e=>{
    e._isClickInModal=true;
})
document.querySelector("#modal_about_content").addEventListener("click", e=>{
    if(e._isClickInModal) return;
    e.currentTarget.classList.remove("open");
})


// addEventListener("click", event => {
//     if (event.target.id) {
//         console.log("ID элемента:", event.target.id);
//     } else {
//         console.log("Элемент не имеет атрибута id");
//     }
// });
