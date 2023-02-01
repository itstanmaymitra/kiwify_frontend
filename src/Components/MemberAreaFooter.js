const MemberAreaFooter = () => {
	return (
		<footer className="bottom-0 w-full">
			<div className="bg-white border-t w-full px-4 lg:px-20 py-4 flex flex-wrap items-center justify-between">
				<div className="flex items-center">
					<img
						src="https://assets.kiwify.com.br/extra/footer-kiwify-gray.png"
						alt=""
						className="w-24"
					/>
					<div className="ml-4 text-gray-500 text-sm">
						Copyright © 2021 Kiwify.
					</div>
				</div>
				<div className="flex flex-wrap flex-col md:flex-row mt-4 md:mt-0">
					<a
						href="/"
						className="text-gray-500 text-sm cursor-pointer hover:underline"
					>
						My Courses
					</a>
					<div className="text-gray-500 md:ml-4 mt-2 md:mt-0 text-sm cursor-pointer hover:underline">
						Help &amp; Support
					</div>
					<div className="text-gray-500 md:ml-4 mt-2 md:mt-0 text-sm flex cursor-pointer hover:underline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							width="24px"
							height="24px"
							className="mr-1"
						>
							<path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"></path>
						</svg>
						Switch to Dashboard
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MemberAreaFooter;
