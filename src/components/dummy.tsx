'use client';
import React, { useState } from 'react';
import Input from './Input';
import OtpForm from './OtpForm';
import CaretLeft from '@/icons/CaretLeft.svg';
import Image from 'next/image';
const EmailForm = () => {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [steps, setSteps] = useState(1);

	const handleEmailSubmit = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				setSteps(2);
			}, 3000);
		}
	};

	const renderSteps = (steps = 1) => {
		switch (steps) {
			case 1:
				return (
					<form
						className="mt-6"
						action="#"
						onKeyDown={handleEmailSubmit}
					>
						<Input
							onChange={(e) => setEmail(e.target.value)}
							isLoading={isLoading}
							placeholder="Enter your email"
						/>
					</form>
				);
			case 2:
				return <OtpForm email={email} steps={steps} />;
		}
	};
	return (
		<>
			{renderSteps(steps)}
			<div className="flex items-center justify-between mt-6">
				<button className="flex cursor-pointer text-primary items-center gap-1 font-bold text-base leading-6 tracking-[-0.5px]">
					<Image src={CaretLeft} alt="icon" width={20} height={20} />
					Back
				</button>
				<button className="font-bold py-[11px] px-[44px] rounded-[8px] text-white bg-text-light2 text-[18px] tracking-[0] leading-7">
					Next
				</button>
			</div>
		</>
	);
};

export default EmailForm;
