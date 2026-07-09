import bellasArtes from "../assets/images/projects/BellasArtes.webp";
import artesanias from "../assets/images/projects/ArtesaniasRinoceronte.webp";
import manualidades from "../assets/images/projects/Manualidades.webp";

export const projects = [
	{
		title: "Proyecto Bellas Artes",
		description: "Tienda Online realizada en WordPress.",
		techStack: ["WordPress", "Elementor"],
		features: ["E-commerce Completo", "Pasarela de Pagos Integrada", "Catálogo Autoadministrable"],
		image: bellasArtes,
	},
	{
		title: "Proyecto Artesanias",
		description: "Página informativa sobre los productos que ofrece el negocio.",
		techStack: ["HTML5", "CSS3", "JavaScript"],
		features: ["Diseño Totalmente Responsivo", "Optimización SEO On-Page", "Estructura Semántica"],
		image: artesanias,
	},
	{
		title: "Manualidades",
		description: "Pagina informativa de negocio de manualidades.",
		techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
		features: ["Galería de Diseños Interactiva", "Formulario de Pedido Directo", "Estructura Responsiva"],
		image: manualidades,
	},
];
