"use client";
import React, { useState } from "react";
import { Star, Send } from "lucide-react";
import { MOBILE_NUMBER } from "@/contstant";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const whatsappMessage = `Feedback from: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobile}%0ARating: ${rating}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${MOBILE_NUMBER}?text=${whatsappMessage}`;

      window.open(whatsappUrl, "_blank");

      setSubmitStatus({
        type: "success",
        message: "Thank you for your feedback! We appreciate your input.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setRating(0);
    } catch (error) {
      console.error("Failed to send feedback:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send feedback. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 ">
      <div className="max-w-lg mx-auto  overflow-hidden">
        <div className="p-10">
          <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
            Your Feedback
          </h2>
          {submitStatus.type && (
            <div
              className={`mb-8 p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-700 border-l-4 border-green-500"
                  : "bg-red-50 text-red-700 border-l-4 border-red-500"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) => (
              <div className="flex items-center mb-8" key={key}>
                <label
                  htmlFor={key}
                  className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={
                    key === "message"
                      ? "textarea"
                      : key === "mobile"
                        ? "tel"
                        : "text"
                  }
                  name={key}
                  id={key}
                  required
                  placeholder={`Your ${key}`}
                  className="border-b-2 border-yellow-300 flex-1 py-2 placeholder-yellow-200 outline-none focus:border-yellow-500 bg-transparent"
                  onChange={handleChange}
                  value={value}
                />
              </div>
            ))}

            {/* Rating Field */}
            <div className="flex mb-8">
              <label className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium pt-1">
                Rating
              </label>
              <div className="flex-1 border-b-2 border-yellow-300 pb-3">
                <div className="flex gap-2 pt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                      className="focus:outline-none transform hover:scale-110 transition-transform"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={`w-7 h-7 transition-colors duration-200 ${
                          star <= (hoverRating || rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-yellow-300 fill-transparent"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3 px-8 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-700 transition-colors flex items-center gap-2 ml-auto disabled:opacity-50 disabled:bg-yellow-400"
              >
                {isSubmitting ? "Sending..." : "Submit Feedback"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
