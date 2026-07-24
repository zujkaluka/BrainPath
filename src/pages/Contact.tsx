import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import AppointmentForm from "../components/AppointmentForm";
import { SITE } from "../data/site";
import { ClockIcon, MapPinIcon, PhoneIcon } from "../components/Icons";

export default function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#zakazivanje") {
      document.getElementById("zakazivanje")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Seo
        title="Kontakt i zakazivanje — Pesonident, Zeleni Venac Beograd"
        description="Zakažite pregled u stomatološkoj ordinaciji Pesonident: 063 8040394, 011 2623801. TC Zeleni Venac, 2. sprat, Lomina 5, Beograd."
      />

      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Kontakt</p>
          <h1 className="section-title">Tu smo za vas — javite nam se</h1>
          <p className="mt-4 text-primary-900/70">
            Najbrži put do termina je telefon. Ako vam više odgovara, popunite
            formular i mi ćemo pozvati vas.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={SITE.phonePrimaryHref}
            className="flex items-center gap-4 rounded-3xl bg-primary-600 p-6 text-white shadow-soft transition-all hover:bg-primary-700 hover:shadow-lift"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-100">Mobilni — pozovite odmah</p>
              <p className="text-xl font-extrabold">{SITE.phonePrimary}</p>
            </div>
          </a>
          <a
            href={SITE.phoneSecondaryHref}
            className="flex items-center gap-4 rounded-3xl bg-white p-6 text-primary-900 shadow-soft transition-all hover:shadow-lift"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-900/60">Fiksni telefon</p>
              <p className="text-xl font-extrabold">{SITE.phoneSecondary}</p>
            </div>
          </a>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div id="zakazivanje" className="scroll-mt-24">
            <h2 className="mb-5 font-display text-2xl text-primary-900">Zakažite pregled onlajn</h2>
            <AppointmentForm />
          </div>

          <div>
            <h2 className="mb-5 font-display text-2xl text-primary-900">Gde se nalazimo</h2>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                src={SITE.mapEmbedSrc}
                title="Mapa — Pesonident, Lomina 5, Beograd"
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-5 space-y-4 rounded-3xl bg-white p-6 shadow-soft">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-mint-600" />
                <div>
                  <p className="font-bold text-primary-900">Adresa</p>
                  <p className="text-sm text-primary-900/70">{SITE.address}</p>
                  <p className="mt-1 text-xs text-primary-900/50">
                    Na dva koraka od stanica gradskog prevoza na Zelenom Vencu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-mint-600" />
                <div>
                  <p className="font-bold text-primary-900">Radno vreme</p>
                  <p className="text-sm text-primary-900/70">
                    Ponedeljak – Petak: {SITE.hours.weekdays}
                    <br />
                    Subota: {SITE.hours.saturday}
                    <br />
                    Nedelja: {SITE.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
