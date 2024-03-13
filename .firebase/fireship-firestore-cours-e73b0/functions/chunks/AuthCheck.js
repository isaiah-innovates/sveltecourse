import { c as create_ssr_component } from "./ssr.js";
import { a as user } from "./firebase.js";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error" data-svelte-h="svelte-14i83z5">You must be signed in to view this page.
        <a class="btn btn-primary" href="/login">Sign In</a></p>`}`;
});
export {
  AuthCheck as A
};
