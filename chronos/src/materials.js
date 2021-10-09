import * as THREE from "three";

export const desert = new THREE.MeshBasicMaterial({
  color: "#d0ca28",
  name: "desert",
});
export const marsh = new THREE.MeshBasicMaterial({
  color: "#800040",
  name: "marsh",
});
export const mountain = new THREE.MeshBasicMaterial({
  color: "#808080",
  name: "mountain",
});
export const lake = new THREE.MeshBasicMaterial({
  color: "#0080ff",
  name: "lake",
});
export const forest = new THREE.MeshBasicMaterial({
  color: "#1bcd59",
  name: "forest",
});

export const blue = new THREE.MeshBasicMaterial({
  color: "#1109ae",
  name: "blue",
});
export const white = new THREE.MeshBasicMaterial({
  color: "#FFFFFF",
  name: "white",
});
export const green = new THREE.MeshBasicMaterial({
  color: "#008000",
  name: "green",
});
export const hover = new THREE.MeshBasicMaterial({
  color: "#FF0000",
  name: "hover",
});

// TODO cryptid beast

export const bear = new THREE.LineDashedMaterial({
  color: "#000000",
  linewidth: 1,
  scale: 1,
  dashSize: 3,
  gapSize: 1,
});
export const puma = new THREE.LineBasicMaterial({ color: "#FF0000" });
