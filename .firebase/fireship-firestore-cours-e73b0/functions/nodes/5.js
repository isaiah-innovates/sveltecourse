import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CQCAQmh8.js","_app/immutable/chunks/scheduler.wPVBEAb8.js","_app/immutable/chunks/index.CJgKXyW2.js","_app/immutable/chunks/stores.d9zHZKZ3.js","_app/immutable/chunks/entry.Ca1C00FU.js","_app/immutable/chunks/index.Biuj0nYx.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
