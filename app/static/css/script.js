console.clear()

// load 27 random images from picsum
var fragment = document.createDocumentFragment()
for (var i = 0; i < 27; i++) {
   // create photo div
   var photo = document.createElement("div")
   // add data-scroll attribute so ScrollOut will target these elements
   photo.setAttribute('data-scroll', '')
   // load the photo as a background image so it will fit nicely
   photo.style.backgroundImage = 'url(https://picsum.photos/400/300/?random&hash=' + i + ')'
   fragment.appendChild(photo)
}
// append document fragments to container
document.querySelector(".container").appendChild(fragment)

// call scrollout with variables enabled
ScrollOut({ 
   threshhold: 0.5, 
   cssProps: { 
      visibleY: true 
   } 
})

