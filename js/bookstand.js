const bookstand_leg_sketch = new THREE.BoxGeometry(0.1, 6, 1);
//desk.js -> desk_texture + desk_material
const bookstand_leg_left = new THREE.Mesh(bookstand_leg_sketch, desk_material);
const bookstand_leg_right = new THREE.Mesh(bookstand_leg_sketch, desk_material);

const bookstand_door_sketch = new THREE.BoxGeometry(1.5, 1.5, 0.1);
const bookstand_door_left = new THREE.Mesh(bookstand_door_sketch, desk_material);
bookstand_leg_left.position.set(-6.7, -0.5, -9.45);
bookstand_leg_right.position.set(-3.7, -0.5, -9.45);
bookstand_door_left.position.set(-6, -2.8, -8.9);
const bookstand_door_right = bookstand_door_left.clone();
bookstand_door_right.position.x = -4.49;
//desk.js -> desk_door_handle
const bookstand_door_left_handle = new THREE.Mesh(desk_door_handle_sketch, new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, map: desk_door_handle_texture}));
bookstand_door_left_handle.rotateX(Math.PI/2);
bookstand_door_left_handle.position.set(-4.9, -2.3, -8.8);
const bookstand_door_right_handle = bookstand_door_left_handle.clone();
bookstand_door_right_handle.position.x = -5.6;
const bookstand = new THREE.Group();
const bookstand_shelf_sketch = new THREE.BoxGeometry(3.1, 0.1, 1);
var bookstand_shelf = new Array(4);
var distance = 2.5;
for(var i=0;i<4;i++) {
    bookstand_shelf[i]= new THREE.Mesh(bookstand_shelf_sketch, desk_material);
    bookstand_shelf[i].position.set(-5.2, distance, -9.45);
    distance -= 1.5;
    bookstand.add(bookstand_shelf[i]);
    bookstand_shelf[i].castShadow = true;
}
bookstand.add(bookstand_leg_left);
bookstand_leg_left.castShadow = true;
bookstand.add(bookstand_leg_right);
bookstand_leg_left.castShadow = true;
bookstand.add(bookstand_door_left);
bookstand_door_left.castShadow = true;
bookstand.add(bookstand_door_right);
bookstand_door_right.castShadow = true;
bookstand.add(bookstand_door_left_handle);
bookstand_door_left_handle.castShadow = true;
bookstand.add(bookstand_door_right_handle);
bookstand_door_right_handle.castShadow = true;

//Books
var books = new Array();
for(var level=-1.45; level<=1.55; level+=1.5) {
    var x_position=-6.6;
    while(true) {
        books.push(new THREE.Mesh(new THREE.BoxGeometry(0.1, 1, 0.5), new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, color: Math.random() *0xffffff})));
        books.at(-1).position.set(x_position, level, -9.5);
        books.at(-1).castShadow = true;
        books.at(-1).receiveShadow = true;
        scene.add(books.at(-1));
        if(books.at(-1).position.x >= -3.9) break;
        x_position += 0.12;
    }
}
scene.add(bookstand);
renderer.render( scene, camera );