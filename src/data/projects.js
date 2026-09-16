import bellasArtes from "../assets/images/projects/BellasArtes.webp";
import artesanias from "../assets/images/projects/ArtesaniasRinoceronte.webp";
import manualidades from "../assets/images/projects/Manualidades.webp";
import velntra from "../assets/images/projects/POS.png";

export const projects = [
	{
		title: "Velntra — Sistema administrativo y POS",
		description: "Proyecto de portafolio orientado a construir un sistema administrativo modular para procesos reales de pequeños negocios.",
		category: "Sistema Empresarial",
		techStack: ["Laravel", "Livewire", "Volt", "MySQL", "Docker", "Spatie Permission"],
		features: ["Autenticación", "Usuarios", "Roles y permisos", "Arquitectura modular", "Entorno Docker"],
		problem: "Los pequeños negocios necesitan centralizar ventas, inventario, usuarios y otros procesos administrativos sin depender de registros manuales dispersos.",
		solution: "Estoy desarrollando una base modular sobre Laravel para gestionar estos procesos por etapas, comenzando por autenticación, administración de usuarios, roles y permisos.",
		image: velntra,
		status: "En desarrollo",
		url: "https://github.com/AbelAcostaEc/Velntra",
	},

	{
		title: "Bellas Artes",
		description: "Tienda online desarrollada para un negocio de productos artesanales, enfocada en presentar su catálogo y facilitar la gestión de contenido.",
		category: "E-commerce",
		techStack: ["WordPress", "Elementor"],
		features: ["Catálogo de productos", "Diseño adaptable a dispositivos móviles", "Gestión sencilla de contenido"],
		problem: "El negocio necesitaba una presencia digital donde pudiera presentar sus productos de forma ordenada y administrable.",
		solution: "Implementé una tienda virtual autoadministrable con estructura de catálogo y diseño adaptable para facilitar la consulta de productos desde distintos dispositivos.",
		image: bellasArtes,
		status: "Completado",
		url: "#",
	},

	{
		title: "Artesanías Rinoceronte",
		description: "Sitio web creado para fortalecer la presencia digital de un negocio artesanal mostrando productos y servicios.",
		category: "Página Web",
		techStack: ["HTML5", "CSS3", "JavaScript"],
		features: ["Diseño responsive", "Presentación de productos", "Estructura optimizada para buscadores"],
		problem: "El negocio necesitaba una carta de presentación en internet para mostrar su trabajo y facilitar el contacto con clientes potenciales.",
		solution: "Construí un sitio web informativo y responsive que organiza los productos y servicios del negocio y facilita el contacto directo.",
		image: artesanias,
		status: "Completado",
		url: "https://artesaniasrinoceronte.netlify.app",
	},

	{
		title: "Manualidades",
		description: "Página informativa desarrollada para un negocio de manualidades enfocada en mostrar productos y facilitar el contacto con clientes.",
		category: "Página Web",
		techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
		features: ["Galería de productos", "Diseño responsive", "Sección informativa del negocio"],
		problem: "El negocio necesitaba exhibir sus trabajos y ofrecer una forma sencilla de contacto para personas interesadas en pedidos personalizados.",
		solution: "Desarrollé una página responsive con galería de productos, información del negocio y acceso directo para consultas.",
		image: manualidades,
		status: "Completado",
		url: "https://manualidadesasa.netlify.app",
	},
];
