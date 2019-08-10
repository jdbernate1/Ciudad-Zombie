/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, eje) {
  /* Completar constructor a partir de Enemigo */

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.eje=eje;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor=ZombieConductor;


/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function () {

  if(this.eje =='vertical') {
    this.y += this.velocidad;
  }
    else if(this.eje == 'horizontal'){
    this.x += this.velocidad;
  }

  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad *= -1;
  }

  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
    this.velocidad *= -1;
  }
}

ZombieConductor.prototype.atacar = function () {
  Jugador.perderVidas(Jugador.vidas);
}
