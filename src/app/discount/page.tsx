import NoteCard from '@/components/NoteCard';
import RadioCard from '@/components/RadioCard';
import React from 'react';
import {
	PaymentOptionData,
	RadioCardOptions,
	summaryItems,
} from '../Constant/dummyData';
import DiscountInput from '@/components/DiscountInput';
import Image from 'next/image';
import PaymentOptionCard from '@/components/PaymentOptionCard';
import SummaryCard from '@/components/SummaryCard';
const DiscountPage = () => {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="max-w-[1440px] w-full grid grid-cols-2 grid-rows-1">
				<div className="bg-back-light py-[64px] relative">
					<div className="mx-auto px-[124px]">
						<h5 className="font-bold text-2xl leading-8 tracking-[0] ml-[-0.5px]">
							Get your note
						</h5>
						<p className="font-normal text-base leading-6 tracking-[0] mt-1 ml-[-0.5px] text-text-light">
							No appointments, no waiting rooms, no $200 bills.
						</p>
						<div className="mt-6">
							<NoteCard />
						</div>
						<div className="mt-16">
							<p className="font-medium text-text-light text-sm leading-5 tracking-[0]">
								Delivery options
							</p>
							<div className="mt-3">
								<RadioCard
									className="flex flex-col gap-4"
									options={RadioCardOptions}
								/>
							</div>
						</div>
						<div className="mt-16">
							<DiscountInput />
						</div>
					</div>
					<div className=" flex items-center justify-between absolute w-full px-[124px] bottom-6">
						<a
							className="font-medium text-sm leading-5 tracking-[0] text-text-light underline decoration-dotted underline-offset-4"
							href="#"
						>
							Refund policy
						</a>
						<a
							className="font-medium text-sm leading-5 tracking-[0] text-text-light underline decoration-dotted underline-offset-4"
							href="#"
						>
							Terms
						</a>
						<a
							className="font-medium text-sm leading-5 tracking-[0] text-text-light underline decoration-dotted underline-offset-4"
							href="#"
						>
							Privacy
						</a>
					</div>
				</div>
				<div className="bg-white py-[64px]">
					<div className="mx-auto px-[124px]">
						<h5 className="font-bold text-2xl leading-8 tracking-[0] ml-[-0.5px]">
							Place order
						</h5>
						<p className="font-normal text-base leading-6 tracking-[0] mt-1 ml-[-0.5px] text-text-light">
							By placing your order, you agree to our{' '}
							<a
								className=" underline decoration-dotted underline-offset-4"
								href="#"
							>
								Terms and Conditions.
							</a>
						</p>
						<div className="mt-8">
							<p className="font-medium text-sm leading-6 tracking-[0] text-text-light ml-[-0.5px]">
								How would you like to pay?
							</p>
							<div className="pt-5 relative pb-10 px-6 border border-border rounded-lg flex items-center flex-col mt-3">
								<p className="font-normal text-sm leading-5 tracking-[0] text-text-ex-light mt-[-1px] ml-[-1px]">
									Express checkout
								</p>
								<div className="flex items-stretch gap-6 w-full mt-5">
									<a
										className="py-3 w-[200px] h-12 bg-success rounded-lg  flex-1 flex items-center justify-center"
										href="#"
									>
										<Image
											src="/images/link.png"
											alt=""
											width={59}
											height={19.8}
										/>
									</a>
									<a
										className="py-3 h-12 w-[200px] flex-1 bg-warning rounded-lg flex items-center justify-center"
										href="#"
									>
										<Image
											src="/images/amazon.png"
											className="ml-[-14px] mt-[5px]"
											alt=""
											width={104}
											height={20}
										/>
									</a>
								</div>
								<span className="bg-white absolute px-4 text-sm font-normal leading-5 text-text-ex-light left-[50%] transform translate-x-[-50%] bottom-[-10px]">
									or
								</span>
							</div>
							<PaymentOptionCard
								className="flex flex-col gap-3 mt-3"
								options={PaymentOptionData}
							/>
							<div className="mt-6">
								<SummaryCard
									items={summaryItems}
									totalLabel="Your total today"
									totalValue="$53.99"
								/>
							</div>
							<div className="mt-6 flex items-center justify-center flex-col">
								<button className="bg-primary justify-center text-white text-center text-base font-bold leading-6 tracking-[0] rounded-lg p-4 w-full flex items-center">
									Place order{' '}
								</button>
								<div className="flex items-center gap-2 mt-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M17.2812 8.03281C17.0007 7.725 16.7105 7.40781 16.6011 7.12891C16.5 6.87344 16.494 6.45 16.4881 6.03984C16.4769 5.27734 16.465 4.41328 15.8928 3.8125C15.3206 3.21172 14.4978 3.19922 13.7716 3.1875C13.3809 3.18125 12.9777 3.175 12.7343 3.06875C12.4695 2.95391 12.1666 2.64922 11.8735 2.35469C11.3601 1.83672 10.7767 1.25 9.99996 1.25C9.22317 1.25 8.64059 1.83672 8.12644 2.35469C7.83329 2.64922 7.53121 2.95391 7.26559 3.06875C7.02377 3.175 6.61901 3.18125 6.22838 3.1875C5.50219 3.19922 4.67927 3.21172 4.1071 3.8125C3.53493 4.41328 3.52674 5.27734 3.51186 6.03984C3.50591 6.45 3.49996 6.87344 3.39877 7.12891C3.2894 7.40703 2.99922 7.725 2.71871 8.03281C2.22541 8.57188 1.66663 9.18437 1.66663 10C1.66663 10.8156 2.22541 11.4273 2.71871 11.9672C2.99922 12.275 3.2894 12.5922 3.39877 12.8711C3.49996 13.1266 3.50591 13.55 3.51186 13.9602C3.52303 14.7227 3.53493 15.5867 4.1071 16.1875C4.67927 16.7883 5.50219 16.8008 6.22838 16.8125C6.61901 16.8187 7.02228 16.825 7.26559 16.9312C7.53046 17.0461 7.83329 17.3508 8.12644 17.6453C8.63984 18.1633 9.22317 18.75 9.99996 18.75C10.7767 18.75 11.3593 18.1633 11.8735 17.6453C12.1666 17.3508 12.4687 17.0461 12.7343 16.9312C12.9777 16.825 13.3809 16.8187 13.7716 16.8125C14.4978 16.8008 15.3206 16.7883 15.8928 16.1875C16.465 15.5867 16.4769 14.7227 16.4881 13.9602C16.494 13.55 16.5 13.1266 16.6011 12.8711C16.7105 12.593 17.0007 12.275 17.2812 11.9672C17.7745 11.4281 18.3333 10.8156 18.3333 10C18.3333 9.18437 17.7745 8.57266 17.2812 8.03281ZM13.3973 8.56719L9.23062 12.9422C9.17533 13.0003 9.10968 13.0464 9.03743 13.0779C8.96516 13.1093 8.8877 13.1255 8.80948 13.1255C8.73126 13.1255 8.65381 13.1093 8.58154 13.0779C8.50928 13.0464 8.44363 13.0003 8.38835 12.9422L6.60263 11.0672C6.49095 10.9499 6.4282 10.7909 6.4282 10.625C6.4282 10.4591 6.49095 10.3001 6.60263 10.1828C6.71433 10.0655 6.86582 9.99965 7.02377 9.99965C7.18172 9.99965 7.33321 10.0655 7.4449 10.1828L8.80948 11.6164L12.555 7.68281C12.6103 7.62474 12.676 7.57868 12.7482 7.54725C12.8205 7.51583 12.898 7.49965 12.9761 7.49965C13.0543 7.49965 13.1318 7.51583 13.2041 7.54725C13.2763 7.57868 13.342 7.62474 13.3973 7.68281C13.4526 7.74088 13.4964 7.80982 13.5263 7.88569C13.5563 7.96156 13.5717 8.04288 13.5717 8.125C13.5717 8.20712 13.5563 8.28844 13.5263 8.36431C13.4964 8.44018 13.4526 8.50912 13.3973 8.56719Z"
											fill="url(#paint0_linear_6_759)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_6_759"
												x1="9.99996"
												y1="1.25"
												x2="9.99996"
												y2="18.75"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="#FFD712" />
												<stop
													offset="1"
													stop-color="#D57342"
												/>
											</linearGradient>
										</defs>
									</svg>
                                    <span className='font-medium text-sm leading-5 text-dark-100'>Money Back Guarantee</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DiscountPage;
