"use client";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import WatermarkBackground from "../Menus/WaterMarks";
import { COMP_MOTTO, sampleReviews } from "@/app/utils/constants";

interface Review {
  name: string;
  location: string;
  review: string;
  rating: number;
  avatarUrl?: string;
  createdAt?: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [form, setForm] = useState({
    name: "",
    location: "",
    review: "",
    rating: 0,
    createdAt: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review || form.rating === 0) return;
    const newReview: Review = {
      ...form,
      avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.name)}&background=random`,
      createdAt: new Date().toISOString(),
    };

    setReviews((prev) => {
      const updatedReviews = [newReview, ...prev];
      return updatedReviews.slice(0, 5); // Keep only first 10
    });

    setForm({ name: "", location: "", review: "", rating: 0, createdAt: String(new Date()) });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 relative">
      {/* Watermark Background */}
      <WatermarkBackground altText={COMP_MOTTO} />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-10">Client Reviews</h2>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="mb-12 bg-white shadow-lg border rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="p-3 border rounded w-full"
            />
          </div>
          <textarea
            placeholder="Your review..."
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="w-full p-3 border rounded mb-4"
            rows={4}
            required
          />
          <div className="flex items-center mb-4 space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${form.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setForm({ ...form, rating: star })}
                fill={form.rating >= star ? "currentColor" : "none"}
              />
            ))}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Submit Review
          </button>
        </form>

        {/* Display Reviews */}
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={rev.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.name)}&background=random`}
                    alt={rev.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">{rev.name}</div>
                  <div className="text-sm text-gray-500">{rev.location}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{rev.review}&quot;</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-5 h-5 ${i <= rev.rating ? "text-yellow-400" : "text-gray-300"}`} fill={i <= rev.rating ? "currentColor" : "none"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
