import Image from "next/image";
import Header from "@/components/Header";
import OrderForm from "@/components/OrderForm";
import Hours from "@/components/Hours";
import { WHATSAPP, links, menu, gallery } from "@/lib/site";

const wa = `https://wa.me/${WHATSAPP}`;
const external = { target: "_blank", rel: "noopener" } as const;

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <div className="wrap hero">
          <div>
            <h1>Cakes made for your day, and a school to learn how.</h1>
            <p>Cravings By Ijay bakes custom and regular cakes, Nigerian snacks and chicken shawarma in Karu, and teaches hands-on baking and decorating at the Cake Academy.</p>
            <div className="row">
              <a className="btn" href="#order">Order a cake</a>
              <a className="btn ghost" href="#academy">Join a class</a>
            </div>
          </div>
          <Image className="hero-img" src="/images/hero-pink-lace.jpg" width={380} height={475} priority
            alt="Cake with a pink lace pattern and a gold Happy Birthday topper made at Cravings By Ijay" />
        </div>

        <section className="gallery" id="gallery">
          <div className="wrap">
            <h2>Cakes from our kitchen</h2>
            <p className="lead">A few recent custom cakes. Tell us your theme and we will make it.</p>
            <div className="shots">
              {gallery.map((g) => <Image key={g.src} src={g.src} alt={g.alt} width={320} height={400} />)}
            </div>
            <p style={{ marginTop: 24 }}><a className="btn ghost" href={links.instagram}>See more on Instagram</a></p>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="wrap">
            <h2>What we bake and cook</h2>
            <p className="lead">Everything is made fresh. Message us for sizes, flavours and prices.</p>
            <div className="cols">
              {menu.map((m) => (
                <div key={m.title} className={m.wide ? "item wide" : "item"}>
                  <h3>{m.title}</h3><p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="academy" id="academy">
          <div className="wrap box">
            <div>
              <h2>Learn to bake and decorate</h2>
              <p className="lead">The Cake Academy teaches hands-on baking and decorating, so you practise every step yourself instead of watching.</p>
              <ul>
                <li>Baking and decorating courses taught in person</li>
                <li>Learn to start or grow your own cake business</li>
                <li>Ask us about the next class dates and fees</li>
              </ul>
              <a className="btn" href={`${wa}?text=${encodeURIComponent("Hello, I'd like to join the Cake Academy. Please send the next class dates and fees.")}`}>Ask about classes</a>
            </div>
            <div className="steps">
              <h3>How to enrol</h3>
              <ol>
                <li>Message us on WhatsApp and tell us what you want to learn.</li>
                <li>We send you the next class dates and fees.</li>
                <li>Confirm your place and come to the academy in Karu.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="founder" id="founder">
          <div className="wrap">
            <h2>Meet the founder</h2>
            <p>Cravings By Ijay is owned and managed by Ijeoma Edith Adibuah.</p>
            <p>She also shares cake tips and tricks online to help other bakers learn, while she keeps growing in the baking world.</p>
            <p><span className="tag">@naijacakedecorating</span></p>
          </div>
        </section>

        <section className="order" id="order">
          <div className="wrap">
            <h2>Place an order on WhatsApp</h2>
            <p className="lead">
              Please order at least 72 hours ahead. Fill this in and it opens WhatsApp with your message ready to send. You can also{" "}
              <a href={links.store} {...external} style={{ textDecoration: "underline" }}>shop and pay in our online store</a>.
            </p>
            <OrderForm />
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="wrap grid">
            <div>
              <h2>Visit the shop</h2>
              <dl>
                <dt>Address</dt>
                <dd>Ashesela Plaza, off Abacha Road junction, beside Witty Kids School, Angwan Hashimu, Mararaba, Karu, Nasarawa 961105 (near Abuja)</dd>
                <dt>Phone and WhatsApp</dt>
                <dd><a href="tel:+2348138273533">+234 813 827 3533</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:cravingsbyijay@gmail.com">cravingsbyijay@gmail.com</a></dd>
                <dt>Order online</dt>
                <dd><a href={links.store} {...external}>Cravings By Ijay online store</a></dd>
                <dt>Order notice</dt>
                <dd>Please order at least 72 hours ahead.</dd>
                <dt>Social</dt>
                <dd>
                  <a href={links.instagram}>Instagram @cravingsbyijay</a>, <a href={links.facebook}>Facebook cravingsbyijay</a>,{" "}
                  <a href={links.tiktok}>TikTok @cravingsbyijay</a> and <a href={links.youtube}>YouTube</a>
                </dd>
                <dt>Payment</dt>
                <dd>Card and NFC payments accepted in store</dd>
              </dl>
            </div>
            <div>
              <h3 style={{ marginBottom: 12 }}>Opening hours</h3>
              <Hours />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Cravings By Ijay Cake Academy</span>
          <span>Karu, Nasarawa State, Nigeria</span>
        </div>
      </footer>
    </>
  );
}
