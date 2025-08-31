import LeftSidebar from '@/components/LeftSidebar';
import EmailForm from '@/components/EmailForm';
export default function Home() {
	return (
		<div className="font-satoshi">
			<main className="p-2.5">
				<div className="grid grid-cols-[354px_1fr] grid-rows-1 gap-1">
					<LeftSidebar />
					<div className="form-wrapper p-3.5 bg-white rounded-3xl flex items-center justify-center">
						<div className="max-w-[660px] w-full">
							<div className="text-start">
								<div className="font-bold text-xl leading-[26px] mb-[-1px] tracking-[-1px] text-text-light2">
									<span className="text-primary">Step 3</span>
									/9
								</div>
								<h1 className="font-bold ml-[0.5px] text-[32px] leading-12 tracking-[-1px] mt-1 text-text-dark">
									What is your email?
								</h1>
								<p className="text-base font-normal leading-6 tracking-[0] text-text-d-light mt-2">
									This is where we send the note
								</p>
							</div>
							<EmailForm />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
