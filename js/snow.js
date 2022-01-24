const snow_sketch = new THREE.SphereGeometry( 0.05, 5, 5 );
const snow_material = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
// const snow= new THREE.Mesh(snow_sketch, snow_material);
// snow.position.set(3.5, 2.8, -11);
// snow.castShadow = true;
// scene.add(snow);

//Snow
var snow_amount = 100;
var snow = new Array();
for(var i=0; i<snow_amount; i++) {
    snow.push(new THREE.Mesh(snow_sketch, snow_material));
    snow.at(-1).castShadow = true;
    snow.at(-1).position.set((((Math.random()*5)-1.5)), ((Math.random()*4) - 1.4), Math.random()-11.1);
    scene.add(snow.at(-1));
    
}
var animateSnow = function() {
    for(var i=0; i<snow_amount; i++) {
        if(snow[i].position.y > -1.4) {
          snow[i].position.y -= 0.01;
        }
        else {
          snow[i].position.y = 2.7 + (Math.random()%0.2);
        }
      }
}