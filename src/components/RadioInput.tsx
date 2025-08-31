'use client';

import { useState } from 'react';

type Option = {
	id: string;
	label: string;
};

const options: Option[] = [
	{ id: 'option1', label: 'Option 1' },
	{ id: 'option2', label: 'Option 2' },
];

export default function SegmentedRadio() {
	const [selected, setSelected] = useState<string>('');

	return (
		<div className="flex flex-col w-32 border rounded-xl overflow-hidden">
			{options.map((option, idx) => (
				<label
					key={option.id}
					className={`flex items-center justify-center p-6 cursor-pointer relative border-b last:border-b-0 transition
            ${selected === option.id ? 'border-blue-500' : 'border-gray-300'}
          `}
				>
					<input
						type="radio"
						name="segmented"
						value={option.id}
						checked={selected === option.id}
						onChange={() => setSelected(option.id)}
						className="hidden"
					/>
					<span
						className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${selected === option.id ? 'border-blue-600' : 'border-gray-300'}
            `}
					>
						{selected === option.id && (
							<span className="w-3 h-3 bg-blue-600 rounded-full"></span>
						)}
					</span>
				</label>
			))}
		</div>
	);
}
