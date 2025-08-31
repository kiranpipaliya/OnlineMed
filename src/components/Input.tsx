import React, { InputHTMLAttributes } from 'react';
import SpinnerLoader from './SpinnerLoader';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
	isLoading?: boolean;
	error?: boolean;
}

const Input: React.FC<InputProps> = ({
	type = 'text',
	className = '',
	isLoading = false,
	label,
	error,
	...rest
}) => {
	const defaultClasses = `rounded-[8px] focus:outline-none
                        text-text-d-light
                        placeholder:text-placeholder
                        w-full py-3 px-[17px] text-base font-normal leading-6 tracking-[0] 
                        shadow-[inset_0_0_0_1px_#2563EB,_0_1px_2px_0_rgba(0,0,0,0.05)] 
                        focus:shadow-[inset_0_0_0_1px_#2563EB,_0_0_0_2px_rgba(37,99,235,0.25)]`;
	const mergedClasses = twMerge(defaultClasses, className);
	return (
		<div className="flex flex-col">
			{label && (
				<label className="mb-1 text-sm font-medium">{label}</label>
			)}
			<div className="relative">
				<input type={type} className={mergedClasses} {...rest} />
				{isLoading && (
					<SpinnerLoader className="absolute right-4 top-[50%] translate-y-[-50%] w-6 h-6" />
				)}
				{error && (
					<p className="text-sm leading-0 tracking-[0] text-red-500 absolute bottom-[-18px]">
						Please enter a valid email
					</p>
				)}
			</div>
		</div>
	);
};

export default Input;
