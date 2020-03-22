const Sitios=()=>{
    location.hash = "/sitios";
    const view=`
    <div class="card-deck mt-1 mx-0 mb-3">
    <div class="card">
        <img src="./src/assets/images/ohh.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Microsoft compra npm para integrarlo en GitHub y hacer la comunidad incluso más atractiva para los desarrolladores JavaScript</h5>
        <p class="card-text">Node package manager npm Inc. pasará a formar parte de la familia de productos de Microsoft. Aunque por ahora ninguna de las empresas ha revelado el precio de la transacción, esta es la segunda gran plataforma de desarrollo que Microsoft adquiere en menos de dos años, tras haber comprado GitHub por 7.500 millones de dólares a mediados de 2018.

        El anuncio vino de manos de Nat Friedman, actual CEO de GitHub, y también fue replicado en el blog de npm, donde aseguraron que el registro público seguirá siendo público, libre y estará tan disponible como siempre. Además señalaron que tras la compra "hay una buena razón para creer que npm solo mejorará de ahora en adelante".</p>
    </div>
    <a href="https://www.genbeta.com/desarrollo/microsoft-compra-npm-para-integrarlo-github-hacer-comunidad-incluso-atractiva-para-desarrolladores-javascript" class="btn btn-primary">Nota completa</a>
</div>
<div class="card">
    <img src="./src/assets/images/halo2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Comienzan las pruebas en pc de halo 2 </h5>
    <p class="card-text">343 Industries reveló recientemente que las próximas pruebas de Halo: The Master Chief Collection para PC se llevarán a cabo este mes. Concretamente a finales de marzo, en unas fechas que se revelarán posteriormente.

    Los planes incluyen pruebas con contenido de Halo 2 y Halo 2: Anniversary. Por si fuera poco, los jugadores también podrán ver un adelanto de Forge y del modo Theater para Halo: Reach. Por si no lo sabes, dichos componentes no se lanzaron con el título para PC, pues fueron retrasados.
    
    El estudio sabe que los lanzamientos recientes se pueden mejorar aún más, así que preparan correcciones para algunos errores de audio detectados en Halo: Reach. Las optimizaciones se preparan para las siguientes pruebas, pero 343 Industries trabaja todavía en ellas, así que no garantiza que estén listas para finales de marzo.
    
    A pesar de esto, es un hecho que los miembros del Halo Insider Program podrán darle un vistazo a Halo 2 y Halo 2: Anniversary en unas semanas. Por ahora, no se ha confirmado una fecha estimada para la llegada de esta entrega a Halo: The Master Chief Collection en PC.</p>
    </div>
</div>
<div class="card">
    <img src="./src/assets/images/random.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Vidio divertidos</h5>
    <p class="card-text">Quisas hasta este punto de tu vida te preguntas "que rayos estoy haciendo con mi vida", bueno ya somos dos xd, pero aun asi, puedes disfrutar de este video random, puede que te diveirta un poco,</p>
    <a href="https://www.youtube.com/watch?v=iP1N7LkmLP8" class="btn btn-primary">Nota completa</a>
    </div>
</div>
</div>
<div class="card text-center">
<div class="card-header">
Podria interesarte  
</div>
<div class="card-body">
<h5 class="card-title">¿Juegos nuevos?</h5>
<p class="card-text">¿Estas canzado de jugar a los mismos juegos?, ¿no puedes salir de casa por un virus que asecha a todos?, bueno puedes ver las ofertas de steam.</p>
<p><Como dijo dross "Se que te va encatar"/p>
<a href="https://store.steampowered.com/?l=spanish" class="btn btn-primary">OFERTONES</a>
</div>
<div class="card-footer text-muted">
</div>
</div>
    `;
    return view;
}

export default Sitios;