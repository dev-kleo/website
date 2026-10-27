export type Copy = {
  lang: "en" | "ru";
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  kicker: string;
  h1: string;
  lede: string;
  cta: string;
  seeHow: string;
  facts: string[];
  chart: { top: string; product: string; illustration: string; ago: string; today: string; earlier: string; note: string; title: string; desc: string };
  stepsCount: string;
  howKicker: string;
  howTitle: string;
  steps: string[][];
  featuresKicker: string;
  featuresTitle: string;
  featuresCount: string;
  features: string[][];
  compareKicker: string;
  compareTitle: string;
  compareHead: string[];
  compareRows: string[][];
  compareNote: string;
  faqKicker: string;
  faqTitle: string;
  faqCount: string;
  faqs: string[][];
  finalTitle: string;
  finalText: string;
  finalCta: string;
  allWork: string;
  otherLangLabel: string;
  otherLangHref: string;
};

export const en: Copy = {
  lang: "en",
  path: "/ozon-price-tracker",
  title: "Ozon Price Tracker — Price History & Alerts for Chrome",
  description: "Track price history on Ozon, Wildberries and Yandex Market with a Chrome extension. Set target-price alerts. Your data stays in your browser.",
  breadcrumb: "Ozon Price Tracker",
  kicker: "Chrome extension · Published",
  h1: "Price history for Ozon, Wildberries & Yandex Market.",
  lede: "Price Tracker saves every price you check, shows how it moved, and flags the moment your target is reached. Your data stays in your browser.",
  cta: "Add to Chrome",
  seeHow: "See how it works",
  facts: ["Ozon", "Wildberries", "Yandex Market", "No account"],
  chart: { top: "Price history · 90 days", product: "Wireless headphones", illustration: "Illustration", ago: "90 days ago", today: "today", earlier: "earlier price 9 090", note: "Example data, not a real product.", title: "Price history chart for an example product", desc: "The price holds near 9 000 ₽ for most of 90 days, then drops to 7 490 ₽ at the end." },
  stepsCount: "3 steps",
  howKicker: "From first click to a good price",
  howTitle: "How it works",
  steps: [
    ["01", "Install the extension", "Add Price Tracker from the Chrome Web Store. It takes under a minute."],
    ["02", "Save a product", "Open a product on Ozon, Wildberries or Yandex Market and add it to your watchlist."],
    ["03", "Set a target, then wait", "Choose the price you would pay. The tracker keeps the history and flags the moment your target is reached."],
  ],
  featuresKicker: "Quietly useful",
  featuresTitle: "Everything needed. Nothing in the way.",
  featuresCount: "features",
  features: [
    ["A history behind every price", "See how a product’s price has moved instead of judging a single snapshot. Each update becomes part of a clear timeline."],
    ["Targets that wait for you", "Choose the price you are willing to pay. The tracker keeps watch and surfaces the moment your target is reached."],
    ["Folders and group charts", "Sort products into folders and compare a whole group on one chart, fullscreen when you need it."],
    ["One calm dashboard", "Review tracked products, current prices, changes, and alert status without reopening a trail of marketplace tabs."],
    ["Out of stock, flagged", "Products that become unavailable are marked in your list, so you stop checking pages that cannot help."],
    ["Your data stays portable", "Price history is stored locally in your browser and can be exported or imported as a JSON backup."],
  ],
  compareKicker: "Local-first vs cloud",
  compareTitle: "How it differs from cloud trackers",
  compareHead: ["", "Price Tracker", "Typical cloud tracker"],
  compareRows: [
    ["Where price history lives", "In your browser, on your device", "On the service’s servers"],
    ["Account", "Not required", "Usually required"],
    ["Backup", "JSON export and import", "Depends on the service"],
    ["Stores", "Ozon, Wildberries, Yandex Market", "Depends on the service"],
    ["Sync across devices", "No. Move history with a JSON backup", "Usually yes"],
  ],
  compareNote: "A general comparison. Features differ between services.",
  faqKicker: "Before you install",
  faqTitle: "Questions",
  faqCount: "questions",
  faqs: [
    ["How do I track a price on Ozon?", "Install the extension from the Chrome Web Store, open a product on Ozon and save it to your watchlist. The tracker records its price over time and shows the history as a chart."],
    ["Does it work with Wildberries and Yandex Market?", "Yes. Price Tracker supports Ozon, Wildberries and Yandex Market."],
    ["Can I get an alert when a price drops?", "Yes. Set a target price for a product and the tracker flags it when the price reaches your target."],
    ["Where is my price history stored?", "In your browser’s local database, on your device. You can export a JSON backup and import it again whenever you want."],
    ["Do I need an account?", "No. The extension works without an account."],
    ["Which browsers are supported?", "It is built for Google Chrome and installs from the Chrome Web Store."],
  ],
  finalTitle: "Stop checking. Start tracking.",
  finalText: "Let the price come to you, and know exactly what changed when it does.",
  finalCta: "Get Price Tracker",
  allWork: "View all work",
  otherLangLabel: "Читать по-русски",
  otherLangHref: "/ru/ozon-price-tracker",
};

export const ru: Copy = {
  lang: "ru",
  path: "/ru/ozon-price-tracker",
  title: "Отслеживание цен Ozon, Wildberries, Яндекс Маркет — Chrome",
  description: "Расширение для Chrome: история цен и графики на Ozon, Wildberries и Яндекс Маркете. Уведомления о целевой цене. Данные хранятся в вашем браузере.",
  breadcrumb: "Отслеживание цен на Ozon",
  kicker: "Расширение для Chrome · Опубликовано",
  h1: "Отслеживание цен на Ozon, Wildberries и Яндекс Маркете.",
  lede: "Price Tracker сохраняет цену каждого товара, показывает, как она менялась, и отмечает момент, когда достигнута ваша цель. Данные остаются в вашем браузере.",
  cta: "Установить в Chrome",
  seeHow: "Как это работает",
  facts: ["Ozon", "Wildberries", "Яндекс Маркет", "Без аккаунта"],
  chart: { top: "История цен · 90 дней", product: "Беспроводные наушники", illustration: "Иллюстрация", ago: "90 дней назад", today: "сегодня", earlier: "прежняя цена 9 090", note: "Пример данных, не реальный товар.", title: "График истории цены для примера товара", desc: "Почти 90 дней цена держится около 9 000 ₽, затем падает до 7 490 ₽." },
  stepsCount: "3 шага",
  howKicker: "От первого клика до хорошей цены",
  howTitle: "Как это работает",
  steps: [
    ["01", "Установите расширение", "Добавьте Price Tracker из Chrome Web Store. Это займёт меньше минуты."],
    ["02", "Сохраните товар", "Откройте товар на Ozon, Wildberries или Яндекс Маркете и добавьте его в список отслеживания."],
    ["03", "Задайте цель и ждите", "Выберите цену, за которую готовы купить. Трекер хранит историю и отметит момент, когда цель достигнута."],
  ],
  featuresKicker: "Ничего лишнего",
  featuresTitle: "Всё нужное. Ничего лишнего.",
  featuresCount: "возможностей",
  features: [
    ["История за каждой ценой", "Смотрите, как менялась цена товара, а не оценивайте один снимок. Каждое обновление попадает на понятный график."],
    ["Цель, которая ждёт вас", "Укажите цену, за которую готовы купить. Трекер следит за ней и отметит момент, когда цель достигнута."],
    ["Папки и графики по группам", "Раскладывайте товары по папкам и сравнивайте всю группу на одном графике, в том числе на весь экран."],
    ["Одна спокойная панель", "Товары, текущие цены, изменения и статус уведомлений в одном месте, без десятка открытых вкладок."],
    ["Нет в наличии — видно сразу", "Товары, которых нет в наличии, помечаются в списке, чтобы вы не проверяли страницы зря."],
    ["Данные остаются у вас", "История цен хранится локально в браузере. Её можно экспортировать и импортировать как резервную копию JSON."],
  ],
  compareKicker: "Локально или в облаке",
  compareTitle: "Чем отличается от облачных трекеров",
  compareHead: ["", "Price Tracker", "Типичный облачный трекер"],
  compareRows: [
    ["Где хранится история цен", "В вашем браузере, на вашем устройстве", "На серверах сервиса"],
    ["Аккаунт", "Не нужен", "Обычно нужен"],
    ["Резервная копия", "Экспорт и импорт JSON", "Зависит от сервиса"],
    ["Магазины", "Ozon, Wildberries, Яндекс Маркет", "Зависит от сервиса"],
    ["Синхронизация между устройствами", "Нет, историю переносят через JSON", "Обычно есть"],
  ],
  compareNote: "Общее сравнение. Возможности конкретных сервисов отличаются.",
  faqKicker: "Перед установкой",
  faqTitle: "Вопросы",
  faqCount: "вопросов",
  faqs: [
    ["Как отслеживать цену товара на Ozon?", "Установите расширение из Chrome Web Store, откройте товар на Ozon и добавьте его в список отслеживания. Трекер записывает цену со временем и показывает историю на графике."],
    ["Работает ли расширение с Wildberries и Яндекс Маркетом?", "Да. Price Tracker поддерживает Ozon, Wildberries и Яндекс Маркет."],
    ["Можно ли получить уведомление о снижении цены?", "Да. Задайте целевую цену для товара, и трекер отметит момент, когда цена её достигнет."],
    ["Где хранится история цен?", "В локальной базе вашего браузера, на вашем устройстве. Резервную копию JSON можно экспортировать и импортировать в любой момент."],
    ["Нужен ли аккаунт?", "Нет. Расширение работает без аккаунта."],
    ["В каких браузерах работает расширение?", "Оно создано для Google Chrome и устанавливается из Chrome Web Store."],
  ],
  finalTitle: "Хватит проверять. Начните отслеживать.",
  finalText: "Пусть цена сама придёт к вам, а вы будете знать, что именно изменилось.",
  finalCta: "Получить Price Tracker",
  allWork: "Все работы",
  otherLangLabel: "Read in English",
  otherLangHref: "/ozon-price-tracker",
};
