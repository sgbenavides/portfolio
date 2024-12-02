import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
	date: string;
	title: string;
	location: string;
	description: string;
	logoUrl: string;
	logoAlt?: string;
}

export function TimelineItem({ date, title, location, description, logoUrl, logoAlt }: TimelineItemProps) {
	return (
		<div className="relative pb-8 pl-12">
			{/* Timeline line */}
			<div className="absolute -bottom-3 left-5 top-5 w-px bg-border" />

			{/* Timeline circle with logo */}
			<div className="absolute -left-1 top-3">
				<Avatar className="size-12 border border-background">
					<AvatarImage src={logoUrl} alt={logoAlt || title} className="object-contain" />
					<AvatarFallback className="text-xs">{title[0]}</AvatarFallback>
				</Avatar>
			</div>

			<Card className="border-0">
				<CardContent className="pt-4 text-xs md:text-sm">
					{/* Date */}
					<p className="mb-1 text-sm text-muted-foreground/70">{date}</p>

					{/* Title and Location */}
					<h4 className="mb-1 text-base font-semibold text-accent-foreground">{title}</h4>
					<p className="mb-3 text-muted-foreground">{location}</p>

					{/* Description */}
					<p className="text-balance text-muted-foreground">{description}</p>
				</CardContent>
			</Card>
		</div>
	);
}
