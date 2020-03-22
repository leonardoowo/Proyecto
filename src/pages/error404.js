const Error404 = () => {
    location.hash = "/error404"
    const view = `
        <h1>ERROR 404</h1>
        <img src="../src/assets/images/error404.jfif" class="card-img-top" class="card-img-top">
    `
    return view;
}

export default Error404;