import { motion } from "framer-motion";

const USPSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-primary/[0.03]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl border border-border bg-card/40 backdrop-blur-sm glow-border"
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Our USP</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            DevSensei{" "}
            <span className="text-gradient">Strengthens Thinking</span>,
            <br />
            It Doesn't Replace It
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            DevSensei bridges the gap between learning and real-world development by combining
            explanation, guidance, and productivity support into a single experience.
            It helps developers grow more confident, capable, and independent over time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
