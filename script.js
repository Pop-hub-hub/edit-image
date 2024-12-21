let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue-rotate');

let Upload = document.getElementById("Upload");
let download = document.getElementById('download');
let img = document.getElementById('img');
let reset = document.querySelector('span');
let imgbox = document.querySelector('.img-box');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resetValue(){
    img.style.filter= "none";
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    blur.value = '0';
    grayscale.value = '0';
    hueRotate.value = '0';

}

window.onload= function(){
    download.style.display='none';
    reset.style.display= 'none';
    imgbox.style.display= 'none';
}


Upload.onchange = function(){
    resetValue();
    download.style.display='block';
    reset.style.display= 'block';
    imgbox.style.display= 'block';
    let file = new FileReader();
    file.readAsDataURL(Upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width, canvas.height);
        img.style.display='none';
    }
    
}

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>{
    filter.addEventListener("input", function(){
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        
        `
        ctx.drawImage(img,0,0,canvas.width, canvas.height);

    })
})

download.onclick = function(){
    download.href = canvas.toDataURL('image/jpeg')
}


// saturate.addEventListener("input", function(){
//     img.style.filter = `saturate(${saturate.value}%)`
// });
// contrast.addEventListener("input", function(){
//     img.style.filter = `contrast(${contrast.value}%)`
// });
// saturate.addEventListener("input", function(){
//     img.style.filter = `saturate(${saturate.value}%)`
// });
// brightness.addEventListener("input", function(){
//     img.style.filter = `brightness(${brightness.value}%)`
// });
// sepia.addEventListener("input", function(){
//     img.style.filter = `sepia(${sepia.value}%)`
// });
// grayscale.addEventListener("input", function(){
//     img.style.filter = `grayscale(${grayscale.value}%)`
// });
// blur.addEventListener("input", function(){
//     img.style.filter = `blur(${blur.value}%)`
// });
// hueRotate.addEventListener("input", function(){
//     img.style.filter = `hueRotate(${hueRotate.value}%)`
// });
   

