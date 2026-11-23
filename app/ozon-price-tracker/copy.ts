export type ChartCopy = { top: string; product: string; illustration: string; ago: string; today: string; earlier: string; note: string; title: string; desc: string };

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
} & ({ chart: ChartCopy; screenshot?: never } | { screenshot: { alt: string; caption: string }; chart?: never });

export const en: Copy = {
  lang: "en",
  path: "/ozon-price-tracker",
  title: "Ozon Price Tracker — Price History & Alerts for Chrome",
  description: "Track price history on Ozon, Wildberries and Yandex Market with a Chrome extension. Set target-price alerts. Your watchlist stays in your browser.",
  breadcrumb: "Ozon Price Tracker",
  kicker: "Chrome extension · Published",
  h1: "Price history for Ozon, Wildberries & Yandex Market.",
  lede: "Price Tracker saves every price you check, shows how it moved, and alerts you when a price check finds your target has been reached. Your watchlist stays in your browser.",
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
    ["Stores", "Ozon, Wildberries, Yandex Market, AliExpress Russia", "Depends on the service"],
    ["Sync across devices", "No. Move history with a JSON backup", "Usually yes"],
  ],
  compareNote: "A general comparison. Features differ between services.",
  faqKicker: "Before you install",
  faqTitle: "Questions",
  faqCount: "questions",
  faqs: [
    ["How do I track a price on Ozon?", "Install the extension from the Chrome Web Store, open a product on Ozon and save it to your watchlist. The tracker records its price over time and shows the history as a chart."],
    ["Does it work with Wildberries and Yandex Market?", "Yes. Price Tracker supports Ozon, Wildberries and Yandex Market. AliExpress Russia is also available if you enable it in the extension settings."],
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
  title: "История цен на Ozon — Price Tracker от Dey Intelligence",
  description: "Отслеживайте цены на Ozon в Chrome. Price Tracker от Dey Intelligence показывает историю обычной цены и цены с Ozon Картой и уведомляет о достижении цели.",
  breadcrumb: "История цен на Ozon",
  kicker: "Расширение для Chrome",
  h1: "Как отследить цену товара на Ozon",
  lede: "Price Tracker от Dey Intelligence — расширение для Chrome, которое записывает цены выбранных товаров на Ozon. На графике можно сравнить обычную цену и цену с Ozon Картой, если для товара доступны обе.",
  cta: "Установить из Chrome Web Store",
  seeHow: "Как это работает",
  facts: ["Ozon", "Wildberries", "Яндекс Маркет", "AliExpress Россия", "Без регистрации"],
  screenshot: { alt: "Карточка товара Ozon в расширении с графиком за 90 дней и подсказкой с ценой на выбранную дату", caption: "График истории цены в расширении. На скриншоте демонстрационные данные." },
  stepsCount: "3 шага",
  howKicker: "От добавления товара до сравнения цен",
  howTitle: "Как посмотреть историю цен на Ozon",
  steps: [
    ["01", "Установите расширение", "Установите Price Tracker от Dey Intelligence из Chrome Web Store."],
    ["02", "Добавьте товар с Ozon", "Откройте страницу нужного товара на Ozon и нажмите «Отслеживать цену». Расширение сохранит первую распознанную цену при добавлении товара. Фоновые проверки работают, пока запущен Chrome."],
    ["03", "Откройте график в расширении", "Нажмите на значок расширения в Chrome и выберите товар в списке «Товары». На графике можно выбрать 30 дней, 90 дней или весь период. Чтобы показать или скрыть линию цены без карты, откройте настройки расширения и измените параметр «Показывать обычную цену»."],
  ],
  featuresKicker: "Возможности расширения",
  featuresTitle: "Сравнение цен и уведомления",
  featuresCount: "возможностей",
  features: [
    ["С Ozon Картой и без неё", "Если расширение распознало обе цены, график показывает их отдельными линиями. При наведении на точку видны цена и дата."],
    ["Уведомления о целевой цене", "В карточке товара нажмите «Уведомить, если ниже…» и задайте целевую цену. Если уведомления включены, расширение сообщит, когда при проверке обнаружит цену на уровне цели или ниже."],
    ["Папки и общие графики", "Собирайте товары в папки, чтобы сравнить их цены на одном графике. График можно развернуть на весь экран."],
    ["Четыре маркетплейса", "Кроме Ozon, расширение поддерживает Wildberries, Яндекс Маркет и AliExpress Россия. Доступ к AliExpress можно включить в настройках расширения."],
    ["Наличие товара", "Если расширение определит, что товар закончился, в списке появится отметка «Нет в наличии»."],
    ["Резервная копия", "История цен и список товаров хранятся в браузере. Их можно экспортировать в файл JSON и затем импортировать."],
  ],
  compareKicker: "Хранение данных",
  compareTitle: "Где хранится история цен",
  compareHead: ["", "Price Tracker", "Облачные трекеры"],
  compareRows: [
    ["История цен", "В браузере на вашем устройстве", "На серверах сервиса"],
    ["Регистрация", "Не требуется", "Зависит от сервиса"],
    ["Резервная копия", "Экспорт и импорт JSON", "Зависит от сервиса"],
    ["Маркетплейсы", "Ozon, Wildberries, Яндекс Маркет, AliExpress Россия", "Зависит от сервиса"],
  ],
  compareNote: "Функция «Делиться ценами» по умолчанию выключена. Если её включить, расширение передаёт на сервер трекера название магазина, ID товара и публичную цену без карты.",
  faqKicker: "Перед установкой",
  faqTitle: "Частые вопросы",
  faqCount: "вопросов",
  faqs: [
    ["Когда появляется история цен на Ozon?", "Собственная история начинается с первой цены, сохранённой при добавлении товара. График появится, когда будет достаточно данных. Если включить «Делиться ценами», на графике может появиться история обычной цены, собранная другими пользователями."],
    ["Обновляются ли цены при закрытом Chrome?", "Для фоновых проверок Chrome должен работать. Если браузер полностью закрыт, расширение не проверяет цены."],
    ["Как посмотреть цену без Ozon Карты?", "В настройках расширения включите «Показывать обычную цену». Если для товара есть данные по обеим ценам, на графике появится линия «Без карты» рядом с линией «С Ozon Картой»."],
    ["Нужна ли регистрация?", "Регистрация для работы с расширением не нужна."],
    ["Какие ещё магазины поддерживаются?", "Price Tracker от Dey Intelligence также работает с Wildberries, Яндекс Маркетом и AliExpress Россия. Поддержка AliExpress включается отдельно в настройках."],
  ],
  finalTitle: "Начните отслеживать цены на Ozon",
  finalText: "Установите расширение и добавьте товар, за ценой которого хотите следить.",
  finalCta: "Установить из Chrome Web Store",
  allWork: "Все проекты",
  otherLangLabel: "Read in English",
  otherLangHref: "/ozon-price-tracker",
};
