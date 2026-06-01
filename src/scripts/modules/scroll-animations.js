export function scrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-in");

					observer.unobserve(entry.target);
				}
			});
		},

		observerOptions,
	);

	document

		.querySelectorAll(".section-title, .card, .project-card, .timeline-item")

		.forEach((el) => {
			el.classList.add("animate-on-scroll");

			observer.observe(el);
		});
}
