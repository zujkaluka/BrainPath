export interface Service {
  slug: string;
  icon: string;
  title: string;
  short: string;
}

export const SERVICES: Service[] = [
  {
    slug: "pregled-i-savetovanje",
    icon: "search",
    title: "Pregled i savetovanje",
    short:
      "Detaljan pregled bez žurbe i jasan plan terapije — znate tačno šta vas čeka, bez iznenađenja.",
  },
  {
    slug: "lecenje-karijesa",
    icon: "shield",
    title: "Lečenje karijesa i bele plombe",
    short:
      "Bezbolno uklanjanje karijesa i estetske bele plombe koje se ne razlikuju od prirodnog zuba.",
  },
  {
    slug: "lecenje-kanala-beograd",
    icon: "pulse",
    title: "Lečenje kanala",
    short:
      "Spasavamo zub umesto da ga vadimo — savremeno endodontsko lečenje uz potpunu anesteziju.",
  },
  {
    slug: "protetika",
    icon: "crown",
    title: "Protetika",
    short:
      "Krunice, mostovi i proteze koje izgledaju prirodno i vraćaju sigurnost vašem osmehu.",
  },
  {
    slug: "izbeljivanje-zuba-beograd",
    icon: "sparkle",
    title: "Izbeljivanje zuba",
    short:
      "Blistav, ali prirodan osmeh — profesionalno izbeljivanje bez oštećenja gleđi.",
  },
  {
    slug: "lecenje-desni-beograd",
    icon: "leaf",
    title: "Lečenje desni i uklanjanje kamenca",
    short:
      "Zdrave desni su temelj zdravih zuba. Nežno uklanjanje kamenca i terapija parodontopatije.",
  },
];
