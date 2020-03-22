import Home from '../pages/home'
import Error404 from '../pages/error404'
import header from '../templates/header'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    "/": Home,
    "/error404": Error404
};

const router = async () => {
    const content = document.getElementById("Hola");
    const head=document.getElementById("head");
    head.innerHTML=await header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
 };

export default router;