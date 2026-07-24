export interface ServiceDetail {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heading: string;
  intro: string;
  paragraphs: string[];
  benefits: string[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "pregled-i-savetovanje": {
    slug: "pregled-i-savetovanje",
    seoTitle: "Stomatolog Beograd centar — pregled i savetovanje | Pesonident",
    seoDescription:
      "Tražite stomatologa u centru Beograda? Pesonident na Zelenom Vencu nudi detaljan i bezbolan pregled uz plan terapije bez skrivenih troškova. Zakažite: 063 8040394.",
    heading: "Pregled i savetovanje",
    intro:
      "Svaki zdrav osmeh počinje jednim opuštenim razgovorom. Prvi pregled u Pesonidentu je bezbolan, temeljan i bez žurbe.",
    paragraphs: [
      "Ako tražite stomatologa u centru Beograda kome možete da verujete, prvi pregled je pravi način da nas upoznate. Dr Marjana Janković detaljno pregleda zube i desni, sasluša vaše brige i objasni stanje jednostavnim, razumljivim rečima.",
      "Na kraju pregleda dobijate jasan plan terapije — šta je hitno, šta može da sačeka i koliko šta košta. Ništa se ne radi bez vašeg dogovora i ništa vas neće iznenaditi.",
      "Ordinacija se nalazi u TC Zeleni Venac, na dva koraka od stanica gradskog prevoza, pa pregled lako uklopite i u pauzu za ručak.",
    ],
    benefits: [
      "Potpuno bezbolan prvi pregled",
      "Jasan plan terapije i cena unapred",
      "Termin u roku od nekoliko dana",
      "Lokacija u samom centru Beograda",
    ],
  },
  "lecenje-karijesa": {
    slug: "lecenje-karijesa",
    seoTitle: "Lečenje karijesa i bele plombe Beograd | Pesonident",
    seoDescription:
      "Bezbolno lečenje karijesa i estetske bele plombe u centru Beograda. 35 godina iskustva, nežan pristup. Pozovite Pesonident: 063 8040394.",
    heading: "Lečenje karijesa i bele plombe",
    intro:
      "Karijes lečimo dok je mali — bezbolno, brzo i sa plombom koja se ne razlikuje od vašeg prirodnog zuba.",
    paragraphs: [
      "Karijes je najčešći razlog posete stomatologu, a odlaganje ga samo produbljuje. U Pesonidentu karijes uklanjamo uz savremenu anesteziju, tako da tokom intervencije ne osećate ništa.",
      "Koristimo kvalitetne kompozitne (bele) plombe koje se bojom i oblikom potpuno stapaju sa zubom. Rezultat je zub koji izgleda i funkcioniše kao pre karijesa.",
      "Jedna plomba obično traje 30–45 minuta — a mnogi naši pacijenti kažu da je najteži deo bio odlučiti se da dođu.",
    ],
    benefits: [
      "Intervencija bez bola uz anesteziju",
      "Estetske bele plombe vrhunskog kvaliteta",
      "Gotovo za jednu posetu",
      "Savet za sprečavanje novog karijesa",
    ],
  },
  "lecenje-kanala-beograd": {
    slug: "lecenje-kanala-beograd",
    seoTitle: "Lečenje kanala Beograd — bezbolna endodoncija | Pesonident",
    seoDescription:
      "Lečenje kanala korena zuba u Beogradu bez bola. Spasavamo zub umesto vađenja — 35 godina iskustva u centru grada. Pozovite: 063 8040394.",
    heading: "Lečenje kanala",
    intro:
      "Zub koji boli ne mora da se vadi. Lečenjem kanala spasavamo vaš prirodni zub — potpuno bezbolno.",
    paragraphs: [
      "Lečenje kanala (endodoncija) ima nezasluženo lošu reputaciju. Uz savremenu anesteziju i strpljiv rad, kod nas je ova intervencija jednako neprijatna kao i obična plomba — dakle, nimalo.",
      "Kada se upala živca ne leči, jedina alternativa je vađenje zuba i skupa nadoknada. Zato uvek prvo pokušavamo da sačuvamo vaš prirodni zub — on je nezamenljiv.",
      "Lečenje kanala u Pesonidentu obično traje jednu do dve posete, u zavisnosti od stanja zuba. Nakon terapije zub se zatvara plombom ili krunicom i služi vas godinama.",
    ],
    benefits: [
      "Bezbolan tretman uz punu anesteziju",
      "Čuvamo prirodni zub od vađenja",
      "Završeno u 1–2 posete",
      "35 godina endodontskog iskustva",
    ],
  },
  protetika: {
    slug: "protetika",
    seoTitle: "Protetika Beograd — krunice, mostovi, proteze | Pesonident",
    seoDescription:
      "Zubna protetika u centru Beograda: krunice, mostovi i proteze prirodnog izgleda. Dr Marjana Janković, 35 godina iskustva. Tel: 063 8040394.",
    heading: "Protetika",
    intro:
      "Nedostatak zuba nije samo estetski problem. Protetika vraća funkciju, samopouzdanje i prirodan izgled osmeha.",
    paragraphs: [
      "Protetika je jedna od užih specijalnosti dr Marjane Janković. Bilo da vam nedostaje jedan zub ili više njih, zajedno biramo rešenje koje odgovara vašim potrebama i mogućnostima — krunicu, most ili protezu.",
      "Svaka nadoknada se izrađuje precizno po meri, sa posebnom pažnjom na prirodan izgled: boja, oblik i položaj usklađuju se sa vašim licem i preostalim zubima.",
      "Rezultat je osmeh za koji niko ne bi rekao da nije u potpunosti vaš — i žvakanje bez nelagodnosti.",
    ],
    benefits: [
      "Krunice, mostovi i proteze po meri",
      "Prirodan izgled i udobnost",
      "Precizna izrada i strpljivo prilagođavanje",
      "Rešenja za svaki budžet",
    ],
  },
  "izbeljivanje-zuba-beograd": {
    slug: "izbeljivanje-zuba-beograd",
    seoTitle: "Izbeljivanje zuba Beograd — blistav osmeh | Pesonident",
    seoDescription:
      "Profesionalno izbeljivanje zuba u Beogradu, centar — bez oštećenja gleđi i bez preosetljivosti. Prirodno beo osmeh. Pesonident: 063 8040394.",
    heading: "Izbeljivanje zuba",
    intro:
      "Kafa, čaj i godine ostavljaju trag. Profesionalno izbeljivanje ga briše — bezbedno i bez oštećenja gleđi.",
    paragraphs: [
      "Izbeljivanje zuba je najbrži način da osvežite osmeh. U Pesonidentu koristimo proverene profesionalne preparate koji izbeljuju zube za nekoliko nijansi, a ne oštećuju gleđ niti izazivaju trajnu preosetljivost.",
      "Pre izbeljivanja doktorka uvek proveri stanje zuba i desni i ukloni kamenac — tako je rezultat ravnomeran i dugotrajan. Sam tretman traje oko sat vremena.",
      "Cilj nije neprirodno bela „holivudska“ boja, već blistava, zdrava verzija vašeg osmeha. Upravo po tome se profesionalno izbeljivanje razlikuje od kućnih eksperimenata.",
    ],
    benefits: [
      "Vidljivo beliji zubi već posle prvog tretmana",
      "Bez oštećenja gleđi",
      "Prirodan, a ne veštački rezultat",
      "Tretman traje oko sat vremena",
    ],
  },
  "lecenje-desni-beograd": {
    slug: "lecenje-desni-beograd",
    seoTitle: "Lečenje desni Beograd — parodontopatija i kamenac | Pesonident",
    seoDescription:
      "Krvarenje desni, kamenac, parodontopatija? Nežno i temeljno lečenje desni u centru Beograda. Pesonident, 35 godina iskustva: 063 8040394.",
    heading: "Lečenje desni i uklanjanje kamenca",
    intro:
      "Zdrave desni su temelj svakog zdravog osmeha. Krvarenje pri pranju zuba nije normalno — i lečivo je.",
    paragraphs: [
      "Problemi sa desnima razvijaju se tiho: prvo krvarenje, pa povlačenje desni, a na kraju i klaćenje zuba. Dobra vest je da se na vreme otkrivena parodontopatija uspešno drži pod kontrolom.",
      "Terapiju počinjemo nežnim, ali temeljnim uklanjanjem kamenca i čišćenjem parodontalnih džepova. Doktorka vas zatim nauči pravilnoj nezi kod kuće — jer se bitka za zdrave desni dobija svakodnevnim navikama.",
      "Upravo zbog pristupa desnima mnogi pacijenti dolaze u Pesonident po preporuci — pročitajte iskustvo našeg pacijenta Vuka na početnoj strani.",
    ],
    benefits: [
      "Zaustavljamo krvarenje i povlačenje desni",
      "Nežno ultrazvučno uklanjanje kamenca",
      "Plan kućne nege po meri",
      "Redovne kontrole za trajan rezultat",
    ],
  },
};
