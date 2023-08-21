const hiddenNav = document.querySelector('.hidden-nav');
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;
const labiryntImage = document.querySelector('.hero-block-right img');
const projectsBox = document.querySelector('.projects-box')
const visualizationsBox = document.querySelector('.visualizations-box')
const overlay = document.getElementById('overlay');
const gridItems = document.querySelectorAll('.grid-item');
const showMoreBtn = document.querySelector('#showMoreBtn')
const hideMoreBtn = document.querySelector('#hideMoreBtn')
const animHidden = document.querySelectorAll('.anim-hidden')
const animOpacity = document.querySelectorAll('.anim-opacity')
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.nav-search');

const toggleNav = () => {
    hiddenNav.classList.toggle('show-nav');
    toggleBtn.classList.toggle('color-white');
    body.classList.toggle('overflow-hidden');
    labiryntImage.classList.toggle('hidden');
    console.log('cliked');
}

const projectsToggle = () => {
    if (projectsBox.style.display === 'none' || projectsBox.style.display === '') {
        projectsBox.style.display = 'inline';
        overlay.style.display = 'block';
        body.classList.add('overflow-hidden');
    } else {
        projectsBox.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('overflow-hidden');
    }
}
const visualizationsToggle = () => {
    if (visualizationsBox.style.display === 'none' || visualizationsBox.style.display === '') {
        visualizationsBox.style.display = 'inline';
        overlay.style.display = 'block';
        body.classList.add('overflow-hidden');
    } else {
        visualizationsBox.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('overflow-hidden');
    }
}
const showMore = () => {
    for (let i = 8; i < 12; i++) {
        gridItems[i].style.display = 'block'
    }
    showMoreBtn.style.display = 'none'
    hideMoreBtn.style.display = 'flex'

}
const hideMore = () => {
    for (let i = 8; i < 12; i++) {
        gridItems[i].style.display = 'none'
    }
    showMoreBtn.style.display = 'block'
    hideMoreBtn.style.display = 'none'
}

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

animHidden.forEach((el) => observer.observe(el))
animOpacity.forEach((el) => observer.observe(el))

function toggleSearchInput() {
    searchInput.classList.toggle('active');
}
searchIcon.addEventListener('click', toggleSearchInput);