"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ClipboardCheck, Flower2 } from "lucide-react";

import BookNowModal from "@/component/ui/BookModal";
import Head from "next/head";

import { TService } from "@/component/sections/ServiceSection";
import imagesData, { CategoryType, ServiceImage } from "@/api";
import Link from "next/link";

export type Category = (typeof serviceTypes)[number];

const serviceTypes: CategoryType[] = [
  "bridal",
  "traditional",
  "babyshower",
  "arabic",
  "legs",
  "fullhands",
  "portrait",
];

const BridalMehndiService = ({ service }: { service: ServiceImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" py-16"
    >
      <Head>
        <title>Professional Mehandi Services - Bridal, Events & More</title>
        <meta
          name="description"
          content="Get professional Mehandi services for weddings, events, and more. Available Chennai"
        />
      </Head>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10" />
            <img
              src={service.img}
              alt={service.alt}
              // layout="fill"
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-2 -left-2 w-24 h-24">
              <Flower2 className="text-amber-600/20 w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-yellow-500">
              {service.title} Package
            </h1>
            <p className="text-lg text-yellow-800/80">{service.description}</p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={"/booknow"}>
                <button className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <ClipboardCheck className="w-5 h-5" />
                  Book Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Service() {
  const [tab, setActiveTab] = useState<Category>("bridal");

  const data = useMemo(() => {
    return imagesData.filter((item) => item.category === tab);
  }, [tab]);

  const currentService = data[0];

  return (
    <div>
      <div className="container mx-auto px-4 lg:px-12 py-8">
        {/* Mobile Dropdown */}
        <div className="sm:hidden mb-4">
          <select
            value={tab}
            onChange={(e) =>
              setActiveTab(e.target.value.toString() as CategoryType)
            }
            className="bg-white border border-amber-300 text-amber-900 text-sm rounded-md focus:ring-amber-500 focus:border-amber-500 block w-full p-3 shadow-sm"
          >
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <ul className="hidden sm:flex text-sm font-medium text-center border-2 border-yellow-500 rounded-full shadow-lg p-1">
          {serviceTypes.map((type) => (
            <li key={type} className="flex-1">
              <button
                onClick={() => setActiveTab(type)}
                className={`w-full px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300
                ${
                  tab === type
                    ? "bg-yellow-500 text-black shadow-md"
                    : "text-amber-700 hover:bg-amber-100"
                }
              `}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentService && <BridalMehndiService service={currentService} />}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=" py-16"
      >
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-center text-3xl font-bold text-yellow-500 mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Our {currentService?.title} Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={img.img}
                  alt={img.alt}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <img
                  src={img.img}
                  alt={img.alt}
                  // type={img.type}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
