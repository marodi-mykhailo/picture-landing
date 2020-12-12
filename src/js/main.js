import modals from "./modules/modals";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    slider('.feedback-slider-item', '.main-prev-btn', '.main-next-btn', 'horizontal');
    slider('.main-slider-item','','','vertical');
});
