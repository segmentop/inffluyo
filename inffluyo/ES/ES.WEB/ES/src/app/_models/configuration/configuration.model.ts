export class configuration {
    public menu: any[] = [
        { name: "Home", route: "" },
        { name: "Cómo funciona", route: "" },
        { name: "Sectores", route: "" },
        { name: "Precios", route: "" },
        { name: "Blog", route: "" },
        { name: "Academia", route: "" },
        { name: "Nosotros", route: "" },
    ]

    public menuR: any[] = [
        { name: "Idioma", route: "" },
        { name: "Registro", route: "" },
        { name: "Login", route: "" },
    ]

    public menuHome: any[] = [
        { name: "Soy <br><span class='text-danger'>organización, marca<br>o agencia</span>", route: "0" },
        { name: "Soy <br><span class='text-danger'>micro-influencer<br>o blogger</span>", route: "1" },
        { name: "Soy <br><span class='text-danger'>Medio de<br>comunicación</span>", route: "2" },
    ]

    public diferencias: any[] = [
        "1. Somos una plataforma que ayuda a la <span class='text-danger'>movilización social de ideas, experiencias o servicios.</span>",
        "2. No vendemos productos físicos. <span class='text-danger'>Lo que nos mueve son las ideas o proyectos</span> que aportan un <span class='text-danger'>beneficio a la sociedad.</span>",
        "<span class='text-danger'>3. Los influencers no aceptan dinero.</span> Su compensación es ideológica, emocional o por medio de premios o activos digitales.",
        "4. Ofrecemos también una <span class='text-danger'>herramienta y API que se integra in-house</span>, con total privacidad y control, en un modelo SaaS."
    ]
    public buttonsCampain: any[] = [
        { name: 'fab fa-twitter', title: "twitter", link: "" },
        { name: 'fab fa-facebook', title: "facebook", link: "" },
        { name: 'fab fa-instagram', title: "instagram", link: "" },
        { name: 'fab fa-linkedin-in', title: "linkedin", link: "" },
        { name: 'fab fa-youtube', title: "youtube", link: "" },
        { name: 'fab fa-tiktok', title: "tiktok", link: "" },
        { name: 'fab fa-twitch', title: "twitch", link: "" },
        { name: 'fas fa-pencil', title: "blogs", link: "" },
        { name: 'fab fa-whatsapp', title: "whatsapp", link: "" },
    ]
}