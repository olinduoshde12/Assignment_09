


const lights = $('.color-box');
console.log(lights.length);
console.log(lights);
let lightNum=1;
const updateLight= ()=>{
    lights.style.backgroundColor = 'white';
    if (lightNum === 1){
        lights[lightNum].style.backgroundColor='red';
    }

    if (lightNum > 6) {
        lights[lightNum]
    }
}
updateLight();
// setInterval(updateLight,200);
