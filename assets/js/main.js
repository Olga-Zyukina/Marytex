"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var quiz = {
    questions: [{
      text: "Выберите материал",
      responses: [{
        text: "Атлас"
      }, {
        text: "Велюр"
      }, {
        text: "Габардин"
      }, {
        text: "Шёлк"
      }]
    }, {
      text: "Метраж, погонный метр",
      responses: [{
        text: "10 - 50 п.м."
      }, {
        text: "51 - 500 п.м."
      }, {
        text: "501 - 2000 п.м."
      }, {
        text: "свыше 2000 п.м."
      }]
    }, {
      text: "Ширина, см ",
      responses: [{
        text: "до 150 см."
      }, {
        text: "до 185 см."
      }]
    }, {
      text: "Давальческое сырье",
      responses: [{
        text: "Без учета стоимости ткани"
      }, {
        text: "С учетом стоимости ткани"
      }]
    }, {
      text: "Макет",
      responses: [{
        text: "Макет из каталога"
      }, {
        text: "Макет заказчика"
      }]
    }, {
      text: "Допечатная подготовка макета",
      responses: [{
        text: "С допечатной подготовкой макета"
      }, {
        text: "Без допечатной подготовки макета"
      }]
    }, {
      text: "Изготовление цветопробы",
      responses: [{
        text: "С изготовлением цветопробы"
      }, {
        text: "Без изготовленя цветопробы"
      }]
    }, {
      text: "Исполнение",
      responses: [{
        text: "Печать с одной стороны"
      }, {
        text: "Печать с двух сторон"
      }]
    }, {
      text: "Обработка края",
      responses: [{
        text: "Лоскут"
      }, {
        text: "Термообрез"
      }, {
        text: "Обшивка по периметру"
      }]
    }, {
      text: "Сроки печати",
      responses: [{
        text: "Экспресс: 1-3 дня"
      }, {
        text: "Стандарт: 4-10 дней"
      }, {
        text: "Эконом: 11-15 дней"
      }]
    }]
  },
  userResponseTempl = Array(quiz.questions.length).fill(null);
Vue.createApp({
  data: function data() {
    return {
      scTimer: 0,
      scY: 0,
      open: false,
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseTempl,
      isActive: false
    };
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function handleScroll() {
      var _this = this;
      if (this.scTimer) return;
      this.scTimer = setTimeout(function () {
        _this.scY = window.scrollY;
        clearTimeout(_this.scTimer);
        _this.scTimer = 0;
      }, 100);
    },
    toTop: function toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    restart: function restart() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function selectOption(questionIndex, index) {
      this.userResponses[questionIndex] = index;
    },
    next: function next() {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },
    prev: function prev() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    submitForm: function () {
      var _submitForm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
        var formData, k, response, contentType, json, timerId, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              formData = new FormData(form);
              for (k = 0; k < this.userResponses.length; k++) {
                formData.append('question' + (k + 1), this.quiz.questions[k].text);
                if (!this.quiz.questions[k].responses[this.userResponses[k]]) {
                  formData.append('response' + (k + 1), "Нет ответа");
                } else {
                  formData.append('response' + (k + 1), this.quiz.questions[k].responses[this.userResponses[k]].text);
                }
              }
              _context.n = 1;
              return fetch("send.php", {
                method: 'POST',
                body: formData
              });
            case 1:
              response = _context.v;
              if (response.ok) {
                _context.n = 2;
                break;
              }
              throw "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443: ".concat(response.status);
            case 2:
              contentType = response.headers.get('content-type');
              if (!(!contentType || !contentType.includes('application/json'))) {
                _context.n = 3;
                break;
              }
              throw 'Ошибка обработки. Ответ не JSON';
            case 3:
              _context.n = 4;
              return response.json();
            case 4:
              json = _context.v;
              if (!(json.result === "success")) {
                _context.n = 5;
                break;
              }
              document.querySelector('.success').classList.remove('success-hide');
              timerId = setInterval(function () {
                document.querySelector('.success').classList.add('success-hide');
              }, 5000);
              _context.n = 6;
              break;
            case 5:
              console.log(json);
              throw json.info;
            case 6:
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              alert(_t);
            case 8:
              return _context.a(2);
          }
        }, _callee, this, [[0, 7]]);
      }));
      function submitForm(_x) {
        return _submitForm.apply(this, arguments);
      }
      return submitForm;
    }()
  }
}).mount('#wrapper');