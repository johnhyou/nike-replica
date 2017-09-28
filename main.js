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

  $options.classList.add('dash-list')
  $options.style.listStyleType = 'none'
  $options.appendChild($men)
  $options.appendChild($women)
  $options.appendChild($boys)
  $options.appendChild($girls)
  $options.appendChild($customize)

  $container.setAttribute('id', 'container')
  $container.appendChild($options)

  $dashboard.appendChild($container)

  return $container
}

createDashBoard()
