import {torus} from "./objects.js";
import {renderer, scene} from "./scene.js";
import {camera} from "./camera.js";

// 圆环的动画
function torusAnimate() {
    torus.rotation.y += 0.01;
}
function renderPicture() {
    renderer.render(scene, camera);
}

function renderLoop() {
    requestAnimationFrame(renderLoop);
    torusAnimate();
    renderPicture();
}

export {renderLoop};