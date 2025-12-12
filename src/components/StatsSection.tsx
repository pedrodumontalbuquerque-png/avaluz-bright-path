import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Users, MapPin, Target } from "lucide-react";

const stats = [
  { 
    value: 12847, 
    label: "Avaliações Realizadas", 
    icon: Home,
    suffix: ""
  },
  { 
    value: 3421, 
    label: "Usuários Ativos", 
    icon: Users,
    suffix: ""
  },
  { 
    value: 156, 
    label: "Cidades Cobertas", 
    icon: MapPin,
    suffix: ""
  },
  { 
    value: 91, 
    label: "Índice de Confiança", 
    icon: Target,
    suffix: "%"
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-16 -mt-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                
                {/* Divider */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
