const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const isExternalPath = (path: string) =>
	/^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(path) ||
	/^(?:mailto|tel|sms):/i.test(path);

export const withBase = (path = "/"): string => {
	if (isExternalPath(path)) {
		return path;
	}

	const [, pathname = "", suffix = ""] = path.match(/^([^?#]*)(.*)$/) ?? [];
	const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

	if (
		basePath &&
		(normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`))
	) {
		return `${normalizedPath}${suffix}`;
	}

	if (normalizedPath === "/") {
		return `${basePath || ""}/${suffix}`;
	}

	return `${basePath}${normalizedPath}${suffix}`;
};

export const absoluteUrl = (path: string, site: string | URL): string =>
	new URL(withBase(path), site).toString();
