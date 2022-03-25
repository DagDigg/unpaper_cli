import * as THREE from 'three';

function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rgb(r: number, g: number, b: number) {
    return new THREE.Vector3(r, g, b);
}

export function animate(el: HTMLCanvasElement) {
    const renderer = new THREE.WebGLRenderer({ canvas: el });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let vCheck = false;

    camera.position.z = 5;

    var randomisePosition = new THREE.Vector2(1, 2);

    const R = function (x: number, y: number, t: number) {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };
    const G = function (x: number, y: number, t: number) {
        return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    };
    const B = function (x: number, y: number, t: number) {
        return Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
    };

    const sNoise = document.querySelector('#snoise-function')?.textContent ?? '';
    const fragmentShader = document.querySelector('#fragment-shader')?.textContent ?? '';
    const vertexShader = document.querySelector('#vertex-shader')?.textContent ?? '';

    const geometry = new THREE.PlaneGeometry(window.innerWidth / 2, 400, 100, 100);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_bg: { value: rgb(162, 138, 241) },
            u_bgMain: { value: rgb(162, 138, 241) },
            u_color1: { value: rgb(162, 138, 241) },
            u_color2: { value: rgb(82, 31, 241) },
            u_time: { value: 30 },
            u_randomisePosition: { value: randomisePosition },
        },
        fragmentShader: sNoise + fragmentShader,
        vertexShader: sNoise + vertexShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-200, 270, -280);
    mesh.scale.multiplyScalar(3.5);
    mesh.rotateOnAxis(new THREE.Vector3(1, 0, 0), -0.01);
    mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.0);
    mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0.1);
    scene.add(mesh);

    renderer.render(scene, camera);
    let t = 0;
    let j = 0;
    let x = randomInteger(0, 32);
    const y = randomInteger(0, 32);
    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);

        mesh.material.uniforms.u_color1.value = new THREE.Vector3(R(x, y, t / 2), G(x, y, t / 2), B(x, y, t / 2));

        mesh.material.uniforms.u_time.value = t;
        if (t % 0.1 === 0) {
            if (vCheck === false) {
                x -= 1;
                if (x <= 0) {
                    vCheck = true;
                }
            } else {
                x += 1;
                if (x >= 32) {
                    vCheck = false;
                }
            }
        }

        // Increase t by a certain value every frame
        j = j + 0.01;
        t = t + 0.05;
    };
    animate();
}
