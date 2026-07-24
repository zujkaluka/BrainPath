import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import CtaBand from "../components/CtaBand";
import AppointmentForm from "../components/AppointmentForm";
import { SERVICE_DETAILS } from "../data/serviceDetails";
import { SERVICES } from "../data/services";
import { CheckIcon, ServiceIcon } from "../components/Icons";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? SERVICE_DETAILS[slug] : undefined;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!detail || !service) {
    return <Navigate to="/usluge" replace />;
  }

  return (
    <>
      <Seo title={detail.seoTitle} description={detail.seoDescription} />

      <section className="bg-gradient-to-b from-primary-50 to-sand-50">
        <div className="container-page py-14 sm:py-16">
          <nav className="mb-6 text-sm text-primary-900/60" aria-label="Putanja">
            <Link to="/" className="hover:text-primary-700">Početna</Link>
            <span className="mx-2">/</span>
            <Link to="/usluge" className="hover:text-primary-700">Usluge</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-primary-900">{detail.heading}</span>
          </nav>
          <div className="flex items-start gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-white sm:flex">
              <ServiceIcon name={service.icon} className="h-8 w-8" />
            </div>
            <div>
              <h1 className="section-title !text-4xl">{detail.heading}</h1>
              <p className="mt-3 max-w-2xl text-lg text-primary-900/70">{detail.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {detail.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="mb-4 leading-relaxed text-primary-900/80">
              {p}
            </p>
          ))}
          <div className="mt-8 rounded-3xl bg-mint-50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-primary-900">Šta dobijate u Pesonidentu</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {detail.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-primary-900">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="mb-4 font-display text-2xl text-primary-900">Zakažite termin</h2>
          <AppointmentForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
