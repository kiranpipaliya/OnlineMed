'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import Avatar from '@/icons/Avatar.svg';
import Star from '@/icons/Star.svg';
import Image from 'next/image';

type Slide = {
	name: string;
	avatar: string;
	subTitle: string;
	rating: number;
	postDate: string;
	text: string;
};

export default function Slider() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		slides: { perView: 1,spacing: 16, },
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});

	const slides: Slide[] = [
		{
			name: 'Nick P.',
			avatar: Avatar,
			subTitle: 'Student • New York',
			rating: 5,
			postDate: '1 week ago',
			text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
		},
        {
			name: 'Nick P.',
			avatar: Avatar,
			subTitle: 'Student • New York',
			rating: 5,
			postDate: '1 week ago',
			text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
		},
        {
			name: 'Nick P.',
			avatar: Avatar,
			subTitle: 'Student • New York',
			rating: 5,
			postDate: '1 week ago',
			text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
		},
	];

	return (
		<div className="w-full max-w-lg mx-auto">
			<div
				ref={sliderRef}
				className="keen-slider rounded-xl overflow-hidden"
			>
				{slides.map((s, idx) => (
					<div
						key={idx}
						className="keen-slider__slide rounded-xl py-5 px-4 bg-white-light"
					>
						<div className="flex items-center gap-3">
							<Image
								src={s.avatar}
								alt={`${s.name} avatar`}
								width={40}
								height={40}
								className="rounded-full"
							/>
							<div>
								<p className="font-bold text-base leading-6 tracking-[0]">
									{s.name}
								</p>
								<p className="text-text-light text-xs font-normal leading-4 tracking-[0]">
									{s.subTitle}
								</p>
							</div>
						</div>
						<div className="flex justify-between items-center mt-4 mb-[-0.85px]">
							<div className="flex items-center gap-[2.51px]">
								{Array.from({ length: s.rating }).map(
									(_, idx) => (
										<Image
											key={idx}
											src={Star}
											alt="star"
											width={18.4}
											height={18.4}
										/>
									),
								)}
							</div>
							<p className="text-text-light text-xs font-normal leading-4 mt-[-1px]">
								{s.postDate}
							</p>
						</div>
						<p className="mt-[9px] text-sm font-normal leading-5">
							{s.text}
						</p>
					</div>
				))}
			</div>

			{/* Dots */}
			<div className="flex justify-start gap-2 mt-6">
				{slides.map((_, idx) => (
					<button
						key={idx}
						onClick={() => instanceRef.current?.moveToIdx(idx)}
						className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
							currentSlide === idx ? 'bg-primary opacity-100' : 'bg-primary opacity-30'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
