import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuLink>Work Experience</NavigationMenuLink>
        <NavigationMenuLink>Projects</NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
