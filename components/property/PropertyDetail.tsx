type Property = {
  id: number;
  title: string;
  price: number;
  location: string;
  description?: string;
  imageUrl?: string;
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg shadow-md">
      {property.imageUrl && (
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-green-600 font-bold mb-4">${property.price}/night</p>
      {property.description && <p className="text-gray-700">{property.description}</p>}
    </div>
  );
}
