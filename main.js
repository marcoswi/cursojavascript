
//Array de opciones 
const opciones = [
    {id:"1", name:"Resaurante Mexicano",  tipo:"RESTAURANTE", recomendaciones:"$$", metodoContacto:"Telefono", img:"./img/restaurante_mexicano.jpg", ubicacion: "Madrid"},
    {id:"2", name:"Resaurante Argentino",  tipo:"RESTAURANTE", recomendaciones:"$$", metodoContacto:"Telefono", img:"./img/restaurante_argentino.jpg", ubicacion: "Barcelona"},
    {id:"3", name:"Pizzeria",  tipo:"RESTAURANTE", recomendaciones:"$", metodoContacto:"Telefono", img:"./img/pizzeria.jpg", ubicacion: "Valencia"},
    {id:"4", name:"Fusion Peruano-Cantabro",  tipo:"RESTAURANTE", recomendaciones:"$$$", metodoContacto:"", img:"./img/fusion_peruano.jpg", ubicacion: "Madrid"},
    {id:"5", name:"Clases Surf",  tipo:"ACTIVIDAD", recomendaciones:"$$", metodoContacto:"Email", img:"./img/clases_surf.jpg", ubicacion: "Barcelona"},
    {id:"6", name:"Alquiler Kayaks",  tipo:"ACTIVIDAD", recomendaciones:"$", metodoContacto:"Email", img:"./img/alquiler_kayaks.jpg", ubicacion: "Valencia"},
    {id:"7", name:"Trekking guiado",  tipo:"ACTIVIDAD", recomendaciones:"$", metodoContacto:"Email", img:"./img/trekking_guiado.jpg", ubicacion: "Madrid"},
    {id:"8", name:"Hostel Marcos",  tipo:"HOTEL", recomendaciones:"$$", metodoContacto:"Email", img:"./img/hotel_marcos.jpg", ubicacion: "Barcelona"},
    {id:"9", name:"Hotel Boutique",  tipo:"HOTEL", recomendaciones:"$$$", metodoContacto:"Email", img:"./img/hotel_boutique.jpg", ubicacion: "Valencia"},
    {id:"10", name:"Hotel y Spa",  tipo:"HOTEL", recomendaciones:"$$$", metodoContacto:"Email", img:"./img/hotel_spa.jpg", ubicacion: "Madrid"},
];


//Para poder captar la opcion que el usuario quiere ver segun el boton sobre el que haga click:

let inputUsuario = "";
const opcionElegida = [];
let horarios = "SI";

const botonRestaurantes = document.querySelector ("#btnRestaurantes");
const botonHoteles = document.querySelector ("#btnHoteles");
const botonActividades = document.querySelector ("#btnActividades");
const contenedorOpciones = document.querySelector('.contenedor-opciones')

//Opcion Restaurantes
botonRestaurantes.onclick = () => {
    inputUsuario = "RESTAURANTE";
    console.log (inputUsuario);
    let titulo = document.getElementById("opcionSeleccionada");
    titulo.innerText = "de Restaurantes";
    const opcionElegida = opciones.filter((opcion) => opcion.tipo.includes (inputUsuario));
    console.log (opcionElegida);
//Funcion para armar las CARDS con los resultados del Array generado
    function mostrarOpciones () {
        contenedorOpciones.innerHTML = "";
        for (const item of opcionElegida) {
            //creo el <div> para la card
            const divOpcion = document.createElement('div');
            divOpcion.classList.add ('card');
            //creo el <img> para la imagen de la card
            const imgOpcion = document.createElement('img');
            imgOpcion.classList.add ('imagen-opcion')
            imgOpcion.src = item.img;
            //creo el <h3> para el titulo de la card
            const tituloOpcion = document.createElement('h3')
            tituloOpcion.classList.add('tituloOpcion')
            tituloOpcion.textContent = item.name;
            //Agrego Boton al card
            const btnAgregar = document.createElement('button');
            btnAgregar.classList.add ('btn-favorito');
            btnAgregar.textContent = "Agregar a favoritos";
            btnAgregar.onclick = () =>{
            agregarAFavorito (item.id)
            Toastify ({
                text: "Agregado a favoritos",
                duration: 1000,
                position: "right",
            }).showToast();
            };
            //Agrego aviso de abierto o cerrado 
            const avisoAbierto = document.createElement('div');
            avisoAbierto.classList.add ('horarios');
            avisoAbierto.textContent = (horarios == "SI") ? "Abierto" : "Cerrado"
            //Agrego ciudad y temperatura actual 
            const clima = document.createElement('div');
            clima.classList.add ('horarios');
            clima.textContent = `Ciudad: ${item.ubicacion} Temperatura actual:`
            let city = item.ubicacion;
            let key = "83a5f95b7e141fb64f8f8dfd98930529";
            let url =
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&appid=" +
                key;
                fetch(url)
                    .then((data) => {
                    return data.json();
                    })
                    .then((clima) => {
                    let temperatura = clima.main.temp;
                    let tempC = (temperatura - 273.15).toFixed(0);
                    console.log (tempC);
                    })
                    .catch((err) => console.log(err));
                    


            //hago los appendChild para que se arme la card dentro del contenedor
            divOpcion.appendChild(imgOpcion);
            divOpcion.appendChild(tituloOpcion);
            divOpcion.appendChild(btnAgregar);
            divOpcion.appendChild(avisoAbierto);
            divOpcion.appendChild(clima);

            contenedorOpciones.appendChild(divOpcion);
        }
    }
//Ejecuto la funcion para poder mostrar los resultados en pantalla
    mostrarOpciones ();
}

//Opcion Hoteles
botonHoteles.onclick = () => {
    inputUsuario = "HOTEL";
    console.log (inputUsuario);
    let titulo = document.getElementById("opcionSeleccionada");
    titulo.innerText = "de Hoteles";
    const opcionElegida = opciones.filter((opcion) => opcion.tipo.includes (inputUsuario));
    console.log (opcionElegida);
//Funcion para armar las CARDS con los resultados del Array generado
    function mostrarOpciones () {
        contenedorOpciones.innerHTML = "";
        for (const item of opcionElegida) {
            //creo el <div> para la card
            const divOpcion = document.createElement('div');
            divOpcion.classList.add ('card');
            //creo el <img> para la imagen de la card
            const imgOpcion = document.createElement('img');
            imgOpcion.classList.add ('imagen-opcion')
            imgOpcion.src = item.img;
            //creo el <h3> para el titulo de la card
            const tituloOpcion = document.createElement('h3')
            tituloOpcion.classList.add('tituloOpcion')
            tituloOpcion.textContent = item.name;
            //Agrego Boton al card
            const btnAgregar = document.createElement('button');
            btnAgregar.classList.add ('btn-favorito');
            btnAgregar.textContent = "Agregar a favoritos";
            btnAgregar.onclick = () =>{
            agregarAFavorito (item.id)
            Toastify ({
                text: "Agregado a favoritos",
                duration: 1000,
                position: "right",
            }).showToast();
            };
            //Agrego aviso de abierto o cerrado 
            const avisoAbierto = document.createElement('div');
            avisoAbierto.classList.add ('horarios');
            avisoAbierto.textContent = (horarios == "SI") ? "Abierto" : "Cerrado"

            //Agrego ciudad y temperatura actual 
            const clima = document.createElement('div');
            clima.classList.add ('horarios');
            clima.textContent = `Ciudad: ${item.ubicacion} Temperatura actual:`
            let city = item.ubicacion;
            let key = "83a5f95b7e141fb64f8f8dfd98930529";
            let url =
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&appid=" +
                key;
                fetch(url)
                    .then((data) => {
                    return data.json();
                    })
                    .then((clima) => {
                    let temperatura = clima.main.temp;
                    let tempC = (temperatura - 273.15).toFixed(0);
                    console.log (tempC);
                    })
                    .catch((err) => console.log(err));
                    


            //hago los appendChild para que se arme la card dentro del contenedor
            divOpcion.appendChild(imgOpcion);
            divOpcion.appendChild(tituloOpcion);
            divOpcion.appendChild(btnAgregar);
            divOpcion.appendChild(avisoAbierto);
            divOpcion.appendChild(clima);

            contenedorOpciones.appendChild(divOpcion);
        }
    }
//Ejecuto la funcion para poder mostrar los resultados en pantalla
    mostrarOpciones ();
}

//Opcion Actividades
botonActividades.onclick = () => {
    inputUsuario = "ACTIVIDAD";
    console.log (inputUsuario);
    let titulo = document.getElementById("opcionSeleccionada");
    titulo.innerText = "de Actividades";
    const opcionElegida = opciones.filter((opcion) => opcion.tipo.includes (inputUsuario));
    console.log (opcionElegida);
//Funcion para armar las CARDS con los resultados del Array generado
    function mostrarOpciones () {
        contenedorOpciones.innerHTML = "";
        for (const item of opcionElegida) {
            //creo el <div> para la card
            const divOpcion = document.createElement('div');
            divOpcion.classList.add ('card');
            //creo el <img> para la imagen de la card
            const imgOpcion = document.createElement('img');
            imgOpcion.classList.add ('imagen-opcion')
            imgOpcion.src = item.img;
            //creo el <h3> para el titulo de la card
            const tituloOpcion = document.createElement('h3')
            tituloOpcion.classList.add('tituloOpcion')
            tituloOpcion.textContent = item.name;
            //Agrego Boton al card
            const btnAgregar = document.createElement('button');
            btnAgregar.classList.add ('btn-favorito');
            btnAgregar.textContent = "Agregar a favoritos";
            // Capto el evento y ejecuto la funcion para agregar la opcion a favoritos
            btnAgregar.onclick = () =>{
            agregarAFavorito (item.id)
            Toastify ({
                text: "Agregado a favoritos",
                duration: 1000,
                position: "right",
            }).showToast();
            };
            //Agrego aviso de abierto o cerrado 
            const avisoAbierto = document.createElement('div');
            avisoAbierto.classList.add ('horarios');
            avisoAbierto.textContent = (horarios == "SI") ? "Abierto" : "Cerrado"
            //Agrego ciudad y temperatura actual 
            const clima = document.createElement('div');
            clima.classList.add ('horarios');
            clima.textContent = `Ciudad: ${item.ubicacion} Temperatura actual:`
            let city = item.ubicacion;
            let key = "83a5f95b7e141fb64f8f8dfd98930529";
            let url =
                "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&appid=" +
                key;
                fetch(url)
                    .then((data) => {
                    return data.json();
                    })
                    .then((clima) => {
                    let temperatura = clima.main.temp;
                    let tempC = (temperatura - 273.15).toFixed(0);
                    console.log (tempC);
                    })
                    .catch((err) => console.log(err));
                    


            //hago los appendChild para que se arme la card dentro del contenedor
            divOpcion.appendChild(imgOpcion);
            divOpcion.appendChild(tituloOpcion);
            divOpcion.appendChild(btnAgregar);
            divOpcion.appendChild(avisoAbierto);
            divOpcion.appendChild(clima);

            contenedorOpciones.appendChild(divOpcion);
        }
    }
//Ejecuto la funcion para poder mostrar los resultados en pantalla
    mostrarOpciones ();
}


// Para la seccion de favoritos

const listadoFavoritos = document.querySelector('.listado-favoritos')
const favoritos = [];

function agregarAFavorito (id) {
    const opcionEncontrada = opciones.find ( opcion => opcion.id === id);
    favoritos.push(opcionEncontrada);
    mostrarFavoritos (favoritos);
}

function mostrarFavoritos (arregloFavoritos) {
    listadoFavoritos.innerHTML = "";
    for (const item of arregloFavoritos) {
        //Creo la card
        const divOpcion = document.createElement('div');
        divOpcion.classList.add ('card');
        //Creo el img para la card
        const imgOpcion = document.createElement('img');
        imgOpcion.classList.add ('imagen-opcion');
        imgOpcion.src = item.img;
        //Creo el titulo de la card
        const tituloOpcion = document.createElement ('h2')
        tituloOpcion.classList.add ('tituloOpcion');
        tituloOpcion.textContent = item.name;
        //Agrego aviso de abierto o cerrado 
        const avisoAbierto = document.createElement('div');
        avisoAbierto.classList.add ('btn-horarios');
        avisoAbierto.textContent = (horarios == "SI") ? "Abierto" : "Cerrado"
        //hago los appendChild para mostrar la informacion en las cards creadas
        divOpcion.appendChild(imgOpcion);
        divOpcion.appendChild(tituloOpcion);
        divOpcion.appendChild(avisoAbierto);
        listadoFavoritos.appendChild(divOpcion);

        const guardarEnStorage = (clave, valor) => { localStorage.setItem(clave, valor)}
        guardarEnStorage("listaOpciones", JSON.stringify(favoritos));

    }
}



