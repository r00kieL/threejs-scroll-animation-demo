import * as THREE from 'three';
import {camera} from "./camera.js";
import {renderer} from "./scene.js";

// 导入轨道类
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// 实例化轨道类
const controls = new OrbitControls(camera, renderer.domElement);

export {controls};