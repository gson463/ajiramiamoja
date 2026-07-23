import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import ClickPlayVideo from "./ClickPlayVideo";

const PHONE = "+255768255446";
const PHONE_DISPLAY = "0768 255 446";
const PHONE_2 = "+255779255446";
const PHONE_2_DISPLAY = "0779 255 446";
const EMAIL_INFO = "info@ajiramiamoja.com";
const EMAIL_LALAMIKO = "lalamiko@ajiramiamoja.com";
const EMAIL_DKT = "dktnyambega@ajiramiamoja.com";
const WHATSAPP = `https://wa.me/${PHONE_2.replace("+", "")}`;

const pillars = [
  "Hulka",
  "Kipaji binafsi",
  "Kujiendeleza",
  "Mahitaji",
  "Nafasi",
  "Kazi",
  "Nidhamu",
];

const announcements = [
  {
    num: "001",
    title: "Nafasi 100 — shule za awali na msingi",
    body: "Ajira Moja na Mia Moja inatangaza nafasi 100 za sekta binafsi katika shule za awali na shule za msingi — kumi kati yake kwa wadumavu wa mwendo na kusikia.",
  },
  {
    num: "002",
    title: "Jinsi ya kuomba",
    body: "Wanaotafuta ajira katika shule za awali na shule za msingi watume majina matatu, namba ya simu, na ujumbe “naomba ajira”.",
  },
  {
    num: "003",
    title: "Orodha ya mia moja",
    body: "Majina ya walioteuliwa yatawekwa hapa ndani ya siku 90 baada ya hatua muhimu kukamilika.",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [form, setForm] = useState({
    names: "",
    phone: "",
    message: "naomba ajira",
    disability: false,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function submit(e: FormEvent) {
    e.preventDefault();
    const note = form.disability
      ? "\n(Naomba kuzingatiwa katika nafasi za wadumavu)"
      : "";
    const text = [
      form.message.trim() || "naomba ajira",
      "Ajira: shule za awali / shule za msingi",
      "",
      `Majina: ${form.names.trim()}`,
      `Simu: ${form.phone.trim()}`,
      note,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <div className="site">
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav__inner">
          <a className="nav__brand" href="#juu">
            Ajira Mia Moja
          </a>
          <nav>
            <ul className="nav__links">
              <li>
                <a href="#video">Video</a>
              </li>
              <li>
                <a href="#kuhusu">Kuhusu</a>
              </li>
              <li>
                <a href="#matangazo">Matangazo</a>
              </li>
              <li>
                <a href="#mawasiliano">Mawasiliano</a>
              </li>
              <li>
                <a className="nav__cta" href="#omba">
                  Omba Ajira
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="juu">
          <div className="hero__media" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="/hero.jpg">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero__scrim" />
          <div className="hero__content">
            <h1 className="hero__brand">
              Ajira
              <span>Mia Moja</span>
            </h1>
            <p className="hero__lead">
              Kufanya kazi ni amri na wajibu. Ajira ni mchakato wa kuandaa kazi.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href="#omba">
                Omba Ajira
              </a>
              <a className="btn btn--ghost" href="#kuhusu">
                Soma maono
              </a>
            </div>
          </div>
        </section>

        <section className="section section--videos" id="video">
          <div className="container">
            <p className="section__label">Video</p>
            <h2 className="section__title">Ujumbe wa muhimu</h2>
            <p className="section__text">
              Ujumbe kwa Mheshimiwa Rais Mama Samia Suluhu Hassan, na ujumbe
              kwa wote — kutoka kwa Daktari Daniel Nyambega Kerenge.
            </p>
            <div className="clips">
              <ClickPlayVideo
                id="v1"
                src="/videos/nyambega-1.mp4"
                poster="/videos/nyambega-1.jpg"
                title="Ujumbe kwa Mheshimiwa Rais Mama Samia Suluhu Hassan"
                activeId={activeVideo}
                onActivate={setActiveVideo}
              />
              <ClickPlayVideo
                id="v2"
                src="/videos/nyambega-2.mp4"
                poster="/videos/nyambega-2.jpg"
                title="Ujumbe kwa wote"
                activeId={activeVideo}
                onActivate={setActiveVideo}
              />
            </div>
          </div>
        </section>

        <section className="section" id="kuhusu">
          <div className="container split">
            <div>
              <p className="section__label">Kuhusu</p>
              <h2 className="section__title">Ajira Moja na Mia Moja</h2>
              <p className="section__text">
                Tunapanua wigo wa ajira kwa vijana katika sekta binafsi —
                kuanzia nafasi katika <strong>shule za awali</strong> na{" "}
                <strong>shule za msingi</strong>, kwa kuunganisha hulka, vipaji,
                na mahitaji ya soko ili kazi iwe na nidhamu na matokeo.
              </p>
              <div className="pillars">
                {pillars.map((item) => (
                  <div className="pillar" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="values">
                <div className="value">
                  <strong>Maono</strong>
                  <span>
                    Kuwa kituo kinachoongoza cha huduma bora za ajira kwa
                    vijana katika sekta binafsi, ndani na nje ya nchi.
                  </span>
                </div>
                <div className="value">
                  <strong>Dhamira</strong>
                  <span>
                    Kutoa huduma za kiwango cha juu kwa wanaotafuta ajira katika
                    sekta binafsi.
                  </span>
                </div>
                <div className="value">
                  <strong>Maadili</strong>
                  <span>
                    Weledi, wepesi, uaminifu, ubunifu, umakini, na uwiano.
                  </span>
                </div>
              </div>
              <div className="goal">
                <div className="goal__number">1,000,000</div>
                <p className="goal__caption">
                  Lengo kuu: kuongeza nafasi za ajira sekta binafsi ifikapo 1
                  Oktoba 2036.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section apply-band" id="omba">
          <div className="container split">
            <div>
              <p className="section__label">Maombi</p>
              <h2 className="section__title">Tuma ombi lako</h2>
              <p className="section__text">
                Nafasi hizi 100 ni za <strong>shule za awali</strong> na{" "}
                <strong>shule za msingi</strong>. Jaza majina matatu, namba ya
                simu, na ujumbe “naomba ajira”. Ombi litafunguka WhatsApp au
                unaweza kutuma SMS/barua pepe moja kwa moja.
              </p>
              <p className="form__note" style={{ marginTop: "1.25rem" }}>
                Nafasi 10 zimewekwa kwa wadumavu wa mwendo na kusikia. Orodha
                ya walioteuliwa 100 itachapishwa hapa ndani ya siku 90.
              </p>
            </div>

            <div>
              {sent ? (
                <div className="form__success" role="status">
                  Ombi limeandaliwa. Maliza kutuma kwenye WhatsApp uliofunguka.
                  Unaweza pia kutuma SMS kwa {PHONE_DISPLAY} / {PHONE_2_DISPLAY}{" "}
                  au barua pepe {EMAIL_INFO}.
                </div>
              ) : (
                <form className="form" onSubmit={submit}>
                  <div className="field">
                    <label htmlFor="names">Majina matatu</label>
                    <input
                      id="names"
                      name="names"
                      required
                      autoComplete="name"
                      placeholder="Jina la kwanza la kati la mwisho"
                      value={form.names}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, names: e.target.value }))
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Namba ya simu</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="07XX XXX XXX"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Ujumbe</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                    />
                  </div>
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={form.disability}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          disability: e.target.checked,
                        }))
                      }
                    />
                    <span>
                      Naomba kuzingatiwa katika nafasi zilizotengwa kwa
                      wadumavu
                    </span>
                  </label>
                  <button className="btn btn--gold" type="submit">
                    Tuma kupitia WhatsApp
                  </button>
                  <p className="form__note">
                    Au SMS: {PHONE_DISPLAY} / {PHONE_2_DISPLAY} · Barua pepe:{" "}
                    <a href={`mailto:${EMAIL_INFO}`}>{EMAIL_INFO}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="matangazo">
          <div className="container">
            <p className="section__label">Matangazo</p>
            <h2 className="section__title">Mia moja ya habari</h2>
            <p className="section__text">
              Hapa ndipo tutachapisha matangazo ya Ajira Mia Moja — hatua kwa
              hatua, haba na haba.
            </p>
            <div className="announce-list">
              {announcements.map((item) => (
                <article className="announce" key={item.num}>
                  <div className="announce__num">{item.num}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="mawasiliano">
          <div className="container contact-grid">
            <div>
              <p className="section__label">Mawasiliano</p>
              <h2 className="section__title">Tuandikie au tupigie</h2>
              <p className="section__text">
                Ofisi iko Dar es Salaam. Tunapokea maombi kwa WhatsApp, SMS, na
                barua pepe.
              </p>
              <div className="contact-links">
                <a href={`tel:${PHONE}`}>
                  <strong>Simu</strong>
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <strong>WhatsApp</strong>
                  <span>{PHONE_2_DISPLAY}</span>
                </a>
                <a href={`mailto:${EMAIL_INFO}`}>
                  <strong>Barua pepe</strong>
                  <span>{EMAIL_INFO}</span>
                </a>
                <a href={`mailto:${EMAIL_DKT}`}>
                  <strong>Daktari</strong>
                  <span>{EMAIL_DKT}</span>
                </a>
                <a href={`mailto:${EMAIL_LALAMIKO}`}>
                  <strong>Lalamiko</strong>
                  <span>{EMAIL_LALAMIKO}</span>
                </a>
                <a href="https://www.ajiramiamoja.com" target="_blank" rel="noreferrer">
                  <strong>Tovuti</strong>
                  <span>www.ajiramiamoja.com</span>
                </a>
              </div>
            </div>
            <figure className="founder">
              <img
                src="/hero.jpg"
                alt="Daktari Daniel Nyambega Kerenge"
              />
              <figcaption>
                <strong>Daktari Daniel Nyambega Kerenge</strong>
                Mjasiriamali · Dar es Salaam
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <strong>Ajira Mia Moja</strong>
          <p>© {new Date().getFullYear()} · Ajira Moja na Mia Moja</p>
        </div>
      </footer>
    </div>
  );
}
