// src/components/Footer.jsx
// import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Mosalak': [
      { label: 'One Hub Ecosystem', url: '#' },
    ],
    'About Mosalak': [
      { label: 'About Us', url: '#' },
      { label: 'How it Works', url: '#' },
      { label: 'Trust & Safety', url: '#' },
      { label: 'Escrow Protection', url: '#' },
      { label: 'Careers', url: '#' },
      { label: 'Press', url: '#' },
    ],
    'Buy': [
      { label: 'All Categories', url: '#' },
      { label: 'Trending Products', url: '#' },
      { label: 'Hot Deals', url: '#' },
      { label: 'New Arrivals', url: '#' },
      { label: 'Nearby Products', url: '#' },
      { label: 'Track Order', url: '#' },
    ],
    'Sell': [
      { label: 'Start Selling', url: '#' },
      { label: 'Seller Dashboard', url: '#' },
      { label: 'Boost Your Listings', url: '#' },
      { label: 'Seller Protection', url: '#' },
      { label: 'Fees & Pricing', url: '#' },
      { label: 'Seller Success Stories', url: '#' },
    ],
    'Support': [
      { label: 'Help Center', url: '#' },
      { label: 'Contact Us', url: '#' },
      { label: 'Dispute Resolution', url: '#' },
      { label: 'Returns & Refunds', url: '#' },
      { label: 'Report a Problem', url: '#' },
      { label: 'FAQs', url: '#' },
    ],
    'Connect': [
      
      { label: 'Join our Community', url: '#' },
      { label: 'Newsletter', url: '#' },
      { label: 'Facebook', url: '#' },
      { label: 'Twitter', url: '#' },
      { label: 'Instagram', url: '#' },
      { label: 'Linkedin', url: '#' },
      { label: 'Youtube', url: '#' },

      // { label: 'Help Center', url: '#' },
      // { label: 'Contact Us', url: '#' },
      // { label: 'Dispute Resolution', url: '#' },
      // { label: 'Returns & Refunds', url: '#' },
      // { label: 'Report a Problem', url: '#' },
      // { label: 'FAQs', url: '#' },
    ],
  };

  // const socialIcons = {
  //   'Facebook': <Facebook className="w-5 h-5" />,
  //   'Twitter': <Twitter className="w-5 h-5" />,
  //   'Instagram': <Instagram className="w-5 h-5" />,
  //   'Linkedin': <Linkedin className="w-5 h-5" />,
  //   'Youtube': <Youtube className="w-5 h-5" />,
  // };

  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-4 ">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="hover:text-white transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="">
              © 2025 MosalakHub. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold">MosalakHub</span>
            </div> */}
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="text-sm">Privacy Policy</a>
                <a href="#" className="text-sm">Terms of Service</a>
                <a href="#" className="text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;