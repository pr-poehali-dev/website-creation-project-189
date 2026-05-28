import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/84547eaa-045e-45aa-ad08-9ecca211315c/files/19562858-684d-43c6-9263-08e54dca691f.jpg";

const reviews = [
  {
    name: "Александра К.",
    role: "Предприниматель",
    avatar: "АК",
    rating: 5,
    text: "Невероятный продукт! Полностью изменил подход к работе. Рекомендую всем, кто хочет выйти на новый уровень.",
    color: "#00f5ff",
  },
  {
    name: "Дмитрий В.",
    role: "Директор по маркетингу",
    avatar: "ДВ",
    rating: 5,
    text: "Результаты превзошли все ожидания. За три месяца использования эффективность нашей команды выросла вдвое.",
    color: "#7c3aed",
  },
  {
    name: "Мария Т.",
    role: "Основатель стартапа",
    avatar: "МТ",
    rating: 5,
    text: "Простой в использовании, мощный по результатам. Именно то, что я искала долгое время. Просто огонь!",
    color: "#0066ff",
  },
  {
    name: "Игорь С.",
    role: "Руководитель проекта",
    avatar: "ИС",
    rating: 4,
    text: "Качество продукта на высшем уровне. Поддержка реагирует мгновенно. Очень доволен покупкой.",
    color: "#00f5ff",
  },
  {
    name: "Елена Р.",
    role: "Фриланс-дизайнер",
    avatar: "ЕР",
    rating: 5,
    text: "Использую уже полгода. Это лучшее вложение этого года. Советую без всяких сомнений!",
    color: "#7c3aed",
  },
  {
    name: "Антон М.",
    role: "Product Manager",
    avatar: "АМ",
    rating: 5,
    text: "Команда оценила сразу же. Интуитивный интерфейс, стабильная работа. Всё как надо.",
    color: "#0066ff",
  },
];

const features = [
  { icon: "Zap", title: "Молниеносно", desc: "Результат уже в первый день использования" },
  { icon: "Shield", title: "Надёжно", desc: "Проверено тысячами клиентов по всему миру" },
  { icon: "TrendingUp", title: "Растёт с вами", desc: "Масштабируется под любые задачи бизнеса" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < count ? "#fbbf24" : "#374151"}
        >
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.5l-3.7 1.8.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Index() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <div
      className="min-h-screen font-body"
      style={{
        background: "linear-gradient(135deg, #050a14 0%, #0a0f1e 50%, #06080f 100%)",
        color: "#e8eaf0",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4"
        style={{ background: "rgba(5,10,20,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
        <div className="font-display text-2xl font-bold tracking-wide" style={{ color: "#00f5ff" }}>
          БРЕНД
        </div>
        <div className="hidden md:flex gap-8 text-sm font-body text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Возможности</a>
          <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#cta" className="hover:text-white transition-colors">Контакты</a>
        </div>
        <button
          className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(90deg, #00f5ff, #0066ff)", color: "#050a14", fontFamily: "Golos Text" }}
        >
          Начать
        </button>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
        />

        <div className="container mx-auto px-6 md:px-16 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div style={{ animation: "fadeInUp 0.8s ease-out both" }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ border: "1px solid rgba(0,245,255,0.3)", color: "#00f5ff", background: "rgba(0,245,255,0.05)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00f5ff" }} />
              Новый уровень возможностей
            </div>

            <h1
              className="font-display text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span style={{ color: "#e8eaf0" }}>Ваш продукт,</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #00f5ff 0%, #0066ff 50%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ваши правила
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
              Описание вашего продукта или услуги в двух предложениях. Объясните главную ценность для клиента.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(90deg, #00f5ff, #0066ff)",
                  color: "#050a14",
                  boxShadow: "0 0 30px rgba(0,245,255,0.25)",
                }}
              >
                Попробовать бесплатно
              </button>
              <button
                className="px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#e8eaf0", background: "rgba(255,255,255,0.04)" }}
              >
                <Icon name="Play" size={18} />
                Смотреть демо
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["АК", "ДВ", "МТ", "ЕР"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                    style={{
                      background: ["#00f5ff20", "#0066ff20", "#7c3aed20", "#00f5ff20"][i],
                      borderColor: ["#00f5ff", "#0066ff", "#7c3aed", "#00f5ff"][i],
                      color: ["#00f5ff", "#0066ff", "#7c3aed", "#00f5ff"][i],
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <StarRating count={5} />
                  <span className="text-sm font-semibold text-white ml-1">4.9</span>
                </div>
                <p className="text-xs text-gray-500">+1200 довольных клиентов</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative" style={{ animation: "fadeInUp 0.8s 0.2s ease-out both", opacity: 0 }}>
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                boxShadow: "0 0 60px rgba(0,245,255,0.15), 0 40px 80px rgba(0,0,0,0.5)",
                border: "1px solid rgba(0,245,255,0.15)",
              }}
            >
              <img
                src={HERO_IMAGE}
                alt="Продукт"
                className="w-full h-80 md:h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(5,10,20,0.6) 0%, transparent 60%)" }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl backdrop-blur-md flex items-center gap-3"
              style={{ background: "rgba(5,10,20,0.9)", border: "1px solid rgba(0,245,255,0.2)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,245,255,0.1)" }}>
                <Icon name="TrendingUp" size={20} style={{ color: "#00f5ff" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Рост за месяц</p>
                <p className="text-lg font-display font-bold" style={{ color: "#00f5ff" }}>+127%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#00f5ff" }}>ВОЗМОЖНОСТИ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,102,255,0.15))", border: "1px solid rgba(0,245,255,0.2)" }}
                >
                  <Icon name={f.icon} size={24} style={{ color: "#00f5ff" }} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 md:px-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)" }}
        />

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium mb-3" style={{ color: "#00f5ff" }}>ОТЗЫВЫ</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Что говорят клиенты</h2>
            <p className="text-gray-400 mt-4 text-lg">Более 1200 довольных пользователей по всей стране</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-16">
            {[
              { val: "4.9", label: "Средний рейтинг" },
              { val: "98%", label: "Рекомендуют" },
              { val: "1200+", label: "Клиентов" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl font-bold" style={{ color: "#00f5ff" }}>{s.val}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  background: activeReview === i
                    ? `linear-gradient(135deg, ${r.color}12, ${r.color}06)`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeReview === i ? r.color + "40" : "rgba(255,255,255,0.07)"}`,
                }}
                onClick={() => setActiveReview(i)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold"
                      style={{ background: r.color + "20", color: r.color, border: `1px solid ${r.color}40` }}
                    >
                      {r.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{r.name}</p>
                      <p className="text-xs text-gray-500">{r.role}</p>
                    </div>
                  </div>
                  <StarRating count={r.rating} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 md:px-16">
        <div className="container mx-auto">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(0,102,255,0.08) 50%, rgba(124,58,237,0.08) 100%)",
              border: "1px solid rgba(0,245,255,0.2)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #00f5ff, transparent)" }}
            />
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Готовы начать?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Присоединяйтесь к тысячам клиентов, которые уже изменили свой подход к делу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #00f5ff, #0066ff)",
                  color: "#050a14",
                  boxShadow: "0 0 40px rgba(0,245,255,0.3)",
                }}
              >
                Начать бесплатно
              </button>
              <button
                className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#e8eaf0" }}
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl font-bold" style={{ color: "#00f5ff" }}>БРЕНД</p>
          <p className="text-sm text-gray-600">© 2024 Ваша компания. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}