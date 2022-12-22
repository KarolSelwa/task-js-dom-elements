const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];



const mainUl = document.createElement('ul')
const articeList = document.querySelector('.article__list')

list.forEach(function (element) {
    if (element.parentId === null) {
        const firstLi = document.createElement('li')
        const firstA = document.createElement('a')
        firstA.setAttribute('href', element.link)
        firstA.innerText = element.text
        firstLi.appendChild(firstA)
        firstLi.dataset.id = element.id
        mainUl.appendChild(firstLi)
        articeList.appendChild(mainUl)

    }

}
)

const li = document.querySelectorAll('li')
li.forEach(function (element) {
    const id = Number(element.dataset.id)
    const children = list.filter(function (element) {
        return element.parentId === id
    });
    const element1 = element

    
    // element1.appendChild(ulInternal)
    const ulInternal = document.createElement('ul')
    children.forEach(function (element) {
        const liInternal = document.createElement('li')
        const aInternal = document.createElement('a')
        liInternal.appendChild(aInternal)
        ulInternal.appendChild(liInternal)
        element1.appendChild(ulInternal)
        aInternal.setAttribute('href', element.link)
        aInternal.dataset.id = element.id
        aInternal.innerText = element.text
        // console.log(element)
    })
    
    console.log(element1)

})

