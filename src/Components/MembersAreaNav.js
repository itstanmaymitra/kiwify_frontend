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
					<div className="border-2 border-white/80 p-2 rounded-full h-10 w-10 flex justify-center items-center">
						<p className="text-white font-semibold text-sm">0%</p>
					</div>
					<div className="rounded-full ml-5 border border-white h-10 w-10 cursor-pointer">
						<img
							className="w-full h-full rounded-full object-cover"
							src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembersAreaNav;
