export default function HambNav({ links = [], onSelect }) {
  return (
    <div className="absolute top-full left-0 w-full bg-black p-3 text-center z-50">
      <ul>
        {links.map((link) => (
          <li key={link.to} className="py-2">
            <button
              onClick={() => onSelect && onSelect(link.to)}
              className="text-sm text-white cursor-pointer w-full"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}