"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { MOBILE_NUMBER } from "@/contstant";

interface FormData {
  name: string;
  date: string;
  phone: string;
  mehndiTypes: string[];
  notes: string;
  occasion: string;
  complexity: string;
}

export default function BookNow() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    date: "",
    phone: "",
    mehndiTypes: [],
    notes: "",
    occasion: "",
    complexity: "3",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox" && id.startsWith("mehndiType")) {
      const selectedType = value;
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => {
        const updatedTypes = checked
          ? [...prev.mehndiTypes, selectedType]
          : prev.mehndiTypes.filter((type) => type !== selectedType);

        return { ...prev, mehndiTypes: updatedTypes };
      });
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, date, phone, mehndiTypes, notes, occasion } = formData;
    const message = encodeURIComponent(
      `Hello, I would like to book a mehndi design:\n\n` +
        `Name: ${name}\n` +
        `Event Date: ${date}\n` +
        `Phone: ${phone}\n` +
        `Occasion: ${occasion}\n` +
        `Mehndi Types: ${mehndiTypes.join(", ")}\n` +
        `Additional Notes: ${notes}\n\n` +
        `Please confirm my booking.`,
    );

    window.open(`https://wa.me/${MOBILE_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-yellow-700 sm:text-5xl font-serif">
          Book Your Mehndi Experience
        </h2>
        <p className="mt-4 text-lg text-yellow-600">
          Transform your special occasion with our artistic mehndi designs
        </p>
      </div>

      {/* Contact buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-6">
        <a
          href={`tel:${MOBILE_NUMBER}`}
          className="w-full sm:w-auto bg-yellow-600 text-white py-3 px-6 rounded text-center shadow-md hover:bg-yellow-700 transition duration-300"
        >
          Call Now
        </a>
        <a
          href={`https://wa.me/${MOBILE_NUMBER}`}
          className="w-full sm:w-auto bg-yellow-100 text-yellow-800 py-3 px-6 rounded text-center shadow-md hover:bg-yellow-200 transition duration-300"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>

      {/* Form with bottom borders */}
      <div className="mx-auto max-w-xl mt-16  p-10 rounded-lg ">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="flex items-center mb-8">
            <label
              htmlFor="name"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border-b-2 border-yellow-300 flex-1 py-2 placeholder-yellow-200 outline-none focus:border-yellow-500 bg-transparent"
              required
            />
          </div>

          {/* Date Field */}
          <div className="flex items-center mb-8">
            <label
              htmlFor="date"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
            >
              Event Date
            </label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="border-b-2 border-yellow-300 flex-1 py-2 outline-none focus:border-yellow-500 bg-transparent text-yellow-800"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center mb-8">
            <label
              htmlFor="phone"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="border-b-2 border-yellow-300 flex-1 py-2 placeholder-yellow-200 outline-none focus:border-yellow-500 bg-transparent"
              required
            />
          </div>

          {/* Occasion Field */}
          <div className="flex items-center mb-8">
            <label
              htmlFor="occasion"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
            >
              Occasion
            </label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="border-b-2 border-yellow-300 flex-1 py-2 outline-none focus:border-yellow-500 bg-transparent text-yellow-800"
              required
            >
              <option value="" className="text-yellow-300">
                Select occasion
              </option>
              <option value="wedding">Wedding</option>
              <option value="engagement">Engagement</option>
              <option value="babyShower">Baby Shower</option>
              <option value="birthday">Birthday</option>
              <option value="festival">Festival</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Mehndi Types */}
          <div className="mb-8">
            <div className="flex mb-2">
              <label className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium">
                Mehndi Types
              </label>
              <div className="flex-1 border-b-2 border-yellow-300 pb-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                  {[
                    "Arabic",
                    "Bridal",
                    "Baby Shower",
                    "Engagement",
                    "Traditional",
                    "Party",
                    "Leg",
                    "Indo-Arabic",
                    "Minimalist",
                  ].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mehndiType-${type}`}
                        value={type}
                        checked={formData.mehndiTypes.includes(type)}
                        onChange={handleChange}
                        className="accent-yellow-600 mr-2 h-4 w-4"
                      />
                      <span className="text-sm text-yellow-800">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Complexity Slider */}
          <div className="flex items-center mb-8">
            <label
              htmlFor="complexity"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium"
            >
              Complexity
            </label>
            <div className="flex-1 border-b-2 border-yellow-300 pb-4">
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-yellow-600">Simple</span>
                <input
                  id="complexity"
                  type="range"
                  min="1"
                  max="5"
                  value={formData.complexity}
                  onChange={handleChange}
                  className="w-full h-2 bg-yellow-100 rounded-lg appearance-none cursor-pointer accent-yellow-600"
                />
                <span className="text-xs text-yellow-600">Elaborate</span>
              </div>
            </div>
          </div>

          {/* Notes Field */}
          <div className="flex mb-10">
            <label
              htmlFor="notes"
              className="w-24 inline-block text-right mr-4 text-yellow-700 font-medium pt-2"
            >
              Notes
            </label>
            <div className="flex-1">
              <textarea
                id="notes"
                value={formData.notes}
                onChange={handleTextAreaChange}
                placeholder="Any special requests or details?"
                className="w-full border-b-2 border-yellow-300 py-2 placeholder-yellow-200 outline-none focus:border-yellow-500 bg-transparent min-h-24 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="py-3 px-8 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-700 transition-colors flex items-center gap-2 ml-auto"
            >
              <span>Book Now</span>
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
