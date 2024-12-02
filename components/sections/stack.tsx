"use client";

import {
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiBun,
	SiDocker,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiPostgresql,
	SiDrizzle,
	SiShadcnui,
	SiReactrouter,
	SiHono,
	SiPython,
	SiGo,
	SiPlaywright,
	SiJest,
	SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

const technologies = [
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "React", icon: SiReact },
	{ name: "Shadcn/UI", icon: SiShadcnui },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "Typescript", icon: SiTypescript },
	{ name: "ReactRouter", icon: SiReactrouter },
	{ name: "Bun", icon: SiBun },
	{ name: "Hono", icon: SiHono },
	{ name: "Python", icon: SiPython },
	{ name: "Go", icon: SiGo },
	{ name: "Docker", icon: SiDocker },
	{ name: "AWS", icon: FaAws },
	{ name: "Git", icon: SiGit },
	{ name: "GitHub", icon: SiGithub },
	{ name: "GitHub Actions", icon: SiGithubactions },
	{ name: "Drizzle", icon: SiDrizzle },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "Redis", icon: DiRedis },
	{ name: "Playwright", icon: SiPlaywright },
	{ name: "Jest", icon: SiJest },
];

export function Stack() {
	return (
		<div className="relative mt-20 w-full">
			{/* Content Container - Move isolate here and add relative */}
			<div className="relative isolate pb-10">
				<div className="z-20 mx-auto flex max-w-4xl flex-col gap-10 px-4 text-center md:flex-row md:text-left">
					<div className="">
						<span className="text-base text-muted-foreground">Technology Stack 🔥</span>
						<h2 className="my-4 text-xl/relaxed font-bold">Production-Grade Infrastructure</h2>
						<p className="max-w-md text-base text-muted-foreground md:text-lg">
							Built with modern technologies trusted by thousands of developers and companies worldwide. Enterprise-ready and scalable from day
							one.
						</p>
					</div>

					<div className="grid grid-cols-5 gap-4">
						{technologies.map((tech) => {const Icon = tech.icon;
							return (
								<div
									key={tech.name}
									className="flex flex-col items-center justify-center rounded-lg bg-accent/70 p-4 shadow-lg transition-transform md:px-8 md:py-4"
								>
									<Icon className="h-6 max-h-6 w-6 max-w-6 text-primary"/>
								</div>
							);
						})}
					</div>
				</div>
				<div className="my-10 px-4">
				<h4 className="mx-auto mb-10 mt-20 max-w-4xl text-center text-xl/relaxed font-bold md:text-left">
						2024 has been an incredible journey 🎉
					</h4>
					<img
						src="/images/github_contribution.png"
						alt="Profile hero image"
						className="mx-auto h-auto w-full max-w-4xl rounded-xl object-cover object-center shadow-2xl shadow-amber-500/15"
					/>
				</div>

				{/* Decorative Grid Pattern - Positioned relative to content container */}
				<div
					className="pointer-events-none absolute inset-0 -z-20 w-full"
					style={{
						background: "radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px)",
						backgroundSize: "6px 6px",
						opacity: 0.25,
					}}
					aria-hidden="true"
				/>

				{/* Gradient Overlay - Lower z-index than grid pattern */}
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-transparent to-transparent" aria-hidden="true" />
			</div>
		</div>
	);
}
