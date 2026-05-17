import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовые материалы",
    price: "Бесплатно",
    description: "Основные темы и факты для знакомства с эпохой",
    features: [
      "Хронология ключевых событий",
      "Краткие биографии деятелей",
      "Обзорные статьи по темам",
      "Карты и схемы сражений",
    ],
    cta: "Начать изучение",
    highlighted: false,
  },
  {
    name: "Углублённый курс",
    price: "Полный доступ",
    description: "Для тех, кто хочет разобраться по-настоящему",
    features: [
      "Все базовые материалы",
      "Первоисточники и документы",
      "Архивные фотографии",
      "Тесты и проверочные задания",
      "Исследовательские задания",
      "Список литературы",
    ],
    cta: "Изучить всё",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Материалы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Форматы учебных материалов
          </h2>
          <p className="text-muted-foreground text-lg">Выберите глубину погружения в эпоху.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-4xl tracking-tight">{plan.price}</span>
              </div>
              <p className={`mb-8 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-sage" />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center transition-opacity duration-300 hover:opacity-90 ${
                  plan.highlighted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
