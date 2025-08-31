'use client';
import React, { useState } from 'react';

interface Option {
	id: string;
	title: string;
	icon: React.ReactNode;
	badge?: string | React.ReactNode;
}

interface PaymentOptionCardProps {
	options: Option[];
	className?: string;
}

const PaymentOptionCard: React.FC<PaymentOptionCardProps> = ({
	options,
	className = '',
}) => {
	const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
		null,
	);

	const handleSelect = (id: string) => {
		setSelectedOptionId(id);
	};

	return (
		<div className={className}>
			{options.map((option) => {
				const isSelected = selectedOptionId === option.id;

				return (
					<div
						key={option.id}
						onClick={() => handleSelect(option.id)}
						className={`flex items-center h-[52px] justify-between px-4 py-4 border rounded-lg cursor-pointer transition-all duration-300 
              bg-white
              ${
					isSelected
						? 'border-primary shadow-[0px_4px_8px_0px_rgba(75,85,99,0.15)]'
						: 'border-border shadow-none'
				}
            `}
					>
						{/* Left Section (Icon + Title) */}
						<div className="flex items-center gap-4  mb-[-1px] mt-[-1px]">
							<div className='ml-[-1.5px] my-[-1px]'>{option.icon}</div>
							<span
								className={`font-bold text-sm leading-5 mt-[-1px]
                  ${isSelected ? 'text-primary' : 'text-text-light'}
                `}
							>
								{option.title}
							</span>
						</div>

						<div className="flex items-center  gap-4">
							{option.badge && (
								<>
									{option.badge}
								</>
							)}
							{/* Right Section (Custom Radio Circle) */}
							<div
								className={`w-[16.5px] h-[16.5px] min-w-[16.5px] min-h-[16.5px] p-1 mr-[3px] flex items-center justify-center rounded-full ring-[1.5px]
                ${
					isSelected
						? 'bg-primary ring-primary'
						: 'bg-white ring-text-light'
				}
              `}
							>
								{isSelected && (
									<div className="w-full h-full bg-white rounded-full" />
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PaymentOptionCard;
