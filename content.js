/* =====================================================================
   ALL THE TEXT ON THE WEBSITE LIVES IN THIS FILE.
   ---------------------------------------------------------------------
   How to edit:
   - Change only the words inside the "quotes".
   - Keep the quotes, commas and brackets exactly where they are.
   - Inside a text, don't type a plain " character. Use «ёлочки» or ’ instead.
   - Words wrapped in *stars* get the yellow highlighter on the website.
   - An empty "" hides that thing (for example an empty whatsapp: "").
   - After saving on GitHub, the website updates in about 1 minute.
   ===================================================================== */

window.SITE = {

  /* ---------- SETTINGS (same for both languages) ---------- */
  settings: {
    // Paste the Google Calendar "Appointment schedule" booking link here.
    // Best: in Google Calendar open the schedule > Share > "Website embed"
    // and copy only the link inside src="..." (it starts with
    // https://calendar.google.com/calendar/appointments/...).
    // Then the calendar shows right on the page. Any other booking link
    // works too, but then it opens in a new tab.
    bookingLink: "",

    // Contact details. Leave "" to hide one.
    email: "hello@englishwithjelena.net",
    whatsapp: "",          // e.g. "+44 7700 900123"
    telegram: "",          // username without @, e.g. "jelenaskudra"
    instagram: "",         // username without @

    // Show the prices section? true = show, false = hide
    showPrices: false,

    // Show the free level test? true / false
    showTest: true
  },

  /* ---------- FREE LEVEL TEST QUESTIONS (in English for both languages) ----------
     "answer" is the number of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.
     Questions go from easy (A1) to hard (C2). Score → level is set in "testLevels" below. */
  testQuestions: [
    { q: "She ___ a teacher.", options: ["am", "is", "are", "be"], answer: 1 },
    { q: "I ___ coffee every morning.", options: ["drink", "drinks", "drinking", "am drink"], answer: 0 },
    { q: "There ___ two books on the table.", options: ["is", "be", "are", "am"], answer: 2 },
    { q: "We ___ to London last summer.", options: ["go", "goes", "have gone", "went"], answer: 3 },
    { q: "This test is ___ than the last one.", options: ["easier", "more easy", "easy", "easiest"], answer: 0 },
    { q: "I’ve lived here ___ 2019.", options: ["for", "since", "from", "during"], answer: 1 },
    { q: "If it rains tomorrow, we ___ at home.", options: ["stay", "would stay", "will stay", "stayed"], answer: 2 },
    { q: "The castle ___ in the 12th century.", options: ["built", "has built", "is building", "was built"], answer: 3 },
    { q: "I’m not used to ___ up so early.", options: ["getting", "get", "got", "be getting"], answer: 0 },
    { q: "By the time we arrived, the film ___.", options: ["already started", "had already started", "has already started", "was already starting"], answer: 1 },
    { q: "I wish I ___ more time to travel.", options: ["have", "would have", "had", "will have"], answer: 2 },
    { q: "She suggested ___ the museum first.", options: ["to visit", "visit", "we visiting", "visiting"], answer: 3 },
    { q: "Not until the treaty was signed ___ return home.", options: ["could the soldiers", "the soldiers could", "the soldiers can", "did the soldiers could"], answer: 0 },
    { q: "Had I known about the delay, I ___ earlier.", options: ["would leave", "would have left", "had left", "will have left"], answer: 1 },
    { q: "His explanation was so confusing that nobody could ___ what he meant.", options: ["make up", "make over", "make out", "make off"], answer: 2 },
    { q: "The minister’s speech was ___ with references to Roman history.", options: ["abundant", "teeming", "riddled", "replete"], answer: 3 },
    { q: "She has a real ___ for languages: she picked up Latvian in a year.", options: ["flair", "flare", "sense", "gift to"], answer: 0 },
    { q: "Little ___ that the letter would change history.", options: ["he knew", "did he know", "he did know", "knew he"], answer: 1 }
  ],
  // Minimum correct answers for each level (out of 18)
  testLevels: [
    { min: 0,  code: "A1" }, { min: 4,  code: "A2" }, { min: 7,  code: "B1" },
    { min: 10, code: "B2" }, { min: 13, code: "C1" }, { min: 16, code: "C2" }
  ],

  /* ================= ENGLISH ================= */
  en: {
    meta: {
      title: "Jelena Skudra · English teacher online for all ages",
      description: "Online English lessons with Jelena Skudra, MA in History from a UK university. Lessons for children, teens and adults, built around your interests. Book a lesson in a few clicks."
    },
    nav: { about: "About", lessons: "Lessons", levels: "Levels", book: "Book a lesson" },

    hero: {
      eyebrow: "Online English lessons · all ages",
      title: "English lessons built around *what you love*",
      text: "I’m Jelena, an English teacher with a Master’s degree in History from a UK university. We learn through the things that interest you: films, games, travel, history, work, or the exam you’re aiming for.",
      bookButton: "Book a lesson",
      moreButton: "How lessons work",
      facts: ["MA in History, UK", "Children, teens and adults", "Online, wherever you are"]
    },

    about: {
      title: "About me",
      note: "Studied & graduated in the UK",
      paragraphs: [
        "I studied in the United Kingdom and finished my Master’s degree in History at one of the country’s top universities. Living and studying there taught me the English people actually speak, not only the English in textbooks.",
        "My lessons start with you. If you love football, we read match reports. If you’re into history, we explore the stories behind English words and places. Grammar and vocabulary come in naturally, through topics you want to talk about.",
        "I teach children, teenagers and adults, from complete beginners to advanced learners."
      ]
    },

    steps: {
      title: "How lessons work",
      items: [
        { title: "Book a first lesson", text: "Pick a free time in my online calendar. You get a confirmation email and a video link straight away." },
        { title: "We find your topics", text: "We talk about your goals and interests, and I check your level in a relaxed way, with no tests to fear." },
        { title: "Lessons made for you", text: "Every lesson is planned around your interests, with materials and homework you’ll actually enjoy." }
      ]
    },

    audiences: {
      title: "Who I teach",
      items: [
        { title: "Children", text: "Stories, games and songs. Short, lively lessons that keep young learners curious." },
        { title: "Teenagers", text: "School support and exam preparation, using music, games and series they already like." },
        { title: "Adults", text: "Speaking confidence for work, travel or life abroad, at your own pace." }
      ]
    },

    levels: {
      title: "Every level, from first words to fluent",
      text: "Levels follow the European scale (CEFR). Not sure where you are? We’ll find out together in the first lesson.",
      items: [
        { code: "A1", name: "Beginner" },
        { code: "A2", name: "Elementary" },
        { code: "B1", name: "Intermediate" },
        { code: "B2", name: "Upper-intermediate" },
        { code: "C1", name: "Advanced" },
        { code: "C2", name: "Proficient" }
      ]
    },

    languages: {
      title: "Languages are my passion",
      text: "Besides English, I speak Russian, Ukrainian, Latvian and Spanish, each at a different level. So I know from my own experience what really helps when you learn a new language.",
      // "level" is optional. Leave "" to show only the language name.
      items: [
        { name: "Русский", level: "" },
        { name: "Українська", level: "" },
        { name: "Latviešu", level: "" },
        { name: "Español", level: "" }
      ]
    },

    word: {
      label: "A word with a history",
      word: "quarantine",
      origin: "from Venetian Italian quaranta giorni, «forty days»",
      story: "During plague outbreaks in the 14th and 15th centuries, ships arriving in Venice had to wait forty days before anyone could come ashore. The number has gone from the word, but the waiting stayed."
    },

    prices: {
      title: "Prices",
      items: [
        { name: "Trial lesson, 30 min", price: "" },
        { name: "Lesson, 60 min", price: "" },
        { name: "Package of 10 lessons", price: "" }
      ]
    },

    book: {
      title: "Book a lesson",
      text: "Choose a free time in my calendar. The lesson goes straight into both our calendars, with a video link and a reminder.",
      button: "Open my calendar",
      soon: "Online booking opens very soon. For now, write to me and we’ll find a time.",
      contactTitle: "Or write to me",
      copy: "Copy",
      copied: "Copied"
    },

    test: {
      nav: "Free test",
      eyebrow: "Free · 3 minutes · no sign-up",
      title: "What’s your English level? *Find out now*",
      text: "18 quick questions, from beginner to advanced. You’ll see your estimated level (A1–C2) straight away.",
      start: "Start the test",
      question: "Question",
      of: "of",
      next: "Next",
      resultLabel: "Your estimated level",
      scoreText: "correct answers",
      resultNote: "This is a quick estimate of grammar and vocabulary. In the first lesson we’ll also look at speaking and listening, and plan how to reach your next level.",
      book: "Book a lesson to reach the next level",
      send: "Send my result to Jelena",
      again: "Take the test again",
      messageText: "Hello Jelena! I took the English test on your website. My result: "
    },

    footer: "English teacher online"
  },

  /* ================= РУССКИЙ ================= */
  ru: {
    meta: {
      title: "Елена Скудра · преподаватель английского онлайн для всех возрастов",
      description: "Уроки английского онлайн с Еленой Скудрой, магистром истории британского университета. Занятия для детей, подростков и взрослых, построенные на ваших интересах. Запись на урок в пару кликов."
    },
    nav: { about: "Обо мне", lessons: "Уроки", levels: "Уровни", book: "Записаться" },

    hero: {
      eyebrow: "Английский онлайн · для любого возраста",
      title: "Английский через *то, что вам интересно*",
      text: "Меня зовут Елена, я преподаватель английского и магистр истории британского университета. Мы учим язык через то, что вам нравится: фильмы, игры, путешествия, историю, работу или экзамен, к которому вы готовитесь.",
      bookButton: "Записаться на урок",
      moreButton: "Как проходят уроки",
      facts: ["Магистр истории, Великобритания", "Дети, подростки и взрослые", "Онлайн, где бы вы ни были"]
    },

    about: {
      title: "Обо мне",
      note: "Училась в Великобритании",
      paragraphs: [
        "Я училась в Великобритании и окончила магистратуру по истории в одном из ведущих университетов страны. Жизнь и учёба там научили меня тому английскому, на котором говорят на самом деле, а не только тому, что в учебниках.",
        "Мои уроки начинаются с вас. Любите футбол — читаем репортажи о матчах. Интересуетесь историей — разбираем истории английских слов и мест. Грамматика и лексика приходят сами, через темы, о которых хочется говорить.",
        "Я занимаюсь с детьми, подростками и взрослыми — от полного нуля до продвинутого уровня."
      ]
    },

    steps: {
      title: "Как проходят уроки",
      items: [
        { title: "Запишитесь на первый урок", text: "Выберите свободное время в моём онлайн-календаре. Письмо с подтверждением и ссылка на видеозвонок придут сразу." },
        { title: "Находим ваши темы", text: "Обсуждаем ваши цели и интересы, а я спокойно определяю ваш уровень — без страшных тестов." },
        { title: "Уроки под вас", text: "Каждый урок строится вокруг ваших интересов: материалы и домашние задания, которые действительно интересно делать." }
      ]
    },

    audiences: {
      title: "С кем я занимаюсь",
      items: [
        { title: "Дети", text: "Истории, игры и песни. Короткие живые уроки, на которых детям интересно." },
        { title: "Подростки", text: "Помощь со школой и подготовка к экзаменам — через музыку, игры и сериалы, которые им уже нравятся." },
        { title: "Взрослые", text: "Уверенная разговорная речь для работы, путешествий или жизни за границей — в вашем темпе." }
      ]
    },

    levels: {
      title: "Любой уровень — от первых слов до свободной речи",
      text: "Уровни по европейской шкале (CEFR). Не знаете свой уровень? Определим вместе на первом уроке.",
      items: [
        { code: "A1", name: "Начальный" },
        { code: "A2", name: "Элементарный" },
        { code: "B1", name: "Средний" },
        { code: "B2", name: "Выше среднего" },
        { code: "C1", name: "Продвинутый" },
        { code: "C2", name: "Свободный" }
      ]
    },

    languages: {
      title: "Языки — моё большое увлечение",
      text: "Кроме английского, я говорю на русском, украинском, латышском и испанском — на разном уровне. Поэтому по себе знаю, что действительно помогает выучить новый язык.",
      items: [
        { name: "Русский", level: "" },
        { name: "Українська", level: "" },
        { name: "Latviešu", level: "" },
        { name: "Español", level: "" }
      ]
    },

    word: {
      label: "Слово с историей",
      word: "quarantine",
      origin: "от венецианского quaranta giorni — «сорок дней»",
      story: "Во время эпидемий чумы в XIV–XV веках корабли, приходившие в Венецию, должны были ждать сорок дней, прежде чем кто-то мог сойти на берег. Число из слова исчезло, а ожидание осталось."
    },

    prices: {
      title: "Цены",
      items: [
        { name: "Пробный урок, 30 мин", price: "" },
        { name: "Урок, 60 мин", price: "" },
        { name: "Пакет из 10 уроков", price: "" }
      ]
    },

    book: {
      title: "Записаться на урок",
      text: "Выберите свободное время в моём календаре. Урок сразу появится и в вашем, и в моём календаре, со ссылкой на видеозвонок и напоминанием.",
      button: "Открыть календарь",
      soon: "Онлайн-запись откроется совсем скоро. А пока напишите мне, и мы подберём время.",
      contactTitle: "Или напишите мне",
      copy: "Копировать",
      copied: "Скопировано"
    },

    test: {
      nav: "Бесплатный тест",
      eyebrow: "Бесплатно · 3 минуты · без регистрации",
      title: "Какой у вас уровень английского? *Узнайте сейчас*",
      text: "18 коротких вопросов — от начального уровня до продвинутого. Примерный уровень (A1–C2) вы увидите сразу.",
      start: "Начать тест",
      question: "Вопрос",
      of: "из",
      next: "Дальше",
      resultLabel: "Ваш примерный уровень",
      scoreText: "правильных ответов",
      resultNote: "Это быстрая оценка грамматики и лексики. На первом уроке мы также проверим разговор и понимание на слух и составим план, как перейти на следующий уровень.",
      book: "Записаться на урок",
      send: "Отправить результат Елене",
      again: "Пройти тест ещё раз",
      messageText: "Здравствуйте, Елена! Я прошёл(а) тест по английскому на вашем сайте. Мой результат: "
    },

    footer: "Преподаватель английского онлайн"
  }
};
