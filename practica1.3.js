//1. Tamaño de ventana
function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
  
    this.resize = function(newWidth, newHeight){
      this.width = newWidth;
      this.height = newHeight;
       };
  }
  
    //Instancias
  const Size1 =  new Size(); //Valores iniciales
  Size1.resize(90, 70);//Valores actuales
  
    console.log(`Ancho:${Size1.width}, Largo: ${Size1.height}`);
  
  
  //2. Position
  function Position(x =0,y =0){
    if (x>=0 && y<=0  ){ //esquina superior izquierda
    this.x = x;
    this.y = y;
    };
  
    this.move = function(newX, newY){
      this.x = newX;
      this.y = newY;
    };
  }
  //Instancia
  const Position1 = new Position(10,-10);
  console.log(`Las coordendas son: ${Position1.x}, ${Position1.y}`);
  
  
  //3. Definir ProgramWindow
  class ProgramWindow {
    constructor (){
      this.screenSize = new screenSize();
      this.size = new Size();
      this.position= new Position;
    }
  }
  class screenSize{
    constructor(ancho=800, altura=600){
      this.ancho = ancho;
      this.altura = altura;
    }
  }  
  class Size{
    constructor(w,h){ //w-wiught, h-height
      this.w=w;
      this.h=h;
    }
  }
  
  class Position {
    constructor(x=0,y=0){
      this.x=x;
      this.y=y;
    }
  }
  
  //Instancia 
  const Size2= new Size2(Size1);
  const Position2= new Position2(Position1);
  const programWindow = new ProgramWindow(Size2,Position2);
  
  console.log(programWindow);
