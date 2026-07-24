import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { CalendarIcon, PhoneIcon } from "./Icons";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

/** Reusable conversion band with call + booking CTAs. */
export default function CtaBand({
  title = "Spremni za osmeh bez brige?",
  subtitle = "Pozovite nas ili zakažite pregled — termin obično dobijate u roku od nekoliko dana.",
}: CtaBandProps) {
  return (
    <section className="container-page my-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary-800 px-6 py-12 text-center shadow-lift sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-600/40 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-mint-600/30 blur-2xl" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-100">{subtitle}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={SITE.phonePrimaryHref} className="btn bg-white text-primary-800 shadow-soft hover:bg-sand-100 w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              Pozovite odmah — {SITE.phonePrimary}
            </a>
            <Link to="/kontakt#zakazivanje" className="btn-mint w-full sm:w-auto">
              <CalendarIcon className="h-5 w-5" />
              Zakažite pregled
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
