import logoTMDb from "../assets/logoTMDBplus.png";

export default function Footer() {
	return (
		<div className=" px-4 pt-16 mt-30 text-gray-300 bg-black">
			<div className="md:grid md:grid-cols-[1fr_3fr] pb-8">
				<div className="flex justify-center">
					<a
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
						className="cursor-pointer"
					>
						<img
							src={logoTMDb}
							alt="logo tmdb"
							className="hidden md:block md:w-50 transition-transform duration-200 hover:scale-110 "
						/>
					</a>
				</div>
				<div className="flex justify-evenly">
					<div>
						<h2 className="font-medium text-white pb-4">Product</h2>
						<ul className="flex flex-col gap-2">
							<li className="listItems">Features</li>
							<li className="listItems">Security</li>
							<li className="listItems">Business</li>
							<li className="listItems">Case studies</li>
							<li className="listItems">Pricing</li>
							<li className="listItems">Resouces</li>
						</ul>
					</div>
					<div>
						<h2 className="font-medium text-white pb-4">Explore</h2>
						<ul className="flex flex-col gap-2">
							<li className="listItems">Developer</li>
							<li className="listItems">API</li>
							<li className="listItems">Partners</li>
							<li className="listItems">Atom</li>
							<li className="listItems">Electron</li>
							<li className="listItems">Desktop</li>
						</ul>
					</div>
					<div>
						<h2 className="font-medium text-white pb-4">Support</h2>
						<ul className="flex flex-col gap-2">
							<li className="listItems">Help</li>
							<li className="listItems">Community</li>
							<li className="listItems">Forum</li>
							<li className="listItems">Training</li>
							<li className="listItems">Status</li>
							<li className="listItems">Contact</li>
						</ul>
					</div>
					<div>
						<h2 className="font-medium text-white pb-4">Company</h2>
						<ul className="flex flex-col gap-2">
							<li className="listItems">About</li>
							<li className="listItems">Blog</li>
							<li className="listItems">Careers</li>
							<li className="listItems">Press</li>
							<li className="listItems">Shop</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="h-[1px] bg-gray-500"></div>
			<div className="py-4 flex justify-center">
				<p>
					2025&copy; - Developed by{" "}
					<a
						href="https://github.com/BlucioCastro"
						target="_blank"
						className="hover:font-medium"
					>
						Blucio Castro
					</a>{" "}
					- All Rights Reserved
				</p>
			</div>
		</div>
	);
}
