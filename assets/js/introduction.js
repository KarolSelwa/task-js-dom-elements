const allTooltip = document.querySelectorAll('.tooltip')


allTooltip.forEach(function(element){
    
    const url = element.dataset.url;
    const type = element.dataset.tooltipType;
    const content = element.dataset.tooltipContent;
    const textFromSpan = element.innerText
    element.innerText = ' '
    
    const a = document.createElement('a')
    const span = document.createElement('span')
    const image =document.createElement('img')
    element.appendChild(a)
    element.appendChild(span)
    span.textContent = content
    
    a.setAttribute('href',url)
    a.innerText = textFromSpan
    if(type !=='image')
    span.classList.add("tooltip__box", "tooltip__box--"+type)
    else{
        span.innerText = ' '
        span.appendChild(image)
        span.classList.add("tooltip__box", "tooltip__box--"+type)
        image.classList.add('tooltip__image')
        image.setAttribute('src', content)
    }
    
    console.log(element)
    
    
})






