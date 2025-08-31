'use client';
import React, { useState } from 'react';

interface Option {
	id: string;
	title: string;
	subtitle: string;
	price: string;
	icon: React.ReactNode;
}

interface RadioCardProps {
	options: Option[];
	className?: string;
}

const RadioCard: React.FC<RadioCardProps> = ({ options, className }) => {
	const [selectedOptionId, setSelectedOptionId] = useState<string | null>(
		null,
	);

	const handleSelect = (id: string) => {
		setSelectedOptionId(id);
	};

	return (
		<div className={className}>
			{options.map((option) => (
				<div
					key={option.id}
					className={`
              flex items-center bg-white justify-between px-6 py-4 border rounded-xl cursor-pointer transition-all duration-300
              ${
					selectedOptionId === option.id
						? ' border-primary shadow-[0px_4px_8px_0px_rgba(75,85,99,0.15)]'
						: 'border-transparent shadow-none'
				}
            `}
					onClick={() => handleSelect(option.id)}
				>
					<div className="flex items-center gap-5">
						<div
							className={`
                  w-[19px] h-[19px] p-1 rounded-full border-1 flex items-center justify-center
                  ${
						selectedOptionId === option.id
							? 'bg-primary'
							: 'border-border bg-white'
					}
                `}
						>
							{selectedOptionId === option.id && (
								<div className="w-full h-full bg-white rounded-full"></div>
							)}
						</div>

						<div>
							<div
								className={`
                    font-bold text-sm leading-5 tracking-[0] mt-[-1px]
                    ${
						selectedOptionId === option.id
							? 'text-primary'
							: 'text-text-light'
					}
                  `}
							>
								{option.title}{' '}
								<span>
									• {option.price}
								</span>
							</div>
							<div className="font-medium text-sm leading-5 tracking-[0] text-text-light mt-1">
								{option.subtitle}
							</div>
						</div>
					</div>
                    <div className={`p-1.5 flex items-center justify-center rounded-full min-w-[32px] min-h-[32px] transition-all duration-300 ${selectedOptionId === option.id ? "bg-primaryLight text-primary" : "bg-back-light  text-text-light"}`}>
                        {option.icon}
                    </div>
					
				</div>
			))}
		</div>
	);
};

export default RadioCard;
