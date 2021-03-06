import * as THREE from '/build/three.module.js';

const ARTWORKS = [];

// INIT WINDOW
window.onload = function(e) {
    const dark = document.querySelector("#dark");
    dark.style.opacity = 0;

    const loading = document.querySelector("#loading");
    loading.style.opacity = 0;

    // ARTWORKS
    const artwork_videos = document.querySelectorAll(".video");
    for (let i = 0; i < artwork_videos.length; i++) {
        if (i !== 1 && i !== 2) {
            const width = 300; // artwork_videos[i].offsetWidth * 0.5;
            const height = 300 * artwork_videos[i].offsetHeight / artwork_videos[i].offsetWidth;
            const depth = 5;

            const margin = 300;

            const randomX = -map_width / 2 + ((map_width / 3) * (i % 3)) + width / 2;
            const randomZ = -map_depth / 2 + margin + (((map_depth - (margin * 2)) / artwork_videos.length)) * i + 50;

            var artworkTexture = new THREE.TextureLoader().load(artwork_videos[i].src);
            artworkTexture.wrapS = artworkTexture.wrapT = THREE.RepeatWrapping;
            artworkTexture.repeat.set(-1, 1);
            artworkTexture.flipY = true;

            var artworkGeometry = new THREE.BoxGeometry(width, height, depth);
            var artworkMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: artworkTexture });
            var artwork = new THREE.Mesh(artworkGeometry, artworkMaterial);

            artwork.scale.x = -1;
            artwork.position.x = randomX;
            artwork.position.y = height / 2;
            artwork.position.z = randomZ;
            artwork.rotation.y = Math.random() * (0.2 - (-0.2)) + (-0.2);

            // FIXED POSITION
            const minZ = -map_depth / 4; // front
            const maxZ = map_depth / 4; // back
            const minX = -map_width / 2 + margin;
            const maxX = map_width / 2 - margin;

            if (i === 0) {
                artwork.position.x = minX + margin;
                artwork.position.z = minZ;
            }

            if (i === 3) {
                artwork.position.x = 0;
                artwork.position.z = 0;
            }

            if (i === 4) {
                artwork.position.x = margin + 50;
                artwork.position.z = 0;
            }

            if (i === 5) {
                artwork.position.x = minX;
                artwork.position.z = maxZ / 2;
            }

            if (i === 6) {
                artwork.position.x = minX + margin * 2;
                artwork.position.z = maxZ / 2;
            }

            if (i === 7) {
                artwork.position.x = minX + margin;
                artwork.position.z = maxZ;
            }

            artwork.value_id = i;
            scene.add(artwork);
            ARTWORKS.push(artwork);

            console.log(artwork.value_id);
        } else {
            const width = 300; // artwork_videos[i].offsetWidth * 0.5;
            const height = 300 * artwork_videos[i].offsetHeight / artwork_videos[i].offsetWidth;
            const depth = 5;

            const margin = 300;

            const randomX = -map_width / 2 + ((map_width / 3) * (i % 3)) + width / 2;
            const randomZ = -map_depth / 2 + margin + (((map_depth - (margin * 2)) / artwork_videos.length)) * i + 50;

            var artworkTexture = new THREE.VideoTexture(artwork_videos[i]);
            artworkTexture.wrapS = artworkTexture.wrapT = THREE.RepeatWrapping;
            artworkTexture.repeat.set(-1, 1);
            artworkTexture.flipY = true;
            var artworkGeometry = new THREE.BoxGeometry(width, height, depth);
            var artworkMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, map: artworkTexture });
            var artwork = new THREE.Mesh(artworkGeometry, artworkMaterial);

            artwork.scale.x = -1;
            artwork.position.x = randomX;
            artwork.position.y = height / 2;
            artwork.position.z = randomZ;
            artwork.rotation.y = Math.random() * (0.2 - (-0.2)) + (-0.2);

            // FIXED POSITION
            const minZ = -map_depth / 4;
            const maxZ = map_depth / 4;
            const minX = -map_width / 4;
            const maxX = map_width / 4;

            if (i === 1) {
                artwork.position.x = maxX;
                artwork.position.z = minZ;
            }

            if (i === 2) {
                artwork.position.x = maxX - margin;
                artwork.position.z = minZ;
            }

            artwork.value_id = i;
            scene.add(artwork);
            ARTWORKS.push(artwork);

            console.log(artwork.value_id);
        }
    }

    animate();
}

// GLOBAL VARIABLES
const world = document.querySelector("#world");
var clock = new THREE.Clock();
var keyboard = new THREEx.KeyboardState();

// SCENE
const scene = new THREE.Scene();

// CAMERA
var VIEW_ANGLE = 90;
var ASPECT = window.innerWidth / window.innerHeight;
var NEAR = 0.1;
var FAR = 20000;
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
scene.add(camera);
camera.position.set(0, 0, 0);
camera.lookAt(scene.position);

// RENDERER
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
world.appendChild(renderer.domElement);

// FLOOR
var map_width = 2100;
var map_depth = 2100;

var floorGeometry = new THREE.PlaneGeometry(map_width, map_depth, 10, 10);
var floorMaterial = new THREE.MeshPhongMaterial({ color: 0x110011, side: THREE.DoubleSide, opacity: 0.9, transparent: true });
var floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.position.y = 0;
floor.rotation.x = Math.PI / 2;

scene.add(floor);

// FIGURE
var texture = new THREE.TextureLoader().load('public/assets/textures/wood2.jpg');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);
texture.flipY = false;

const figure_geometry = new THREE.TorusKnotGeometry(map_width * 2.5, map_depth / 4.0, map_depth / 4.0, 4.0);
const figure_material = new THREE.MeshPhongMaterial({ color: 0xff00ff, bumpScale: 0.002, map: texture });
const figure = new THREE.Mesh(figure_geometry, figure_material);
figure.position.y = 0;
figure.rotation.y = Math.PI / Math.random() * 12;
scene.add(figure);

// SKYBOX/FOG
const skyBox_texture = new THREE.TextureLoader().load('public/assets/textures/marbel.jpg');
const skyBoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
const skyBoxMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, side: THREE.DoubleSide, map: skyBox_texture });
const skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);

scene.add(skyBox);
scene.fog = new THREE.FogExp2(0x000000, 0.00025);

// LIGHT
const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 10, 0);
light.target.position.set(-5, 0, 0);
scene.add(light);
scene.add(light.target);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.9);
scene.add(hemiLight);

// WALL
const WALLS = [];

// WALL: Front
var texture = new THREE.TextureLoader().load('public/assets/textures/aisle/aisle_texture11.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(10, 10);
texture.flipY = false;

var wallGeometry = new THREE.PlaneGeometry(map_width, map_width, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, bumpScale: 0.002, opacity: 0.5, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);

wall.rotation.x = Math.PI;
wall.position.x = 0;
wall.position.y = map_width / 2;
wall.position.z = -map_depth / 2;

scene.add(wall);

// WALL: Right
var texture = new THREE.TextureLoader().load('public/assets/textures/aisle/aisle_texture11.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-10, -10);
texture.flipY = false;

var wallGeometry = new THREE.PlaneGeometry(map_depth, map_width, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, bumpScale: 0.002, opacity: 0.5, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);

wall.rotation.y = Math.PI / 2;
wall.position.x = map_width / 2;
wall.position.y = map_width / 2;
wall.position.z = 0;
scene.add(wall);
WALLS.push(wall);

// WALL: Back
var texture = new THREE.TextureLoader().load('public/assets/textures/aisle/aisle_texture11.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-10, -10);
texture.flipY = false;

var wallGeometry = new THREE.PlaneGeometry(map_width, map_width, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, bumpScale: 0.002, opacity: 0.5, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);

wall.position.x = 0;
wall.position.y = map_width / 2;
wall.position.z = map_depth / 2;
scene.add(wall);
WALLS.push(wall);

// WALL: Left
var texture = new THREE.TextureLoader().load('public/assets/textures/aisle/aisle_texture11.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(-10, -10);
texture.flipY = false;

var wallGeometry = new THREE.PlaneGeometry(map_depth, map_width, 10, 10);
var wallMaterial = new THREE.MeshPhongMaterial({ color: 0xff00ff, bumpScale: 0.002, opacity: 0.5, transparent: true, side: THREE.DoubleSide, map: texture });
var wall = new THREE.Mesh(wallGeometry, wallMaterial);

wall.rotation.y = -Math.PI / 2;
wall.position.x = -map_width / 2;
wall.position.y = map_width / 2;
wall.position.z = 0;
scene.add(wall);
WALLS.push(wall);

// DOOR
var doorGeometry = new THREE.BoxGeometry(100, 180, 1.5);
var doorMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, side: THREE.DoubleSide });
var door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.x = 0;
door.position.y = 90;
door.position.z = map_depth / 2 - 1.5;
scene.add(door);

var doorGeometry = new THREE.BoxGeometry(100, 180, 1.5);
var doorMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, side: THREE.DoubleSide });
var door2 = new THREE.Mesh(doorGeometry, doorMaterial);
door2.position.x = 0;
door2.position.y = 90;
door2.position.z = -map_depth / 2 + 1.5;
scene.add(door2);

// NPC
const NPCS = [];
const NPCS_MESH = [];
const MESSAGES = [
    "?????????!",
    "Muyaho!",
    "??????~",
    "Meow~",
    "?????????????????? ?????????!",
    "Be quiet on the Exhibition!",
    "?????? ?????????~",
    "I'm glad I'm here",
    "????????? ??????????",
    "Do you have any snacks?",
    "???????????????!",
    "Hello!",
    "Man door hand hook car door",
    "Trolololol",
    "A/S/L?",
    "Lol",
    "Wya?",
    "LMAOROFL",
    "Mfw",
    "( ???? ???? ????)",
    "<3",
    "(*?????`)",
    "????????????",
    ":3",
    "Lmao i hate myself",
    "*cries*",
    " ????????????????????????????????????????????????????????? ",
    "Omg",
    "Owo wats dis",
    "Hehe",
    "Wyd",
    " ???;???????? ????????`??? ",
    " ?????????????????????????? ",
    "*shakes hand*",
    "??????~!",
    "Big mood",
    "Smh",
    "??????",
    "?????????",
    "???.???",
    "??????",
    "????",
    "we wub cwazy muwtipwy!",
    "I <3 u",
    "cu l8r",
    "?????? ???????????? ???????",
    "?????????-!",
    "????????? ???????????? ????????????."
];
const COLORS = ["0xff3333", "0xff8800", "0xffff33", "0x33ff33", "0x3333ff", "0x8833ff"];
const FACES = ["public/assets/textures/face1.png", "public/assets/textures/face2.png", "public/assets/textures/face3.png", "public/assets/textures/face4.png"];

for (let i = 0; i < 7; i++) {
    var cubeMaterialArray = [];

    const random_color = Math.floor(Math.random() * COLORS.length);
    const color = Number(COLORS[random_color]);
    const random_texture = Math.floor(Math.random() * FACES.length);
    const texture = new THREE.TextureLoader().load(FACES[random_texture]);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);

    // x+,x-,y+,y-,z+,z-
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002, map: texture }));
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002 }));
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002 }));
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002 }));
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002 }));
    cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: color, bumpScale: 0.002 }));

    const max = 450;
    const min = -450;
    const randomX = Math.random() * (max - min) + min;
    const randomZ = Math.random() * (max - min) + min;

    var npcGeometry = new THREE.BoxGeometry(50, 50, 50);
    var npcMaterial = cubeMaterialArray;
    var npc = new THREE.Mesh(npcGeometry, npcMaterial);

    npc.position.x = randomX;
    npc.position.y = 25;
    npc.position.z = randomZ;
    npc.rotation.y = Math.random() * (Math.PI * 2);

    scene.add(npc);
    NPCS.push(npc);

    // MESSAGE
    create_message(npc);
}

function create_message(_object) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const _font = "100px sans-serif";

    ctx.font = _font;

    let txt = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    const tw = Math.floor(ctx.measureText(txt).width) + 90;
    const th = getTextHeight(_font);

    canvas.width = tw;
    canvas.height = th.height * 10;

    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.strokeStyle = "1px solid rgb(0, 0, 0)";
    ctx.font = _font;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(tw, 0);
    ctx.lineTo(tw, th.height * 10 - (th.height * 10 / 4));
    ctx.lineTo(tw - (tw / 2.25), th.height * 10 - (th.height * 10 / 4));
    ctx.lineTo(tw / 2, th.height * 10);
    ctx.lineTo((tw / 2.25), th.height * 10 - (th.height * 10 / 4));
    ctx.lineTo(0, th.height * 10 - (th.height * 10 / 4));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // FILL TEXT
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillText(txt, 50, th.height * 11 / 2);

    const name_texture = new THREE.CanvasTexture(canvas);
    const name_geometry = new THREE.PlaneGeometry(canvas.width / 11, canvas.height / 11);
    const name_material = new THREE.MeshBasicMaterial({ map: name_texture, transparent: true, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(name_geometry, name_material);
    mesh.position.set(_object.position.x, _object.position.y + 50, _object.position.z);
    mesh.rotation.y = Math.PI;

    NPCS_MESH.push(mesh);
}

// CUBE
const cube_color = sessionStorage.getItem("avatar-color");
const cube_face = sessionStorage.getItem("avatar-face");

var cubeMaterialArray = [];
var texture = new THREE.TextureLoader().load(`public/assets/textures/face${Number(cube_face) + 1}.png`);
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002 }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002, map: texture }));
cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: cube_color, bumpScale: 0.002 }));

var cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
var cubeMaterial = cubeMaterialArray;
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.x = 0;
cube.position.y = 25;
cube.position.z = -map_depth / 2 + 250;
cube.rotation.y = Math.PI;

scene.add(cube);

cube.geometry.vertices = [];

const cube_vertices = cube.geometry.index.array

for (let i = 0; i < cube_vertices.length / 3; i++) {
    cube.geometry.vertices.push(new THREE.Vector3(cube_vertices[i * 3], cube_vertices[i * 3 + 1], cube_vertices[i * 3 + 2]));
    // console.log(cube.geometry.vertices);
}

// AVATAR NAME
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const _font = "100px sans-serif";

ctx.font = _font;

let txt = sessionStorage.getItem("avatar-name");
const tw = Math.floor(ctx.measureText(txt).width) + 90;
const th = getTextHeight(_font);

canvas.width = tw;
canvas.height = th.height * 10;

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.strokeStyle = "1px solid rgb(255, 255, 255)";
ctx.font = _font;
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillText(txt, 50, th.height * 10 / 2);

const name_texture = new THREE.CanvasTexture(canvas);
const name_geometry = new THREE.PlaneGeometry(canvas.width / 10, canvas.height / 10);
const name_material = new THREE.MeshBasicMaterial({ map: name_texture, transparent: true, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(name_geometry, name_material);
mesh.position.set(cube.position.x, cube.position.y + 30, cube.position.z);
mesh.rotation.y = Math.PI;

scene.add(mesh);

// collision
function check_collision_wall(_cube, _width, _depth) {
    const margin = 50;
    const condition1 = _cube.position.z <= -_depth / 2 + margin; // front
    const condition2 = _cube.position.x >= _width / 2 - margin; // right
    const condition3 = _cube.position.z >= _depth / 2 - margin; // back
    const condition4 = _cube.position.x <= -_width / 2 + margin; // left

    if (condition1) {
        _cube.position.z = -_depth / 2 + margin;
    }

    if (condition2) {
        _cube.position.x = _width / 2 - margin;
    }

    if (condition3) {
        _cube.position.z = _depth / 2 - margin;
    }

    if (condition4) {
        _cube.position.x = -_width / 2 + margin;
    }
}

function check_collision_door(_player, _door) {
    const condition1 = Math.abs(_player.position.x - _door.position.x) <= 50;
    const condition2 = Math.abs(_player.position.z - _door.position.z) <= 50;
    const answer = condition1 && condition2;

    if (answer) {
        const dark = document.querySelector("#dark");
        dark.style.opacity = 1;

        const loading = document.querySelector("#loading");
        loading.style.opacity = 1;

        setTimeout(() => {
            window.location.href = "/aisle4";
        }, 1000);
    }
}

function check_collision_door2(_player, _door) {
    const condition1 = Math.abs(_player.position.x - _door.position.x) <= 50;
    const condition2 = Math.abs(_player.position.z - _door.position.z) <= 50;
    const answer = condition1 && condition2;

    if (answer) {
        const dark = document.querySelector("#dark");
        dark.style.opacity = 1;

        const loading = document.querySelector("#loading");
        loading.style.opacity = 1;

        setTimeout(() => {
            window.location.href = "/aisle3";
        }, 1000);
    }
}

function check_collision_fixed_object(_player, _mesh, _object) {
    const margin = (_player.geometry.parameters.depth + _object.geometry.parameters.depth) / 2;
    const margin2 = (_player.geometry.parameters.width + _object.geometry.parameters.width) / 2;
    const condition = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.z > _object.position.z;
    const condition2 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.z < _object.position.z;
    const condition3 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.x > _object.position.x;
    const condition4 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.x < _object.position.x;

    if (condition) {
        _player.position.z = _object.position.z + margin;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.z = _object.position.z + margin;
        }
    } else if (condition2) {
        _player.position.z = _object.position.z - margin;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.z = _object.position.z - margin;
        }
    } else if (condition3) {
        _player.position.x = _object.position.x + margin2;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.x = _object.position.x + margin2;
        }
    } else if (condition4) {
        _player.position.x = _object.position.x - margin2;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.x = _object.position.x - margin2;
        }
    }
}

function check_collision_artwork_object(_player, _mesh, _object) {
    const margin = (_player.geometry.parameters.depth + _object.geometry.parameters.depth) / 2;
    const margin2 = (_player.geometry.parameters.width + _object.geometry.parameters.width) / 2;
    const condition = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.z > _object.position.z;
    const condition2 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.z < _object.position.z;
    const condition3 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.x > _object.position.x;
    const condition4 = Math.abs(_player.position.z - _object.position.z) < margin && Math.abs(_player.position.x - _object.position.x) < margin2 && _player.position.x < _object.position.x;

    if (condition) {
        _player.position.z = _object.position.z + margin;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.z = _object.position.z + margin;
        }
    } else if (condition2) {
        _player.position.z = _object.position.z - margin;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.z = _object.position.z - margin;
        }
    } else if (condition3) {
        _player.position.x = _object.position.x + margin2;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.x = _object.position.x + margin2;
        }
    } else if (condition4) {
        _player.position.x = _object.position.x - margin2;

        if (_mesh !== null && _mesh !== undefined) {
            _mesh.position.x = _object.position.x - margin2;
        }
    }

    if ((condition || condition2 || condition3 || condition4) && _object) {
        if (press_artwork) {
            show_artwork_button(_object.name);
            artwork_no = _object.value_id;
        }
    }
}

let toggle_artwork_popup = false;
let press_artwork = true;
let artwork_no = 0;

const artwork_btn = document.querySelector("#artwork-btn");
artwork_btn.style.left = (window.innerWidth - artwork_btn.offsetWidth) / 2 + "px";
artwork_btn.style.bottom = document.querySelector("#main-footer").offsetHeight * 2 + document.querySelector("#mobile-keyboard").offsetHeight + "px";
artwork_btn.addEventListener("click", function(e) {
    hide_artwork_button();
    init_artwork_popup(artwork_no);
});

const close_artwork = document.querySelectorAll(".close-artwork");
for (let i = 0; i < close_artwork.length; i++) {
    close_artwork[i].addEventListener("click", function(e) {
        console.log(e);
        init_artwork_opacity();
        press_artwork = true;
    });
}

window.addEventListener("keypress", function(e) {
    if (toggle_artwork_popup && e.key === " ") {
        hide_artwork_button();

        init_artwork_popup(artwork_no);
    } else if (!toggle_artwork_popup && e.key === " ") {
        init_artwork_opacity();
        press_artwork = true;
    }
});

function init_artwork_opacity() {
    const artwork = document.querySelectorAll(".artwork");
    for (let i = 0; i < artwork.length; i++) {
        artwork[i].style.opacity = 0;
        artwork[i].style.zIndex = 0;
        setTimeout(() => {
            artwork[i].querySelector(".close-artwork").style.display = "none";
        }, 500);
    }
}

function init_artwork_popup(_id) {
    const artworks = document.querySelectorAll(".artwork");
    const artwork = artworks[_id];

    setTimeout(() => {
        artwork.style.opacity = 1;
        artwork.style.zIndex = 9990;
        artwork.children[2].style.display = "block";
    }, 600);
}

// artwork button

function show_artwork_button(_name) {
    toggle_artwork_popup = true;

    const artwork_btn = document.querySelector("#artwork-btn");

    artwork_btn.style.display = "block";
    artwork_btn.style.opacity = 1;

    artwork_btn.style.left = (window.innerWidth - artwork_btn.offsetWidth) / 2 + "px";
    if (window.innerWidth < 1000) {
        artwork_btn.style.bottom = document.querySelector("#main-footer").offsetHeight * 2 + document.querySelector("#mobile-keyboard").offsetHeight + "px";
    } else {
        artwork_btn.style.bottom = document.querySelector("#main-footer").offsetHeight + "px";
    }
}

function hide_artwork_button() {
    toggle_artwork_popup = false;
    press_artwork = false;

    const artwork_btn = document.querySelector("#artwork-btn");
    artwork_btn.style.opacity = 0;
    setTimeout(() => {
        artwork_btn.style.display = "none";
    }, 600);
}

// resize
window.addEventListener("resize", function(e) {
    const artwork_btn = document.querySelector("#artwork-btn");
    if (window.innerWidth < 1000) {
        artwork_btn.style.left = (window.innerWidth - artwork_btn.offsetWidth) / 2 + "px";
        artwork_btn.style.bottom = document.querySelector("#main-footer").offsetHeight * 2 + document.querySelector("#mobile-keyboard").offsetHeight + "px";
    } else {
        artwork_btn.style.left = (window.innerWidth - artwork_btn.offsetWidth) / 2 + "px";
        artwork_btn.style.bottom = document.querySelector("#main-footer").offsetHeight + "px";
    }
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    handle_keyboard_touch();
    //
    check_collision_wall(cube, map_width, map_depth);
    check_collision_wall(mesh, map_width, map_depth);
    //
    for (let i = 0; i < NPCS.length; i++) {
        check_collision_wall(NPCS[i], map_width, map_depth);
        check_collision_wall(NPCS_MESH[i], map_width, map_depth);
        check_collision_fixed_object(cube, mesh, NPCS[i]);
        if (i > 1) {
            check_collision_fixed_object(NPCS[i - 1], NPCS_MESH[i - 1], NPCS[i]);
        }
    }
    //
    for (let i = 0; i < ARTWORKS.length; i++) {
        check_collision_artwork_object(cube, mesh, ARTWORKS[i]);
    }
    //
    check_collision_door(cube, door);
    check_collision_door2(cube, door2);
    //
    move_npcs();
}

function render() {
    renderer.render(scene, camera);
}


// MOVE EVENT
function handle_camera() {
    var relativeCameraOffset = new THREE.Vector3(0, 50, 200);
    var cameraOffset = relativeCameraOffset.applyMatrix4(cube.matrixWorld);

    camera.position.x = cameraOffset.x;
    camera.position.y = cameraOffset.y;
    camera.position.z = cameraOffset.z;

    camera.lookAt(cube.position);
}


// MOBILE KEYBOARD
const m_up = document.querySelector("#m-up");
const m_right = document.querySelector("#m-right");
const m_down = document.querySelector("#m-down");
const m_left = document.querySelector("#m-left");
const m_rl = document.querySelector("#m-rl");
const m_rr = document.querySelector("#m-rr");

let toggle_m_rl = false;
let toggle_m_rr = false;

let toggle_m_up = false;
let toggle_m_right = false;
let toggle_m_down = false;
let toggle_m_left = false;

// MOUSE DOWN, UP

m_rl.addEventListener("mousedown", function(e) {
    toggle_m_rl = true;

    const m_rl = document.querySelector("#m-rl");
    m_rl.style.backgroundColor = "rgb(0, 0, 0)";
    m_rl.style.color = "rgb(255, 255, 255)";
});

m_rl.addEventListener("mouseup", function(e) {
    toggle_m_rl = false;

    const m_rl = document.querySelector("#m-rl");
    m_rl.style.backgroundColor = "rgb(255, 255, 255)";
    m_rl.style.color = "rgb(0, 0, 0)";
});

m_rr.addEventListener("mousedown", function(e) {
    toggle_m_rr = true;

    const m_rr = document.querySelector("#m-rr");
    m_rr.style.backgroundColor = "rgba(0, 0, 0)";
    m_rr.style.color = "rgb(255, 255, 255)";
});

m_rr.addEventListener("mouseup", function(e) {
    toggle_m_rr = false;

    const m_rr = document.querySelector("#m-rr");
    m_rr.style.backgroundColor = "rgb(255, 255, 255)";
    m_rr.style.color = "rgb(0, 0, 0)";
});

m_up.addEventListener("mousedown", function(e) {
    toggle_m_up = true;
    // color
    const m_up = document.querySelector("#m-up");
    m_up.style.backgroundColor = "rgb(0, 0, 0)";
    m_up.style.color = "rgb(255, 255, 255)";
});

m_up.addEventListener("mouseup", function(e) {
    toggle_m_up = false;
    // color
    const m_up = document.querySelector("#m-up");
    m_up.style.backgroundColor = "rgb(255, 255, 255)";
    m_up.style.color = "rgb(0, 0, 0)";
});

m_right.addEventListener("mousedown", function(e) {
    toggle_m_right = true;
    // color
    const m_right = document.querySelector("#m-right");
    m_right.style.backgroundColor = "rgb(0, 0, 0)";
    m_right.style.color = "rgb(255, 255, 255)";
});

m_right.addEventListener("mouseup", function(e) {
    toggle_m_right = false;
    // color
    const m_right = document.querySelector("#m-right");
    m_right.style.backgroundColor = "rgb(255, 255, 255)";
    m_right.style.color = "rgb(0, 0, 0)";
});

m_left.addEventListener("mousedown", function(e) {
    toggle_m_left = true;
    // color
    const m_left = document.querySelector("#m-left");
    m_left.style.backgroundColor = "rgb(0, 0, 0)";
    m_left.style.color = "rgb(255, 255, 255)";
});

m_left.addEventListener("mouseup", function(e) {
    toggle_m_left = false;
    // color
    const m_left = document.querySelector("#m-left");
    m_left.style.backgroundColor = "rgb(255, 255, 255)";
    m_left.style.color = "rgb(0, 0, 0)";
});

m_down.addEventListener("mousedown", function(e) {
    toggle_m_down = true;
    // color
    const m_down = document.querySelector("#m-down");
    m_down.style.backgroundColor = "rgb(0, 0, 0)";
    m_down.style.color = "rgb(255, 255, 255)";
});

m_down.addEventListener("mouseup", function(e) {
    toggle_m_down = false;
    // color
    const m_down = document.querySelector("#m-down");
    m_down.style.backgroundColor = "rgb(255, 255, 255)";
    m_down.style.color = "rgb(0, 0, 0)";
});

// TOUCH
m_rl.addEventListener("touchstart", function(e) {
    toggle_m_rl = true;

    m_rl.style.backgroundColor = "rgb(0, 0, 0)";
    m_rl.style.color = "rgb(255, 255, 255)";

    const arrow = m_rl.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_rl.addEventListener("touchend", function(e) {
    toggle_m_rl = false;

    m_rl.style.backgroundColor = "rgb(255, 255, 255)";
    m_rl.style.color = "rgb(0, 0, 0)";

    const arrow = m_rl.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

m_rr.addEventListener("touchstart", function(e) {
    toggle_m_rr = true;

    m_rr.style.backgroundColor = "rgb(0, 0, 0)";
    m_rr.style.color = "rgb(255, 255, 255)";

    const arrow = m_rr.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_rr.addEventListener("touchend", function(e) {
    toggle_m_rr = false;

    m_rr.style.backgroundColor = "rgb(255, 255, 255)";
    m_rr.style.color = "rgb(0, 0, 0)";

    const arrow = m_rr.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

m_up.addEventListener("touchstart", function(e) {
    toggle_m_up = true;
    topkeyup = true;

    m_up.style.backgroundColor = "rgb(0, 0, 0)";
    m_up.style.color = "rgb(255, 255, 255)";

    const arrow = m_up.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_up.addEventListener("touchend", function(e) {
    toggle_m_up = false;
    topkeyup = false;

    m_up.style.backgroundColor = "rgb(255, 255, 255)";
    m_up.style.color = "rgb(0, 0, 0)";

    const arrow = m_up.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

m_right.addEventListener("touchstart", function(e) {
    toggle_m_right = true;
    rightkeyup = true;

    m_right.style.backgroundColor = "rgb(0, 0, 0)";
    m_right.style.color = "rgb(255, 255, 255)";

    const arrow = m_right.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_right.addEventListener("touchend", function(e) {
    toggle_m_right = false;
    rightkeyup = false;

    m_right.style.backgroundColor = "rgb(255, 255, 255)";
    m_right.style.color = "rgb(0, 0, 0)";

    const arrow = m_right.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

m_left.addEventListener("touchstart", function(e) {
    toggle_m_left = true;
    leftkeyup = true;

    m_left.style.backgroundColor = "rgb(0, 0, 0)";
    m_left.style.color = "rgb(255, 255, 255)";

    const arrow = m_left.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_left.addEventListener("touchend", function(e) {
    toggle_m_left = false;
    leftkeyup = false;

    m_left.style.backgroundColor = "rgb(255, 255, 255)";
    m_left.style.color = "rgb(0, 0, 0)";

    const arrow = m_left.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

m_down.addEventListener("touchstart", function(e) {
    toggle_m_down = true;
    bottomkeyup = true;

    m_down.style.backgroundColor = "rgb(0, 0, 0)";
    m_down.style.color = "rgb(255, 255, 255)";

    const arrow = m_down.querySelector("svg");
    arrow.style.fill = "rgb(255, 255, 255)";
});

m_down.addEventListener("touchend", function(e) {
    toggle_m_down = false;
    bottomkeyup = false;

    m_down.style.backgroundColor = "rgb(255, 255, 255)";
    m_down.style.color = "rgb(0, 0, 0)";

    const arrow = m_down.querySelector("svg");
    arrow.style.fill = "rgb(0, 0, 0)";
});

let toggle_face = true;

function handle_keyboard_touch() {
    var delta = clock.getDelta();
    var moveDistance = 200 * delta;
    var rotateAngle = Math.PI / 2 * delta;

    // MOVE T, B, R, L
    if (keyboard.pressed("up") || toggle_m_up) {
        cube.translateZ(-moveDistance);
        mesh.translateZ(-moveDistance);

        toggle_face = true;
    }

    if (keyboard.pressed("down") || toggle_m_down) {
        cube.translateZ(moveDistance);
        mesh.translateZ(moveDistance);

        if (toggle_face) {
            toggle_face = false;
        }
    }

    if (keyboard.pressed("left") || toggle_m_left) {
        cube.translateX(-moveDistance);
        mesh.translateX(-moveDistance);

        toggle_face = false;
    }

    if (keyboard.pressed("right") || toggle_m_right) {
        cube.translateX(moveDistance);
        mesh.translateX(moveDistance);

        toggle_face = false;
    }

    // ROTATE L, R
    if (keyboard.pressed("Q") || toggle_m_rl) {
        cube.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
        mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
        for (let i = 0; i < NPCS_MESH.length; i++) {
            NPCS_MESH[i].rotateOnAxis(new THREE.Vector3(0, 1, 0), rotateAngle);
        }
    }
    if (keyboard.pressed("E") || toggle_m_rr) {
        cube.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
        mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
        for (let i = 0; i < NPCS_MESH.length; i++) {
            NPCS_MESH[i].rotateOnAxis(new THREE.Vector3(0, 1, 0), -rotateAngle);
        }
    }
}

function move_npcs() {
    for (let i = 0; i < NPCS.length; i++) {
        const random = Math.floor(Math.random() * 100);
        if (random % 17 === 0) {
            const max = 25;
            const min = -25;
            const randomX = Math.random() * (max - min) + min;
            const randomZ = Math.random() * (max - min) + min;

            NPCS[i].position.x += randomX;
            NPCS[i].position.z += randomZ;

            NPCS_MESH[i].position.x += randomX;
            NPCS_MESH[i].position.z += randomZ;

            NPCS[i].rotation.y += Math.random() * (Math.PI * 2);
        }
        if (random === 0) {
            scene.add(NPCS_MESH[i]);
        }
        if (random === 1) {
            scene.remove(NPCS_MESH[i]);
        }
    }
}

function getTextHeight(font) {

    var text = $('<span>Hg</span>').css({ fontFamily: font });
    var block = $('<div style="display: inline-block; width: 1px; height: 0px;"></div>');

    var div = $('<div></div>');
    div.append(text, block);

    var body = $('body');
    body.append(div);

    try {
        var result = {};

        block.css({ verticalAlign: 'baseline' });
        result.ascent = block.offset().top - text.offset().top;

        block.css({ verticalAlign: 'bottom' });
        result.height = block.offset().top - text.offset().top;

        result.descent = result.height - result.ascent;

    } finally {
        div.remove();
    }

    return result;
};