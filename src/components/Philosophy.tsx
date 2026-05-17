export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Россия начала XX века"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «История — это не прошлое. Это живая нить, которая связывает поколения и объясняет настоящее.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О проекте</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Эпоха перемен и великих испытаний
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Начало XX века — один из самых драматических периодов в истории России. Революции 1905 и 1917 годов,
                Первая мировая война, реформы Столыпина — всё это кардинально изменило жизнь миллионов людей.
              </p>
              <p>
                Этот проект создан, чтобы помочь глубже понять события той эпохи: их причины, ход и последствия,
                которые ощущаются по сей день. Живые факты, карты, документы и судьбы реальных людей.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Все темы проекта</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
