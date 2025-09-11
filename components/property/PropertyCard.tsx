type Property = {
  id: number;
  title: string;
  price: number;
  location: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-1">{property.location}</p>
      <p className="text-green-600 font-bold">${property.price}</p>
    </div>
  );
}
