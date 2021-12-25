const
  PARTICLES_COUNT = 70;


class Scene {
  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.ctx = this.canvas.getContext("2d");
    this.init();
  }
  
  
  init(){
    this.#frame();
  }
  
  
  #frame(){
   let ctx = this.ctx;
   ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
   ctx.rect(40, 40, 70, 70);
   ctx.fill();
   window.requestAnimationFrame( this.#frame ); 
  }
}


class Particle {

}
