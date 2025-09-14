import * as THREE from 'three';

// 创建场景，作为舞台
const scene = new THREE.Scene();

// 创建渲染器，作为角色创建器
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

export {scene, renderer};
