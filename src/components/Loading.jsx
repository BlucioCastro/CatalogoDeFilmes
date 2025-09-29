export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-700 animate-pulse"></div>
          <div className="p-2">
            <div className="h-4 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-3 w-2/3 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}