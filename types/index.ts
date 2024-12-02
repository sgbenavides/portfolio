export interface ResumeItem {
	id: string;
	logoUrl: string;
	altText: string;
	title: string;
	subtitle: string;
	href: string;
	badges: string[];
	period: string;
	description?: string;
	details?: string[];
}

export interface TimelineItem {
	date: string;
	title: string;
	location: string;
	description: string;
	logoUrl: string;
}

export interface ImageItem {
	url: string;
	alt: string;
}

export interface PurposeItem {
	title: string;
	description: string;
	icon?: string;
}

// Arrays types
export type Resume = ResumeItem[];
export type Timeline = TimelineItem[];
export type Images = ImageItem[];
export type Purpose = PurposeItem[];

// You can also create a unified type for the entire data structure
export interface PortfolioData {
	resume: Resume;
	timeline: Timeline;
	images: Images;
	purpose: Purpose;
}
