// Facts from veon/client.json only (C-003, C-004, C-005, C-008, C-009, C-021, C-022, C-024).
export const brand = "АвтоДом";

export interface Phone { code: string; operator: string; tel: string; display: string; }
export const tail = "661 72 72";
export const phones: Phone[] = [
  { code: "095", operator: "Vodafone", tel: "+380956617272", display: "+380 95 661 72 72" },
  { code: "098", operator: "Київстар", tel: "+380986617272", display: "+380 98 661 72 72" },
  { code: "063", operator: "lifecell", tel: "+380636617272", display: "+380 63 661 72 72" },
];

export const email = "info@autodom.kiev.ua";
export const address = {
  street: "вул. Електриків, 10",
  short: "Електриків, 10",
  postal: "04071",
  city: "Київ",
  district: "Поділ",
};
export const mapQuery = encodeURIComponent("вул. Електриків, 10, Київ, 04071");
export const routeUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&hl=uk&z=16&output=embed`;

export const futureNote = "Розділ у розробці";

export interface Group { id: string; title: string; about: string; items: string[]; cta: string; }
export const groups: Group[] = [
  {
    id: "repair",
    title: "Ремонт і ТО",
    about: "Від діагностики до коробки передач",
    items: ["Діагностика автомобіля", "Ремонт двигуна", "Ремонт ходової", "Ремонт підвіски", "Ремонт рульових рейок", "Заміна ГРМ: ремені й ланцюги", "Заміна масла і рідин", "Ремонт АКПП", "Розвал-сходження 3D"],
    cta: "ремонту і ТО",
  },
  {
    id: "electric",
    title: "Електрика і клімат",
    about: "Проводка, світло, кондиціонер",
    items: ["Автоелектрик", "Налаштування світла фар", "Заправка кондиціонерів"],
    cta: "електрики",
  },
  {
    id: "body",
    title: "Кузов і фарбування",
    about: "Після ДТП і дрібних пошкоджень",
    items: ["Ремонт кузова", "Рихтування", "Фарбування авто"],
    cta: "кузова",
  },
  {
    id: "care",
    title: "Догляд",
    about: "Щоб авто виглядало доглянутим",
    items: ["Детейлінг", "Полірування авто", "Обклеювання плівкою", "Автомийка"],
    cta: "догляду",
  },
  {
    id: "wheels",
    title: "Шини і диски",
    about: "Колеса — від монтажу до дисків",
    items: ["Шиномонтаж", "Ремонт дисків"],
    cta: "шин і дисків",
  },
];

export const futureSections = ["Про компанію", "Відгуки", "Акції та знижки", "Запчастини", "Страхування", "Блог", "Вакансії", "Політика конфіденційності"];
