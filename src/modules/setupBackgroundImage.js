import * as THREE from "three";
import {scene} from "./scene.js";


function setupBackgroundImage(image) {
    const spaceTexture = new THREE.TextureLoader().load(image);
    spaceTexture.colorSpace = THREE.SRGBColorSpace;

    scene.background = spaceTexture;
}

export {setupBackgroundImage};