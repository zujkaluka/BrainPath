import Seo from "../components/Seo";
import CtaBand from "../components/CtaBand";
import { SITE } from "../data/site";
import { CheckIcon, HeartIcon } from "../components/Icons";

const VALUES = [
  {
    title: "Pacijent na prvom mestu",
    text: "Prvo slušamo, pa tek onda lečimo. Svaki plan terapije pravimo zajedno sa vama — u vašem tempu i po vašim mogućnostima.",
  },
  {
    title: "Bez straha i bez bola",
    text: "Strah od zubara shvatamo ozbiljno. Zato objašnjavamo svaki korak, radimo nežno i nikada ne požurujemo pacijenta.",
  },
  {
    title: "Poštenje i poverenje",
    text: "Predlažemo samo ono što je zaista potrebno. Cene znate unapred, a drugo mišljenje kod nas nikada nije uvreda.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="O nama — 35 godina brige o osmehu | Pesonident Beograd"
        description="Priča o stomatološkoj ordinaciji Pesonident: 35 godina porodične brige o pacijentima u centru Beograda. Upoznajte dr Marjanu Janković."
      />

      <section className="bg-gradient-to-b from-primary-50 to-sand-50">
        <div className="container-page py-14 text-center sm:py-20">
          <p className="section-eyebrow">Naša priča</p>
          <h1 className="section-title mx-auto max-w-3xl !text-4xl sm:!text-5xl">
            {SITE.years} godina jednog obećanja: kod nas se ne trpi ni bol, ni strah
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-900/70">
            Pesonident nije velika klinika sa šalterima i brojevima. To je
            ordinacija u kojoj vas doktorka poznaje po imenu — i pamti vašu
            priču.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl text-primary-900">Kako je sve počelo</h2>
          <p className="mt-4 leading-relaxed text-primary-900/80">
            Pre više od tri decenije, dr Marjana Janković otvorila je malu
            ordinaciju u centru Beograda sa jednostavnom idejom: da stomatolog
            bude neko koga se pacijenti ne plaše, već neko kome se vraćaju sa
            osmehom.
          </p>
          <p className="mt-3 leading-relaxed text-primary-900/80">
            Od tada je kroz ordinaciju na Zelenom Vencu prošlo više generacija
            istih porodica — roditelji su dovodili decu, a ta deca danas dovode
            svoju. Upravo to je najveće priznanje našem radu.
          </p>
          <p className="mt-3 leading-relaxed text-primary-900/80">
            Danas, sa {SITE.years} godina iskustva u opštoj stomatologiji,
            protetici, izbeljivanju zuba i lečenju desni, doktorka Marjana i
            dalje svakog pacijenta dočekuje isto: strpljivo, toplo i bez žurbe.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-3xl bg-primary-800 p-8 text-white shadow-lift sm:p-10">
            <HeartIcon className="h-10 w-10 text-mint-300" />
            <p className="mt-5 font-display text-2xl leading-snug">
              „Najlepši trenutak u ovom poslu je kada pacijent koji je drhtao u
              čekaonici izađe iz ordinacije — i zakaže sledeću kontrolu bez
              razmišljanja."
            </p>
            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-primary-200">
              {SITE.doctor}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Naše vrednosti</p>
          <h2 className="section-title">U šta verujemo</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl bg-white p-7 shadow-soft">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-mint-600 text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-primary-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-900/70">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Postanite deo naše porodice pacijenata"
        subtitle="Prvi korak je najlakši — jedan poziv ili poruka, i termin je vaš."
      />
    </>
  );
}
