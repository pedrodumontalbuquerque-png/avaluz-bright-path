import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Home, Users, MapPin, Target, TrendingUp } from "lucide-react";

const stats = [
  { 
    value: 12847, 
    label: "Avaliações Realizadas", 
    icon: Home,
    suffix: "",
    size: "large",
    showChart: true
  },
  { 
    value: 3421, 
    label: "Usuários Ativos", 
    icon: Users,
    suffix: "",
    size: "medium"
  },
  { 
    value: 156, 
    label: "Cidades Cobertas", 
    icon: MapPin,
    suffix: "",
    size: "medium"
  },
  { 
    value: 91, 
    label: "Índice de Confiança", 
    icon: Target,
    suffix: "%",
    size: "medium",
    showRing: true
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
    <span ref={ref} className="number-gradient">
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

function ProgressRing({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-24 h-24 progress-ring" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="8"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="progress-ring-circle"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(224 76% 40%)" />
          <stop offset="100%" stopColor="hsl(199 89% 48%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MiniChart() {
  const data = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90];
  
  return (
    <div className="flex items-end gap-1 h-16 mt-4">
      {data.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="flex-1 bg-gradient-to-t from-primary to-primary-light/50 rounded-t-sm min-w-[4px]"
        />
      ))}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-20 -mt-20 z-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Large Card - Avaliações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="col-span-2 row-span-2 glass-card rounded-2xl p-6 lg:p-8 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300 group hover:shadow-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-7 h-7 text-primary-light" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12%</span>
                </div>
              </div>
              <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">
                <AnimatedCounter value={stats[0].value} suffix="" />
              </div>
              <p className="text-muted-foreground">{stats[0].label}</p>
              <MiniChart />
            </motion.div>

            {/* Usuários */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="glass-card rounded-2xl p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300 group hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-primary-light" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">
                <AnimatedCounter value={stats[1].value} suffix="" />
              </div>
              <p className="text-sm text-muted-foreground">{stats[1].label}</p>
            </motion.div>

            {/* Cidades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="glass-card rounded-2xl p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300 group hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary-light" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-bold mb-1">
                <AnimatedCounter value={stats[2].value} suffix="" />
              </div>
              <p className="text-sm text-muted-foreground">{stats[2].label}</p>
            </motion.div>

            {/* Confiança com Progress Ring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="col-span-2 glass-card rounded-2xl p-6 border border-primary-light/10 hover:border-primary-light/30 transition-all duration-300 group hover:shadow-glow"
            >
              <div className="flex items-center gap-6">
                <div className="relative">
                  <ProgressRing percentage={91} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold number-gradient">91%</span>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-primary-light" />
                  </div>
                  <p className="text-sm text-muted-foreground">{stats[3].label}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Baseado em 12.847 avaliações</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}