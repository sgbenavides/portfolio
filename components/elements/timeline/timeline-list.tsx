"use client";

import { cn } from "@/lib/utils";
import { TimelineItem } from "@/components/elements/timeline/timeline-item";
import { Timeline } from "@/types";

interface TimelineProps {
	items: Timeline;
	className?: string;
}

export function TimelineList({ items, className }: TimelineProps) {
	return (
		<div className={cn("relative", className)}>
			{items.map((item, index) => (
				<TimelineItem key={index} {...item} />
			))}
		</div>
	);
}
