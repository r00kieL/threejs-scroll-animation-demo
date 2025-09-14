import * as THREE from 'three';
import {scene} from '/src/modules/scene.js'

function createStar(starPosition) {
    const star = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 24, 24),
        new THREE.MeshStandardMaterial({color: 0xffffff}),
    );

    let x, y, z;
    [x, y, z] = starPosition
        ? starPosition
        : Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    return star;
}

// 添加星星进入场景
function addStarToScene(count, starPosition) {
    return Array(count)
        .fill()
        .map(() => {
            const star = createStar(starPosition);
            scene.add(star);

            return star;
        });
}

export {createStar, addStarToScene};