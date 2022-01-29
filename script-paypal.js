// navigation
const dropdownitems = document.querySelectorAll('.dropdown-hover')
dropdownitems.forEach((dropdownitem) => {
    dropdownitem.addEventListener('mouseover', () => {
        dropdownitem.lastElementChild.style.cssText = 'opacity:1;visibility:visible'
        //document.querySelector('.navbar-wrapper').style.background = 'rgb(245, 222, 179)'
    })
    dropdownitem.addEventListener('mouseout', () => {
        dropdownitem.lastElementChild.style.cssText = 'opacity:0;visibility:hidden'
        //document.querySelector('.navbar-wrapper').style.background = 'none'
    })
})

// end of navigation