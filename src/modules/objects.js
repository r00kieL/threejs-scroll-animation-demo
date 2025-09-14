import * as THREE from 'three';

// 创建甜甜圈
const torus = new THREE.Mesh(
// 定义物体
    new THREE.TorusGeometry(10, 3, 16, 100),
// 定义材质
    new THREE.MeshStandardMaterial({color: 0xFF6347}),
);

// 创建meBox
const meBoxTexture = new THREE.TextureLoader().load("/src/assets/images/kemomimichan.jpg");
meBoxTexture.colorSpace = THREE.SRGBColorSpace;
const meBox = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshStandardMaterial({map: meBoxTexture}),
)
meBox.position.z = -5;
meBox.position.x = 3;

// 添加moon
const moonTexture = new THREE.TextureLoader().load("/src/assets/images/moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("/src/assets/images/normal.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace;
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture, normalMap: moonNormalTexture}),
)
moon.position.setX(-10);
moon.position.setY(0);
moon.position.setZ(30);

export {torus, meBox, moon};