import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import {Stack} from "@/components/sections/stack";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<Hero
				name={"Sergio"}
				role={"Software Engineer from Costa Rica 🇨🇷"}
				description="Finely crafting impactful solutions and scalable systems for large-scale companies and startups, in addition to creating educational resources to inspire others."
				availability={{
					status: "available",
					text: "Available for freelance work",
				}}
				imageUrl={"/images/profile.jpg"}
			/>
			<About />

			<Services />

			<Projects />

			<Stack />
		</div>
	);
}
