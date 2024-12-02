"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
	id: string;
	label: string;
	title: string;
	description: string;
	children: React.ReactNode;
	className?: string;
	labelledById?: string;
}

export function ContentSection({ id, label, title, description, children, className, labelledById }: ContentSectionProps) {
	return (
		<section className={cn("mx-auto w-full max-w-4xl px-4 py-20", className)} aria-labelledby={labelledById} id={id}>
			<div className="container">
				<div className="text-center">
					<div className="mb-2 inline-block rounded-lg bg-foreground px-3 py-1 text-xs capitalize text-background md:text-sm">{label}</div>
					<h2 id={labelledById} className="mb-2 text-2xl/relaxed font-bold capitalize sm:text-4xl/relaxed">
						{title}
					</h2>
					<p className="lg:text-md mx-auto max-w-xs text-xs text-accent-foreground sm:max-w-sm md:max-w-md lg:max-w-lg">{description}</p>
				</div>
				<>{children}</>
			</div>
		</section>
	);
}
