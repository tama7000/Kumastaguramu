console.clear()


var fragment = document.createDocumentFragment()
for (var i = 0; i < 27; i++) {
   
   var photo = document.createElement("div")
   
   photo.setAttribute('data-scroll', '')
   
   photo.style.backgroundImage = 'url(https://picsum.photos/400/300/?random&hash=' + i + ')'
   fragment.appendChild(photo)
}

document.querySelector(".container").appendChild(fragment)


ScrollOut({ 
   threshhold: 0.5, 
   cssProps: { 
      visibleY: true 
   } 
})

