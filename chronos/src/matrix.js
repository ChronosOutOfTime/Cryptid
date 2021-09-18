import * as materials from "./materials";

const matrix = [
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "desert",
      material: materials.desert,
      structure: "rock",
      structureMaterial: materials.blue,
      animal: "bear",
      animalMaterial: materials.bear,
    },
    {
      type: "desert",
      material: materials.desert,
      animal: "bear",
      animalMaterial: materials.bear,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
      animal: "puma",
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
      structure: "rock",
      structureMaterial: materials.green,
    },
  ],
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
      animal: "puma",
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
      animal: "bear",
      animalMaterial: materials.bear,
    },
  ],
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
      structure: "cabin",
      structureMaterial: materials.white,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
      structure: "rock",
      structureMaterial: materials.white,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
      animal: "bear",
      animalMaterial: materials.bear,
    },
    {
      type: "lake",
      material: materials.lake,
      animal: "bear",
      animalMaterial: materials.bear,
    },
  ],
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "lake",
      material: materials.lake,
    },
  ],
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
      animal: "bear",
      animalMaterial: materials.bear,
    },
    {
      type: "marsh",
      material: materials.marsh,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "marsh",
      material: materials.marsh,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
  ],
  [
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
      animal: "bear",
      animalMaterial: materials.bear,
    },
    {
      type: "mountain",
      material: materials.mountain,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
  ],
  [
    {
      type: "marsh",
      material: materials.marsh,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "forest",
      material: materials.forest,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "forest",
      material: materials.forest,
      animal: "puma",
      animalMaterial: materials.puma,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
      structure: "cabin",
      structureMaterial: materials.green,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
  ],
  [
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
    },
    {
      type: "lake",
      material: materials.lake,
      animal: "puma",
      animalMaterial: materials.puma,
    },
  ],
  [
    {
      type: "marsh",
      material: materials.marsh,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
    },
    {
      type: "mountain",
      material: materials.mountain,
      structure: "rock",
      structureMaterial: materials.blue,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "desert",
      material: materials.desert,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
    },
    {
      type: "forest",
      material: materials.forest,
      animal: "puma",
      animalMaterial: materials.puma,
    },
  ],
];

export default matrix;
