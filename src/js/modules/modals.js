const modals = () => {
    const bindModal = (targetSelector, modalSelector, closeSelector, clickCloseOverlay = true) => {
        const target = document.querySelectorAll(targetSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        target.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = "none";
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

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    setModalByTime('.popup-consultation', 60000)
}
export default modals;
