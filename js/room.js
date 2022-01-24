//Left, rear walls
const wall_sketch_longer = new THREE.PlaneGeometry(20, 7);
const wall_sketch_shorter = new THREE.PlaneGeometry(14, 7);
const wall_material = new THREE.MeshStandardMaterial({color: 0x6581c7,side: THREE.DoubleSide});

const wall_left = new THREE.Mesh(wall_sketch_longer, wall_material);
const wall_rear = new THREE.Mesh(wall_sketch_shorter, wall_material);

wall_left.position.set(-7, 0, 0);
wall_left.rotateY(Math.PI/2);
wall_rear.position.set(0, 0, 10);
wall_rear.rotateY(Math.PI);

wall_left.receiveShadow = true;
wall_rear.receiveShadow = true;

//Right wall (w/ doors)
const wall_sketch_right1 = new THREE.PlaneGeometry(15,7);
const wall_right1 = new THREE.Mesh(wall_sketch_right1, wall_material);
const wall_sketch_right2 = new THREE.PlaneGeometry(3,2);
const wall_right2 = new THREE.Mesh(wall_sketch_right2, wall_material);
const wall_sketch_right3 = new THREE.PlaneGeometry(2,7);
const wall_right3 = new THREE.Mesh(wall_sketch_right3, wall_material);
wall_right1.position.set(7, 0, -2.5);
wall_right2.position.set(7, 2.5, 6.5);
wall_right3.position.set(7, 0, 9);
wall_right1.rotateY(-Math.PI/2);
wall_right2.rotateY(-Math.PI/2);
wall_right3.rotateY(-Math.PI/2);
const wall_right = new THREE.Group();
wall_right.add(wall_right1);
wall_right.add(wall_right2);
wall_right.add(wall_right3);
wall_right1.receiveShadow = true;
wall_right2.receiveShadow = true;
wall_right3.receiveShadow = true;

//Front wall (w/ window)
const wall_sketch_front1 = new THREE.PlaneGeometry(7,7);
const wall_front1 = new THREE.Mesh(wall_sketch_front1, wall_material);
const wall_sketch_front2 = new THREE.PlaneGeometry(4,2);
const wall_front2 = new THREE.Mesh(wall_sketch_front2, wall_material);
const wall_sketch_front3 = new THREE.PlaneGeometry(4,1);
const wall_front3 = new THREE.Mesh(wall_sketch_front3, wall_material);
const wall_sketch_front4 = new THREE.PlaneGeometry(3,7);
const wall_front4 = new THREE.Mesh(wall_sketch_front4, wall_material);
wall_front1.position.set(-3.5, 0, -10);
wall_front2.position.set(2, -2.5, -10);
wall_front3.position.set(2, 3, -10);
wall_front4.position.set(5.5, 0, -10);
const wall_front = new THREE.Group();
wall_front.add(wall_front1);
wall_front.add(wall_front2);
wall_front.add(wall_front3);
wall_front.add(wall_front4);
wall_front1.castShadow = true;
wall_front2.castShadow = true;
wall_front3.castShadow = true;
wall_front4.castShadow = true;

//Behind-front wall
const wall_behind_material = new THREE.MeshStandardMaterial({color: 0x000000});
const wall_front_behind1 = new THREE.Mesh(wall_sketch_front1, wall_behind_material);
const wall_front_behind2 = new THREE.Mesh(wall_sketch_front2, wall_behind_material);
const wall_front_behind3 = new THREE.Mesh(wall_sketch_front3, wall_behind_material);
const wall_front_behind4 = new THREE.Mesh(wall_sketch_front4, wall_behind_material);
wall_front_behind1.position.set(-3.5, 0, -10.05);
wall_front_behind2.position.set(2, -2.5, -10.05);
wall_front_behind3.position.set(2, 3, -10.05);
wall_front_behind4.position.set(5.5, 0, -10.05);
scene.add(wall_front_behind1);
scene.add(wall_front_behind2);
scene.add(wall_front_behind3);
scene.add(wall_front_behind4);
wall_front_behind1.castShadow = true;
wall_front_behind2.castShadow = true;
wall_front_behind3.castShadow = true;
wall_front_behind4.castShadow = true;

//Floor, ceiling
var floor_texture = new THREE.TextureLoader().load('textures/floor.jpg')
const floor_sketch = new THREE.PlaneGeometry(14, 20);
const floor_material = new THREE.MeshStandardMaterial({color: 0xfae9bb, map: floor_texture});
const ceiling_material = new THREE.MeshStandardMaterial({color: 0xb5b5b5});
const floor = new THREE.Mesh(floor_sketch, floor_material);
const ceiling = new THREE.Mesh(floor_sketch, ceiling_material);
floor.receiveShadow = true;
ceiling.receiveShadow = true;

floor.rotateX(-Math.PI/2);
floor.position.set(0, -3.5, 0);
ceiling.rotateX(Math.PI/2);
ceiling.position.set(0, 3.5, 0);

//Door
const door_sketch = new THREE.PlaneGeometry(3, 5);
const door_texture = new THREE.TextureLoader().load('textures/door.png');
const door_material = new THREE.MeshStandardMaterial({color: 0x593c3c, map: door_texture, side: THREE.DoubleSide});
const door = new THREE.Mesh(door_sketch, door_material);
door.position.set(7, -1, 6.5);
door.rotateY(Math.PI/2);
door.receiveShadow = true;

//Window
const window_sketch_frame = new THREE.PlaneGeometry(0.3, 4);
const window_material = new THREE.MeshStandardMaterial({color: 0xb3b3b3, side: THREE.DoubleSide});
const window_frame1 = new THREE.Mesh(window_sketch_frame, window_material);
window_frame1.position.set(0.15, 0.5, -10);
const window_frame2 = window_frame1.clone();
window_frame2.position.set(3.85, 0.5, -10);
const window_frame3 = window_frame1.clone();
window_frame3.rotateZ(Math.PI/2);
window_frame3.position.set(2, 2.35, -10);
const window_frame4 = window_frame3.clone();
window_frame4.position.set(2, -1.35, -10);
const window_sketch_inframe = new THREE.PlaneGeometry(0.1, 4);
const window_inframe1 = new THREE.Mesh(window_sketch_inframe, window_material);
window_inframe1.position.set(2, 0.5, -10);
const window_inframe2 = window_inframe1.clone();
window_inframe2.rotateZ(Math.PI/2);
window_inframe2.position.set(2, 1, -10);
const windows = new THREE.Group();
windows.add(window_frame1);
windows.add(window_frame2);
windows.add(window_frame3);
windows.add(window_frame4);
windows.add(window_inframe1);
windows.add(window_inframe2);
window_frame1.castShadow = true;
window_frame2.casthadow = true;
window_frame3.castShadow = true;
window_frame4.castShadow = true;
window_inframe1.castShadow = true;
window_inframe2.castShadow = true;

//Ceiling lamp
const ceiling_lamp_stick_sketch = new THREE.CylinderGeometry( 0.02, 0.02, 1);
const ceiling_lamp_stick_material = new THREE.MeshStandardMaterial({color: 0x454545, side: THREE.DoubleSide});
const ceiling_lamp_stick = new THREE.Mesh(ceiling_lamp_stick_sketch, ceiling_lamp_stick_material);
ceiling_lamp_stick.position.set(0, 3, 0);
const ceiling_lamp_bulb_sketch = new THREE.SphereGeometry( 0.1, 10, 10 );
const ceiling_lamp_bulb_material = new THREE.MeshBasicMaterial({color: 0xdff0a1, side: THREE.DoubleSide});
const ceiling_lamp_bulb = new THREE.Mesh(ceiling_lamp_bulb_sketch, ceiling_lamp_bulb_material);
ceiling_lamp_bulb.position.set(0, 2.5, 0);
ceiling_lamp_bulb.castShadow = true;
const ceilingLight = new THREE.PointLight( {color:0xF1DAA4, distance: 10, angle: Math.PI*2} );
ceilingLight.position.set( 0, 2.5, 0 );
ceilingLight.castShadow=true;
scene.add( ceilingLight );


const outsideLight = new THREE.PointLight( {color:0xe6e6e6, distance: 50, angle: Math.PI/6} );
outsideLight.position.set( -6, 1, -20 );
outsideLight.castShadow=true;
scene.add( outsideLight );

scene.add(ceiling_lamp_bulb);
scene.add(ceiling_lamp_stick);

scene.add(wall_front);
scene.add(wall_left);
scene.add(wall_right);
scene.add(wall_rear);
scene.add(floor);
scene.add(ceiling);
scene.add(windows);
scene.add(door);
renderer.render( scene, camera );