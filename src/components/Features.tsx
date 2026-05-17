import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Crown",
    title: "Последний царь",
    description: "Правление Николая II: реформы, противоречия и трагический финал династии Романовых.",
  },
  {
    icon: "Flame",
    title: "Революции 1905 и 1917",
    description: "От Кровавого воскресенья до Октябрьского переворота — как Россия пришла к революции.",
  },
  {
    icon: "Sword",
    title: "Первая мировая война",
    description: "Россия в Великой войне: фронты, потери, роль армии и влияние на внутренние события.",
  },
  {
    icon: "Sprout",
    title: "Реформы Столыпина",
    description: "Аграрная реформа, переселение крестьян и попытка модернизировать страну без революции.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Ключевые темы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            События, изменившие страну
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" fallback="BookOpen" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
