export default function Header() {
	return (
		<div className="flex justify-between py-4 px-4 sticky items-start">
			<div>
				<p className="text-white text-5xl font-bold uppercase ">FakeFlix</p>
			</div>
			<div>
				<form action="">
          <input type="text" name="search" id="search" placeholder="Search" className="bg-amber-50 rounded-2xl p-1.5"/>
        </form>
			</div>
		</div>
	);
}
