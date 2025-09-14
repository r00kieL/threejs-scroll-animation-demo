import './style.css';

import {scene, renderer} from "/src/modules/scene.js"
import {pointLight, ambientLight} from '/src/modules/lights.js'
import {torus, meBox, moon} from '/src/modules/objects.js'
import {setupBackgroundImage} from "./modules/setupBackgroundImage.js";
import {addStarToScene} from '/src/modules/stars.js'
import {moveCamera, bindScroll} from '/src/modules/moveCamera.js'
import {renderLoop} from "./modules/animation.js";

// import {controls} from '/src/modules/controls.js'
// import { lightHelper, gridHelper } from '/src/modules/helper.js';

// 添加查看器
// scene.add(lightHelper, gridHelper);

// 添加光源进入场景
scene.add(pointLight, ambientLight);
// 添加物体obj进入场景
scene.add(torus, moon, meBox);
// 添加背景
setupBackgroundImage("/src/assets/images/space.jpg");
// 在场景内添加星星
addStarToScene(200);
// 移动相机
bindScroll(moveCamera);
// 启动旋转动画
renderLoop();