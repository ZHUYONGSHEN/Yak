import * as THREE from "three";


export class ColorBlock {
  constructor(scene) {
    const { uniforms, vertexShader, fragmentShader } = this.getGradientShader();
    const backgroundMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide
    });
    const geometry = new THREE.PlaneGeometry(1, 1);
    const backgroundMesh = new THREE.Mesh(geometry, backgroundMaterial);
    scene.add(backgroundMesh);
  }
  getRandomColor() {
    return {
      r: parseInt(String(Math.random() * 255)),
      g: parseInt(String(Math.random() * 255)),
      b: parseInt(String(Math.random() * 255))
    };
  }
  getGradientShader() {
    // const topColor = this.getRandomColor();
    // const bottomColor = this.getRandomColor();
    return {
      uniforms: {
        topColor: {
          value: new THREE.Color("red")
        },
        bottomColor: {
          value: new THREE.Color("black")
        }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec2 vUv;
        void main() {
          float t = vUv.y;
          gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
        }
      `
    }
  }
}