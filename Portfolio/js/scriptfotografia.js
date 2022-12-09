const fotografia =
[
    {
        tipo: "evento",
        titulo: "XV Amanda",
        año: 2022,
        rol: ["fotógrafa"],
        descripcion: "Realización de los exteriores para la quinceañera y su familia. ",
        foto_portada: "fotosfotografia/Amanda9.jpg",
        galeria: ["galfotog/Amanda/Amanda1.jpg","galfotog/Amanda/Amanda2.jpg","galfotog/Amanda/Amanda3.jpg","galfotog/Amanda/Amanda5.jpg"],
    },

    {
        tipo: "evento",
        titulo: "Comunión Juana",
        año:2022,
        rol: ["fotógrafa"],
        descripcion: "Retratos realizados a Juana Appratto el día de su Primera Comunión. ",
        foto_portada:"fotosfotografia/Juana1.jpg",
        galeria: ["galfotog/ComJuana/Juana1.jpg","galfotog/ComJuana/Juana2.jpg","galfotog/ComJuana/Juana3.jpg","galfotog/ComJuana/Juana4.jpg"],
    },

    {
        tipo: "registro",
        titulo: "Marilina Bertoldi en la Sala del Museo",
        año: 2022,
        rol: ["fotógrafa"],
        descripcion: "Registro del concierto de la artista. ",
        foto_portada:"fotosfotografia/Marili5.jpg",
        galeria: ["galfotog/Marilina/Marili3.jpg","galfotog/Marilina/Marili5.jpg","galfotog/Marilina/Marili7.jpg","galfotog/Marilina/Marili8.jpg"],
    },

    {
        tipo: "publicitario",
        titulo: "Jacinto",
        año: "2022",
        rol: ["fotógrafa"],
        descripcion: "Fotos tomadas durante un almuerzo en el restaurante. ",
        foto_portada: "fotosfotografia/Jacinto1.jpg",
        galeria: ["galfotog/Jacinto/Jacinto1.jpg","galfotog/Jacinto/Jacinto2.jpg","galfotog/Jacinto/Jacinto8.jpg","galfotog/Jacinto/Jacinto9.jpg"],
    },

    {
        tipo: "publicitario",
        titulo: "Expo Uruguay Sostenible",
        año:2022,
        rol: ["fotógrafa"],
        descripcion: "Regisitro del evento con el fin de difundir los emprendimientos participantes. ",
        foto_portada:"fotosfotografia/Eco9.jpg",
        galeria: ["galfotog/Expo/Eco2.jpg","galfotog/Expo/Eco5.jpg","galfotog/Expo/Eco6.jpg","galfotog/Expo/Eco9.jpg"],
    },

    {
        tipo: "registro",
        titulo: "Fusión",
        año:2020,
        rol: ["fotógrafa"],
        descripcion: "Registro de back durante el rodaje de 'Lo Verde del Bosque' . ",
        foto_portada:"fotosfotografia/Fusion11.jpg",
        galeria: ["galfotog/Fusion/Fusion3.jpg","galfotog/Fusion/Fusion10.jpg","galfotog/Fusion/Fusion11.jpg","galfotog/Fusion/Fusion12.jpg"],
    },

    {
        tipo: "registro",
        titulo: "Ciudad Vieja",
        año:2020,
        rol: ["fotógrafa"],
        descripcion: "Encuentros mientras paseo. ",
        foto_portada:"fotosfotografia/cv6.jpg",
        galeria: ["galfotog/CV/cv1.jpg","galfotog/CV/cv2.jpg","galfotog/CV/cv4.jpg","galfotog/CV/cv6.jpg"],
    },
]

let texto2 = "";
for (let i = 0; i<fotografia.length; i++)
{
    texto2 +=
    `   <div class="col-lg-3 col-md-6 col-sm-12 p-1">
            <div class="card">
                <img src=${fotografia[i].foto_portada} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${fotografia[i].titulo}</h5>
                    <p class="card-text">${fotografia[i].descripcion}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${fotografia[i].año}</li>
                    <li class="list-group-item">${fotografia[i].tipo}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#galeria${i}"> 
                        Ver Galería
                    </button>
            
                    <div class="modal fade" id="galeria${i}" tabindex="-1" aria-labelledby="galeria${i}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="galeria${i}Label">${fotografia[i].titulo}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div id="galeria" class="container">
                            <div id="carouselExampleIndicators${i}" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide-to="3" aria-label="Slide 4"></button>

                            </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src=${fotografia[i].galeria[0]} class="d-block w-100" alt="foto1">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${fotografia[i].galeria[1]} class="d-block w-100" alt="foto2">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${fotografia[i].galeria[2]} class="d-block w-100" alt="foto3">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${fotografia[i].galeria[3]} class="d-block w-100" alt="foto4">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                </div>
            
                </div>
            </div>
        </div>
    `
}

console.log("b"+texto2);

document.getElementById('listatrabajos2').innerHTML=texto2

