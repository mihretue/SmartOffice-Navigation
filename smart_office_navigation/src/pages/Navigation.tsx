import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Bell } from "lucide-react"

export default function Navbar() {
  return (
    <div className="p-4"> {/* Add padding to the parent container */}
      <nav className="fixed top-4 left-2 right-2 flex justify-between items-center p-4 bg-white text-black shadow-lg rounded-lg z-10 mx-auto max-w-7xl">
        {/* Navigation Links (Desktop) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-6 items-center">
            <NavigationMenuItem>
              <a href="/" className="text-lg font-medium bg-teal-500 text-white px-4 py-2 rounded-md">Home</a>
            </NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-lg text-gray-700 flex items-center hover:text-black">
                Modules ▼
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg">
                <DropdownMenuItem><a href="/record-management">Record Management</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/document-management">Document Management</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/knowledge-digital-assets">Knowledge Management</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/report-management">Report Management</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/project-management">Project Management</a></DropdownMenuItem>
                <DropdownMenuItem><a href="/forms">Forms</a></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavigationMenuItem>
              <a href="/public-website" className="text-lg text-gray-700 hover:text-teal-500 flex items-center">
                Public Website <span className="ml-1">🔗</span>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/smart-chat" className="text-lg text-gray-700 hover:text-teal-500 flex items-center">
                Smart Chat <span className="ml-1">🔗</span>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Icons & Profile */}
        <div className="flex items-center gap-x-6">
          {/* Notification Icon */}
          <Bell className="w-6 h-6 text-gray-700 hover:text-black cursor-pointer" />

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-teal-500 text-white px-4 py-2 rounded-md">English ▼</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg">
              <DropdownMenuItem><a href="#">English</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#">አማርኛ</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 font-medium">
              Bereket ▼
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-black shadow-md rounded-lg">
              <DropdownMenuItem><a href="/profile">Profile</a></DropdownMenuItem>
              <DropdownMenuItem><a href="/logout">Logout</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  )
}