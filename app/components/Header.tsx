import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { useState } from "react";

const menuItems = [
  { label: "Work Experience", href: "#work-experience" },
  { label: "Technical Extracurriculars", href: "#technical-extracurriculars" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed z-50">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-white shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block w-full">
          <div className="flex w-full bg-white shadow-sm justify-center py-4">
            <NavigationMenu>
              <NavigationMenuList>
                <div className="flex flex-row items-center justify-center space-x-12">
                  {menuItems.map((item) => (
                    <NavigationMenuLink
                      key={item.href}
                      className="transition-all border-b-2 border-transparent hover:border-black font-medium text-lg py-2 px-1"
                      asChild
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Mobile Side Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4 space-y-4 mt-16">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
