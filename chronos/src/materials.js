import * as THREE from "three";

export const desert = new THREE.MeshBasicMaterial({ color: "#d0ca28" });
export const marsh = new THREE.MeshBasicMaterial({ color: "#800040" });
export const mountain = new THREE.MeshBasicMaterial({ color: "#808080" });
export const lake = new THREE.MeshBasicMaterial({ color: "#0080ff" });
export const forest = new THREE.MeshBasicMaterial({ color: "#1bcd59" });

export const blue = new THREE.MeshBasicMaterial({ color: "#1109ae" });
export const white = new THREE.MeshBasicMaterial({ color: "#FFFFFF" });
export const green = new THREE.MeshBasicMaterial({ color: "#008000" });

// TODO cryptid beast

export const bear = new THREE.LineDashedMaterial({
  color: "#000000",
  linewidth: 1,
  scale: 1,
  dashSize: 3,
  gapSize: 1,
});
export const puma = new THREE.LineBasicMaterial({ color: "#FF0000" });
