const header=()=>{
    const view=`<div class="pos-f-t ">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="">Pagina.pers</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/sitios">Sitios de interes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/contacto">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/error404">¿?</a>
          </li>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

      </div>
    </div>
    <nav class="navbar navbar-dark bg-secondary">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
  `
  return view;
}

export default header;