// Funcion para definir el tamaño de la ventana
// Valores por defecto:
// * Anchura = 80
// * Altura = 60
function Size(width=80, heigth=60){
    this.width = width;
    this.heigth = heigth;

    // La función resize recibe dos valores númericos que reemplazan los tamaños del objeto
    this.resize = function(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

}

// Función para definir un conjunto de coordenadas para la ventana
// Valores por defecto:
// * x = 0
// * y = 0
function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;

    // La función move recibe dos valores númericos y los suma a los valores previos de coordenadas para simular un desplazamiento
    this.move = function(newX, newY){
        this.x += newX;
        this.y += newY;
    }

}

// Función que define una ventana en forma
// Las propiedades con las que cuenta son:
// * screenSize: Hace referencia a el tamaño del monitor o total de la pantalla y es un objeto de tipo size con valores por defecto de (800,600)
// * size: Tamaño de la ventana que se va a mostrar en pantalla, es un objeto de tipo size con los valores por defecto de la clase
// * position: Posición en la que se situaría la esquina superior izquierda de la ventana, objeto de tipo Position con los valores por defecto de la clase 
function ProgramWindow(screenWidth= 800, screenHeigth= 600){
    this.screenSize = new Size(screenWidth,screenHeigth);
    this.size = new Size();
    this.position = new Position();

    // Usa la función resize para cambiar el tamaño de la venta (objeto size)
    // Agrega validaciones para que el tamaño no sea menor o igual que 0 en ancho o alto
    // y para que la ventana no rebase los bordes de la pantalla
    this.resize = function(newSize){
        this.size.resize(newSize.width, newSize.heigth);
        if(this.size.width <= 0)
            this.size.width = 1;

        if(this.size.heigth <= 0)
            this.size.heigth = 1;

        let totalWidth = this.size.width + this.position.x
        if(totalWidth > this.screenSize.width){
            this.size.width = this.size.width - (totalWidth - this.screenSize.width);
        }

        let totalHeigth = this.size.heigth + this.position.y
        if(totalHeigth > this.screenSize.heigth){
            this.size.heigth = this.size.heigth - (totalHeigth - this.screenSize.heigth);
        }
    }

    // Aplica la función move del objeto position y agrega las validaciones de que la posicion no tenga coordenadas menores a 0 en cualquiera de sus componentes
    // y para que la ventana no supere los bordes de la pantalla
    this.move = function(newPosition){
        this.position.move(newPosition.x, newPosition.y);
        if(this.position.x < 0)
            this.position.x = 0;

        if(this.position.y < 0)
            this.position.y = 0;

        let totalWidth = this.size.width + this.position.x
        if(totalWidth > this.screenSize.width){
            this.position.x = this.position.x - (totalWidth - this.screenSize.width);
        }

        let totalHeigth = this.size.heigth + this.position.y
        if(totalHeigth > this.screenSize.heigth){
            this.position.y = this.position.y - (totalHeigth - this.screenSize.heigth);
        }
    }
}

// Función changeWindow que altera un objeto de tipo ProgramWindow poniendo sus valores de Size en (400,300) y de Position en (100,150)
function changeWindow(window){
    window.resize(new Size(400,300));
    window.move(new Position(100,150));
}

// Conjunto de pruebas mostradas en la práctica
console.log("=====PRUEBAS A SIZE=====");
const size = new Size(1080, 764);
console.log(`Valores iniciales de size anchura: ${size.width}`);
console.log(`Valores iniciales de size altura: ${size.heigth}\n`);

size.resize(1920,1080);
console.log(`Valores tras redimensionamiento anchura: ${size.width}`);
console.log(`Valores tras redimensionamiento altura: ${size.heigth}\n`);

console.log("=====PRUEBAS A POSITION=====");
const point = new Position();
console.log(`Valores iniciales de position x: ${point.x}`);
console.log(`Valores iniciales de position y: ${point.y}\n`);

point.move(100,200);
console.log(`Valores tras movimiento de position en x: ${point.x}`);
console.log(`Valores tras movimiento de position en y: ${point.y}\n`);

console.log("=====PRUEBAS A PROGRAMWINDOW=====");
const programWindow = new ProgramWindow();
console.log(`Valores iniciales de programWindow {screenSize} (${programWindow.screenSize.width}, ${programWindow.screenSize.heigth})\n`);

const newSize = new Size(600,400);
programWindow.resize(newSize);
console.log(`Valores tras resize de programWindow (width, heigth) => (${programWindow.size.width}, ${programWindow.size.heigth})\n`);

const newPosition = new Position(50,100);
programWindow.move(newPosition);
console.log(`Valores tras move de programWindow (x, y) => (${programWindow.size.width}, ${programWindow.size.heigth})\n`);

changeWindow(programWindow);
console.log(`Valores tras changeWindow a programWindow {size} => (${programWindow.size.width}, ${programWindow.size.heigth})`);
console.log(`Valores tras changeWindow a programWindow {position} => (${programWindow.position.x}, ${programWindow.position.y})`);

//Caso de uso 1
/* 
console.log("=====PRUEBAS A SIZE=====");
const size = new Size(1900, 890);
console.log(`Valores iniciales de size anchura: ${size.width}`);
console.log(`Valores iniciales de size altura: ${size.heigth}\n`);

size.resize(1970,1960);
console.log(`Valores tras redimensionamiento anchura: ${size.width}`);
console.log(`Valores tras redimensionamiento altura: ${size.heigth}\n`);

console.log("=====PRUEBAS A POSITION=====");
const point = new Position();
console.log(`Valores iniciales de position x: ${point.x}`);
console.log(`Valores iniciales de position y: ${point.y}\n`);

point.move(300,500);
console.log(`Valores tras movimiento de position en x: ${point.x}`);
console.log(`Valores tras movimiento de position en y: ${point.y}\n`);

console.log("=====PRUEBAS A PROGRAMWINDOW=====");
const programWindow = new ProgramWindow();
console.log(`Valores iniciales de programWindow {screenSize} (${programWindow.screenSize.width}, ${programWindow.screenSize.heigth})\n`);

const newSize = new Size(750,500);
programWindow.resize(newSize);
console.log(`Valores tras resize de programWindow (width, heigth) => (${programWindow.size.width}, ${programWindow.size.heigth})\n`);

const newPosition = new Position(30,90);
programWindow.move(newPosition);
console.log(`Valores tras move de programWindow (x, y) => (${programWindow.size.width}, ${programWindow.size.heigth})\n`);

changeWindow(programWindow);
console.log(`Valores tras changeWindow a programWindow {size} => (${programWindow.size.width}, ${programWindow.size.heigth})`);
console.log(`Valores tras changeWindow a programWindow {position} => (${programWindow.position.x}, ${programWindow.position.y})`);
/*/   