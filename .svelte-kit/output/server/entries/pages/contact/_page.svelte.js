import { y as head, u as attr, v as escape_html, n as pop, p as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };
  let isFormValid = formData.firstName.trim() !== "" && formData.lastName.trim() !== "" && formData.email.trim() !== "" && formData.subject.trim() !== "" && formData.message.trim() !== "";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact Us - Code Complete Media</title>`;
    $$payload2.out += `<meta name="description" content="Get in touch with Code Complete Media">`;
  });
  $$payload.out += `<main class="flex min-h-screen flex-col"><section class="hero-gradient w-full py-16 text-white"><div class="container mx-auto px-4 text-center md:px-6"><h1 class="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1> <p class="mx-auto max-w-[700px] text-lg">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as
				possible.</p></div></section> <section class="w-full bg-white py-12"><div class="container mx-auto px-4 md:px-6"><div class="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md"><h2 class="mb-6 text-2xl font-bold text-[var(--primary-dark)]">Get in Touch</h2> <form class="space-y-6"><div class="grid grid-cols-1 gap-6 md:grid-cols-2"><div class="space-y-2"><label for="first-name" class="text-sm font-medium text-gray-700">First Name</label> <input id="first-name"${attr("value", formData.firstName)} placeholder="John" required class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[var(--primary-medium)] focus:outline-none"></div> <div class="space-y-2"><label for="last-name" class="text-sm font-medium text-gray-700">Last Name</label> <input id="last-name"${attr("value", formData.lastName)} placeholder="Doe" required class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[var(--primary-medium)] focus:outline-none"></div></div> <div class="space-y-2"><label for="email" class="text-sm font-medium text-gray-700">Email</label> <input id="email" type="email"${attr("value", formData.email)} placeholder="john.doe@example.com" required class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[var(--primary-medium)] focus:outline-none"></div> <div class="space-y-2"><label for="subject" class="text-sm font-medium text-gray-700">Subject</label> <input id="subject"${attr("value", formData.subject)} placeholder="How can we help you?" required class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[var(--primary-medium)] focus:outline-none"></div> <div class="space-y-2"><label for="message" class="text-sm font-medium text-gray-700">Message</label> <textarea id="message" placeholder="Your message here..." class="min-h-[120px] w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[var(--primary-medium)] focus:outline-none" required>`;
  const $$body = escape_html(formData.message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button type="submit"${attr("disabled", !isFormValid, true)} class="w-full rounded-md bg-[var(--primary-dark)] px-4 py-3 text-white transition-colors hover:bg-[var(--primary-medium)] disabled:opacity-50">${escape_html("Send Message")}</button></form></div></div></section> <section class="w-full bg-gray-50 py-12"><div class="container mx-auto px-4 md:px-6"><div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3"><div class="rounded-lg bg-white p-6 text-center shadow-sm"><div class="bg-opacity-20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-light)]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <h3 class="mb-2 text-lg font-bold text-[var(--primary-dark)]">Email</h3> <p class="text-gray-600">info@codecompletemedia.com</p></div> <div class="rounded-lg bg-white p-6 text-center shadow-sm"><div class="bg-opacity-20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-light)]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div> <h3 class="mb-2 text-lg font-bold text-[var(--primary-dark)]">Phone</h3> <p class="text-gray-600">(555) 123-4567</p></div> <div class="rounded-lg bg-white p-6 text-center shadow-sm"><div class="bg-opacity-20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-light)]"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--primary-medium)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <h3 class="mb-2 text-lg font-bold text-[var(--primary-dark)]">Location</h3> <p class="text-gray-600">123 Business Ave, Suite 100<br>Anytown, ST 12345</p></div></div></div></section></main>`;
  pop();
}
export {
  _page as default
};
