'use client';
import React, { useState } from 'react';
import Input from './Input';
import OtpForm from './OtpForm';
import CaretLeft from '@/icons/CaretLeft.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const EmailForm = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [steps, setSteps] = useState(1);
    const router = useRouter();
	const validateEmail = (email: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleEmailSubmit = (e?: React.FormEvent) => {
		e?.preventDefault();
		if (email && validateEmail(email)) {
			setIsLoading(true);
			setError(false);
			setTimeout(() => {
				setIsLoading(false);
				setSteps(2);
			}, 3000);
		} else {
			setError(true);
		}
        if(steps === 2 ){
            router.push('/discount');
        }
	};

	const handleStepBack = () => {
		setTimeout(() => {
			setSteps(1);
		}, 50);
	};


	return (
		<>
			<div className="relative mt-6">
				<form
                    id="email-form"
					className={`transition-all duration-10000 ease-in-out ${
						steps === 1
							? 'opacity-100 relative visible block'
							: 'opacity-0 invisible hidden'
					}`}
					action="#"
					onSubmit={handleEmailSubmit}
				>
					<Input
						onChange={(e) => {
							setEmail(e.target.value);
							if (error) setError(false);
						}}
						isLoading={isLoading}
						placeholder="Enter your email"
						value={email}
                        error={error}
						className={
							error ? 'shadow-none border border-red-500' : ''
						}
					/>

				
				</form>

				<div
					className={`transition-all duration-10000 ease-in-out ${
						steps === 2
							? 'opacity-100 z-10 visible block mt-0'
							: 'opacity-0 invisible hidden mt-[-50px]'
					}`}
				>
					<OtpForm
						email={email}
						steps={steps}
						handleStepBack={handleStepBack}
					/>
				</div>
                <div className="flex items-center justify-between mt-6">
						<button
							type="button"
							onClick={handleStepBack}
							className="flex cursor-pointer text-primary items-center gap-1 font-bold text-base leading-6 tracking-[-0.5px]"
						>
							<Image
								src={CaretLeft}
								alt="icon"
								width={20}
								height={20}
							/>
							Back
						</button>
						<button
                            form="email-form"
							type="submit" 
							className="font-bold py-[11px] px-[44px] w-full max-w-[128px] rounded-[8px] text-white bg-primary text-[18px] tracking-[0] leading-7"
						>
							Next
						</button>
					</div>
			</div>
		</>
	);
};

export default EmailForm;
