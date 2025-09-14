import * as THREE from 'three';
import {scene} from '/src/modules/scene.js'
import {pointLight} from'/src/modules/lights.js'

// 添加点光源查看器
const lightHelper = new THREE.PointLightHelper(pointLight);

// 添加网格查看器
const gridHelper = new THREE.GridHelper(200, 50)

export {lightHelper, gridHelper}