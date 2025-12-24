import React from 'react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-sm font-mono">
                L
              </div>
              <span className="font-mono">LUNA<span className="text-primary">PLAYER</span></span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              The modern, sleek, and highly customizable Windows video player built for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Themes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Scripts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Luna Player. Open sourced under MIT License.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl"><FaGithub /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl"><FaTwitter /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xl"><FaDiscord /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;