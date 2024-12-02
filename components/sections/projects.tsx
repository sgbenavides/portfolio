"use client";

import { ContentSection } from "@/components/sections/content-section";

export function Projects() {
	return (
		<ContentSection
			id="projects"
			label="My Projects"
			title="Checkout My Latest Work"
			description="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
			labelledById="projects"
		>
			<h4 className="mt-10 text-center text-xl text-muted-foreground">Coming soon...</h4>
		</ContentSection>
	);
}
