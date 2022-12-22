const menu = document.querySelector('.menu');
export const menuButton = document.querySelector('.menu-button');

export const toggleable = () => {
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuButton.classList.add('active');
    menu.style.display = 'block';
  } else {
    menu.classList.remove('active');
    menuButton.classList.remove('active');
    menu.style.display = 'none';
  }


};


const links = document.querySelectorAll('.menu__link')

 const removeMenu = () => {
  links.forEach((i)=>{
    i.addEventListener('click', () => menu.remove())
  })
}

removeMenu()

