//Desk
const desk_leg_sketch = new THREE.BoxGeometry(1.5, 2.5, 0.1);
const desk_texture = new THREE.TextureLoader().load('textures/desk1.jpg');
const desk_material = new THREE.MeshStandardMaterial( {color: 0x6e4a47, side: THREE.DoubleSide, map: desk_texture});
const desk_leg_left = new THREE.Mesh(desk_leg_sketch, desk_material);

desk_leg_left.position.set(6.15, -2.25, -5);
const desk_leg_middle = desk_leg_left.clone();
desk_leg_middle.position.set(6.15, -2.25, -2.5);
const desk_leg_right = desk_leg_left.clone();
desk_leg_right.position.set(6.15, -2.25, -1.0);

const desk_top_sketch = new THREE.BoxGeometry(1.7, 4.5, 0.2);
const desk_top = new THREE.Mesh(desk_top_sketch, desk_material);
desk_top.rotateX(Math.PI/2);
desk_top.position.set(6.14, -1, -3);

const desk_shelf_sketch = new THREE.BoxGeometry(1, 2.5, 0.05);
const desk_shelf = new THREE.Mesh(desk_shelf_sketch, desk_material);
desk_shelf.rotateX(Math.PI/2);
desk_shelf.position.set(6.14, -1.6, -3.7);

const desk_door_sketch = new THREE.BoxGeometry(1.5, 2.25, 0.1);
const desk_door = new THREE.Mesh(desk_door_sketch, desk_material);
desk_door.rotateY(Math.PI/2);
desk_door.position.set(5.35, -2.27, -1.75);

const desk_door_handle_sketch = new THREE.CylinderGeometry(0.15, 0.1, 0.15, 5);
const desk_door_handle_texture = new THREE.TextureLoader().load('textures/desk.jpg');
const desk_door_handle = new THREE.Mesh(desk_door_handle_sketch, new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map: desk_door_handle_texture}));
desk_door_handle.rotateZ(Math.PI/2);
desk_door_handle.position.set(5.3, -1.7, -2);

const desk = new THREE.Group();
desk.add(desk_leg_left);
desk_leg_left.castShadow = true;
desk.add(desk_leg_middle);
desk_leg_middle.castShadow = true;
desk.add(desk_leg_right);
desk_leg_right.castShadow = true;
desk.add(desk_top);
desk_top.castShadow = true;
desk.add(desk_shelf);
desk_shelf.castShadow = true;
desk.add(desk_door);
desk_door.castShadow = true;
desk.add(desk_door_handle);
desk_door_handle.castShadow = true;

//Desk lamp
const desk_lamp_stand_sketch = new THREE.CylinderGeometry(0.3, 0.3, 0.1);
const desk_lamp_material = new THREE.MeshStandardMaterial({color: 0x3b5935, side: THREE.DoubleSide});
const desk_lamp_stand = new THREE.Mesh(desk_lamp_stand_sketch, desk_lamp_material);
desk_lamp_stand.position.set(6.5, -0.9, -1.5);
const desk_lampshade_sketch = new THREE.SphereGeometry(0.5, 20, 5, 0, Math.PI*2, 0, 1.5);
const desk_lampshade = new THREE.Mesh(desk_lampshade_sketch, desk_lamp_material);
desk_lampshade.position.set(6.4, 0, -1.65);
desk_lampshade.rotateX(Math.PI/10);
desk_lampshade.rotateZ(-Math.PI/10);
const desk_lamp_stick_sketch = new THREE.CylinderGeometry( 0.03, 0.03, 1.5);
const desk_lamp_stick_material = new THREE.MeshStandardMaterial({color: 0xc8c9c7, side: THREE.DoubleSide});
const desk_lamp_stick = new THREE.Mesh(desk_lamp_stick_sketch, desk_lamp_stick_material);
desk_lamp_stick.position.set(6.5, -0.5, -1.5);
const desk_lamp_bulb_material = new THREE.MeshBasicMaterial({color: 0xdff0a1, side: THREE.DoubleSide});
const desk_lamp_bulb = new THREE.Mesh(ceiling_lamp_bulb_sketch, desk_lamp_bulb_material);
desk_lamp_bulb.position.set(6.45, 0.1, -1.6);

const desk_lamp = new THREE.Group();
desk_lamp.add(desk_lamp_stand);
desk_lamp_stand.castShadow = true;
desk_lamp.add(desk_lamp_stick);
desk_lamp_stick.castShadow = true;
desk_lamp.add(desk_lampshade);
desk_lampshade.castShadow = true;
desk_lamp.add(desk_lamp_bulb);

const deskLight = new THREE.SpotLight( {color:0xfce803, distance: 5} );
const targetObject = new THREE.Object3D();
targetObject.position.set(4, -3, -2);
scene.add(targetObject);

deskLight.position.set( 6.45, 0.1, -1.6 );
deskLight.castShadow=true;

scene.add( deskLight );
deskLight.target = targetObject;

scene.add(desk);
scene.add(desk_lamp);

renderer.render( scene, camera );