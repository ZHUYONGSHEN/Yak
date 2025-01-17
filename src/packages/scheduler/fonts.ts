import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export class FONTS {
  constructor(scene: THREE.Scene, text: string, { size = 2, depth = 1, height = 0, curveSegments = 1, bevelEnabled = false, bevelThickness = 1, bevelSize = 1, bevelSegments = 1, color = "0x00ff00" }) {
    const loader = new FontLoader();
    loader.load("public/fonts/FZLanTingHeiS-UL-GB_Regular.json", (font) => {
      this.createText(text, font, { size, height, depth, curveSegments, bevelEnabled, bevelThickness, bevelSize, bevelSegments, color }, scene);
    });
  }
  private createText(text, font,
    { size,
      height,
      depth,
      curveSegments,
      bevelEnabled,
      bevelThickness,
      bevelSize,
      bevelSegments,
      color }, scene) {

    const geometry = new TextGeometry(text, {
      font,
      size,
      height,
      depth,
      curveSegments,
      bevelEnabled,
      bevelThickness,
      bevelSize,
      bevelSegments
    });
    const material = new THREE.MeshPhongMaterial({ color });
    const textMesh = new THREE.Mesh(geometry, material);

    textMesh.position.x = 0;
    textMesh.position.y = 100;
    textMesh.position.z = 1;

    scene.add(textMesh);
  }
}