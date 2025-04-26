
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hello-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HELLO GAMES LIMITED</h3>
            <p className="text-sm opacity-80">
              Crafting immersive simulation experiences with unparalleled detail and realism.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#games" className="hover:underline">Our Games</a></li>
              <li><a href="#values" className="hover:underline">Our Values</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm">
              <a href="mailto:hello@hellogames.co.uk" className="hover:underline">
                hello@hellogames.co.uk
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-6 text-center text-sm">
          <p className="mb-2">© {currentYear} HELLO GAMES LIMITED. All Rights Reserved.</p>
          <p className="mb-2">
            <Link to="/privacy-policy" className="hover:underline mx-2">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:underline mx-2">Terms of Service</Link>
          </p>
          <p className="mb-2">Registered in England and Wales.</p>
          <p className="mb-2">Registered Office: Dolphin House, 3 North Street, Guildford, Surrey, England, GU1 4AA, B74 2DG.</p>
          <p>Contact: <a href="mailto:hello@hellogames.co.uk" className="hover:underline">hello@hellogames.co.uk</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
