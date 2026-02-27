import { motion } from "framer-motion";
import { MessageSquare, Brain, Lightbulb, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Ask a Question", desc: "Describe your problem, paste code, or ask about a concept — DevSensei understands context." },
  { icon: Brain, step: "02", title: "AI Analyzes Context", desc: "Powered by Amazon Bedrock & Amazon Q, it reasons about your code and skill level." },
  { icon: Lightbulb, step: "03", title: "Get Guided Explanation", desc: "Receive step-by-step guidance, not just answers — understand the 'why' behind solutions." },
  { icon: Rocket, step: "04", title: "Build with Confidence", desc: "Apply learnings, debug faster, and grow as a developer with every interaction." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">DevSensei</span> Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:glow-border transition-all duration-500">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-mono text-primary/60 text-xs mb-2">{s.step}</p>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
