import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Menu, Bell } from "lucide-react";
import { FaHome, FaFileAlt, FaFolderOpen, FaChartBar, FaProjectDiagram, FaWpforms } from "react-icons/fa";
import { FiExternalLink, FiMessageSquare } from "react-icons/fi"; // Import new icons
import Card from "@/components/ui/card";

export default function Navbar() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="p-4">
      <nav className="fixed top-4 left-2 right-2 flex justify-between items-center p-4 bg-white shadow-lg rounded-lg z-10 mx-auto max-w-7xl border border-gray-100">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-6 items-center">
            <NavigationMenuItem>
              <a href="/" className="text-lg font-medium text-white bg-[#009688] px-4 py-2 rounded-md hover:bg-[#00796b]">Home</a>
            </NavigationMenuItem>

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center justify-center px-4 py-2 bg-[#009688] text-white rounded-md hover:bg-[#00796b] focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200">
                <span className="text-base font-medium">Modules</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg p-1 border border-gray-200 min-w-[200px]">
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaHome className="mr-2" />
                  <a href="/record-management" className="text-black hover:text-[#009688] w-full">Record Management</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaFileAlt className="mr-2" />
                  <a href="/document-management" className="text-black hover:text-[#009688] w-full">Document Management</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaFolderOpen className="mr-2" />
                  <a href="/knowledge-digital-assets" className="text-black hover:text-[#009688] w-full">Knowledge Management</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaChartBar className="mr-2" />
                  <a href="/report-management" className="text-black hover:text-[#009688] w-full">Report Management</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaProjectDiagram className="mr-2" />
                  <a href="/project-management" className="text-black hover:text-[#009688] w-full">Project Management</a>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer flex items-center">
                  <FaWpforms className="mr-2" />
                  <a href="/forms" className="text-black hover:text-[#009688] w-full">Forms</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavigationMenuItem>
              <a href="/public-website" className="text-lg text-black hover:text-[#009688] flex items-center">
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
          <div className="relative cursor-pointer" onClick={toggleCard}>
            <Bell className="w-6 h-6 text-gray-500 hover:text-[#009688]" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
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
        <div className="absolute right-2 top-16 z-20">
          <Card onClose={toggleCard} />
        </div>
      )}
    </div>
  );
}