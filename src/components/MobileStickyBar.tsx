import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { CalendarIcon, PhoneIcon } from "./Icons";

/** Sticky bottom call-to-action bar, mobile only. */
export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3 px-4 py-3">
        <a href={SITE.phonePrimaryHref} className="btn-primary !py-3 text-sm">
          <PhoneIcon className="h-4 w-4" />
          Pozovi
        </a>
        <Link to="/kontakt#zakazivanje" className="btn-mint !py-3 text-sm">
          <CalendarIcon className="h-4 w-4" />
          Zakaži
        </Link>
      </div>
    </div>
  );
}
