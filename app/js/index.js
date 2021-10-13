import '../scss/index.scss';
import image1src from '../../public/assets/image1.jpg';
import image2src from '../../public/assets/image2.jpg';

document.addEventListener('DOMContentLoaded', () => {
    //image-loader
    const image1wrap = document.querySelector('.slider__image-container--first')
    const image2wrap = document.querySelector('.slider__image-container--second')
    const image1 = new Image();
    image1.src = image1src;
    image1wrap.appendChild(image1)
    const image2 = new Image();
    image2.src = image2src;
    image2wrap.appendChild(image2)
    //
    const imgContainer = document.querySelector('.slider__images-container');
    const img1 = document.querySelector('.slider__image-container--first img');
    const img2 = document.querySelector('.slider__image-container--second img');
    const img1Container = document.querySelector('.slider__image-container--first');
    const img2Container = document.querySelector('.slider__image-container--second');
    let dragging = false;
    let imgContainerLeftOffset;
    let imgContainerWidth;
    const handleEl = document.querySelector('.slider__handle');
    const dividerEl = document.querySelector('.slider__divider');

    function getOffset(clientX) {
        const offset = clientX - imgContainerLeftOffset;
        if (offset < 0) {
            return 0;
        } else if (offset > imgContainerWidth) {
            return imgContainerWidth;
        } else {
            return offset;
        }
    }
    function move(clientX) {
        const offset = getOffset(clientX)
        const percent = offset / imgContainerWidth * 100;
        dividerEl.style.left = `${percent}%`;
        img2Container.style.width = `${percent}%`;
    }
    function initEvents() {
        handleEl.addEventListener('mousedown', () => {
            dragging = true
        });
        window.addEventListener('mouseup', () => {
            dragging = false
        });
        window.addEventListener('mousemove', (event) => {
            if (dragging) {
                move(event.clientX)
            }
        });
    }
    function imgResize() { //imgs scaling on small screen
        imgContainerWidth = imgContainer.offsetWidth;
        imgContainerLeftOffset = imgContainer.offsetLeft;
        img1.style.width = imgContainerWidth + 'px';
        img2.style.width = imgContainerWidth + 'px';
    }
    window.addEventListener('resize', imgResize)
    imgResize();
    initEvents();



})

