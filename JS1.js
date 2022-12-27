


const content1 = document.querySelector ('.content1')
const content2 = document.querySelector ('.content2')
const content3 = document.querySelector ('.content3')
const content4 = document.querySelector ('.content4')
const content5 = document.querySelector ('.content5')
const content6 = document.querySelector ('.content6')
const content7 = document.querySelector ('.content7')


const path1 = document.querySelector ('.path2')
const path2 = document.querySelector ('.path3')
const path3 = document.querySelector ('.path4')
const path4 = document.querySelector ('.path5')
const path5 = document.querySelector ('.path6')
const path6 = document.querySelector ('.path7')
const path7 = document.querySelector ('.path8')

const path1Length = path1.getTotalLength()
const path2Length = path2.getTotalLength()
const path3Length = path3.getTotalLength()
const path4Length = path4.getTotalLength()
const path5Length = path5.getTotalLength()
const path6Length = path6.getTotalLength()
const path7Length = path7.getTotalLength()



path1.style.strokeDasharray = path1Length
path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, path1Length)

path2.style.strokeDasharray = path2Length
path2.style.strokeDashoffset = path2Length

path3.style.strokeDasharray = path3Length
path3.style.strokeDashoffset = path3Length

path4.style.strokeDasharray = path4Length
path4.style.strokeDashoffset = path4Length

path5.style.strokeDasharray = path5Length
path5.style.strokeDashoffset = path5Length

path6.style.strokeDasharray = path6Length
path6.style.strokeDashoffset = path6Length

path7.style.strokeDasharray = path7Length
path7.style.strokeDashoffset = path7Length


function calcDashoffset(scrollY, element, length) {
    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
    const value = length - (length * ratio)
    return value < 0 ? 0 : value > length ? length : value
  }

function scrollHandler(){
    const scrollY = window.scrollY + (window.innerHeight * 0.99)
    path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
    path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
    path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)
    path4.style.strokeDashoffset = calcDashoffset(scrollY, content4, path4Length)
    path5.style.strokeDashoffset = calcDashoffset(scrollY, content5, path5Length)
    path6.style.strokeDashoffset = calcDashoffset(scrollY, content6, path6Length)
    path7.style.strokeDashoffset = calcDashoffset(scrollY, content7, path6Length)
}


window.addEventListener('scroll', scrollHandler)