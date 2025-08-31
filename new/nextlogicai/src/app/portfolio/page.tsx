import Image from "next/image";

export const metadata = {
  title: "Portfolio | Next Logic AI and Design",
  description:
    "View our portfolio of AI consulting, web design, and branding projects at Next Logic AI and Design.",
  keywords: [
    "AI consulting",
    "web design",
    "branding",
    "portfolio",
    "Next Logic AI",
  ],
};

export default function Portfolio() {
  const projects = [
    {
      img: "/images/customer-support-chatbot.jpg",
      title: "AI Chatbot for Retail",
      desc: "Built a smart chatbot to improve customer support for an online store.",
    },
    {
      img: "/images/customer-support-chatbot.jpg",
      title: "E-commerce Website",
      desc: "Designed a responsive site with a clean UI for a small business.",
    },
    {
      img: "/images/inventory-prediction.jpg",
      title: "Brand Identity",
      desc: "Created a logo and guidelines for a startup’s bold new look.",
    },
    // Add more projects here if needed
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content-centered">
          <h1>
            Our <span className="highlight">Portfolio</span>
          </h1>
          <p>
            A showcase of our AI consulting, web design, and branding projects
            for clients around the globe.
          </p>
        </div>
      </section>

      {/* Portfolio / Services Section */}
      <section className="services">
        <h2 className="section-title">Our Work</h2>
        <div className="service-grid">
          {projects.map((project, i) => (
            <div key={i} className="service-card">
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
              />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="hero" style={{ padding: "3rem 0" }}>
        <div className="hero-content-centered">
          <a href="/contact" className="btn-primary">
            Work With Us
          </a>
        </div>
      </section>
    </div>
  );
}
