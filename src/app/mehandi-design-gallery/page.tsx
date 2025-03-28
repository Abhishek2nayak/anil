"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Flower2, Sparkles, ImageIcon } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { API_Response, fetchGoogleSheetData } from "../getGoogleSheetData";
import imagesData, { CategoryType } from "@/api";

const categories: CategoryType[] = [
  "bridal",
  "traditional",
  "babyshower",
  "arabic",
  "legs",
  "fullhands",
  "portrait",
];
const GallerySkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {Array.from({ length: 4 }).map((_, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {Array.from({ length: 3 }).map((_, imageIndex) => (
            <div key={imageIndex} className="relative">
              <div className="flex items-center justify-center w-full h-64 bg-amber-200/40 rounded-lg">
                <ImageIcon className="w-10 h-10 text-amber-300" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("bridal");
  const filteredImages = useMemo(() => {
    return imagesData.filter((image) => image.category === activeCategory);
  }, [activeCategory]);
  return (
    <>
      <Head>
        <title>Mehandi Gallery | Bridal, Arabic, Wedding Mehandi Designs</title>
        <meta
          name="description"
          content="Explore our Mehandi gallery featuring beautiful bridal, Arabic, wedding, and traditional Mehandi designs."
        />
      </Head>

      <div className=" min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-amber-900 flex items-center justify-center gap-4 mb-6">
              <Flower2 className="w-12 h-12 text-amber-700" />
              Our Creations
              <Sparkles className="w-12 h-12 text-amber-700" />
            </h1>
            <p className="text-amber-800/80 max-w-2xl mx-auto text-lg">
              Discover our exquisite collection of mehandi designs, crafted with
              precision and artistry for every special occasion.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${
                    activeCategory === category
                      ? "bg-amber-600 text-white"
                      : "bg-amber-200 text-amber-800 hover:bg-amber-300"
                  }`}
              >
                {category.replace("_", " ").toUpperCase()}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {filteredImages.map((img, imageIndex) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: imageIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden border-5 border-yellow-500 ">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={img.img}
                    alt={img.alt}
                    style={{
                      minHeight: "300px",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                    className="h-auto w-full  transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium capitalize">
                      {img.category.replace("_", " ")} Design
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
