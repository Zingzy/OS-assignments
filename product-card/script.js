const addTocartBtn = document.querySelector('button');

addTocartBtn.addEventListener('click', () => {
    if (addTocartBtn.classList.contains('added')) {
        addTocartBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Cart';
        addTocartBtn.style.width = '150px';
        addTocartBtn.classList.remove('added');
    } else {
        addTocartBtn.style.width = '200px';
        addTocartBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added to Cart';
        addTocartBtn.classList.add('added');
    }
});