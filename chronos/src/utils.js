import * as THREE from "three";

import matrix from "./matrix";

const animals = ["bear", "puma"];
const structures = ["rock", "cabin"];
export function createHexPointsRotated(x, y, z, radius) {
  let pts = [];
  pts.push(new THREE.Vector3(x + 0, y + radius, z));
  pts.push(new THREE.Vector3(x + radius * 0.866, y + radius * 0.5, z));
  pts.push(new THREE.Vector3(x + radius * 0.866, y - radius * 0.5, z));
  pts.push(new THREE.Vector3(x + 0, y - radius, z));
  pts.push(new THREE.Vector3(x - radius * 0.866, y - radius * 0.5, z));
  pts.push(new THREE.Vector3(x - radius * 0.866, y + radius * 0.5, z));

  return [...pts];
}

/*
export function createHexagon(scene, radius) {
  const geom = getHexagonGeometry();
  let hexMesh;
  hexMesh = new THREE.Mesh(geom, materials.desert);

  hexMesh.position.x = radius * 0.866;

  scene.add(hexMesh);
}*/
export function createHexPoints(x, y, z, radius) {
  let pts = [];
  pts.push(new THREE.Vector3(x - radius * 0.5, y + radius * 0.866, z));
  pts.push(new THREE.Vector3(x + radius * 0.5, y + radius * 0.866, z));
  pts.push(new THREE.Vector3(x + radius, y + 0, z));
  pts.push(new THREE.Vector3(x + radius * 0.5, y - radius * 0.866, z));
  pts.push(new THREE.Vector3(x - radius * 0.5, y - radius * 0.866, z));
  pts.push(new THREE.Vector3(x - radius, y + 0, z));

  return [...pts];
}

export function createTrianglePoints(x, y, z, radius) {
  let pts = [];
  pts.push(new THREE.Vector3(x - radius, y, z));
  pts.push(new THREE.Vector3(x + radius, y, z));
  pts.push(new THREE.Vector3(x, y + radius * 1.5, z));

  return [...pts];
}

function getHexagonGeometry(x = 0, y = 0, z = 0, radius = 1) {
  const hexPoints = new THREE.Shape(createHexPoints(x, y, z, radius));
  const hexGeometry = new THREE.ShapeGeometry(hexPoints);
  return hexGeometry;
}
function getHexagonLineGeometry(x = 0, y = 0, z = 0, radius = 1) {
  const hexPoints = createHexPoints(x, y, z, radius);
  const hexGeometry = new THREE.BufferGeometry().setFromPoints(hexPoints);
  return hexGeometry;
}
function getTriangleGeometry(x = 0, y = 0, z = 0, radius = 1) {
  const hexPoints = new THREE.Shape(createTrianglePoints(x, y, z, radius));
  const hexGeometry = new THREE.ShapeGeometry(hexPoints);
  return hexGeometry;
}

export function createHexagons(scene, radius) {
  const geom = getHexagonGeometry();
  let hexMesh;
  for (let i = 0; i > -9; i--) {
    for (let j = 0; j < 12; j++) {
      // checking for special tiles

      hexMesh = new THREE.Mesh(geom, matrix[Math.abs(i)][j].material);
      if (j % 2 === 0) {
        hexMesh.position.y = i * radius * Math.sin(2.094395) - Math.sin(1);
      } else {
        hexMesh.position.y = i * (radius * Math.sin(2.094395)) - radius;
      }
      hexMesh.position.x = j * (radius - radius * 0.25);

      if (structures.includes(matrix[Math.abs(i)][j].structure)) {
        const rock = getHexagonGeometry(
          hexMesh.position.x,
          hexMesh.position.y,
          hexMesh.position.z,
          radius * 0.25
        );
        const triangle = getTriangleGeometry(
          hexMesh.position.x,
          hexMesh.position.y,
          hexMesh.position.z,
          radius * 0.25
        );
        let structureGeom =
          matrix[Math.abs(i)][j].structure === "rock" ? rock : triangle;
        scene.add(
          new THREE.Mesh(
            structureGeom,
            matrix[Math.abs(i)][j].structureMaterial
          )
        );
      }
      if (animals.includes(matrix[Math.abs(i)][j].animal)) {
        const animalGeom = getHexagonLineGeometry(
          hexMesh.position.x,
          hexMesh.position.y,
          hexMesh.position.z,
          radius * 0.35
        );
        scene.add(
          new THREE.Line(animalGeom, matrix[Math.abs(i)][j].animalMaterial)
        );
      }
      scene.add(hexMesh);
    }
  }
}
