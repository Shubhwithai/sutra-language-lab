
import { Link, Github, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sutra-blue text-white">
      <div className="container mx-auto py-12 container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">SUTRA</span>
              <span className="ml-2 bg-white text-sutra-blue py-1 px-2 rounded text-xs">HACKATHON</span>
            </div>
            <p className="text-white/70 mb-4">
              Building Apps That Understand Bharat
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/twoplatforms" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@twoplatforms" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/sutra_dev" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Link size={20} />
              </a>
              <a href="https://github.com/sutra-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-white">Overview</a></li>
              <li><a href="#focus-areas" className="hover:text-white">Focus Areas</a></li>
              <li><a href="#timeline" className="hover:text-white">Timeline</a></li>
              <li><a href="#prizes" className="hover:text-white">Prizes</a></li>
              <li><a href="#resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="https://github.com/sutra-dev/sutra-cookbook" target="_blank" rel="noopener noreferrer" className="hover:text-white">Sutra Cookbook</a></li>
              <li><a href="https://shorturl.at/s4Wa0" target="_blank" rel="noopener noreferrer" className="hover:text-white">Workshop Notebook</a></li>
              <li><a href="https://shorturl.at/nH7lk" target="_blank" rel="noopener noreferrer" className="hover:text-white">Idea PPT Template</a></li>
              <li><a href="https://forms.gle/eY3zBxJwqof9aryf8" target="_blank" rel="noopener noreferrer" className="hover:text-white">Submit Your Idea</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-white/70 mb-2">
              Have questions about the hackathon?
            </p>
            <a href="mailto:support@two.ai" className="text-white hover:underline">support@two.ai</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} SUTRA / TWO.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
