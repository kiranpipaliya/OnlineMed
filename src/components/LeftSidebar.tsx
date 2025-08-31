import Image from 'next/image';
import React from 'react';
import ReviewSlider from '@/components/ReviewSlider';
import Approved from '@/icons/Approved.svg';
const LeftSidebar = () => {
	return (
		<div className="flex flex-col h-[calc(100vh-28px)] p-3.5">
			<div>
				<h5 className="text-[20px] mb-[-4px] font-bold leading-8 tracking-[-0.5px]">
					OnlineMed
				</h5>
				<div className="flex mt-14 mb-[-4px] items-center gap-1 text-primary font-bold text-sm leading-5 tracking-[0]">
					<Image src={Approved} alt="" width={20} height={20} /> Money
					Back Guarantee
				</div>
				<h1 className="font-bold mb-[-6px] mt-5 text-[32px] leading-12 tracking-[-1px]">
					Your <span className="text-primary">Work</span> Note
					<br />
					is Minutes Away
				</h1>
				<p className="font-normal text-base leading-6 mt-6 align-middle">
					Note: Due to capacity we are currently only able to provide
					a limited number of notes per day. To see if you qualify
					please fill out the following short survey!
				</p>
			</div>
			<div className="flex-1"></div>
			<ReviewSlider />
		</div>
	);
};

export default LeftSidebar;
