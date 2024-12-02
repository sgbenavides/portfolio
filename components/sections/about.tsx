"use client";

import { ContentSection } from "@/components/sections/content-section";
import { experience, education, timeline, purpose, images, freelance } from "@/data/portfolio";
import { ProfileTabs } from "@/components/blocks/profile-tabs";

export function About() {
	return (
		<ContentSection
			id="about"
			label="About Me"
			title="Code, Heart & Community"
			description="With 7+ years of hands-on experience, I craft SaaS platforms, enterprise applications, and e-commerce solutions that drive business transformation. My passion extends beyond code – I thrive on fostering team growth, sharing knowledge, and building sustainable communities."
			labelledById="about-me"
		>
			<ProfileTabs experience={experience} freelance={freelance} education={education} timeline={timeline} purpose={purpose} images={images} />
		</ContentSection>
	);
}
