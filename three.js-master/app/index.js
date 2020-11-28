import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
let camera, scene, renderer, controls;

const fieldOfView = 75;
const aspect = window.innerWidth / window.innerHeight;
const nearClip = 0.1;
const farClip = 20000;
 let towers = [];
 let walls = [];
 let bricks = [];
 let roofs = [];
 let plane = [];
 let drops = [];
 let board = [];

  init();
  animate();


  // Cette fonction permet de générer un nombre aléatoire
  function getRandomArbitrary(min, max) {
      return  Math.ceil(Math.random() * (max - min) + min);
  }

  function init() {
    // SCENE
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181B3C);
    // CAMERA
    camera = new THREE.PerspectiveCamera(fieldOfView, aspect, nearClip, farClip)
    // RENDU
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // Taille du rendu sur l'ecran
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Rendu du canvas
    document.body.appendChild(renderer.domElement);

    // Lumière ambiante
    const ambient = new THREE.AmbientLight( 0xffffff, 0.4 );
		scene.add( ambient );

    // Terre
	  let earth = MeshGenerator({
		  type : 'sphere',
		  dimension : [750, 750, 750],
		  texture : 'textures/planenis.jpeg',
		  position : [-35, -750, 0],
		  rotation : [100, 50, -110]
	  })
	  plane.push(earth);

  	// VLADI
	  let vladimir = MeshGenerator({
		  type : "box",
		  dimension : [100, 50, 10],
		  texture : 'textures/poutine.png',
		  position : [100, 20, -150],
		  rotation : [0, 20, -17]
	  })
	  let vladimirCone = MeshGenerator({
		  type: "cylinder",
		  dimension: [4, 4, 60, 30],
		  texture : 'textures/wood.jpg',
		  position : [100, 0, -150],
		  rotation : [0, 20, -17]
	  })
	  board.push(vladimir);
	  board.push(vladimirCone);

    // MURS

    let moon = MeshGenerator({
	 type : 'sphere',
	 dimension : [187, 187, 187],
	 texture : 'textures/moon.jpg',
	 position: [-200, 400, 2000]
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
      position: [-70, 10, -100]
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
      position: [-70, 50, -100]
    })
    let roofSouthWest = MeshGenerator({
      type : "cone",
      dimension : [20, 30, 30],
      texture : 'textures/toit.jpg',
      position: [10, 50, -100]
    })
    let roofInnerSouthWest = MeshGenerator({
      type : "cone",
      dimension : [22, 30, 30],
      texture : 'textures/toit.jpg',
      position: [40, 50, -40]
    })
    let roofInnerSouthEast = MeshGenerator({
      type : "cone",
      dimension : [22, 30, 30],
      texture : 'textures/toit.jpg',
      position: [-95, 50, -40]
    })
    let roofInnerNorthWest = MeshGenerator({
      type : "cone",
      dimension : [22, 30, 30],
      texture : 'textures/toit.jpg',
      position: [40, 50, 55]
    })
    let roofInnerNorthEast = MeshGenerator({
      type : "cone",
      dimension : [22, 30, 30],
      texture : 'textures/toit.jpg',
      position: [-95, 50, 55]
    })

    roofs.push(roofSouthEast);
    roofs.push(roofSouthWest);
    roofs.push(roofInnerSouthWest);
    roofs.push(roofInnerSouthEast);
    roofs.push(roofInnerNorthWest);
    roofs.push(roofInnerNorthEast);

    //château
    let castle = MeshGenerator({
      type : "cylinder",
      dimension : [40, 40, 80, 50],
      texture : "textures/brick.png",
      position : [-27, 20, 0]
    })

    towers.push(castle);

    //Toit Château
    let roofCastle = MeshGenerator({
      type : "cone",
      dimension : [50, 50, 50],
      texture : "textures/toit.jpg",
      position : [-27, 80, 0]
    })

    roofs.push(roofCastle);

    //PORTAIL
    let portal = MeshGenerator({
      type : "box",
      dimension: [50, 47, 5],
      texture : 'textures/portal.jpg',
      position: [-27, 10, -100]
    })

    //DEFENSE NORD
    let posXBrickNorth = 55;
    for(let i = 0; i < 12; i++)
    {
        bricks[i] = MeshGenerator({
        type: "box",
        dimension: [8, 8, 8],
        texture : 'textures/brick.png',
        position: [posXBrickNorth, 18, 105]
      })
      posXBrickNorth = posXBrickNorth -15;
    }

    //DEFENSE EST
    let posZBrickEast  = 65;
    for(let i = 12; i < 24; i++)
    {
        bricks[i] = MeshGenerator({
        type: "box",
        dimension: [8, 8, 8],
        texture : 'textures/brick.png',
        position: [-155, 18, posZBrickEast]
      })
      posZBrickEast = posZBrickEast - 15;
    }

    //DEFENSE OUEST
    let posZBrickWest = 65;
    for(let i = 24; i < 36; i++)
    {
        bricks[i] = MeshGenerator({
        type: "box",
        dimension: [8, 8, 8],
        texture : 'textures/brick.png',
        position: [95, 18, posZBrickWest]
      })
      posZBrickWest = posZBrickWest - 15;
    }

    //DEFENSE SUD
    let posXBrickSouth = 60;
    for(let i = 36; i < 42; i++)
    {
        if(i == 39)
        {
          posXBrickSouth = -89;
        }
        bricks[i] = MeshGenerator({
        type: "box",
        dimension: [8, 8, 8],
        texture : 'textures/brick.png',
        position: [posXBrickSouth, 18, -105]
      })
      posXBrickSouth = posXBrickSouth - 13;
    }



    // Tours du fort

    let innerWallTowerSouthWest = MeshGenerator({
      type: "cylinder",
      dimension: [20, 20, 50, 30],
      texture : 'textures/brick.png',
      position: [40, 10, -40]
    })

    let innerWallTowerSouthEast = MeshGenerator({
      type: "cylinder",
      dimension: [20, 20, 50, 30],
      texture : 'textures/brick.png',
      position: [-95, 10, -40]
    })

    let innerWallTowerNorthEast = MeshGenerator({
      type: "cylinder",
      dimension: [20, 20, 50, 30],
      texture : 'textures/brick.png',
      position: [-95, 10, 55]
    })

    let innerWallTowerNorthWest = MeshGenerator({
      type: "cylinder",
      dimension: [20, 20, 50, 30],
      texture : 'textures/brick.png',
      position: [40, 10, 55]
    })


    towers.push(innerWallTowerSouthWest);
    towers.push(innerWallTowerSouthEast);
    towers.push(innerWallTowerNorthEast);
    towers.push(innerWallTowerNorthWest);

    // Château intérieur

    let innerWallNorth = MeshGenerator({
      type : "box",
      dimension : [150, 20, 20],
      texture : 'textures/brick.png',
      position: [-30, 0, 60]
    })


    let innerWallEast = MeshGenerator({
      type : "box",
      dimension : [120, 20, 20],
      texture : 'textures/brick.png',
      position: [-95, 0, 10],
      rotation: [90, 0, 90]
    })


    let innerWallWest = MeshGenerator({
      type : "box",
      dimension : [120, 20, 20],
      texture : 'textures/brick.png',
      position: [40, 0, 10],
      rotation: [90, 0, 90]
    })

    let innerWallSouthEast = MeshGenerator({
      type : "box",
      dimension : [50, 20, 20],
      texture : 'textures/brick.png',
      position: [-80, 0, -40]
    })

    let innerWallSouthWest = MeshGenerator({
      type : "box",
      dimension : [50, 20, 20],
      texture : 'textures/brick.png',
      position: [25, 0, -40]
    })

    walls.push(innerWallNorth);
    walls.push(innerWallEast);
    walls.push(innerWallWest);
    walls.push(innerWallSouthEast);
    walls.push(innerWallSouthWest);

    scene.add( moon );

    scene.add( ...walls );// les trois petits points désignent tous les élément de walls
    scene.add( ...towers );
    scene.add( ...bricks );
    scene.add( ...roofs );
    scene.add( portal );

    scene.add( ...plane );
    scene.add( ...board );

    for (let i = 0; i < 8000; i++) {
  	 	let stars = MeshGenerator({
  	 		type: 'cylinder',
  	 		dimension: [getRandomArbitrary(0, 1), 1],
  	 		color: '#2196f3',
  	 		position: [getRandomArbitrary(-2000, 2000), getRandomArbitrary(-2000, 2000), getRandomArbitrary(-2000, 2000)]
  	 	})

  	 	drops.push(stars); //Implémente rain dans le tableau drops
  	 }

  	 scene.add(...drops);



    camera.position.x = 0;
    camera.position.y = 500;
    camera.position.z = -500;

    //Contrôle de la camera avec la souris
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 10000;

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
		case 'plane' :
			geometry = new  THREE.PlaneBufferGeometry(...obj.dimension)
		break;
		case 'circle' :
			geometry = new  THREE.CircleBufferGeometry(...obj.dimension)
		break;
}
        if(typeof obj.texture !== 'undefined'){
            texture = new THREE.TextureLoader().load( obj.texture );
            material = new THREE.MeshPhongMaterial({ map: texture  });
        }
        else if(typeof obj.color !== 'undefined'){
            material = new THREE.MeshPhongMaterial({
                color: obj.color
            })
        }
        else {
            material = new THREE.MeshPhongMaterial();
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
