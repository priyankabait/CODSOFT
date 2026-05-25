function About() {

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="nav-left">

          <h1 className="logo">

            PRYVORA

          </h1>

        </div>

        <ul className="nav-links">

          <li>

            <a href="/new-arrivals">

              New Arrivals

            </a>

          </li>

          <li>

            <a href="/best-sellers">

              Best Sellers

            </a>

          </li>

          <li>

            <a href="/gifting">

              Gifting

            </a>

          </li>

          <li>

            <a href="/about">

              About

            </a>

          </li>

        </ul>

      </nav>

      {/* HERO */}

      <section className="about-hero">

        <img

  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1600&auto=format&fit=crop"

  alt=""
/>

        <div className="about-overlay">

          <p>

            PRYVORA STORY

          </p>

          <h1>

            Modern Luxury
            <br />
            Timeless Elegance

          </h1>

        </div>

      </section>

      {/* CONTENT */}

      <section className="about-content">

        <div className="about-text">

          <p className="about-small">

            ABOUT US

          </p>

          <h1>

            Crafted For
            <br />
            Everyday Luxury

          </h1>

          <p className="about-description">

            Pryvora was created to redefine modern jewellery with timeless elegance.
            Every piece is thoughtfully designed to blend luxury, minimalism,
            and sophistication for everyday wear.

            <br />
            <br />

            Our collections are inspired by premium craftsmanship,
            golden aesthetics, and modern fashion culture.
            Pryvora brings affordable luxury to every jewellery lover.

          </p>

        </div>

        <div className="about-image">

          <img

            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"

            alt=""
          />

        </div>

      </section>

    </div>
  );
}

export default About;