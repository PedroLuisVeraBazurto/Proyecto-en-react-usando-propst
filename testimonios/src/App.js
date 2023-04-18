import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/testimonios';

function App() {
  return (
    <div className="App">
     {/*Escribimos la primera letra en mayuscula para que react sepa que es un componente que definimos nosotros*/}
     <div className='contenedor-principal'>
      {/*Titulo principal*/}
      <h1>Esto es lo que dicen las personas sobre ellos</h1>
      <Testimonio
       nombre='Sonia Gutierrez'
       pais='Ecuador'
       imagen='Sonia'
       empresa='Google'
       testimonio='¡Google es una empresa increíble! Con su enfoque en la innovación, la creatividad y la 
      colaboración, Google ha cambiado la forma en que interactuamos con el mundo digital. Es un lugar donde los mejores
      y más brillantes mentes del mundo se reúnen para 
      crear soluciones tecnológicas y ofrecer servicios útiles a millones de usuarios en todo el mundo.
      En Google, no hay límites para lo que puedes lograr. 
      Hay una cultura de apoyo y colaboración que te permite experimentar y explorar nuevas ideas.
      Además, la empresa ofrece oportunidades de crecimiento y desarrollo profesional, con una amplia
      gama de roles y proyectos para elegir.'/>
       <Testimonio
       nombre='Luis Enrique'
       pais='Ecuador'
       imagen='Luis'
       empresa='Spotify'
       testimonio='¡Spotify es una empresa fascinante! Desde su lanzamiento en 2008, ha transformado la 
       industria de la música y la forma en que las personas consumen contenido de audio. Con su compromiso con la 
       innovación, la creatividad y la pasión por la música, 
       Spotify se ha convertido en una de las empresas más emocionantes y exitosas del mundo.
       Trabajar en Spotify significa ser parte de una comunidad global de amantes de la música y 
       creativos que comparten una visión común. La empresa ofrece un ambiente de trabajo 
       colaborativo y de apoyo, donde se valora la diversidad y se fomenta la creatividad.'/>
       <Testimonio
       nombre='Emma Stone'
       pais='Ecuador'
       imagen='Emm'
       empresa='Google'
       testimonio='He tenido la suerte de trabajar junto a Sonia Gutiérrez en Google durante 
      varios años y puedo decir sin duda que es una de las personas más talentosas
      y dedicadas que he conocido. Desde el primer día en que la conocí, quedé impresionado 
      por su profesionalismo y su compromiso con su trabajo.
      Sonia es una verdadera líder en su campo,
      siempre al tanto de las últimas tendencias y tecnologías en la industria. 
      Su conocimiento y experiencia son invaluables para el equipo y siempre está dispuesta a 
      compartir su experiencia con otros miembros del equipo.
       del equipo.'/>
     </div>

    </div>
  );
}

export default App;
