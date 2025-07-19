import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2024 Alex Johnson. Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;