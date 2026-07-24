import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Stranica nije pronađena | Pesonident" description="Tražena stranica ne postoji." />
      <section className="container-page py-24 text-center">
        <p className="font-display text-6xl text-primary-200">404</p>
        <h1 className="mt-4 font-display text-3xl text-primary-900">Stranica nije pronađena</h1>
        <p className="mx-auto mt-3 max-w-md text-primary-900/70">
          Izgleda da ova stranica ne postoji. Vratite se na početnu i pronađite
          ono što vas zanima.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Nazad na početnu
        </Link>
      </section>
    </>
  );
}
