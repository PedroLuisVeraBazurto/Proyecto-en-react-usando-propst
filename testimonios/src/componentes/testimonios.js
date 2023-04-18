//Lo inicial son las importaciones
import React from "react";
import '../hojas-de-estilos/Testimonio.css' 
//Definimos nuestro componente
//Los parentesis son necesarios 
//props nos sirve para reutilizar código
function Testimonio(props){
  return(
    //usamos clasname por que class es una palabra reservada para javascript
    //props se utiliza para darles propiedades
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        //De esta forma importamos las imagenes
        //Este es el metodo para implementar una sola imagen por testimonio, ahora haremos uso de javascript para cambiarlo
        //src={require('../imagenes/img.jpg')}
        src={require(`../imagenes/Testimonio-${props.imagen}.jpg`)}
        //atributo alt para la accesibilidad
        alt="Foto de Luis"/>
        <div className = 'contenedor-texto-testimonio'>
          <p className = 'nombre-testimonio'>
            {/*Con strong marcaremos especial detenemiento en ciertas partes del texto(se mostrara en negrita)*/}
            <strong>{props.nombre}</strong> en {props.pais}</p>
          <p className = 'cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong></p>
          <p className = 'texto-testimonio'>"
            {props.testimonio}"</p>
        </div>
    </div>
  );   
}

//Exportamos nuestra funcion
export default Testimonio;