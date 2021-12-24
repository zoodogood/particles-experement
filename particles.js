const
  PARTICLES_COUNT = 70;


class Scene {
  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.ctx = this.canvas.getContext("2d");
  }

}


class Particle {

}
