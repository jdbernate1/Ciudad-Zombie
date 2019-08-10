/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/pj_f.png',
  x: 120,
  y: 40,
  ancho: 15,
  alto: 21,
  velocidad: 10,
  vidas: 5,

  movimiento: function(movX,movY){
    this.x=this.x+movX;
    this.y=this.y+movY;
  },
  perderVidas: function(dano){
    this.vidas=this.vidas-dano;
  }

  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
