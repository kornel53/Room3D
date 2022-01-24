//Overlay - steering
var steer_up = document.getElementById("steer-up");
steer_up.addEventListener('click', function() {
    if(controls.target.y < 3) {
        controls.target.y +=0.2;
    }
});
var steer_down = document.getElementById("steer-down");
steer_down.addEventListener('click', function() {
    if(controls.target.y > -3) {
        controls.target.y -=0.2;
    }
});
var steer_left = document.getElementById("steer-left");
steer_left.addEventListener('click', function() {
    if(controls.target.z > -5) {
        controls.target.z -=0.2;
    }
});
var steer_right = document.getElementById("steer-right");
steer_right.addEventListener('click', function() {
    if(controls.target.z < 5) {
        controls.target.z +=0.2;
    }
});
var steer_center = document.getElementById("steer-center");
steer_center.addEventListener('click', function() {
    controls.target.set(0, 0, 0);
    camera.position.set(-6.3, 3.1, 9.3);
});

//Overlay - lights
var outside_light = document.getElementById("outside-lamp");
outside_light.addEventListener('change', function() {
    if(this.checked) {
        renderer.setClearColor( new THREE.Color( 0xe6e6e6 ) );
        scene.add(outsideLight);
    }
    else {
        renderer.setClearColor( new THREE.Color( 0x000000) );
        scene.remove(outsideLight);
    }
});
var ceiling_light = document.getElementById("ceiling-lamp");
ceiling_light.addEventListener('change', function() {
    if(this.checked) {
        ceiling_lamp_bulb.material.color.setHex( 0xdff0a1 );
        scene.add(ceilingLight);
    }
    else {
    ceiling_lamp_bulb.material.color.setHex( 0x000000 );
    scene.remove(ceilingLight);
    }
});
var desk_light = document.getElementById("desk-lamp");
desk_light.addEventListener('change', function() {
    if(this.checked) {
        desk_lamp_bulb.material.color.setHex( 0xdff0a1 );
        scene.add(deskLight);
    }
    else {
        desk_lamp_bulb.material.color.setHex( 0x000000 );
        scene.remove(deskLight);
    }
});