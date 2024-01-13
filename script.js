//Modal for video
let bodyContent = document.querySelector('body')
let myVideo = document.querySelector('.myvideo')
let mainContent =  document.querySelector('.main-content')
let closeModal = document.querySelector('.closemodal')
let startPlay = document.querySelector('.startplay')
function playVideo(){
    startPlay = document.querySelector('.startplay').classList
startPlay.add('myvideomodal')
 document.querySelector('.myvideomodal').innerHTML = 
  `<span class="closemodal" claria-hidden="true" onclick="closePopUp()">&times;</span><iframe width="100%" height="320" src="https://www.youtube.com/embed/tB6VFh3ukQM?si=4LH93sDtmZsXSFxs?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen playsinline></iframe>`
 myVideo.classList.remove('myvideo')
 document.querySelector('.closemodal').style.display = 'block'
 document.querySelector('.myvideomodal').style.backgroundColor = 'transparent'
 document.querySelector('.myvideomodal').style.border = 'none'
 bodyContent.style.backgroundColor = '#000000'
 //bodyContent.style.opacity = 0.4
 mainContent.style.backgroundColor = '#eeeeee'
 mainContent.style.opacity = 0.4

 console.log('hello')
}

function closePopUp(closeModal){
console.log('closed')
if(startPlay = document.querySelector('.startplay').classList) {
document.querySelector('.myvideomodal').innerHTML = ''
startPlay.remove('myvideomodal')
bodyContent.removeAttribute("style")
mainContent.removeAttribute("style")
}
}

//Image for product slide
let proSlide = [
    { 
       dporiginal: 'img/ps1.jpg',
       dpbw: `img/ps1-modified.jpg`  
        
    },
    {
        dporiginal: 'img/ps2.jpg',
       dpbw: 'img/ps2-modified.jpg'  
    },
    {
        dporiginal: 'img/ps3.jpg',
       dpbw: 'img/ps3-modified.jpg'  
    },
    {
        dporiginal: 'img/ps4.jpg',
        dpbw: 'img/ps4-modified.jpg'   
    },
    {
        dporiginal: 'img/ps5.jpg',
        dpbw: 'img/ps5-modified.jpg'   
    },
    {
        dporiginal: 'img/ps6.jpg',
        dpbw: 'img/ps6-modified.jpg'   
    },
    {
        dporiginal: 'img/ps7.jpg',
        dpbw: 'img/ps7-modified.jpg'   
    },
    {
        dporiginal: 'img/ps8.jpg',
        dpbw: 'img/ps8-modified.jpg'   
    }
]


let cluttr = ''

let bwImg = document.querySelector('.bwimg')
let proSlideImg =  document.querySelector('.procolorslideimg')
proSlide.forEach(function(dpImg, idx){
    cluttr += `<div class="col-lg-3 proimgslide">
    <img id="${idx}" src="${dpImg.dporiginal}" class="img-responsive" alt="">
    </div>`
})
proSlideImg.innerHTML = cluttr
let finalBwImg

proSlideImg.addEventListener('mouseover', function(dets){
finalBwImg = dets.target.id;
proSlide.forEach(function(dpImg, idx){
    let imgBw =  document.getElementById(idx)

    if(idx == finalBwImg){
        imgBw.src = dpImg.dpbw
    }
    else{
        imgBw.src = dpImg.dporiginal
        console.log(imgBw.src = dpImg.dporiginal)
    }
})

})

document.addEventListener('mouseover', function(dets){
if(!dets.target.closest('.procolorslideimg')){
    proSlide.forEach(function(dpImg, idx){
        let imgColor = document.getElementById(idx)
        imgColor.src = dpImg.dporiginal 
        
    })
}
   
})


// proSlideImg.addEventListener('click', function (dets){
// let imgChngBw  
// if (imgChngBw = proSlide[dets.target.id].dpbw) {
// let imgColorRemove = proSlide[dets.target.id].dporiginal
// imgColorRemove = document.querySelector('.p roimgslide')
// finalBwImg = `<div class="col-lg-3 proimgslide"><img src="${imgChngBw}" id="${dets.target.id}" class="img-responsive" alt=""></div>`   
// proSlideImg.innerHTML = finalBwImg 
// console.log(proSlideImg)
// }
// else {
// proSlideImg.innerHTML = cluttr   
// }
// })



// let clickBwImg =  function(){
//     let dpbwValue = proSlide.map(items => items.dpbw)
//     finalBwImg = `<div class="col-lg-3 proimgslide"><img src="${dpbwValue}" class="img-responsive" alt=""></div>`   
//     console.log(dpbwValue) 
// }






