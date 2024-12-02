"use client";

import { Purpose, PurposeItem } from "@/types";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PurposeListProps {
	purposes: Purpose;
}

type IconName = keyof typeof LucideIcons;

interface DynamicIconProps {
	name: IconName;
	className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
	const Icon = LucideIcons[name] as LucideIcon;
	return <Icon className={className} />;
}

export function PurposeList({ purposes }: PurposeListProps) {
	return (
		<div className="container relative">
			<div className="relative mt-8 grid md:grid-cols-3">
				{purposes.map((purpose: PurposeItem) => (
					<div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8" key={purpose.title}>
						{purpose.icon ? <DynamicIcon name={purpose.icon as IconName} className="h-4 w-4" /> : null}
						<div>
							<h3 className="text-lg font-medium">{purpose.title}</h3>
							<p className="mt-1 text-sm text-muted-foreground">{purpose.description}</p>
						</div>
					</div>
				))}
				<div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
				<div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
				<div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
				<div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
				<div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
				<div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
				<div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
				<div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
				<div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
				<div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
				<div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
			</div>
		</div>
	);
}
