import * as THREE from '/build/three.module.js';

// INIT WINDOW
window.onload = function(e) {
    const promise1 = new Promise((resolve, reject) => {
        resolve('window is loaded');
    });

    promise1.then((value) => {
        const app = document.querySelector("#app");
        app.style.opacity = 1;

        animate();
    });
}

// CHANGE_COLOR
const avatar_color = document.querySelector("#avatar-color");

avatar_color.value = "#ffffff";

avatar_color.addEventListener("change", function(e) {
    const color = e.target.value;
    for (let i = 0; i < cube.material.length; i++) {
        cube.material[i].color.set(color);
    }
});

// CHANGE_FACE
const avatar_faces = document.querySelector("#avatar-faces");

avatar_faces.addEventListener("change", function(e) {
    const face = e.target.value;
    const texture = new THREE.TextureLoader().load(`public/assets/textures/face${Number(face) + 1}.png`);
    cube.material[4].map = texture;
});

// ENTER
const enter = document.querySelector("#enter");
enter.addEventListener("click", function(e) {
    const avatar_name = document.querySelector("#avatar-name");
    const name_value = avatar_name.value;
    if (name_value !== "" && name_value !== null && name_value !== undefined) {
        const color = avatar_color.value;
        const face = avatar_faces.value;
        sessionStorage.setItem("avatar-name", name_value);
        sessionStorage.setItem("avatar-color", color);
        sessionStorage.setItem("avatar-face", face);
        const app = document.querySelector("#app");
        app.style.opacity = 0;
        document.body.style.backgroundColor = "black";
        setTimeout(() => {
            window.location.href = "/lobby";
        }, 1100);
    } else {
        window.alert("PLEASE INPUT YOUR AVATAR'S NAME!");
    }
});

// GLOBAL VARIABLES
const world = document.querySelector("#world");
const width = world.offsetWidth;
const height = world.offsetHeight;

// SCENE
const scene = new THREE.Scene();

// CAMERA
var VIEW_ANGLE = 90;
var ASPECT = width / height;
var NEAR = 0.1;
var FAR = 20000;
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
scene.add(camera);
camera.position.set(0, 0, 0);
camera.lookAt(scene.position);

// RENDERER
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);
world.appendChild(renderer.domElement);

// FLOOR
var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var floorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.4, transparent: true, side: THREE.DoubleSide });
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = 0;
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// SKYBOX/FOG
var skyBoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
var skyBoxMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, side: THREE.DoubleSide });
var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
scene.add(skyBox);
scene.fog = new THREE.FogExp2(0xffff00, 0.00025);

// LIGHT
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.5);
scene.add(hemiLight);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 10, 0);
light.target.position.set(-5, 0, 0);
scene.add(light);
scene.add(light.target);

// WALL
const WALLS = [];

// WALL: Front
var texture = new THREE.TextureLoader().load('public/assets/textures/34.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);
texture.flipY = false;
var wallGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, bumpScale: 0.002, opacity: 0.6, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.rotation.x = Math.PI;
wall.position.x = 0;
wall.position.y = 500;
wall.position.z = -500;
scene.add(wall);

// WALL: Right
var texture = new THREE.TextureLoader().load('public/assets/textures/33.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-1, 1);
texture.flipY = true;
var wallGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, bumpScale: 0.002, opacity: 0.6, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.rotation.y = Math.PI / 2;
wall.position.x = 500;
wall.position.y = 500;
wall.position.z = 0;
scene.add(wall);
WALLS.push(wall);

// WALL: Back
var texture = new THREE.TextureLoader().load('public/assets/textures/35.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-1, 1);
texture.flipY = true;
var wallGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, bumpScale: 0.002, opacity: 0.6, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.x = 0;
wall.position.y = 500;
wall.position.z = 500;
scene.add(wall);
WALLS.push(wall);

// WALL: Left
var texture = new THREE.TextureLoader().load('public/assets/textures/36.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-1, 1);
texture.flipY = true;
var wallGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, bumpScale: 0.002, opacity: 0.6, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.rotation.y = -Math.PI / 2;
wall.position.x = -500;
wall.position.y = 500;
wall.position.z = 0;
scene.add(wall);
WALLS.push(wall);

// CUBE
var texture = new THREE.TextureLoader().load("public/assets/textures/face1.png");
var cubeMaterialArray = [];
var cube_init_color = 0xffffff;
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002, map: texture }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_init_color, bumpScale: 0.002 }));
var cubeGeometry = new THREE.BoxGeometry(100, 100, 100);
var cubeMaterial = cubeMaterialArray;
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = 0;
cube.position.y = 50;
cube.position.z = 100;
scene.add(cube);
cube.geometry.vertices = [];
const cube_vertices = cube.geometry.index.array
for (let i = 0; i < cube_vertices.length / 3; i++) {
    cube.geometry.vertices.push(new THREE.Vector3(cube_vertices[i * 3], cube_vertices[i * 3 + 1], cube_vertices[i * 3 + 2]));
}
// console.log(cube.geometry.vertices);
console.log(cube.material.color);

// resize
window.addEventListener('resize', () => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    render();
}, false);

// render, animate
var animate = function() {
    requestAnimationFrame(animate);
    render();
    update();
};

function update() {
    handle_camera();
}

function render() {
    renderer.render(scene, camera);
}

var rotationAngle = 0;

// MOVE EVENT
function handle_camera() {
    rotationAngle += 0.01;

    var relativeCameraOffset = new THREE.Vector3(0, 50, 200);
    var cameraOffset = relativeCameraOffset.applyMatrix4(cube.matrixWorld);

    camera.position.x = cameraOffset.x;
    camera.position.y = cameraOffset.y;
    camera.position.z = cameraOffset.z

    cube.rotation.y = rotationAngle;

    camera.lookAt(cube.position);
}