import React, { useEffect, useState } from 'react';
import Input from './Input';

type OtpFormPropsType = {
    email: string;
    steps: number;
    handleStepBack?: () => void
};

const OtpForm = (props: OtpFormPropsType) => {
    const { email, steps, handleStepBack } = props;
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (steps === 2) {
            setTimeout(() => {
                setIsAnimating(true);
            }, 50);
        } else {
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }
    }, [steps]);
    return (
        <div className="transition-all duration-1000 ease-in-out">
            <div className="rounded-[8px] border border-border">
                <div className="font-normal flex items-center justify-between px-6 py-3 bg-bg text-xl leading-6 tracking-[0]">
                    <div className="flex items-center gap-6 ml-[-1px] mt-[-1px]">
                        <span
                            className={`
                                transition-all duration-1000  ease-in-out font-normal text-base leading-6 text-primary overflow-hidden inline-block
                                ${isAnimating ? 'opacity-100 w-[2.4rem]' : 'opacity-0 w-0'}
                            `}
                        >
                            Email
                        </span>
                        <span className="animate-shimmer font-bold text-base leading-6 ">
                            {email}
                        </span>
                    </div>
                    <a
                        href="#"
                        onClick={handleStepBack}
                        className="text-sm font-medium leading-5 tracking-[0] mt-[-1px] underline decoration-dotted underline-offset-[23%]"
                    >
                        Change
                    </a>
                </div>
                <div className={`p-6 ${isAnimating ? 'opacity-100 h-[215px] py-6' : 'opacity-0 h-0 py-0'} ease-in-out transition-all duration-1000`}>
                    <h2 className="font-bold leading-6 text-base tracking-[-0.4px] ml-[-0.5px]">
                        Enter verification code
                    </h2>
                    <p className="font-normal text-base leading-6 tracking-[0] text-text-d-light mt-[4px] ml-[-0.5px]">
                        Enter the code sent to <span className='font-medium'>{email}</span> to use your saved
                        information.
                    </p>
                    <div className="flex gap-2.5 mt-6">
                        <div className="flex items-center gap-2.5">
                            <Input
                                type="text"
                                maxLength={1}
                                className="text-text-dark p-0 w-[48px] h-[48px] text-base leading-6 shadow-none focus:focus:shadow-[inset_0_0_0_1px_#2563EB,_0_0_0_2px_rgba(37,99,235,0.25)] text-center border border-border rounded-[12px]"
                            />
                            <Input
                                type="text"
                                maxLength={1}
                                className="text-text-dark p-0 w-[48px] h-[48px] text-base leading-6 shadow-none focus:focus:shadow-[inset_0_0_0_1px_#2563EB,_0_0_0_2px_rgba(37,99,235,0.25)] text-center border border-border rounded-[12px]"
                            />
                            <Input
                                type="text"
                                maxLength={1}
                                className="text-text-dark p-0 w-[48px] h-[48px] text-base leading-6 shadow-none focus:focus:shadow-[inset_0_0_0_1px_#2563EB,_0_0_0_2px_rgba(37,99,235,0.25)] text-center border border-border rounded-[12px]"
                            />
                            <Input
                                type="text"
                                maxLength={1}
                                className="text-text-dark p-0 w-[48px] h-[48px] text-base leading-6 shadow-none focus:focus:shadow-[inset_0_0_0_1px_#2563EB,_0_0_0_2px_rgba(37,99,235,0.25)] text-center border border-border rounded-[12px]"
                            />
                        </div>
                    </div>
                    <div className="mt-6 text-sm font-normal leading-5 tracking-[0.04px] text-text-light2">
                        Didn't receive a code?{' '}
                        <a href="#" className="text-primary font-bold">
                            Send again
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;