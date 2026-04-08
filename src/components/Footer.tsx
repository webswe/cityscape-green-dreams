import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold">H&D Services LLC</p>
          <p className="font-body text-sm text-primary-foreground/60 mt-1">Marietta, GA — Quality Home Improvement</p>
        </div>
        <div className="text-center md:text-right">
          <a href="tel:+14047981748" className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">(404) 798-1748</a>
          <p className="font-body text-sm text-primary-foreground/50 mt-1">
            © {new Date().getFullYear()} H&D Services LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
