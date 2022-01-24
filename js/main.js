const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100);

camera.position.set(-6.3, 3.1, 9.3);
camera.lookAt( scene.position );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 0xe6e6e6 ) );
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// render created scene
renderer.render( scene, camera );
const controls = new THREE.OrbitControls( camera, renderer.domElement );

// COMMENT LINE BELOW TO ENABLE ORBITCONTROLS
//controls.enabled = false;

var animateSnow = function() {};

function animate() 
{
  requestAnimationFrame( animate );
  controls.update();
  animateSnow();
  renderer.render( scene, camera );
}
animate();

// redraw in case of window's size change
window.addEventListener(
  'resize',
  function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
  },
  false
);
