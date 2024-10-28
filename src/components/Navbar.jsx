import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full flex justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-2">
                <img src="/company_logo.png" alt="Company Logo" className="h-8 w-8" />
                <span className="font-bold text-xl">Girman Technologies</span>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="https://girmantech.com" target="_blank">Website</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="https://www.linkedin.com/company/girman-technologies" target="_blank">LinkedIn</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="mailto:contact@girmantech.com">Contact</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;
