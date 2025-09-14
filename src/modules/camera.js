// 创建相机，作为人眼
import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 设置相机位置
// camera.position.setZ(30);
// camera.position.setX(-3);

export {camera}