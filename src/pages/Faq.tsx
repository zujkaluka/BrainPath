import { useState } from "react";
import Seo from "../components/Seo";
import CtaBand from "../components/CtaBand";
import { FAQ } from "../data/faq";
import { ChevronDownIcon } from "../components/Icons";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="Česta pitanja — stomatolog Beograd | Pesonident"
        description="Da li je pregled bolan? Kako izgleda prvi pregled? Kako zakazati termin? Odgovori stomatološke ordinacije Pesonident iz centra Beograda."
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Česta pitanja</p>
          <h1 className="section-title">Sve što vas zanima pre prve posete</h1>
          <p className="mt-4 text-primary-900/70">
            Razumemo da je odlazak kod zubara za mnoge veliki korak. Evo
            odgovora na pitanja koja najčešće čujemo.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-primary-900">{item.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-mint-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 leading-relaxed text-primary-900/75">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <CtaBand
        title="Imate još pitanja?"
        subtitle="Slobodno nas pozovite — rado ćemo odgovoriti na sve, bez ikakvih obaveza."
      />
    </>
  );
}
