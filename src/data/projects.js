import bellasArtes from "../assets/images/projects/BellasArtes.webp";
import artesanias from "../assets/images/projects/ArtesaniasRinoceronte.webp";
import manualidades from "../assets/images/projects/Manualidades.webp";
import pos from "../assets/images/projects/POS.png";
import seolab from "../assets/images/projects/Seolab.png";

export const projects = [
	{
		title: "Sistema POS para pequeños negocios",
		description: "Sistema de gestión comercial desarrollado para digitalizar procesos de ventas, inventario y administración de pequeños negocios.",
		category: "Sistema Empresarial",
		techStack: ["Laravel", "Livewire", "MySQL", "Bootstrap"],
		features: ["Gestión de productos y categorías", "Control de inventario", "Registro de ventas", "Gestión de usuarios y permisos", "Reportes administrativos"],
		problem: "Los pequeños negocios suelen perder el control de sus ventas, inventarios y clientes al llevar la administración de forma manual o en papel.",
		solution: "Diseñé un sistema administrativo ligero que automatiza el registro de ventas, actualiza el stock en tiempo real y ofrece reportes detallados para la toma de decisiones.",
		image: pos,
		status: "En desarrollo",
		url: "#",
	},

	// {
	// 	title: "Seolab",
	// 	description: "Plataforma orientada al análisis SEO de sitios web para ayudar a identificar oportunidades de mejora y optimización.",
	// 	category: "SaaS",
	// 	techStack: ["Laravel", "Python", "Docker", "APIs"],
	// 	features: ["Análisis automatizado de sitios web", "Procesamiento de información SEO", "Arquitectura preparada para crecimiento"],
	// 	problem: "Analizar el SEO de un sitio web manualmente es un proceso complejo y técnico que impide a dueños de negocios optimizar su presencia digital.",
	// 	solution: "Creé una plataforma automatizada que analiza la URL, procesa los parámetros clave y genera reportes prácticos con recomendaciones sencillas para mejorar en buscadores.",
	// 	image: seolab,
	// 	status: "En desarrollo",
	// 	url: "#",
	// },

	{
		title: "Bellas Artes",
		description: "Tienda online desarrollada para un negocio de productos artesanales, permitiendo mostrar su catálogo y facilitar la gestión de contenido.",
		category: "E-commerce",
		techStack: ["WordPress", "Elementor"],
		features: ["Catálogo de productos", "Diseño adaptable a dispositivos móviles", "Gestión sencilla de contenido"],
		problem: "El taller artesanal limitaba sus ventas únicamente al público físico local debido a la falta de una plataforma de comercio digital.",
		solution: "Desarrollé una tienda virtual autoadministrable con un catálogo fluido que permite vender y recibir pedidos a nivel nacional de forma sencilla.",
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
		problem: "El negocio carecía de una carta de presentación profesional en internet para mostrar su catálogo a clientes potenciales.",
		solution: "Construí un sitio web informativo, rápido y optimizado para buscadores que destaca los productos e impulsa el contacto directo.",
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
		problem: "Dificultad para exhibir las creaciones personalizadas y capturar pedidos específicos de clientes interesados.",
		solution: "Diseñé una página web con una galería visual dinámica y acceso integrado para solicitar cotizaciones personalizadas de forma rápida.",
		image: manualidades,
		status: "Completado",
		url: "https://manualidadesasa.netlify.app",
	},
];
