import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { SERVICES } from "../data/services";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-16 bg-primary-950 text-primary-100">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl text-white">Pesonident</p>
          <p className="mt-3 text-sm leading-relaxed text-primary-200">
            Porodična stomatološka ordinacija u srcu Beograda. Brinemo o vašem
            osmehu već {SITE.years} godina — bez straha i bez bola.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-mint-300">Usluge</p>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/usluge/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-mint-300">Kontakt</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint-300" />
              <span>
                <a href={SITE.phonePrimaryHref} className="block hover:text-white">
                  {SITE.phonePrimary}
                </a>
                <a href={SITE.phoneSecondaryHref} className="block hover:text-white">
                  {SITE.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint-300" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-mint-300">Radno vreme</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-mint-300" />
              Pon – Pet: {SITE.hours.weekdays}
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-mint-300" />
              Subota: {SITE.hours.saturday}
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-mint-300" />
              Nedelja: {SITE.hours.sunday}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800/60">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Sva prava zadržana.
          </p>
          <p>{SITE.doctor} — doktor stomatologije</p>
        </div>
      </div>
    </footer>
  );
}
