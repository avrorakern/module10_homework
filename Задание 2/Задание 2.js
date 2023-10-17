let btn = document.querySelector('.body__btn');

btn.addEventListener('click', () => {
    alert(`Размер экрана с учетом полосы прокрутки: 
          \n Высота экрана: ${window.innerHeight} px
          \n Ширина экрана: ${window.innerWidth} px
          \n Размер экрана без учета полосы прокрутки:
          \n Высота экрана: ${document.documentElement.clientHeight} px
          \n Ширина экрана: ${document.documentElement.clientWidth} px`)
})