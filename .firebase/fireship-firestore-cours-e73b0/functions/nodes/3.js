

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DqPy6ah0.js","_app/immutable/chunks/scheduler.wPVBEAb8.js","_app/immutable/chunks/index.CJgKXyW2.js","_app/immutable/chunks/firebase.Cz7nN3zP.js","_app/immutable/chunks/index.Biuj0nYx.js"];
export const stylesheets = [];
export const fonts = [];
