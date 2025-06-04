import ArrowRight from "./assets/arrow-right.svg";
import Logo from "./assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "./assets/menu.svg";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 border-b border-gray-100 dark:border-gray-800">
      {/* Top Banner */}
      <div className="flex justify-center items-center py-2.5 bg-black dark:bg-white px-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <p className="text-white/60 dark:text-gray-600 text-sm hidden md:block">
            Streamline your workflow and boost your productivity
          </p>
          <div className="inline-flex gap-1 items-center text-sm">
            <p className="text-white dark:text-black">Get started for free</p>
            <Image 
              src={ArrowRight} 
              alt="Arrow Right" 
              height={16} 
              width={16} 
              className="text-white dark:text-black"
            />
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image 
                src={Logo} 
                alt="Saas Logo" 
                height={40} 
                width={40} 
                className="h-10 w-10"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Image 
                src={MenuIcon} 
                alt="Menu Icon" 
                height={20} 
                width={20} 
                className="h-5 w-5"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Customers
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Updates
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Help
              </a>
              <button className="ml-4 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;