import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Resume, Timeline, Images, Purpose } from "@/types";
import { ResumeList } from "@/components/elements/resume/resume-list";
import { TimelineList } from "@/components/elements/timeline/timeline-list";
import { ImageGrid } from "@/components/blocks/image-grid";
import { PurposeList } from "@/components/elements/purpose/purpose-list";

interface ProfileTabsProps {
	experience: Resume;
	education: Resume;
	freelance: Resume;
	timeline: Timeline;
	images: Images;
	purpose: Purpose;
}

export function ProfileTabs({ experience, education, timeline, freelance, images, purpose }: ProfileTabsProps) {
	return (
		<Tabs defaultValue="profile">
			<TabsList className="mx-auto my-10 grid max-w-96 grid-cols-3">
				<TabsTrigger value="profile">Profile</TabsTrigger>
				<TabsTrigger value="events">Events</TabsTrigger>
				<TabsTrigger value="purpose">Purpose</TabsTrigger>
			</TabsList>
			<TabsContent value="profile" className="">
				<ResumeList id="work-experience" title="Work Experience" items={experience} />
				<ResumeList id="freelance-experience" title="Freelance Experience" items={freelance} />
				<ResumeList id="education" title="Education" items={education} />
			</TabsContent>
			<TabsContent value="events">
				<TimelineList items={timeline} />
				<ImageGrid images={images} />
			</TabsContent>
			<TabsContent value="purpose">
				<PurposeList purposes={purpose} />
			</TabsContent>
		</Tabs>
	);
}
