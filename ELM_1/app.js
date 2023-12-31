let currentOpenModal = null;
let offset = 0;
let sliderLenght = null;
let sliderLine = null;

modals_id = [
  'modal_about_types_of_dough',
  'modal_about_yeast_dough',
  'modal_about_biscuit_dough',
  'modal_about_sandy_dough',
  'modal_about_choux_dough',
  'modal_about_waffle_dough',
  'modal_about_puff_pastry',
  'modal_about_pancake_batter',
  'modal_about_mousse_desserts',
  'modal_about_fruit_and_berry_fillings',
  'modal_about_cream_and_chocolate_fillings',
  'modal_about_ice_cream_and_sorbets',
  'modal_about_decorating_desserts_with_isomalt_elements',
  'close_modal_img'
];

addEventListener("click", event => {
    if (modals_id.includes(event.target.id)) {
        const targetId = event.target.id;
        const targetPopup = document.querySelector(`#${targetId}_popup`);
        if(event.target.id!='close_modal_img'){
            sliderLine = targetPopup.querySelector(".slider_line");
            sliderLenght = sliderLine.querySelectorAll("img").length;
        }
        if (targetId) {
        if (targetId !== "close_modal_img") {
            // Открываем модальное окно
            targetPopup.classList.add("open");
            // Запоминаем текущее открытое модальное окно
            currentOpenModal = targetPopup;
        } else {
            // Закрываем текущее открытое модальное окно
            if (currentOpenModal) {
            currentOpenModal.classList.remove("open");
            // Сбрасываем текущее открытое модальное окно
            currentOpenModal = null;
            }
        }
        }
    }
    if(event.target.id==='prev_btn'){
        offset -= 450;
        if (offset < 0) {
            offset = (sliderLenght - 1) * 450;
        }
        sliderLine.style.left = -offset + 'px';
    }
    if(event.target.id==='next_btn'){
        offset += 450;
        if (offset > (sliderLenght - 1) * 450) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
});