
import * as THREE from 'three';
import { ColorBlock } from './colorBlock';

export class Scheduler {
  private readonly el: HTMLElement;
  private readonly scene = new THREE.Scene();
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  private readonly camera: THREE.PerspectiveCamera;
  private readonly mesh: THREE.Mesh;
  constructor(el: HTMLElement, { fov = 200, width = window.innerWidth, height = window.innerHeight, near = 1, far = 9000 }) {
    this.el = el;
    this.camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    this.camera.position.z = 70;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);
    this.scene.add(this.mesh);
    new ColorBlock(this.scene);
    this.camera.position.z = 5;
    this.renderer.render(this.scene, this.camera);
  }
}