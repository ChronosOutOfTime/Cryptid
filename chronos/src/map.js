import "./assets/css/theme.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as utils from "./utils";

// TODO use ray caster for click events
// const raycaster = new THREE.Raycaster();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight, window.innerHeight);
setTimeout(() => {
  document.querySelector("#map").appendChild(renderer.domElement);
}, 10);
window.camera = camera;

// CREATING HEXAGON

let radius = 2;

utils.createHexagons(scene, radius);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(8, -8, 20);
controls.target.set(8, -8, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

export default animate;
