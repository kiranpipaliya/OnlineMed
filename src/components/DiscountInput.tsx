"use client";
import React, { useState } from "react";

const DiscountInput = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);
    const handleOnchange = (e:any)=>{
        setValue(e.target.value)
        setError(false)
    }
	return (
		<div
			className={`
                py-3 h-[56px] pl-6 pr-4  relative rounded-[12px] bg-white items-center transition-all duration-300 gap-2 cursor-pointer 
                ${isEditing ? 'flex w-full text-text-light': "inline-flex w-fit text-primary"}
                ${error ? " shadow-[inset_0_0_0_1px_#DF1C41,_0_0_0_2px_#DF1C4140]" : ""}
                `}
			onClick={() => !isEditing && setIsEditing(true)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M5.10562 18.8944C4.24312 18.0319 4.815 16.2197 4.37625 15.1584C3.92063 14.0625 2.25 13.1719 2.25 12C2.25 10.8281 3.92063 9.9375 4.37625 8.84156C4.815 7.78125 4.24312 5.96812 5.10562 5.10562C5.96812 4.24312 7.78125 4.815 8.84156 4.37625C9.94219 3.92063 10.8281 2.25 12 2.25C13.1719 2.25 14.0625 3.92063 15.1584 4.37625C16.2197 4.815 18.0319 4.24312 18.8944 5.10562C19.7569 5.96812 19.185 7.78031 19.6238 8.84156C20.0794 9.94219 21.75 10.8281 21.75 12C21.75 13.1719 20.0794 14.0625 19.6238 15.1584C19.185 16.2197 19.7569 18.0319 18.8944 18.8944C18.0319 19.7569 16.2197 19.185 15.1584 19.6238C14.0625 20.0794 13.1719 21.75 12 21.75C10.8281 21.75 9.9375 20.0794 8.84156 19.6238C7.78125 19.185 5.96812 19.7569 5.10562 18.8944Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15C16.5 14.1716 15.8284 13.5 15 13.5C14.1716 13.5 13.5 14.1716 13.5 15C13.5 15.8284 14.1716 16.5 15 16.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.25 15.75L15.75 8.25"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>

			{!isEditing ? (
				<span className="font-bold text-sm leading-5 text-primary">
					Add discount code
				</span>
			) : (
				<input
					type="text"
					value={value}
					onChange={handleOnchange}
					placeholder="Discount code"
					autoFocus
					className="flex-1 text-text-light border-none outline-none font-medium text-sm leading-5 tracking-[0] placeholder:text-placeholder"
					onBlur={() => !value && setIsEditing(false)}
				/>
			)}
            
            {isEditing && value && (
                <button onClick={()=>setError(true)} className="bg-primary cursor-pointer text-white px-4 py-1.5 rounded-[8px] font-bold text-sm leading-5 tracking-[0]">Apply</button>
            )}
            {error && (
                <p className="text-danger text-sm font-medium leading-5 tracking-[0] absolute bottom-[-29px] left-0">Invalid discount code</p>
            )}
		</div>
	);
};

export default DiscountInput;
