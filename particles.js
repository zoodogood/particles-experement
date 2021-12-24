const
  PARTICLES_COUNT = 70;


class Scene {
  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    
    this.canvas.width  = `${ window.innerWidth  }px`;
    this.canvas.height = `${ window.innerHeight }px`;
    console.log(this.canvas);
    
    this.ctx = this.canvas.getContext("2d");
  }

}


class Particle {

}
