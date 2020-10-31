import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
let camera, scene, renderer, controls;

const fieldOfView = 75;
const aspect = window.innerWidth / window.innerHeight;
const nearClip = 0.1;
const farClip = 1000;
 let towers = [];
 let walls = [];
 let bricks = [];
 let roofs = [];

  init();
  animate();


  // Cette fonction permet de générer un nombre aléatoire
  function getRandomArbitrary(min, max) {
      return  Math.ceil(Math.random() * (max - min) + min);
  }

  function init() {
    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    camera = new THREE.PerspectiveCamera(fieldOfView, aspect, nearClip, farClip)
    // RENDU
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // Taille du rendu sur l'ecran
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Rendu du canvas
    document.body.appendChild(renderer.domElement);

    // MURS

    let moon = MeshGenerator({
     type : 'sphere',
     dimension : [45, 32, 32],
     texture : 'textures/moon.jpg',
     position: [0, 0, 0]
  })

      let wallNorth = MeshGenerator({
      type : "box",
      dimension : [220, 30, 20],
      texture : 'textures/brick.png',
      position: [-10, 0, 100]
    })


    let wallEast = MeshGenerator({
      type : "box",
      dimension : [220, 20, 30],
      texture : 'textures/brick.png',
      position: [-150, 0, 0],
      rotation: [90, 0, 90]
    })

    let wallWest = MeshGenerator({
      type : "box",
      dimension : [220, 20, 30],
      texture : 'textures/brick.png',
      position: [90, 0, 0],
      rotation: [90, 0, 90]
    })

    let wallSouthEast = MeshGenerator({
      type : "box",
      dimension : [60, 30, 20],
      texture : 'textures/brick.png',
      position: [-110, 0, -100]
    })

    let wallSouthWest = MeshGenerator({
      type : "box",
      dimension : [50, 30, 20],
      texture : 'textures/brick.png',
      position: [50, 0, -100]
    })




    walls.push(wallNorth);
    walls.push(wallEast);
    walls.push(wallWest);
    walls.push(wallSouthEast);
    walls.push(wallSouthWest);

    // MUR TOURS

    let wallTower = MeshGenerator({
      type: "cylinder",
      dimension: [25, 25, 50, 30],
      texture : 'textures/brick.png',
      position: [90, 10, -100]
    })

    let wallTower2 = MeshGenerator({
      type: "cylinder",
      dimension: [25, 25, 50, 30],
      texture : 'textures/brick.png',
      position: [-145, 10, -100]
    })

    let wallTower3 = MeshGenerator({
      type: "cylinder",
      dimension: [25, 25, 50, 30],
      texture : 'textures/brick.png',
      position: [-145, 10, 100]
    })

    let wallTower4 = MeshGenerator({
      type: "cylinder",
      dimension: [25, 25, 50, 30],
      texture : 'textures/brick.png',
      position: [90, 10, 100]
    })

    let wallTower5 = MeshGenerator({
      type: "cylinder",
      dimension: [18, 18, 50, 30],
      texture : 'textures/brick.png',
      position: [-65, 10, -100]
    })

    let wallTower6 = MeshGenerator({
      type: "cylinder",
      dimension: [18, 18, 50, 30],
      texture : 'textures/brick.png',
      position: [10, 10, -100]
    })

    towers.push(wallTower);
    towers.push(wallTower2);
    towers.push(wallTower3);
    towers.push(wallTower4);
    towers.push(wallTower5);
    towers.push(wallTower6);

    //TOIT TOURS
    let roofSouthEast = MeshGenerator({
      type : "cone",
      dimension : [20, 30, 30],
      texture : 'textures/toit.jpg',
      position: [-65, 50, -100]
    })

    let roofSouthWest = MeshGenerator({
      type : "cone",
      dimension : [20, 30, 30],
      texture : 'textures/toit.jpg',
      position: [10, 50, -100]
    })

    roofs.push(roofSouthEast);
    roofs.push(roofSouthWest);

    //PORTAIL

    let portal = MeshGenerator({
      type : "box",
      dimension: [39, 47, 5],
      texture : 'textures/portal.jpg',
      position: [-27, 10, -100]
    })

    //DEFENSE NORD

    let brickNorth = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [55, 18, 105]
    })

    let brickNorth2 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [40, 18, 105]
    })

    let brickNorth3 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [25, 18, 105]
    })

    let brickNorth4 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [10, 18, 105]
    })

    let brickNorth5 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-5, 18, 105]
    })

    let brickNorth6 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-20, 18, 105]
    })

    let brickNorth7 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-35, 18, 105]
    })

    let brickNorth8 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-50, 18, 105]
    })

    let brickNorth9 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-65, 18, 105]
    })

    let brickNorth10 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-80, 18, 105]
    })

    let brickNorth11 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-95, 18, 105]
    })

    let brickNorth12 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-110, 18, 105]
    })

    //DEFENSE EST

    let brickEast = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, 65]
    })

    let brickEast2 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, 50]
    })

    let brickEast3 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, 35]
    })

    let brickEast4 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, 20]
    })

    let brickEast5 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, 5]
    })

    let brickEast6 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -10]
    })

    let brickEast7 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -25]
    })

    let brickEast8 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -40]
    })

    let brickEast9 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -55]
    })

    let brickEast10 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -70]
    })

    let brickEast11 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -85]
    })

    let brickEast12 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-155, 18, -100]
    })

    //DEFENSE OUEST

    let brickWest = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, 65]
    })

    let brickWest2 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, 50]
    })

    let brickWest3 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, 35]
    })

    let brickWest4 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, 20]
    })

    let brickWest5 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, 5]
    })

    let brickWest6 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -10]
    })

    let brickWest7 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -25]
    })

    let brickWest8 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -40]
    })

    let brickWest9 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -55]
    })

    let brickWest10 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -70]
    })

    let brickWest11 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -85]
    })

    let brickWest12 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [95, 18, -100]
    })

    //DEFENSE SUD

    let brickSouth = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [60, 18, -105]
    })

    let brickSouth2 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [47, 18, -105]
    })

    let brickSouth3 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [34, 18, -105]
    })

    let brickSouth4 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-89, 18, -105]
    })

    let brickSouth5 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-102, 18, -105]
    })

    let brickSouth6 = MeshGenerator({
      type: "box",
      dimension: [8, 8, 8],
      texture : 'textures/brick.png',
      position: [-115, 18, -105]
    })

    bricks.push(brickNorth);
    bricks.push(brickNorth2);
    bricks.push(brickNorth3);
    bricks.push(brickNorth4);
    bricks.push(brickNorth5);
    bricks.push(brickNorth6);
    bricks.push(brickNorth7);
    bricks.push(brickNorth8);
    bricks.push(brickNorth9);
    bricks.push(brickNorth10);
    bricks.push(brickNorth11);
    bricks.push(brickNorth12);

    bricks.push(brickEast);
    bricks.push(brickEast2);
    bricks.push(brickEast3);
    bricks.push(brickEast4);
    bricks.push(brickEast5);
    bricks.push(brickEast6);
    bricks.push(brickEast7);
    bricks.push(brickEast8);
    bricks.push(brickEast9);
    bricks.push(brickEast10);
    bricks.push(brickEast11);
    bricks.push(brickEast12);

    bricks.push(brickWest);
    bricks.push(brickWest2);
    bricks.push(brickWest3);
    bricks.push(brickWest4);
    bricks.push(brickWest5);
    bricks.push(brickWest6);
    bricks.push(brickWest7);
    bricks.push(brickWest8);
    bricks.push(brickWest9);
    bricks.push(brickWest10);
    bricks.push(brickWest11);
    bricks.push(brickWest12);

    bricks.push(brickSouth);
    bricks.push(brickSouth2);
    bricks.push(brickSouth3);
    bricks.push(brickSouth4);
    bricks.push(brickSouth5);
    bricks.push(brickSouth6);




    scene.add( moon );

    scene.add( ...walls );// les trois petits points désignent tous les élément de walls
    scene.add( ...towers );
    scene.add( ...bricks );
    scene.add( ...roofs );
    scene.add( ...roofs );
    scene.add( portal );






    // for (var i = 0; i < 2000; i++) {
  	// 	let rain = MeshGenerator({
  	// 		type: 'cylinder',
  	// 		dimension: [getRandomArbitrary(0, 1), 1],
  	// 		color: '#2196f3',
  	// 		position: [getRandomArbitrary(-1000, 1000), getRandomArbitrary(0, 900), getRandomArbitrary(-1000, 1000)]
  	// 	})
    //
  	// 	rain.speed = 3 * Math.random();
    //
  	// 	drops.push(rain); //Implémente rain dans le tableau drops
  	// }
    //
  	// scene.add(...drops);

    camera.position.z = -600;

    //Contrôle de la camera avec la souris
    controls = new OrbitControls( camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 1000;

}

function animate(){
  requestAnimationFrame(animate);

      renderer.render(scene, camera);
}

//Générateur d'objet
function MeshGenerator(obj) {

    let geometry, texture, color, material, mesh;

    switch (obj.type.toLowerCase()) {
        case 'box':
            geometry = new THREE.BoxBufferGeometry(...obj.dimension);
            break;
        case 'sphere':
            geometry = new THREE.SphereBufferGeometry(...obj.dimension)
            break;
        case 'cone':
            geometry = new THREE.ConeBufferGeometry(...obj.dimension)
        break;
        case 'cylinder':
            geometry = new THREE.CylinderBufferGeometry(...obj.dimension)
        break;
}
        if(typeof obj.texture !== 'undefined'){
            texture = new THREE.TextureLoader().load( obj.texture );
            material = new THREE.MeshBasicMaterial({ map: texture  });
        }
        else if(typeof obj.color !== 'undefined'){
            material = new THREE.MeshBasicMaterial({
                color: obj.color
            })
        }
        else {
            material = new THREE.MeshBasicMaterial();
        }


        mesh = new THREE.Mesh(geometry, material);

        if(typeof obj.rotation !== 'undefined'){

            mesh.rotation.x = (obj.rotation[0]) * Math.PI/180;
            mesh.rotation.y = (obj.rotation[1]) * Math.PI/180;
            mesh.rotation.z = (obj.rotation[2]) * Math.PI/180;
        }

        if(typeof obj.position !== 'undefined'){
            mesh.position.set(...obj.position);
        }

        return mesh;
}
