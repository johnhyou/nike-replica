/* eslint-disable no-unused-vars */
var $dashboard = document.querySelector('#dashboard')

var menOptions = [
  {
    id: '1',
    type: 'SHOES',
    selections: ['All Shoes', 'Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Football', 'Soccer', 'Baseball', 'Golf', 'Skateboarding', 'Tennis']
  },
  {
    id: '2',
    type: 'CLOTHING',
    selections: ['Compression & Nike Pro', 'Tops & T-Shirts', 'Polos', 'Hoodies & Sweatshirts', 'Jackets & Vests', 'Pants & Tights', 'Shorts', 'Surf & Swimwear', 'Socks' ]
  },
  {
    id: '3',
    type: 'SHOP BY SPORT',
    selections: ['Running', 'Training & Gym', 'Basketball', 'Football', 'Soccer', 'Baseball', 'Golf', 'Skateboarding', 'Surfing']
  },
  {
    id: '4',
    type: 'SHOP BY BRAND',
    selections: ['Nike Sportswear', 'NikeLab', 'Jordan', 'Hurley', 'Converse']
  }
]



function createDashBoard() {
  var $container = document.createElement('div')
  var $nikeLogo = document.createElement('img')
  var $options = document.createElement('ul')
  var $men = document.createElement('li')
  var $women = document.createElement('li')
  var $boys = document.createElement('li')
  var $girls = document.createElement('li')
  var $customize = document.createElement('li')
  var $search = document.createElement('div')

  $nikeLogo.setAttribute('src', 'nikelogo.jpg')
  $nikeLogo.classList.add('nikeLogo')

  $men.classList.add('inline')
  $women.classList.add('inline')
  $boys.classList.add('inline')
  $girls.classList.add('inline')
  $customize.classList.add('inline')

  $men.classList.add('men')
  $women.classList.add('women')
  $boys.classList.add('boys')
  $girls.classList.add('girls')
  $customize.classList.add('customize')

  $men.textContent = 'MEN'
  $women.textContent = 'WOMEN'
  $boys.textContent = 'BOYS'
  $girls.textContent = 'GIRLS'
  $customize.textContent = 'CUSTOMIZE'

  $options.setAttribute('id', 'options')
  $options.classList.add('dash-list')
  $options.style.listStyleType = 'none'
  $options.appendChild($men)
  $options.appendChild($women)
  $options.appendChild($boys)
  $options.appendChild($girls)
  $options.appendChild($customize)



  $container.setAttribute('id', 'container')
  $container.appendChild($nikeLogo)
  $container.appendChild($options)

  $dashboard.appendChild($container)

  return $container
}

createDashBoard()


var $options = document.querySelector('#options')
$options.addEventListener('click', function() {
  var $popup = document.createElement('div')
  var $type = document.createElement('h3')
  var $selections = document.createElement('ul')

  $popup.setAttribute('id', 'dash-popup')
  $popup.appendChild($type)
  $popup.appendChild($selections)

  $options.appendChild($popup)
})
