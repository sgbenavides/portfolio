import React from "react";
import { Code2, GitBranch, Workflow, GraduationCap, Users, HandHeart, ArrowRight } from "lucide-react";

export function Services() {
	return (
		<section className="relative isolate w-full py-10" id="services">
			{/* Decorative Grid Pattern */}
			<div
				className="pointer-events-none absolute inset-0 -z-10 w-full"
				style={{
					background: "radial-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px)",
					backgroundSize: "6px 6px",
					opacity: 0.15,
				}}
				aria-hidden="true"
			/>

			{/* Gradient Overlays */}
			<div className="absolute inset-0 bottom-0 -z-10 bg-gradient-to-b from-background via-transparent to-transparent" aria-hidden="true" />
			<div className="absolute inset-0 -top-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

			<div className="mx-auto grid w-full max-w-screen-xl gap-y-6 shadow-2xl shadow-amber-500/10 lg:grid-cols-2">
				{/* Software Engineering Section */}
				<div className="rounded-md border bg-accent/50 p-6 md:p-10 lg:rounded-l-md lg:rounded-r-none lg:border-y lg:border-l lg:border-r-0">
					<h2 className="mb-6 text-3xl font-semibold md:text-4xl">Software Engineering</h2>
					<p className="mb-6 text-lg text-muted-foreground">
						Transform your ideas into production-ready applications. With years of experience in building scalable solutions, my team and I can
						help bring your next project to life.
					</p>
					<div className="flex flex-col gap-4">
						<a href="#" className="flex items-center gap-2 text-lg font-medium">
							View portfolio
							<ArrowRight className="h-auto w-4" />
						</a>
						<a href="#" className="flex items-center gap-2 text-lg font-medium">
							Start collaboration
							<ArrowRight className="h-auto w-4" />
						</a>
					</div>
					<div className="mt-10">
						<div className="flex items-center gap-7 py-6">
							<Code2 className="h-8 w-8 shrink-0" />
							<p>Full-stack development with modern technologies and best practices for production-ready applications.</p>
						</div>
						<div className="flex items-center gap-7 border-y border-dashed border-primary py-6">
							<GitBranch className="h-8 w-8 shrink-0" />
							<p>Experienced team ready to tackle complex technical challenges and deliver scalable solutions.</p>
						</div>
						<div className="flex items-center gap-7 py-6">
							<Workflow className="h-8 w-8 shrink-0" />
							<p>End-to-end development services from planning and architecture to deployment and maintenance.</p>
						</div>
					</div>
				</div>

				{/* Training & Education Section */}
				<div className="dark rounded-md border bg-background p-6 text-primary md:p-10 lg:rounded-l-none lg:rounded-r-md">
					<h2 className="mb-6 text-3xl font-semibold md:text-4xl">Training & Education</h2>
					<p className="mb-6 text-lg text-muted-foreground">
						Empowering minds through technology education. Specialized training for companies, universities, and remote communities, making
						quality tech education accessible to all.
					</p>
					<div className="flex flex-col gap-4">
						<a href="#" className="flex items-center gap-2 text-lg font-medium">
							Training programs
							<ArrowRight className="h-auto w-4" />
						</a>
						<a href="#" className="flex items-center gap-2 text-lg font-medium">
							Sponsor a cause
							<ArrowRight className="h-auto w-4" />
						</a>
					</div>
					<div className="mt-10">
						<div className="flex items-center gap-7 py-6">
							<GraduationCap className="h-8 w-8 shrink-0" />
							<p>Customized training programs for companies and educational institutions with hands-on learning.</p>
						</div>
						<div className="flex items-center gap-7 border-y border-dashed border-primary py-6">
							<Users className="h-8 w-8 shrink-0" />
							<p>Special initiatives to bring tech education to remote communities and underserved areas.</p>
						</div>
						<div className="flex items-center gap-7 py-6">
							<HandHeart className="h-8 w-8 shrink-0" />
							<p>Support programs that create meaningful impact through technology education and skill development.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
