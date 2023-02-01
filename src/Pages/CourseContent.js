import { useEffect, useState } from "react";
import MemberAreaFooter from "../Components/MemberAreaFooter";

const CourseContent = () => {
	const [classTabOpen, setClassTabOpen] = useState(false);
	const [modules, setModules] = useState([]);

	useEffect(() => {
		fetch(
			"https://kiwify-backend-ckgfv5i2p-itstanmaymitra.vercel.app/get-modules",
			{ method: "GET" }
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setModules(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 relative">
			<div className="col-span-3">
				{/* Course Media Player */}
				<div>
					<div className="sticky top-0 left-0 w-full z-50">
						<div
							style={{
								padding: "56.25% 0 0 0",
								position: "relative",
							}}
						>
							<iframe
								title="video"
								src="https://player.vimeo.com/video/336812686?h=3a81782f84&title=0&byline=0&portrait=0"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
								}}
								allow="autoplay; fullscreen; picture-in-picture"
							></iframe>
						</div>
						<script src="https://player.vimeo.com/api/player.js"></script>
					</div>
				</div>

				{/* Course Header */}
				<header className="flex items-center justify-between py-4 px-4 lg:px-6 lg:border-b border-b-0">
					<div>
						<h4 className="uppercase font-medium lg:text-base text-sm text-blue-400">
							Module 1
						</h4>
						<h3 className="lg:text-2xl text-xl line-clamp">
							Video Title
						</h3>
					</div>

					<div className="flex items-center flex-shrink-0 flex-grow-0">
						<div className="mr-4">
							<div className="flex items-center">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										width="24px"
										height="24px"
										className="text-gray-300 cursor-pointer"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										width="24px"
										height="24px"
										className="text-gray-300 cursor-pointer"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										width="24px"
										height="24px"
										className="text-gray-300 cursor-pointer"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										width="24px"
										height="24px"
										className="text-gray-300 cursor-pointer"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										width="24px"
										height="24px"
										className="text-gray-300 cursor-pointer"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								</div>
							</div>
						</div>

						<div className="hidden lg:block">
							<button
								className="cursor-pointer mr-2 p-1 lg:p-2 bg-white rounded-md focus:outline-none focus:shadow-outline-blue bg-gray-50 text-gray-400 cursor-not-allowed"
								disabled="disabled"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									width="24px"
									height="24px"
								>
									<path
										fillRule="evenodd"
										d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
							<button className="cursor-pointer p-1 lg:p-2 bg-white rounded-md focus:outline-none focus:shadow-outline-blue bg-white border text-black">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									width="24px"
									height="24px"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</header>

				{/* Content and Classes Nav */}
				<div className="w-full lg:hidden" style={{ top: 270 }}>
					<div className="border-b border-gray-200">
						{classTabOpen ? (
							<nav className="flex -mb-px">
								<div
									className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 lg:ml-8 ml-6 cursor-pointer group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none"
									style={{
										color: "rgb(35, 83, 255)",
										borderColor: "rgb(35, 83, 255)",
									}}
									onClick={() => setClassTabOpen(true)}
								>
									<span className="select-none">Classes</span>
								</div>
								<div
									onClick={() => setClassTabOpen(false)}
									className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 lg:ml-8 ml-6 cursor-pointer group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none"
								>
									<span className="select-none">Content</span>
								</div>
							</nav>
						) : (
							<nav className="flex -mb-px">
								<div
									onClick={() => setClassTabOpen(true)}
									className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 lg:ml-8 ml-6 cursor-pointer group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none"
								>
									<span className="select-none">Classes</span>
								</div>
								<div
									onClick={() => setClassTabOpen(false)}
									className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 lg:ml-8 ml-6 cursor-pointer group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none"
									style={{
										color: "rgb(35, 83, 255)",
										borderColor: "rgb(35, 83, 255)",
									}}
								>
									<span className="select-none">Content</span>
								</div>
							</nav>
						)}
					</div>
				</div>

				{classTabOpen ? (
					<nav>
						{modules.map((m) => (
							<div key={m.id}>
								<div className="flex bg-gray-200 bg-opacity-50 items-center p-3 text-sm leading-5 cursor-pointer transition duration-500 font-medium border-t">
									<span className="line-clamp text-base p-1 pr-8 capitalize">
										{m.name}
									</span>
									<div className="ml-auto flex items-center text-sm leading-4">
										<span className="font-base mr-2">
											0/{m.contents.length}
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											width="24px"
											height="24px"
										>
											<path
												fillRule="evenodd"
												d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
								</div>
								<div>
									<div>
										{m.contents.map((c, i) => (
											<div
												key={c.id}
												className="p-3 select-none hover:bg-gray-100 flex transition duration-150 ease-in rounded cursor-pointer border-b border-gray-300"
											>
												<div className="px-2">
													<input
														type="checkbox"
														className="form-checkbox  cursor-pointer border-gray-400 h-5 w-5 transition duration-150 ease-in-out"
													/>
												</div>
												<div>
													<div className="line-clamp">
														{c.title}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</nav>
				) : (
					<div className="mt-8 mb-8 px-8">
						<div className="prose-sm prose-non-premium prose lg:prose-lg max-w-full">
							<p className="mb-3 text-justify">
								Nunc non velit sed nulla mollis interdum.
								Vivamus id cursus sem. Morbi aliquet dictum
								tortor at hendrerit. Praesent blandit ligula
								velit, id tempus sem pellentesque eget. Fusce
								mauris tellus, consequat nec neque quis,
								ullamcorper fermentum orci. Aenean vehicula
								vulputate luctus. Sed non lectus libero. In
								justo tortor, pharetra quis efficitur at, tempor
								ac nibh. Donec rutrum vulputate tellus in
								semper. Aenean porta malesuada ultrices. Sed et
								velit nec dui elementum convallis quis eget
								ligula. Duis quis faucibus velit, quis malesuada
								ante. Integer feugiat ex in tellus finibus, eget
								consequat purus ultricies. Sed eu dignissim
								nibh. Nam quis enim sit amet risus scelerisque
								volutpat sed a turpis. Donec hendrerit, ex
								dictum porta varius, velit libero interdum
								libero, id rhoncus tellus ligula in purus.
							</p>
							<p className="mb-3 text-justify">
								Aliquam eget felis quis lacus viverra aliquet
								vitae in urna. Integer laoreet, lacus eu semper
								cursus, nulla lacus viverra diam, sagittis
								malesuada sapien justo sed nibh. Nulla ornare
								molestie semper. Vivamus elementum sapien vel
								diam tincidunt porttitor. Duis mauris nisl,
								finibus quis dapibus sed, ornare eu tellus. Ut
								ullamcorper egestas leo, a pharetra arcu varius
								eget. Integer ac dolor id diam varius
								consectetur. Maecenas aliquam, purus a porttitor
								congue, nibh eros ullamcorper elit, nec porta
								ligula felis at nulla. Donec vitae commodo enim.
								Pellentesque sed vulputate nisi. Suspendisse
								sollicitudin convallis dolor sit amet
								condimentum. Donec non turpis vel dui vehicula
								tempor. Vivamus dignissim, ligula nec vulputate
								facilisis, nulla ligula mollis sapien, id mattis
								ligula arcu nec nisl.
							</p>
							<p className="mb-3 text-justify">
								Sed nisl lectus, luctus quis erat dapibus,
								maximus pulvinar dui. Praesent id dapibus
								sapien. Morbi id tellus commodo, sollicitudin
								leo eu, sodales magna. Morbi sapien eros,
								consequat vitae metus eget, tincidunt vulputate
								risus. Mauris malesuada augue in maximus
								aliquet. Nulla finibus sodales enim vitae
								tincidunt. Integer ultricies ex sit amet mattis
								finibus. Etiam eu sapien euismod, ornare nunc
								commodo, elementum enim. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Vivamus
								placerat efficitur imperdiet. Quisque ac lorem
								venenatis, mattis massa sit amet, feugiat purus.
								Aenean volutpat ultrices dolor, id posuere metus
								aliquet in. Maecenas tincidunt vehicula lorem,
								at condimentum massa pharetra vitae.
							</p>
						</div>
					</div>
				)}

				<MemberAreaFooter />
			</div>

			<div className="lg:block hidden flex-shrink-0">
				<div className="overflow-y-auto h-screen sticky top-0 lg:border-l">
					<div className="p-4">
						<h3 className="text-lg font-medium flex justify-between">
							Classes
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									width="24px"
									height="24px"
									className="text-gray-500 cursor-pointer"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
						</h3>
					</div>
					<nav>
						{modules.map((m) => (
							<div key={m.id}>
								<div className="flex bg-gray-200 bg-opacity-50 items-center p-3 text-sm leading-5 cursor-pointer transition duration-500 font-medium border-t">
									<span className="line-clamp text-base p-1 pr-8 capitalize">
										{m.name}
									</span>
									<div className="ml-auto flex items-center text-sm leading-4">
										<span className="font-base mr-2">
											0/{m.contents.length}
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											width="24px"
											height="24px"
										>
											<path
												fillRule="evenodd"
												d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
								</div>
								<div>
									<div>
										{m.contents.map((c, i) => (
											<div
												key={c.id}
												className="p-3 select-none hover:bg-gray-100 flex transition duration-150 ease-in rounded cursor-pointer border-b border-gray-300"
											>
												<div className="px-2">
													<input
														type="checkbox"
														className="form-checkbox  cursor-pointer border-gray-400 h-5 w-5 transition duration-150 ease-in-out"
													/>
												</div>
												<div>
													<div className="line-clamp">
														{c.title}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default CourseContent;
