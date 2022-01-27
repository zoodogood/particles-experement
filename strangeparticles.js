const
  PARTICLES_COUNT = 500,
  CLONE_SIGNIFICANCE = 1;


class Scene {
  #myFrame;

  constructor( querySelector = "canvas" ){
    this.canvas = document.querySelector(querySelector);
    this.#setSize( this.canvas.offsetWidth, this.canvas.offsetHeight );

    this.ctx = this.canvas.getContext("2d");
    this.init();
  }


  init(){
    this.particles = [ ...new Array(PARTICLES_COUNT) ]
      .map((n, i) => new Particle({ context: this.ctx, i }));

    this.#myFrame = this.#frame.bind(this, this.canvas.width, this.canvas.height);
    this.#myFrame();
  }


  #setSize(width, height){
    this.canvas.width  = width;
    this.canvas.height = height;
  }


  #frame(width, height, i = 0){
   let ctx = this.ctx;
   this.ctx.beginPath();
   // this.ctx.clearRect(0, 0, width, height);

   this.particles.forEach( particle => particle.draw(i) );
   this.ctx.fill();
   window.requestAnimationFrame( () => this.#myFrame((i + 1) % 900), this.canvas );
  }


  #resizeHandler(){

  }
}


class Particle {
  constructor({context, i}){
    this.context = context;
    this.i       = i;
  }

  draw(iteration){
    let shift = 400 - 3.5;

    let angle = 0.2 * iteration + this.i * CLONE_SIGNIFICANCE;
    let x = angle * Math.cos(angle);
    let y = angle * Math.sin(angle);
    this.context.rect(x + shift, y + shift, 7, 7);
  }
}
