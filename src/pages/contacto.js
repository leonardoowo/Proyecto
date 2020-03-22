const Contacto=()=>{
    location.hash="/contacto"
    const view=`
    <div class="card-deck m-1"  style="width: 50rem;">
        <div class="card">
        <img class="card-img-responsive" src="./src/assets/images/uff.jpg" alt="Card image cap" width="354" height="286" >
        <div class="card-body">
            <h5 class="card-title">Facebook</h5>
            <p class="card-text">Por lo general suelo no publicar nada, pero si llego a compartir algo puede que te parezca divertido/interesante</p>
            <a href="https://www.facebook.com/leonardo.a.lopez.79?ref=bookmarks" class="btn btn-primary">Ir a facebook</a>
        </div>
        </div>
        <div class="card">
        <img class="card-img-top" src="./src/assets/images/parecefacil.png" alt="Card image cap" width="354" height="286>
        <div class="card-body">
            <h5 class="card-title">Instagram</h5>
            <p class="card-text">Suelo subir fotos chidas, pero ultimamente no e encontrado nada interesante que pueda ser fotografiado :(.</p>
            <a href="https://www.instagram.com/leonardo.lpz/?hl=es-la" class="btn btn-primary">Ir a Instagram</a>
        </div>
    </div>
    </div>
    <div class="card">
  <div class="card-header">
    Videojuegos
  </div>
  <div class="card-body">
    <h5 class="card-title">Puedes jugar conmigo</h5>
    <p class="card-text">Si es que por alguna razon quieres jugar algun videojuego conmigo puedes revisar mi perfil de xbox.En mi perfil estan todas las cuentas de todos los que juego </p>
    <p>Halo, call of duty, league of legends (Aqui soy un noob), fornite , etc</p>
    <a href="https://account.xbox.com/es-mx/Profile?xr=socialtwistnav" class="btn btn-primary">Xbox :)</a>
  </div>
</div>
    `;
    return view;
}

export default Contacto;