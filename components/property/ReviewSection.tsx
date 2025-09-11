import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: number;
  comment: string;
  reviewerName?: string;
  rating?: number;
};

const ReviewSection = ({ propertyId }: { propertyId: number }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-4 mt-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 rounded shadow-sm">
          <p className="font-semibold">{review.reviewerName || "Anonymous"}</p>
          <p>{review.comment}</p>
          {review.rating && <p>Rating: {review.rating}/5</p>}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
