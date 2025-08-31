import Image from 'next/image';
import React from 'react';

const NoteCard = () => {
	return (
		<div className="pl-2 pt-2 pb-2 pr-6 rounded-[12px] flex items-center gap-6 bg-white">
			<div className="object-cover">
				<Image
					src="/images/notes.jpg"
					alt="notes"
					width={108}
					height={108}
				/>
			</div>
			<div className="flex-1">
				<div className="flex items-center justify-between">
					<p className="font-medium text-sm leading-5 text-text-light">
						Note requesting for
					</p>
					<a
						className="text-primary font-bold text-sm leading-5"
						href="#"
					>
						Edit
					</a>
				</div>
				<div className="flex items-center justify-between mt-2">
					<div className="">
						<h5 className="text-text-dark font-bold text-base leading-6 tracking-[0]">
							Justin Garner
						</h5>
						<p className="text-text-light font-medium text-sm leading-5 tracking-[0] mt-1">
							Headache/Migraine
						</p>
					</div>
					<p className="text-text-dark font-medium text-base leading-6 tracking-[0]">
						$39
					</p>
				</div>
			</div>
		</div>
	);
};

export default NoteCard;
