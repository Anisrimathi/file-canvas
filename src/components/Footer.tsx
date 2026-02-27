import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-bold">Dev<span className="text-gradient">Sensei</span></span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          Team DualStack • Led by Samhita Shankar • AI for Bharat Hackathon — Powered by AWS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
