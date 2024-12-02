import { Resume } from "@/types";
import { Accordion } from "@/components/ui/accordion";
import { ResumeItem, ResumeItemCompact } from "@/components/elements/resume/resume-item";

interface ResumeListProps {
	title: string;
	items: Resume;
}

export function ResumeList({ title, items }: ResumeListProps) {
	if (!items) {
		return null;
	}

	if (items.length === 1) {
		const item = items[0];
		return (
			<div className="my-8">
				<h2 className="text-xl font-bold">{title}</h2>
				<ResumeItemCompact {...item} />
			</div>
		);
	}
	return (
		<div className="my-8">
			<h2 className="text-xl font-bold">{title}</h2>
			<Accordion type="single" collapsible>
				{items.map((item) => (
					<ResumeItem key={item.id} {...item} />
				))}
			</Accordion>
		</div>
	);
}
