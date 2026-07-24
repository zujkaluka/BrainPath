import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE } from "../data/site";
import { PhoneIcon } from "./Icons";

const NAV_ITEMS = [
  { to: "/", label: "Početna" },
  { to: "/usluge", label: "Usluge" },
  { to: "/o-nama", label: "O nama" },
  { to: "/pitanja", label: "Česta pitanja" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" className="h-9 w-9" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-primary-800">Pesonident</span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-mint-600">
              Stomatološka ordinacija
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Glavna navigacija">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary-50 text-primary-700"
                    : "text-primary-900/70 hover:bg-sand-100 hover:text-primary-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phonePrimaryHref} className="btn-primary hidden !px-5 !py-2.5 text-sm lg:inline-flex">
            <PhoneIcon className="h-4 w-4" />
            {SITE.phonePrimary}
          </a>
          <a
            href={SITE.phonePrimaryHref}
            className="btn-primary !p-2.5 md:hidden"
            aria-label={`Pozovite ${SITE.phonePrimary}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-primary-800 hover:bg-sand-100 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-sand-200 bg-white md:hidden" aria-label="Mobilna navigacija">
          <div className="container-page flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-semibold ${
                    isActive ? "bg-primary-50 text-primary-700" : "text-primary-900/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
