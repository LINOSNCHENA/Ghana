"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  location: string;
  review: string;
  rating: number;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Jane Doe",
      location: "Nairobi, Kenya",
      review: "Excellent service! Very professional and friendly team.",
      rating: 5,
    },
    {
      name: "Michael Smith",
      location: "Lagos, Nigeria",
      review: "Quick response and efficient processing. Highly recommend!",
      rating: 4,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    location: "",
    review: "",
    rating: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review || form.rating === 0) return;

    setReviews((prev) => [...prev, form]);
    setForm({ name: "", location: "", review: "", rating: 0 });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Client Reviews</h2>

      {/* Add New Review Form */}
      <form onSubmit={handleSubmit} className="mb-10 bg-gray-100 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 border rounded w-full"
            required
          />
          <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="p-2 border rounded w-full" />
        </div>
        <textarea
          placeholder="Your review..."
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          rows={3}
          required
        />
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 cursor-pointer ${form.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
              onClick={() => setForm({ ...form, rating: star })}
              fill={form.rating >= star ? "currentColor" : "none"}
            />
          ))}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((rev, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">{rev.name}</div>
              <div className="text-sm text-gray-500">{rev.location}</div>
            </div>
            <p className="text-gray-700 mb-3">&quot;{rev.review}&quot;</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-5 h-5 ${i <= rev.rating ? "text-yellow-400" : "text-gray-300"}`} fill={i <= rev.rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
