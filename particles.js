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
    this.particles = [ ...new Array(PARTICLES_COUNT) ].map((n, i) => new Particle({context: this.ctx, i}));
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
   this.ctx.clearRect(0, 0, width, height);

   this.particles.forEach( particle => particle.draw(i) );
   this.ctx.fill();
   window.requestAnimationFrame( () => this.#myFrame(i + 1), this.canvas );
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
    iteration += this.i;

    let x = Math.abs(Math.sin(iteration)) * 800;
    let y = Math.abs(Math.sin(iteration / 15)) * 800;
    this.context.rect(x, y, 35, 35);
  }
}
