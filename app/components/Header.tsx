import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

const menuItems = [
  { label: "Work Experience", href: "#work-experience" },
  { label: "Technical Extracurriculars", href: "#technical-extracurriculars" },
  { label: "Projects", href: "#projects" },
];

export default function Header() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-center items-center h-16">
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex flex-row items-center space-x-12">
              {menuItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  <NavigationMenuLink className="transition-all border-b-2 border-transparent hover:border-black font-medium text-lg py-2 px-1">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
