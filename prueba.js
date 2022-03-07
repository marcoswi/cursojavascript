//constructor para armar array de opciones
class OpcionNueva {
    constructor(name, id, tipo, recomendaciones, metodoContacto, imagen) {
        this.name = name;
        this.id = id;
        this.tipo = tipo;
        this.precio = recomendaciones;
        this.metodoContacto = metodoContacto;
        this.img = imagen;
    }
}

//Array de opciones y push para usar el constructor
const opciones = [];
opciones.push(new OpcionNueva("Resaurante Mexicano", 1, "RESTAURANTE", "$$", "Telefono", './imagen/restaurante_mexicano.jpg'));
opciones.push(new OpcionNueva("Resaurante Argentino", 2, "RESTAURANTE", "$$", "Telefono", './imagen/restaurante_argentino.jpg'));
opciones.push(new OpcionNueva("Pizzeria", 3, "RESTAURANTE", "$", "Reserva Online", './imagen/pizzeria.jpg'));
opciones.push(new OpcionNueva("Fusion Peruano-Cantabro", 4, "RESTAURANTE", "$$$", "Reserva Online", './imagen/fusion_peruano.jpg'));
opciones.push(new OpcionNueva("Clases Surf", 5, "ACTIVIDAD", "$$", "Whatsapp", './imagen/clases_surf.jpg'));
opciones.push(new OpcionNueva("Alquiler Kayaks", 6, "ACTIVIDAD", "$", "Telefono", './imagen/alquiler_kayaks.jpg'));
opciones.push(new OpcionNueva("Trekking guiado", 7, "ACTIVIDAD", "$", "Whatsapp", './imagen/trekking_guiado.jpg'));
opciones.push(new OpcionNueva("Hostel Marcos", 8, "HOTEL", "$", "Email", './imagen/hotel_marcos.jpg'));
opciones.push(new OpcionNueva("Hotel Boutique", 9, "HOTEL", "$$", "Telefono", './imagen/hotel_boutique.jpg'));
opciones.push(new OpcionNueva("Hotel y Spa", 10, "HOTEL", "$$$", "Pagina Web", './imagen/hotel_spa.jpg'));


const botonRestaurantes = document.querySelector ("#btnRestaurantes");

botonRestaurantes.onclick = () => {
    inputUsuario = "RESTAURANTE";
    console.log (inputUsuario);
    let titulo = document.getElementById("opcionSeleccionada");
    titulo.innerText = "de Restaurantes";
    const opcionElegida = opciones.filter((opcion) => opcion.tipo.includes (inputUsuario));
    console.log (opcionElegida);

}
