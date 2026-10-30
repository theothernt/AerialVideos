// The site is entirely static and prerendered, so no client-side hydration is needed.
// Setting `csr = false` keeps the SvelteKit runtime and the bundled JSON data out of the browser entirely.
export const prerender = true;
export const csr = false;
