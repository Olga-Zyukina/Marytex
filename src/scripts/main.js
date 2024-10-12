let quiz = {
  questions: [
    {
      text: "Выберите материал",
      responses: [
        { text: "Атлас" },
        { text: "Велюр"},
        { text: "Габардин" },
        { text: "Шёлк" },
      ],
    },
    {
      text: "Метраж, погонный метр",
      responses: [
        { text: "10 - 50 п.м."},
        { text: "51 - 500 п.м." },
        { text: "501 - 2000 п.м." },
        { text: "свыше 2000 п.м." },
      ],
    },
    {
      text: "Ширина, см ",
      responses: [
        { text: "до 150 см." },
        { text: "до 185 см." },
      ],
    },
    {
      text: "Давальческое сырье",
      responses: [
        { text: "Без учета стоимости ткани" },
        { text: "С учетом стоимости ткани" },
      ],
    },
    {
      text: "Макет",
      responses: [
        { text: "Макет из каталога" },
        { text: "Макет заказчика" },
      ],
    },
    {
      text: "Допечатная подготовка макета",
      responses: [
        { text: "С допечатной подготовкой макета" },
        { text: "Без допечатной подготовки макета" },
      ],
    },
    {
      text: "Изготовление цветопробы",
      responses: [
        { text: "С изготовлением цветопробы" },
        { text: "Без изготовленя цветопробы" },
      ],
    },

    {
      text: "Исполнение",
      responses: [
        { text: "Печать с одной стороны" },
        { text: "Печать с двух сторон" },
      ],
    },
    {
      text: "Обработка края",
      responses: [
        { text: "Лоскут"},
        { text: "Термообрез" },
        { text: "Обшивка по периметру" },
      ],
    },
    {
      text: "Сроки печати",
      responses: [
        { text: "Экспресс: 1-3 дня" },
        { text: "Стандарт: 4-10 дней" },
        { text: "Эконом: 11-15 дней" },
      ],
    },
  ],
},
userResponseTempl = Array(quiz.questions.length).fill(null);

Vue.createApp({
  data() {
    return {
      scTimer: 0,
      scY: 0,
      open: false,
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseTempl,
      isActive: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (questionIndex, index) {
      this.userResponses[questionIndex] = index;
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },
    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    submitForm: async function () {
      document.querySelector('.success').classList.remove('success-hide');
    }
  }
}).mount('#wrapper')