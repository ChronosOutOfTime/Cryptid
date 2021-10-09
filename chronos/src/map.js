import "./assets/css/theme.css";

import * as dat from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { hover } from "./materials";
import * as utils from "./utils";

// TODO use ray caster for click events
// const raycaster = new THREE.Raycaster();
let INTERSECTED;
const gui = new dat.GUI();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
const sizes = {
  width: window.innerHeight,
  height: window.innerHeight,
};

renderer.setSize(sizes.width, sizes.height);
setTimeout(() => {
  const map = document.querySelector("#map");
  map.appendChild(renderer.domElement);
  map.addEventListener("mousemove", onMouseMove, false);
}, 10);

window.camera = camera;
window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerHeight;
  sizes.height = window.innerHeight;

  // update camera
  // camera.aspect = sizes.width / sizes.height;
  // camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// CREATING HEXAGONS

let radius = 2;

utils.createHexagons(scene, radius);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(8, -8, 20);
controls.target.set(8, -8, 0);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
  document.querySelector(
    ".mouse-coordinates"
  ).innerHTML = `<p>X: ${mouse.x}, Y: ${mouse.y}</p>`;
}

function animate() {
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera(mouse, camera);

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children, false);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED) {
        INTERSECTED.material = INTERSECTED.originalMaterial;
      }
      INTERSECTED = intersects[0].object;
      INTERSECTED.originalMaterial = INTERSECTED.material;
      INTERSECTED.material = hover;
    }
  } else {
    if (INTERSECTED) INTERSECTED.material = INTERSECTED.originalMaterial;

    INTERSECTED = null;
  }

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

export default animate;
