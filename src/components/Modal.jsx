export default function Modal({
	image,
	title,
	userScore,
	link,
	description,
	popularity,
	closeModal,
}) {
	return (
		<div className="fixed inset-0 z-50 flex flex-col bg-black/50 items-center justify-center ">
			<div className="w-[50%] h-auto  bg-bgDark p-4  rounded-2xl">
				<div className="flex justify-between pb-3">
					<h2 className="font-bold text-white">{title}</h2>
					<button
						onClick={() => closeModal()}
						className="text-white cursor-pointer"
					>
						X
					</button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">
					<div className="flex justify-center"><img src={image} alt={title} className="rounded-2xl" /></div>
					<div className="text-white">
						<div>
							<span>{userScore}</span>
						</div>
						<div className="flex flex-col">
							<h3 className="font-bold">Overview</h3>
							<p>{description}</p>
							<p className="font-bold">Popularity:</p>
							<p>{popularity}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
