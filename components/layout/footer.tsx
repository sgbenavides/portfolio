import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FaXTwitter, FaGithub } from "react-icons/fa6";
import * as React from "react";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Projects", href: "#projects" },
];

const companyItems = [
	{ name: "Contact", href: "#" },
	{ name: "License", href: "#" },
	{ name: "Terms", href: "#" },
	{ name: "Privacy", href: "#" },
];

const projectItems = [{ name: "coming soon...", href: "#" }];

export function Footer() {
	return (
		<footer className="w-full border-t bg-background">
			<div className="container mx-auto px-4 pb-12">
				<div className="flex flex-wrap justify-between pt-8 md:gap-32">
					<div className="flex flex-col gap-1">
						<div className="flex justify-between">
							<Link href="/" className="flex items-center space-x-2 pr-10 text-xl md:pr-20">
								<span className="font-bold">sergio.v1</span>
							</Link>

							<div className="flex items-center gap-8">
								<Link href="https://x.com/sgbenavides_" target="_blank" rel="noopener noreferrer">
									<FaXTwitter className="h-6 w-6" />
									<span className="sr-only">Twitter</span>
								</Link>

								<Link href="https://github.com/sgbenavides" target="_blank" rel="noopener noreferrer">
									<FaGithub className="h-6 w-6" />
									<span className="sr-only">GitHub</span>
								</Link>
							</div>
						</div>
						<p className="my-8 text-sm text-muted-foreground">Made with love 🫶🏻 by Sergio from Costa Rica 🇨🇷</p>
					</div>
					<div className="flex flex-col gap-3 md:ml-auto">
						<h3 className="font-semibold">Navigation</h3>
						<div className="flex flex-col gap-2">
							{navItems.map((item) => (
								<Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary">
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className="mb-auto flex flex-col gap-3">
						<h3 className="font-semibold">Projects</h3>
						<div className="flex flex-col gap-2">
							{projectItems.map((item) => (
								<Link key={item.name} href={item.href} className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary">
									{item.name}
									<ArrowRight className="h-4 w-4" />
								</Link>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-3">
						<h3 className="font-semibold">Company</h3>
						<div className="flex flex-col gap-2">
							{companyItems.map((item) => (
								<Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary">
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 border-t py-8">
				<p className="text-center text-sm text-muted-foreground">© 2024 Sergio Benavides. All rights reserved.</p>
			</div>
		</footer>
	);
}
