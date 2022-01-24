//Bed
const bed_leg_sketch = new THREE.BoxGeometry(5, 1.5, 0.1);
const bed_leg_rear = new THREE.Mesh(bed_leg_sketch, desk_material);
bed_leg_rear.position.x = -4.4;
bed_leg_rear.position.y = -2.8;
bed_leg_rear.position.z = -5.5;
bed_leg_rear.castShadow = true;
const bed_leg_front = bed_leg_rear.clone();
bed_leg_front.position.z = 1.5;
bed_leg_front.castShadow = true;
const bed_side_sketch = new THREE.BoxGeometry(0.1, 0.5, 7);
const bed_side_left = new THREE.Mesh(bed_side_sketch, desk_material);
bed_side_left.position.x = -6.7;
bed_side_left.position.y = -3;
bed_side_left.position.z = -2;
bed_side_left.castShadow = true;
const bed_side_right = bed_side_left.clone();
bed_side_right.position.x = -2.1;
bed_side_right.castShadow = true;

//Mattress and duvet
const mattress_sketch = new THREE.BoxGeometry(4.6, 0.7, 7);
const mattress_texture = new THREE.TextureLoader().load('textures/mattress.jpg');
const mattress_material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide, map: mattress_texture});
const mattress = new THREE.Mesh(mattress_sketch, mattress_material);
mattress.position.x = -4.4;
mattress.position.y = -2.7;
mattress.position.z = -2;
mattress.castShadow = true;
const duvet_sketch = new THREE.BoxGeometry(4.4, 0.1, 6.5);
const duvet_texture = new THREE.TextureLoader().load('textures/duvet.jpg');
const duvet_material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide, map: duvet_texture});
const duvet = new THREE.Mesh(duvet_sketch, duvet_material);
duvet.position.x = -4.4;
duvet.position.y = -2.3;
duvet.position.z = -2;
duvet.castShadow = true;
const pillow_sketch = new THREE.BoxGeometry(1.7, 0.2, 1.2);
const pillow_texture = new THREE.TextureLoader().load('textures/pillow.jpg');
const pillow_material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide, map: pillow_texture});
const pillow_left = new THREE.Mesh(pillow_sketch, pillow_material);
pillow_left.position.x = -5.5;
pillow_left.position.y = -2.2;
pillow_left.position.z = -4.7;
pillow_left.castShadow = true;
const pillow_right = pillow_left.clone();
pillow_right.position.x = -3.5;
pillow_right.castShadow = true;

const bed = new THREE.Group();
bed.add(bed_leg_rear);
bed.add(bed_leg_front);
bed.add(bed_side_left);
bed.add(bed_side_right);
bed.add(mattress);
bed.add(duvet);
bed.add(pillow_left);
bed.add(pillow_right);

scene.add(bed);
renderer.render( scene, camera );