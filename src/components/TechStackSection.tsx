import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Frontend",
    items: ["React.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "REST APIs"],
  },
  {
    label: "AI & Intelligence",
    items: ["Amazon Bedrock", "Amazon Q"],
  },
  {
    label: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Integrations",
    items: ["GitHub API", "OAuth"],
  },
  {
    label: "DevOps",
    items: ["Docker", "CI/CD", "Kiro IDE"],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24" id="tech">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="text-gradient">Modern Tech</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-all group"
            >
              <p className="text-primary font-mono text-xs mb-3 font-semibold">{cat.label}</p>
              <div className="flex flex-col gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
