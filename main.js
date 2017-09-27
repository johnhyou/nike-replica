/* eslint-disable no-unused-vars */

var $dashboard = document.querySelector('#dashboard')

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

  $options.style.listStyleType = 'none'
  $options.appendChild($men)
  $options.appendChild($women)
  $options.appendChild($boys)
  $options.appendChild($girls)
  $options.appendChild($customize)

  $container.appendChild($options)

  $dashboard.appendChild($container)

  return $container
}

createDashBoard()
