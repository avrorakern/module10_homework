let firstIcon = document.querySelector('.first-icon');
let secondIcon = document.querySelector('.second-icon');
let btn = document.querySelector('.body__btn');

btn.addEventListener('click', () => {
    if (firstIcon.style.display == 'none') {
        firstIcon.style.display = 'block';
        secondIcon.style.display = 'none';
    } else {
        firstIcon.style.display = 'none';
        secondIcon.style.display = 'block';
    }
})