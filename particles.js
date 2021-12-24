const
  PARTICLES_COUNT = 70;


class Scene {
  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    console.log(321);
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    console.log(this.canvas);
    
    this.ctx = this.canvas.getContext("2d");
  }

}


class Particle {

}
