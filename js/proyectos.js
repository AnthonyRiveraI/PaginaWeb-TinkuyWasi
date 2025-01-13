// Lista de proyectos con su configuración
const proyectos = [
    { nombre: "proyecto-1", totalImagenes: 15, ruta: "img/proyectos/proyecto-1/" },
    { nombre: "proyecto-2", totalImagenes: 10, ruta: "img/proyectos/proyecto-2/" },
    { nombre: "proyecto-3", totalImagenes: 8, ruta: "img/proyectos/proyecto-3/" }
];

// Función para generar las galerías de Lightbox
function generarGalerias(proyectos) {
    proyectos.forEach(proyecto => {
        // Busca el contenedor principal del proyecto
        const contenedor = document.querySelector(`a[data-lightbox="${proyecto.nombre}"]`)?.parentElement;

        if (contenedor) {
            // Genera los enlaces para las imágenes adicionales
            for (let i = 2; i <= proyecto.totalImagenes; i++) {
                const link = document.createElement("a");
                link.href = `${proyecto.ruta}${i}.jpg`;
                link.setAttribute("data-lightbox", proyecto.nombre);
                link.setAttribute("data-title", `Imagen ${i} del ${proyecto.nombre}`);
                link.style.display = "none"; // Oculta el enlace
                contenedor.appendChild(link);
            }
        }
    });
}

// Ejecuta la generación de galerías al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    generarGalerias(proyectos);
});
