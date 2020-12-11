const modals = () => {
    let btnPressed;
    const bindModal = (targetSelector, modalSelector, closeSelector, destroy = false) => {
        const target = document.querySelectorAll(targetSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        target.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = "none";
                    item.classList.add('animated', 'fadeIn')
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });


        modal.addEventListener('click', (e) => {
            if (e.target === modal && clickCloseOverlay) {
                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });


        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";

        });
    };

    const setModalByTime = (selector, time) => {
        const modal = document.querySelector(selector)
        let display;
        setTimeout(() => {
            document.querySelectorAll("[data-modal]").forEach(item => {
                if (getComputedStyle(item).display === "block") {
                    display = "block";
                }
            });

            if (!display) {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        }, time);
    };

    const openByScroll = (selector) => {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    };


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    setModalByTime('.popup-consultation', 60000);

    openByScroll('.fixed-gift');
}
export default modals;
