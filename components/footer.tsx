import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaClock, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bebas">Lets talk</h2>
            <ul className="space-y-2">
              <li>
                <Link href="https://wa.me/250788358024" target="_blank" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/livecleanrwanda.ltd/" target="_blank" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                  <FaFacebookF />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/livecleanrwanda/" target="_blank" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                  <FaInstagram />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bebas">Opening Hours</h2>
            <p className="flex items-center space-x-2">
              <FaClock className="text-gray-400" />
              <span>24 | 7 | 365 Days</span>
            </p>
            <p>Mon, Sat & Sun: Open</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bebas">Get In Touch</h2>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-400" />
              <span>+250788358024 | +250788803564</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <span>Kk10Ave, KK504St Kigali, Kicukiro To WFP</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-400" />
              <span>info@livecleanrwanda.com</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bebas">Newsletter</h2>
            <p>Stay updated with our latest offers and news.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded"
              />
              <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Live Clean Rwanda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;