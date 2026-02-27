import { motion } from "framer-motion";
import {
  Code2, Bug, BookOpen, FolderTree,
  Users, FileText, Sparkles, TrendingUp,
  Lightbulb, Shield,
} from "lucide-react";

const features = [
  { icon: Code2, title: "Context-Aware Explanations", desc: "Understand functions, logic, and workflows with explanations tailored to your skill level." },
  { icon: Bug, title: "Intelligent Debugging", desc: "Root-cause analysis with fix suggestions — reduce debugging time significantly." },
  { icon: BookOpen, title: "Guided Development", desc: "Step-by-step problem solving instead of just handing you the answer." },
  { icon: FolderTree, title: "Codebase Understanding", desc: "Navigate unfamiliar repositories and folder structures with AI-guided insights." },
  { icon: TrendingUp, title: "Adaptive Learning", desc: "Explanations that adapt from beginner to advanced based on your level." },
  { icon: Users, title: "Team Collaboration", desc: "Share insights and learning paths with your development team." },
  { icon: FileText, title: "Doc Summarization", desc: "Quick project overviews and documentation summaries at a glance." },
  { icon: Shield, title: "Best Practices", desc: "Code quality recommendations and pattern suggestions as you build." },
  { icon: Lightbulb, title: "Learning Insights", desc: "Grow as a developer with contextual tips while you work." },
  { icon: Sparkles, title: "Smart Questioning", desc: "Interactive Q&A that deepens understanding, not just surface-level answers." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything a Developer <span className="text-gradient">Mentor</span> Should Be
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Not just a tool — a companion that helps you think, learn, and build better.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group p-6 rounded-xl border border-border bg-card/40 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
