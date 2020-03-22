const Home =() =>{
    const view=`
    <div class="card bg-dark text-white">
        <img class="card-img" src="./src/assets/images/space2.jpg" alt="Card image">
        <div class="card-img-overlay">
            <h5 class="card-title">Pagina personal  
            !Bienvenido!</h5>
            <p class="card-text text-center mt-5">Hello there</p>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active">
                        <img class="d-block w-70 m-2" src="./src/assets/images/space.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-70" src="./src/assets/images/halo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-70" src="./src/assets/images/tenis.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
            <div class="card-body">
                <h5 class="card-title">Algo interesante</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">¿Go somewhere?</a>
            </div>
            <div class="card-footer text-muted">
            </div>
        </div>
    </div>
    `;
    return view;

}
export default Home;