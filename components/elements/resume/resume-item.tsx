import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

interface ResumeItemProps {
	id: string;
	logoUrl: string;
	altText: string;
	title: string;
	subtitle: string;
	period: string;
	description?: string;
	details?: string[];
}

export function ResumeItemCompact({ logoUrl, altText, title, subtitle }: ResumeItemProps) {
	return (
		<>
			<div className="mt-4 grid w-full grid-cols-[50px_2fr] items-center gap-x-4">
				<Avatar className="size-12 border">
					<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
					<AvatarFallback>{title[0]}</AvatarFallback>
				</Avatar>

				<div className="flex w-full items-start justify-between text-xs md:items-center md:text-sm">
					<div className="flex flex-col">
						<p className="text-left">{title}</p>
						<p className="text-muted-foreground">{subtitle}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export function ResumeItem({ id, logoUrl, altText, title, subtitle, period, description, details }: ResumeItemProps) {
	return (
		<AccordionItem value={`item-${id}`}>
			<AccordionTrigger className="hover:no-underline">
				<div className="grid w-full grid-cols-[50px_2fr] items-center gap-x-4">
					<Avatar className="size-12 border">
						<AvatarImage src={logoUrl} alt={altText} className="object-contain" />
						<AvatarFallback>{title[0]}</AvatarFallback>
					</Avatar>

					<div className="flex w-full items-start justify-between text-xs md:items-center md:text-sm">
						<div className="flex flex-col">
							<h4 className="text-base">{title}</h4>

							<p className="text-md text-muted-foreground">
								{subtitle} | {period}
							</p>
						</div>
					</div>
				</div>
			</AccordionTrigger>
			<AccordionContent>
				<div className="grid w-full gap-x-4 md:grid-cols-[50px_2fr]">
					<div />
					<div>
						<p className="text-left">{description}</p>
						{details?.length ? (
							<ul className="ml-2 mt-2 flex flex-col justify-center space-y-2 text-left">
								{details.map((detail, index) => (
									<li key={index} className="flex items-center gap-3 text-xs text-muted-foreground">
										<div>
											<CheckCircle className="size-4" />
										</div>
										{detail}
									</li>
								))}
							</ul>
						) : null}
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}
