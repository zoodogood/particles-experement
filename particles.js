const
  PARTICLES_COUNT = 70;


class Scene {
  #myFrame;
  
  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    this.#setSize( this.canvas.offsetWidth, this.canvas.offsetHeight );
    
    this.ctx = this.canvas.getContext("2d");
    this.init();
  }
  
  
  init(){
    this.#myFrame = this.#frame.bind(this, this.canvas.width, this.canvas.height);
    this.#myFrame();
  }
  
  
  #setSize(width, height){
    this.canvas.width  = width;
    this.canvas.height = height;
  }
  
  
  #frame(width, height, i = 0){
   let ctx = this.ctx;
   ctx.clearRect(0, 0, width, height);
   console.log(width, height);
   ctx.rect(40 + Math.sin(i) * this.canvas.width, 40, 70, 70);
   ctx.fill();
   ctx.clearRect(0, 0, width, height);
   window.requestAnimationFrame( () => this.#myFrame(++i), this.canvas ); 
  }
  
  
  #resizeHandler(){

  }
}


class Particle {

}
