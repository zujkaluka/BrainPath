import Seo from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import CtaBand from "../components/CtaBand";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Usluge — zubari centar Beograd | Pesonident"
        description="Stomatološke usluge u centru Beograda: pregled, bele plombe, lečenje kanala, protetika, izbeljivanje zuba, lečenje desni. Pesonident — 35 godina iskustva."
      />
      <section className="container-page py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Naše usluge</p>
          <h1 className="section-title">Sve za vaš zdrav osmeh, na jednom mestu</h1>
          <p className="mt-4 text-primary-900/70">
            Bilo da dolazite na redovnu kontrolu ili godinama odlažete posetu —
            u Pesonidentu vas čeka strpljiv, bezbolan pristup i jasan plan
            terapije.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBand
        title="Niste sigurni šta vam je potrebno?"
        subtitle="Dođite na pregled — doktorka Marjana će vam objasniti stanje i predložiti najbolji plan, bez obaveza."
      />
    </>
  );
}
