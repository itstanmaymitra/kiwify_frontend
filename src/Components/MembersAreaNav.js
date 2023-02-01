const MembersAreaNav = () => {
	return (
		<div
			className="flex-shrink-0 flex h-16 shadow md:z-20 w-full sticky sm:static top-0"
			style={{ backgroundColor: "rgb(243, 156, 25)" }}
		>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center flex-shrink-0 px-4">
					<div className="md:text-lg font-bold text-white">
						Kiwify Members Area
					</div>
				</div>
				<div className="ml-4 flex items-center lg:mr-6">
					<div>
						<p>0%</p>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default MembersAreaNav;
