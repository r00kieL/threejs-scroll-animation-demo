import {meBox, moon} from "./objects.js";
import {camera} from "./camera.js";

// 移动相机函数
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    meBox.rotation.y += 0.01;
    meBox.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

function bindScroll(handler){
    document.body.onscroll = handler;
}

export {moveCamera,bindScroll};