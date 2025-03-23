import { q as ensure_array_like, y as head, v as escape_html, n as pop, p as push } from "../../chunks/index.js";
import "../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: "computer"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic and increase conversions.",
      icon: "chart"
    },
    {
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your audience.",
      icon: "pen"
    }
  ];
  const each_array = ensure_array_like(services);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Code Complete Media - Digital Solutions for Small &amp; Medium Businesses</title>`;
    $$payload2.out += `<meta name="description" content="Marketing, Media &amp; Website Solutions for Small &amp; Medium-Sized Businesses">`;
  });
  $$payload.out += `<main><section id="home" class="hero"><div class="video-background"><video src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artificial-intelligence-digital-landscape-flowing-2024-11-21-19-40-15-utc-C53ZRBtm61ngcFrhibr5wddHv6fBD1.mp4" autoplay muted loop playsinline></video> <div class="video-overlay"></div></div> <div class="container"><div class="hero-content"><h1>Your Business, <br><span class="highlight">Digitally Complete</span></h1> <h2>Marketing, Media &amp; Website Solutions for Small &amp; Medium-Sized Businesses</h2> <p>Affordable · Professional · Tailored Solutions</p> <div class="cta-buttons"><button class="btn btn-primary">Get in Touch</button> <button class="btn btn-secondary">Our Services</button></div></div></div></section> <section id="about" class="about"><div class="container"><h2 class="section-title">About Us</h2> <div class="about-content"><div class="image-container"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colleagues-spending-time-together-on-break-on-work-2025-03-14-00-42-18-utc-edited.jpg-uaucQncJx4y8MYAq7gH9GSTLmqN9kg.jpeg" alt="Team collaborating on digital solutions" class="about-img"></div> <div class="about-text"><h3>Why Choose Code Complete Media</h3> <p>We understand that every business is unique. That's why we take the time to understand
						your goals, challenges, and vision before creating tailored solutions that help you
						succeed in the digital landscape.</p> <p>Our team of experts combines technical expertise with creative thinking to deliver
						solutions that not only look great but also drive results for your business.</p> <div class="skills"><h3>Our Expertise</h3> <div class="skill-tags"><span>Web Development</span> <span>Digital Marketing</span> <span>Content Creation</span> <span>SEO</span> <span>Social Media</span> <span>E-commerce</span></div></div></div></div></div></section> <section id="services" class="services"><div class="container"><h2 class="section-title">Our Services</h2> <div class="services-grid"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out += `<div class="service-card"><div class="service-icon">`;
    if (service.icon === "computer") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
    } else if (service.icon === "chart") {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`;
    }
    $$payload.out += `<!--]--></div> <h3>${escape_html(service.title)}</h3> <p>${escape_html(service.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section id="contact" class="contact"><div class="container"><h2 class="section-title">Ready to Get Started?</h2> <div class="contact-content"><div class="contact-info"><h3>Let's Connect</h3> <p>Contact us today to discuss your project and how we can help you achieve your goals.</p> <div class="contact-details"><div class="contact-item"><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg></i> <span>(555) 123-4567</span></div> <div class="contact-item"><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></i> <a href="mailto:carla@codecompletemedia.com">carla@codecompletemedia.com</a></div> <div class="contact-item"><i><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></i> <span>123 Business Ave, Suite 100<br>Anytown, ST 12345</span></div></div> <div class="social-links"><a href="https://facebook.com" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a> <a href="https://instagram.com" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></rect></svg></a> <a href="https://linkedin.com" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></div></div> <div class="contact-form"><form id="contactForm" action="https://formsubmit.co/carla@codecompletemedia.com" method="POST"><input type="hidden" name="_subject" value="New contact from website"> <input type="hidden" name="_captcha" value="false"> <input type="hidden" name="_next" value="https://codecompletemedia.com/thank-you"> <input type="text" name="_honey" style="display: none"> <div class="form-group"><label for="name">Name</label> <input type="text" id="name" name="name" required></div> <div class="form-group"><label for="email">Email</label> <input type="email" id="email" name="email" required></div> <div class="form-group"><label for="subject">Subject</label> <input type="text" id="subject" name="subject" required></div> <div class="form-group"><label for="message">Message</label> <textarea id="message" name="message" rows="5" required></textarea></div> <button type="submit" class="btn btn-primary">Send Message</button></form></div></div></div></section></main>`;
  pop();
}
export {
  _page as default
};
