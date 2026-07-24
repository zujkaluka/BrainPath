import { Link } from "react-router-dom";
import { Service } from "../data/services";
import { ServiceIcon } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/usluge/${service.slug}`}
      className="group flex flex-col rounded-3xl bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-lg font-bold text-primary-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-primary-900/70">{service.short}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-mint-600 group-hover:text-mint-700">
        Saznajte više
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </Link>
  );
}
