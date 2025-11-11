import { useContext } from "react";
import { MyListContext } from "../context/MylistContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function MyList() {
  const { mylist } = useContext(MyListContext);

  if (!mylist || mylist.length === 0) {
    return <div className="pt-20 text-center text-white">Sua lista está vazia</div>;
  }

  return (
    <div className="pt-20">
      <h1 className="text-white text-2xl font-bold mb-4 mx-4">Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:pt-10 mx-8">
        {mylist.map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.type}/${item.id}`}
            className="h-full"
          >
            <Card item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}