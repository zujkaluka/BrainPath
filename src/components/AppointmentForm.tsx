import { FormEvent, useState } from "react";
import { SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { CheckIcon, PhoneIcon } from "./Icons";

/**
 * Appointment request form. Submissions are handed to the clinic via a
 * mailto/tel fallback until a backend or CMS endpoint is connected —
 * swap `handleSubmit` for a POST when one exists.
 */
export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-mint-50 p-8 text-center shadow-soft">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-mint-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl text-primary-900">Hvala vam!</h3>
        <p className="mx-auto mt-2 max-w-sm text-primary-900/70">
          Primili smo vaš zahtev. Pozvaćemo vas u najkraćem roku da potvrdimo
          termin. Ako vam se žuri, pozovite nas odmah:
        </p>
        <a href={SITE.phonePrimaryHref} className="btn-primary mt-5">
          <PhoneIcon className="h-4 w-4" />
          {SITE.phonePrimary}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-primary-900">
          Ime i prezime
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="npr. Milica Petrović"
          className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-primary-950 placeholder:text-primary-900/40 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-primary-900">
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="npr. 06x xxx xxxx"
          className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-primary-950 placeholder:text-primary-900/40 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-primary-900">
          Željena usluga
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-primary-950 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
          defaultValue=""
        >
          <option value="">Nisam siguran/na — savetujte me</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-primary-900">
          Poruka <span className="font-normal text-primary-900/50">(opciono)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Opišite ukratko šta vas muči ili kada vam odgovara termin…"
          className="w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3 text-primary-950 placeholder:text-primary-900/40 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200"
        />
      </div>

      <button type="submit" className="btn-mint w-full">
        Pošaljite zahtev za termin
      </button>
      <p className="text-center text-xs text-primary-900/50">
        Pozvaćemo vas radi potvrde termina. Vaši podaci se koriste isključivo za
        zakazivanje.
      </p>
    </form>
  );
}
