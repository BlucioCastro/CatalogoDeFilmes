import { createContext, useContext, useState } from "react";

export const MyListContext = createContext();

export function useMyList() {
	return useContext(MyListContext);
}

export default function MyListContextProvider({ children }) {
	const [mylist, setMyList] = useState([]);

	function addToList(item) {
		setMyList((prev) =>
			prev.some((i) => i.id === item.id && i.type === item.type)
				? prev
				: [...prev, item]
		);
	}

	function removeFromList(item) {
		setMyList((prev) =>
			prev.filter((i) => !(i.id === item.id && i.type === item.type))
		);
	}

	const value = {
		mylist,
		addToList,
		removeFromList,
	};
	return (
		<MyListContext.Provider value={value}>{children}</MyListContext.Provider>
	);
}
