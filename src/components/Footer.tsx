import { Github , Instagram , Linkedin , Whatsapp, X , Mail, Discord, Commudle} from "@/components/icons";
//import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    QuickNavigation: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Join-us", href: "/join-us" },
      { name: "Contact", href: "/contact" },
      //{ name: "Projects", href: "/projects" },
      
    ],
    community: [
      { name: "GitHub", href: "https://github.com/ZenYukti" },
      { name: "Discord", href: "https://discord.gg/HuBa9r33kW" },
      { name: "Instagram", href: "https://www.instagram.com/zenyukti/" },
      { name: "LinkedIn", href: "https://linkedin.com/company/zenyukti" },
      { name: "Whatsapp", href: "https://chat.whatsapp.com/Em0d53VddahBeIEv69W4o8" },
      { name: "Commudle", href: "https://www.commudle.com/communities/zenyukti" },
    ],
    resources: [
      //{ name: "Documentation", href: "#" },
      { name: "Contribute", href: "https://github.com/ZenYukti" },
      { name: "Events", href: "/community#events" },
      { name: "Community", href: "/community" },
      { name: "Top Secret", href: "https://shorturl.at/hsdk2 "  },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ZenYukti", label: "GitHub" },
    { icon: Discord, href: "https://discord.gg/HuBa9r33kW", label: "Discord" },
    { icon: Instagram, href: "https://www.instagram.com/zenyukti/", label: "Instagram" },
    { icon: Whatsapp, href: "https://chat.whatsapp.com/Em0d53VddahBeIEv69W4o8", label: "Whatsapp" },
    { icon: Linkedin, href: "https://linkedin.com/company/zenyukti", label: "LinkedIn" },
    { icon: X, href: "https://x.com/ZenYukti", label: "Twitter" },
     ];

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-6 gap-y-6 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 pr-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 rounded-full overflow-hidden">
                <img
                  src="/assets/logo.png"
                  alt="zenyukti_logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-3xl text-foreground">
                ZenYukti
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                 Student-led tech community enabling members to learn, build, and
                 share.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QuickNavigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.QuickNavigation.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section {---------------------/*Do Not Delete This Section, it is for future use----------------------}

        <div className="bg-gradient-secondary/10 rounded-2xl p-8 border border-accent/20 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on projects, events, and community
              activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-neon-green hover:bg-neon-green/90 shadow-neon">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>*/} 
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 pb-4">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-4 text-sm">
    <div className="text-muted-foreground">
      <p className="mb-1">Built with ❤️ by the community.</p>
      <p>
        © 2025 <span className="font-semibold text-foreground">ZenYukti</span>. All rights reserved.
      </p>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-4">
      <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
        Privacy Policy
      </Link>
      <Link to="/termsofservice" className="text-muted-foreground hover:text-primary transition-colors">
        Terms of Service
      </Link>
      <Link to="/codeofconduct" className="text-muted-foreground hover:text-primary transition-colors">
        Code of Conduct
      </Link>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
