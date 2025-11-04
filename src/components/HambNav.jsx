import { Link } from "react-router-dom";

export default function HambNav({ links = [], onSelect }) {
	return (
		<div className="absolute bg-black p-3 text-center z-10">
			<ul>
				{links.map((link) => (
					<li key={link.to}>
						<button
							onClick={() => onSelect && onSelect(link.to)}
							className="text-sm text-white cursor-pointer"
						>
							{link.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
