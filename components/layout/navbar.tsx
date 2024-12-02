"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "@/components/modules/mode-toggle";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Projects", href: "#projects" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeSection, setActiveSection] = React.useState("/");

	React.useEffect(() => {
		const path = window.location.pathname;
		setActiveSection(path);
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/60 px-4 backdrop-blur-md">
			<div className="container mx-auto flex h-14 items-center">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="hidden font-bold sm:inline-block">sergio.v1</span>
					</Link>
					<NavigationMenu>
						<NavigationMenuList>
							{navItems.map((item) => (
								<NavigationMenuItem key={item.name}>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={`${navigationMenuTriggerStyle()} ${activeSection === item.href ? "text-primary" : "text-muted-foreground"}`}
										>
											{item.name}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
								<path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								<path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								<path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="pr-0">
						<SheetTitle className="text-left mb-4">sergio.v1</SheetTitle>
						<NavigationMenu className="flex list-none flex-col justify-start space-y-4">
							{navItems.map((item) => (
								<NavigationMenuItem key={item.name}>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
											{item.name}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenu>
					</SheetContent>
				</Sheet>
				<div className="flex flex-1 items-center justify-between space-x-6 md:justify-end">
					<div className="flex gap-4 pl-4 md:gap-8">
						<Link href="https://x.com/sgbenavides_" target="_blank" rel="noopener noreferrer">
							<FaXTwitter className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</Link>

						<Link href="https://github.com/sgbenavides" target="_blank" rel="noopener noreferrer">
							<FaGithub className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</Link>
					</div>
					<div className="flex items-center space-x-1">
						<ModeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}
