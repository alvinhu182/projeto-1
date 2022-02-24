const cartSidebarEl = document.querySelector('.cart-sidebar')
function openSidebar () {
  cartSidebarEl.classList.add('cart-sidebar-open')
}
function closeSidebar () {
  cartSidebarEl.classList.remove('cart-sidebar-open')
}
const btnCartEl = document.getElementById('btn-cart')
btnCartEl.addEventListener('click', openSidebar)
const btnCloseCartEl = document.querySelector('#btn-close-cart')
btnCloseCartEl.addEventListener('click', closeSidebar)