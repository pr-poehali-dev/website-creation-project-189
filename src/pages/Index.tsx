import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BOY = "https://cdn.poehali.dev/projects/84547eaa-045e-45aa-ad08-9ecca211315c/files/c8ebe7a3-ddf3-4353-b3ac-a447fd09e0d5.jpg";
const GIRL_IMG = "https://cdn.poehali.dev/projects/84547eaa-045e-45aa-ad08-9ecca211315c/files/82a13877-31df-40e9-804b-c17e58e2e20b.jpg";

const benefits = [
  {
    num: "1",
    title: "Учатся программировать",
    desc: "Вместо того, чтобы просто играть в компьютерные игры, ребёнок учится программировать, совмещая приятное с полезным.",
    emoji: "💻",
  },
  {
    num: "2",
    title: "Развивают логику и интеллект",
    desc: "Программируя, ребёнок учится решать логические и творческие задачи, развивая при этом алгоритмическое и аналитическое мышление.",
    emoji: "🧩",
  },
  {
    num: "3",
    title: "Подтягивают английский",
    desc: "Все команды пишутся на английском, поэтому ребёнок программирует и заодно пополняет словарный запас.",
    emoji: "💬",
  },
  {
    num: "4",
    title: "Улучшают школьную успеваемость",
    desc: "На уроках программирования дети влюбляются в математику и физику, по-новому смотрят на скучные школьные предметы.",
    emoji: "📚",
  },
];

const courses = [
  {
    age: "9–10 лет",
    duration: "8 месяцев",
    title: "КУРС MIDDLE",
    desc: "Ребята будут использовать языки программирования и платформы: Scratch, Stencyl, Roblox Studio",
    price: "4 250 ₽ / мес",
    color: "#7C3AED",
    bg: "#EDE9FE",
    img: HERO_BOY,
  },
  {
    age: "10–12 лет",
    duration: "8 месяцев",
    title: "КУРС HIGH",
    desc: "Ребята будут использовать языки программирования и платформы: Scratch, Stencyl, Thimble, JavaScript",
    price: "4 250 ₽ / мес",
    color: "#EA580C",
    bg: "#FFF7ED",
    img: GIRL_IMG,
  },
  {
    age: "12–15 лет",
    duration: "8 месяцев",
    title: "КУРС SUPER",
    desc: "Ребята будут использовать языки разработки, стили и программирование: CSS, JavaScript, Python, Java",
    price: "4 250 ₽ / мес",
    color: "#16A34A",
    bg: "#F0FDF4",
    img: HERO_BOY,
  },
  {
    age: "12–15 лет",
    duration: "8 месяцев",
    title: "КУРС EXPERT",
    desc: "Ребята будут использовать языки программирования и платформы: Unity 3D, Blender, Unreal Engine",
    price: "4 250 ₽ / мес",
    color: "#7C3AED",
    bg: "#EDE9FE",
    img: GIRL_IMG,
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });

  return (
    <div className="min-h-screen font-body" style={{ background: "#F4F4FF", color: "#1a1a2e" }}>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-2xl font-bold" style={{ color: "#7C3AED" }}>ШК</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
            <a href="#courses" className="hover:text-purple-600 transition-colors">Курсы</a>
            <a href="#benefits" className="hover:text-purple-600 transition-colors">Как проходит обучение</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Проекты детей</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Частые вопросы</a>
          </div>
          <a
            href="tel:+79504256908"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#7C3AED" }}
          >
            <Icon name="Phone" size={16} />
            +7 950 425-69-08
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-center gap-8"
          style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)" }}
        >
          {/* Online badge */}
          <div className="absolute top-6 left-8 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-xs font-medium">Онлайн</span>
          </div>

          {/* Text */}
          <div className="flex-1 pt-6 md:pt-0">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              ШКОЛА ПРОГРАММИРОВАНИЯ<br />ДЛЯ ДЕТЕЙ ОТ 9 ДО 15 ЛЕТ
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold text-lg leading-none">+</span>
                <p className="text-white/90 text-sm leading-snug max-w-[180px]">Научим вашего ребёнка программировать уже на первом занятии</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-300 font-bold text-lg leading-none">+</span>
                <p className="text-white/90 text-sm leading-snug max-w-[180px]">Каждое занятие проходит в группах от 2 до 4 человек</p>
              </div>
            </div>
            <button
              className="px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "#FACC15", color: "#1a1a2e" }}
            >
              Попробовать бесплатно
            </button>
          </div>

          {/* Character */}
          <div className="relative flex-shrink-0">
            <img
              src={HERO_BOY}
              alt="Персонаж"
              className="w-56 md:w-72 object-contain drop-shadow-2xl"
            />
            {/* Speech bubble */}
            <div
              className="absolute top-4 right-0 px-3 py-2 rounded-2xl rounded-tr-none text-xs font-bold shadow-lg"
              style={{ background: "#FACC15", color: "#1a1a2e" }}
            >
              Скорее<br />к нам! 😄
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: "#1a1a2e" }}>
          С НАМИ РЕБЯТА РАЗВИВАЮТСЯ
        </h2>
        <p className="font-display text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#1a1a2e" }}>
          С НЕСКОЛЬКИХ СТОРОН
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex gap-5 hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-white text-lg"
                style={{ background: "#7C3AED" }}
              >
                {b.num}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 uppercase" style={{ color: "#1a1a2e" }}>
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
              <div className="text-3xl flex-shrink-0 self-start">{b.emoji}</div>
            </div>
          ))}

          {/* Wide bottom card */}
          <div
            className="md:col-span-2 rounded-2xl p-6 flex items-center gap-5"
            style={{ background: "#7C3AED" }}
          >
            <div className="text-4xl">🏆</div>
            <div>
              <h3 className="font-display font-bold text-xl text-white uppercase mb-1">
                А ЕЩЁ РЕБЯТА ОСВАИВАЮТ ПЕРСПЕКТИВНУЮ ПРОФЕССИЮ
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                Программист — одна из самых востребованных специальностей нашего века. Записав ребёнка на обучение сейчас, вы поможете ему сделать первый шаг к успешному будущему.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: "#1a1a2e" }}>
          ВЫБЕРИТЕ ПОДХОДЯЩУЮ
        </h2>
        <p className="font-display text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#1a1a2e" }}>
          ПРОГРАММУ ДЛЯ ВАШЕГО РЕБЁНКА
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 relative overflow-hidden hover:shadow-lg transition-shadow"
              style={{ background: c.bg, border: `2px solid transparent` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: c.color }}
                >
                  {c.age}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: c.color + "20", color: c.color }}
                >
                  {c.duration}
                </span>
              </div>
              <h3
                className="font-display text-2xl font-bold mb-2 uppercase"
                style={{ color: c.color }}
              >
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-[60%]">{c.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg" style={{ color: "#1a1a2e" }}>{c.price}</span>
                <button
                  className="flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
                  style={{ color: c.color }}
                >
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </div>
              {/* Character image */}
              <img
                src={c.img}
                alt="персонаж"
                className="absolute bottom-0 right-4 w-28 object-contain pointer-events-none"
                style={{ opacity: 0.9 }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Form */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="rounded-3xl overflow-hidden flex flex-col md:flex-row"
          style={{ background: "#7C3AED" }}
        >
          {/* Left */}
          <div className="flex-1 p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              НИЧЕГО НЕ ПОНИМАЕТЕ<br />В ЭТИХ ПИТОНАХ И СКРЕТЧ?
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Оставьте заявку на бесплатную консультацию: мы подскажем, с чего начать, ответим на все вопросы и запишем на бесплатный урок.
            </p>
            <p className="text-yellow-300 font-semibold text-sm flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Время ожидания: 15 минут
            </p>
          </div>

          {/* Right - Form */}
          <div className="flex-1 bg-white/10 backdrop-blur-sm p-10 md:p-14 flex flex-col gap-4 justify-center">
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-yellow-300 transition-colors text-base"
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-yellow-300 transition-colors text-base"
            />
            <button
              className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-105 hover:shadow-lg mt-2"
              style={{ background: "#FACC15", color: "#1a1a2e" }}
            >
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <p className="text-white/50 text-xs text-center">
              Нажимая кнопку, вы даёте согласие на обработку персональных данных
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-display text-xl font-bold" style={{ color: "#7C3AED" }}>ШК</div>
          <p className="text-sm text-gray-400">© 2024 Школа программирования для детей</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-600 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
