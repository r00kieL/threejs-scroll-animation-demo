import * as THREE from 'three';
import {scene} from '/src/modules/scene.js'

// 创建点光源
const pointLight = new THREE.PointLight(0xffffff, 100);
// 设置点光源位置
pointLight.position.set(5, 5, 5);

// 创建环境光源
const ambientLight = new THREE.AmbientLight(0xffffff);

export {pointLight, ambientLight};