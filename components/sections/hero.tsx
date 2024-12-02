"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface AvailabilityStatus {
	status: "available" | "unavailable" | "busy";
	text: string;
}

interface HeroSectionProps {
	name: string;
	role?: string;
	description?: string;
	availability?: AvailabilityStatus;
	imageUrl: string;
	className?: string;
}

export function Hero({
	name,
	role,
	description,
	availability = {
		status: "available",
		text: "Available for work",
	},
	imageUrl,
	className,
}: HeroSectionProps) {
	return (
		<section className={cn("relative isolate w-full px-4 py-10", className)} id="home" aria-labelledby="hero-heading">
			{/* Decorative Grid Pattern */}
			<div
				className="pointer-events-none absolute inset-0 -z-10 w-full"
				style={{
					background: "radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px)",
					backgroundSize: "6px 6px",
					opacity: 0.25,
				}}
				aria-hidden="true"
			/>

			{/* Gradient Overlay - Also needs negative z-index */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

			<div className="mx-auto w-full max-w-4xl px-4">
				<div className="gap-8 md:grid md:grid-cols-2 md:items-center">
					{/* Text Content */}
					<div className="text-center md:text-left">
						<div className="flex justify-center md:block">
							<div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-background px-2.5 py-1.5 text-xs normal-case">
								<Badge className="mr-1 rounded-full bg-muted p-1">
									<span
										className={cn("size-2 rounded-full", {
											"bg-green-400": availability.status === "available",
											"bg-yellow-400": availability.status === "busy",
											"bg-red-400": availability.status === "unavailable",
										})}
										aria-hidden="true"
									/>
								</Badge>
								<span>{availability.text}</span>
								<span aria-hidden="true">✨</span>
							</div>
						</div>
						<h1 id="hero-heading" className="text-4xl font-bold capitalize tracking-wide lg:text-5xl/tight">
							Hey, I&apos;m {name}!
						</h1>
						<h2 className="text-md mb-4 text-pretty font-thin text-accent-foreground lg:text-xl">{role}</h2>
						<div className="lg:text-md mx-auto text-sm text-accent-foreground lg:max-w-lg">{description}</div>
					</div>

					{/* Image Side */}
					<div className="mt-8 flex justify-end md:mt-0">
						<div className="relative w-80">
							<img
								src={imageUrl}
								alt="Profile hero image"
								className="h-80 w-80 rounded-lg object-cover object-center"
								style={{
									maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
									WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
								}}
							/>

							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
