import { motion } from "framer-motion";
import { Zap, Clock, GraduationCap, Plug } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Faster Onboarding", desc: "Get up to speed on any codebase in hours, not weeks." },
  { icon: Clock, title: "Reduced Debug Time", desc: "AI-powered root-cause analysis cuts debugging time dramatically." },
  { icon: GraduationCap, title: "Learn by Doing", desc: "Improve through real-world code, not abstract tutorials." },
];

const futureItems = [
  "IDE Plugin Integration",
  "Private Repository Support",
  "Team Collaboration Features",
  "Personalized Learning Insights",
];

const ImpactSection = () => {
  return (
    <section className="py-24 relative" id="impact">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Impact</p>
            <h2 className="text-4xl font-bold mb-8">
              Why <span className="text-gradient">DevSensei</span>?
            </h2>
            <div className="space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Roadmap</p>
            <h2 className="text-4xl font-bold mb-8">
              What's <span className="text-gradient">Next</span>
            </h2>
            <div className="space-y-4">
              {futureItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/30"
                >
                  <Plug className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
