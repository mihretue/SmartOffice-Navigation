import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Bell } from "lucide-react";
import { FaHome, FaFileAlt, FaFolderOpen, FaChartBar, FaProjectDiagram, FaWpforms } from "react-icons/fa";
import { FiExternalLink, FiMessageSquare } from "react-icons/fi"; // Import new icons
import Card from "@/components/ui/card";
import Footer from '@/components/ui/Footer';

interface MenuItem {
  id: number;
  name: string;
  path: string;
}

interface Module {
  id: number;
  name: string;
  path: string;
  icon: string;
}

export default function Navbar() {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    fetch('/navData.json')
      .then(response => response.json())
      .then((data: { menuItems: MenuItem[]; modules: Module[] }) => {
        const filteredMenuItems = data.menuItems.filter((item: MenuItem) =>
          item.name !== "Public Website" && item.name !== "Smart Chat"
        );
        setMenuItems(filteredMenuItems);
        setModules(data.modules);
      })
      .catch(error => console.error('Error fetching navigation data:', error));
  }, []);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaHome': return <FaHome className="mr-2" />;
      case 'FaFileAlt': return <FaFileAlt className="mr-2" />;
      case 'FaFolderOpen': return <FaFolderOpen className="mr-2" />;
      case 'FaChartBar': return <FaChartBar className="mr-2" />;
      case 'FaProjectDiagram': return <FaProjectDiagram className="mr-2" />;
      case 'FaWpforms': return <FaWpforms className="mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="p-4">
      <nav className="fixed top-4 left-2 right-2 flex justify-between items-center p-4 bg-white shadow-lg rounded-lg z-10 mx-auto max-w-7xl border border-gray-100">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-6 items-center">
            <NavigationMenuItem>
              <a href="/" className="text-lg font-medium text-white bg-[#009688] px-4 py-2 rounded-md hover:bg-[#264441]">Home</a>
            </NavigationMenuItem>

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200">
                <span className="text-base font-medium">Modules</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg p-1 border border-gray-200 min-w-[200px]">
                {modules.map((module) => (
                  <DropdownMenuItem key={module.id} className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                    {renderIcon(module.icon)}
                    <a href={module.path} className="text-black hover:text-[#009688] w-full">{module.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavigationMenuItem>
              <a href="/public-website" className="text-lg hover:text-[#009688] flex items-center">
                Public Website <FiExternalLink className="ml-1" />
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/smart-chat" className="text-lg text-black hover:text-[#009688] flex items-center">
                Smart Chat <FiMessageSquare className="ml-1" />
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-x-4">
          <div className="relative cursor-pointer" onMouseEnter={toggleCard}>
            <Bell className="w-6 h-6 text-gray-500 hover:text-[#009688]" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200">
              <span className="text-base font-medium">English</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg p-1 border border-gray-200 min-w-[150px]">
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <a href="#" className="text-black hover:text-[#009688] w-full">English</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <a href="#" className="text-black hover:text-[#009688] w-full">አማርኛ</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200">
              <span className="text-base font-medium">Bereket</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg p-1 border border-gray-200 min-w-[150px]">
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <a href="/profile" className="text-black hover:text-[#009688] w-full">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer">
                <a href="/logout" className="text-black hover:text-[#009688] w-full">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {isCardVisible && (
        <div className="absolute right-2 top-16 z-20 max-h-32 overflow-auto">
          <Card onClose={toggleCard} />
        </div>
      )}

      <Footer />
    </div>
  );
}