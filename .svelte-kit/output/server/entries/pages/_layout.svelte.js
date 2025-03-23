import { q as ensure_array_like, t as attr_class, u as attr, v as escape_html, w as clsx, n as pop, p as push, x as stringify, y as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import "../../chunks/client.js";
import "clsx";
function Navbar($$payload, $$props) {
  push();
  let currentPath = page.url.pathname;
  const navItems = [
    { path: "/", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#services", label: "Services" },
    { path: "#contact", label: "Contact" }
  ];
  const each_array = ensure_array_like(navItems);
  $$payload.out += `<header${attr_class(clsx(""), "svelte-fvm57o")}><div class="container"><nav><div class="logo"><a href="/"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_horizontal-pOG1dKrWyz8gYxR5TOKy70t0NRXzbr.png" alt="Code Complete Media Logo"></a></div> <ul${attr_class(`nav-links ${stringify("")}`, "svelte-fvm57o")}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<li class="svelte-fvm57o"><a${attr("href", item.path)}${attr_class(clsx(currentPath === item.path ? "active" : ""), "svelte-fvm57o")}>${escape_html(item.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul> <div${attr_class(`hamburger ${stringify("")}`)}><span></span> <span></span> <span></span></div></nav></div></header>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer><div class="container"><div class="logo"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_horizontal-pOG1dKrWyz8gYxR5TOKy70t0NRXzbr.png" alt="Code Complete Media Logo" style="max-height: 40px; width: auto; margin: 0 auto 1rem;"></div> <p>© ${escape_html(currentYear)} CodeCompleteMedia. All rights reserved.</p></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"> <link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;500;600;700&amp;family=Urbanist:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">`;
  });
  Navbar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
