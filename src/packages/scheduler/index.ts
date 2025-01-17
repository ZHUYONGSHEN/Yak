
import * as THREE from 'three';
import { ColorBlock } from './colorBlock';
import { FONTS } from './fonts';

export class Scheduler {
  private readonly el: HTMLElement;
  private readonly scene = new THREE.Scene();
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  private readonly camera: THREE.PerspectiveCamera;
  constructor(el: HTMLElement, { fov = 100, width = window.innerWidth, height = window.innerHeight, near = 0.1, far = 2000 }) {
    this.el = el;
    this.camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    this.camera.position.z = 200;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);
    const gridHelper = new THREE.GridHelper(400, 40, 0x0000ff, 0x808080);
    gridHelper.position.y = 0;
    gridHelper.position.x = 0;
    gridHelper.rotation.x = Math.PI / 2;
    this.scene.add(gridHelper);
    new ColorBlock(this.scene);
    new FONTS(this.scene, "哈哈哈哈哈哈", {});
    this.renderer.render(this.scene, this.camera);
    window.addEventListener('wheel', (event) => {
      // 处理滚轮事件
      let num = this.camera.position.z
      if (event.deltaY > 0) {
        num--
      } else if (event.deltaY < 0) {
        num++
      }
      this.camera.position.z = num;
      this.renderer.render(this.scene, this.camera);
    });
  }
}