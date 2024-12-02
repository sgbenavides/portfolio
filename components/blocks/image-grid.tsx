import { cn } from "@/lib/utils";

interface ImageGridProps {
	images: {
		url: string;
		alt: string;
	}[];
	className?: string;
}

export function ImageGrid({ images, className }: ImageGridProps) {
	if (!images || images.length === 0 || images.length > 3) {
		return null;
	}

	return (
		<div className={cn("mx-auto w-full p-4", className)}>
			<div className="grid grid-cols-8 gap-3">
				{/* Main larger image */}
				<div className="col-span-5">
					<div className="h-[280px] overflow-hidden rounded-lg bg-muted transition-transform duration-300 hover:-translate-y-1">
						<img
							src={images[0].url}
							alt={images[0].alt}
							className="h-[280px] w-full scale-100 object-cover transition-transform duration-300"
						/>
					</div>
				</div>

				{/* Right column with two smaller images */}
				<div className="col-span-3 grid grid-rows-2 gap-3">
					<div className="h-[135px] overflow-hidden rounded-lg bg-muted transition-transform duration-300 hover:translate-x-1">
						<img
							src={images[1].url}
							alt={images[1].alt}
							className="h-[135px] w-full scale-105 object-cover object-right transition-transform duration-300"
						/>
					</div>

					<div className="h-[135px] overflow-hidden rounded-lg bg-muted transition-transform duration-300 hover:-translate-y-1">
						<img
							src={images[2].url}
							alt={images[2].alt}
							className="h-[135px] w-full scale-110 object-cover transition-transform duration-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
