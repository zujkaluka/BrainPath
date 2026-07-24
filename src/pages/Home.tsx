import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import CtaBand from "../components/CtaBand";
import { SERVICES } from "../data/services";
import { SITE } from "../data/site";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  QuoteIcon,
} from "../components/Icons";

const TRUST_POINTS = [
  {
    title: "35 godina iskustva",
    text: "Tri i po decenije rada i hiljade zdravih osmeha — iskustvo kojem možete da verujete.",
  },
  {
    title: "Bezbolan pristup",
    text: "Savremena anestezija i nežan rad. Kod nas se ne trpi bol — ni na pregledu, ni na intervenciji.",
  },
  {
    title: "Individualna pažnja",
    text: "Niste broj u kartoteci. Doktorka Marjana poznaje svakog pacijenta i njegovu priču.",
  },
  {
    title: "Prijatan ambijent",
    text: "Topla, porodična atmosfera u kojoj se i najveći strah od zubara polako topi.",
  },
  {
    title: "Doktor kome verujete",
    text: "Isti doktor vas vodi od prvog pregleda do zdravog osmeha — bez prebacivanja od vrata do vrata.",
  },
  {
    title: "Brzi termini",
    text: "Termin obično dobijate u roku od nekoliko dana, a za hitne slučajeve i istog dana.",
  },
];

// Higgsfield-generated cinematic clinic video (10s, 720p). Self-host by
// dropping the same file into public/hero.mp4 — the local source wins.
const HERO_VIDEO_CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3ERbZynT8QldfB80015vYWFljPv/hf_20260724_015540_d4124dfc-03f3-40c4-87f8-e68c83c9e5dc.mp4";

export default function Home() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      <Seo
        title="Stomatolog Beograd centar | Pesonident — Zeleni Venac"
        description="Stomatološka ordinacija Pesonident u centru Beograda, TC Zeleni Venac. 35 godina iskustva, bezbolan pristup, brzi termini. Pozovite 063 8040394."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-sand-50 to-sand-50">
        <div
          className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-primary-100 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-mint-100 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="section-eyebrow">Porodična ordinacija u centru Beograda</p>
            <h1 className="font-display text-4xl leading-[1.1] text-primary-950 sm:text-5xl lg:text-[3.4rem]">
              Bez straha od zubara.
              <br />
              Bez bola.{" "}
              <span className="text-mint-600">Samo zdrav osmeh.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-900/70">
              Brinemo o vašem osmehu već {SITE.years} godina. Dr Marjana
              Janković i tim Pesonident dočekaće vas kao porodicu — i vratiti
              vam osmeh bez ijedne neprijatnosti.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SITE.phonePrimaryHref} className="btn-primary">
                <PhoneIcon className="h-5 w-5" />
                Pozovite odmah
              </a>
              <Link to="/kontakt#zakazivanje" className="btn-secondary">
                <CalendarIcon className="h-5 w-5" />
                Zakažite pregled
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-primary-900/60">
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4 text-mint-600" />
                {SITE.addressShort}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-mint-600" />
                Pon–Pet {SITE.hours.weekdays} · Sub {SITE.hours.saturday}
              </span>
            </div>
          </div>

          {/* Hero visual — cinematic clinic video with branded fallback card. */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-mint-600 shadow-lift">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <HeartIcon className="mb-4 h-12 w-12 text-mint-200" />
                <p className="font-display text-2xl sm:text-3xl">
                  „Ovde se i najveći strah
                  <br /> pretvara u osmeh."
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary-100">
                  Pesonident · od 1991.
                </p>
              </div>
              {/* Local /hero.mp4 wins when present; CDN copy is the fallback source. */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
                onCanPlay={() => setVideoReady(true)}
                onError={() => setVideoReady(false)}
              >
                <source src="/hero.mp4" type="video/mp4" />
                <source src={HERO_VIDEO_CDN} type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lift">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                <CheckIcon className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-primary-900">{SITE.years} godina poverenja</p>
                <p className="text-xs text-primary-900/60">hiljade zadovoljnih pacijenata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Naše usluge</p>
          <h2 className="section-title">Sve za vaš zdrav osmeh, na jednom mestu</h2>
          <p className="mt-3 text-primary-900/70">
            Od redovnog pregleda do potpune rekonstrukcije osmeha — uz pažnju i
            strpljenje koje zaslužujete.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="container-page pt-20">
        <div className="rounded-3xl bg-primary-50/70 px-6 py-12 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Zašto Pesonident</p>
            <h2 className="section-title">Zašto pacijenti biraju Pesonident</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint-600 text-white">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-900/70">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="container-page grid items-center gap-10 pt-20 lg:grid-cols-2">
        {/* Portrait slot — replace the placeholder with an authentic photo of the doctor. */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-sand-100 to-sand-300 shadow-lift">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-primary-600 shadow-soft">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <p className="mt-5 font-display text-2xl text-primary-900">{SITE.doctor}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-sand-700">
                doktor stomatologije
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="section-eyebrow">Vaš stomatolog</p>
          <h2 className="section-title">Upoznajte dr Marjanu Janković</h2>
          <p className="mt-4 leading-relaxed text-primary-900/80">
            Već {SITE.years} godina dr Marjana Janković leči zube — ali pre
            svega leči strah. Njena filozofija je jednostavna: pacijent prvo
            mora da se oseća sigurno, a tek onda počinje rad.
          </p>
          <p className="mt-3 leading-relaxed text-primary-900/80">
            Specijalizovana za opštu stomatologiju, protetiku, izbeljivanje
            zuba i zdravlje desni, doktorka vas vodi kroz svaki korak terapije
            — strpljivo, uz objašnjenje i bez žurbe.
          </p>
          <ul className="mt-5 space-y-2.5">
            {["Opšta stomatologija", "Protetika", "Izbeljivanje zuba", "Zdrave desni"].map((s) => (
              <li key={s} className="flex items-center gap-2.5 font-semibold text-primary-900">
                <CheckIcon className="h-5 w-5 text-mint-600" />
                {s}
              </li>
            ))}
          </ul>
          <Link to="/o-nama" className="btn-secondary mt-7">
            Naša priča
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-page pt-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-soft sm:p-12">
          <p className="section-eyebrow">Iskustva pacijenata</p>
          <QuoteIcon className="h-10 w-10 text-primary-200" />
          <blockquote className="mt-4">
            <p className="font-display text-xl leading-relaxed text-primary-900 sm:text-2xl">
              „Ako ne bi bilo doktorke Marjane, i dalje bih imao probleme sa
              desnima i krivim zubima. Uspela je čak i nemoguće… da potpuno
              ukloni moj strah od zubara."
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">
                VS
              </div>
              <div>
                <p className="font-bold text-primary-900">Vuk Stamatović</p>
                <p className="text-sm text-primary-900/60">pacijent ordinacije Pesonident</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Location */}
      <section className="container-page pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Lokacija</p>
          <h2 className="section-title">Pronađite nas u centru Beograda</h2>
          <p className="mt-3 text-primary-900/70">
            {SITE.address} — na dva koraka od stanica gradskog prevoza na
            Zelenom Vencu.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl shadow-soft lg:col-span-2">
            <iframe
              src={SITE.mapEmbedSrc}
              title="Mapa — Pesonident, Lomina 5, Beograd"
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center gap-5 rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-mint-600" />
              <div>
                <p className="font-bold text-primary-900">Adresa</p>
                <p className="text-sm text-primary-900/70">{SITE.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-mint-600" />
              <div>
                <p className="font-bold text-primary-900">Radno vreme</p>
                <p className="text-sm text-primary-900/70">
                  Pon – Pet: {SITE.hours.weekdays}
                  <br />
                  Subota: {SITE.hours.saturday}
                </p>
              </div>
            </div>
            <a href={SITE.phonePrimaryHref} className="btn-primary w-full">
              <PhoneIcon className="h-5 w-5" />
              {SITE.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
