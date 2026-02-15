"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ClipboardCheck,
  Flower2,
  Star,
  Clock,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import imagesData, { CategoryType, ServiceImage } from "@/api";
import { useSearchParams } from "next/navigation";

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

const serviceDescriptions: Record<
  CategoryType,
  { title: string; description: string; details: string[] }
> = {
  bridal: {
    title: "Bridal Mehandi",
    description:
      "Make your wedding day truly magical with our premium bridal mehandi services. Our expert artists create intricate, traditional designs that celebrate your special day.",
    details: [
      "Full-hand elaborate designs with intricate patterns",
      "Bridal-specific motifs and customization",
      "Professional application taking 2-3 hours",
      "Premium henna quality for darker, longer-lasting color",
      "Personalized consultation with design samples",
    ],
  },
  traditional: {
    title: "Traditional Mehandi",
    description:
      "Experience authentic traditional mehandi designs that honor cultural heritage with classic patterns and timeless elegance.",
    details: [
      "Classic geometric and floral patterns",
      "Authentic traditional designs",
      "Suitable for festivals and celebrations",
      "Traditional henna paste for natural coloring",
      "Expert application by experienced artists",
    ],
  },
  babyshower: {
    title: "Baby Shower Mehandi",
    description:
      "Celebrate the joyous occasion with beautiful, festive mehandi designs perfect for baby shower celebrations.",
    details: [
      "Light, festive designs",
      "Quick application options available",
      "Family-friendly mehandi styles",
      "Celebratory motifs and patterns",
      "Comfortable seating arrangements",
    ],
  },
  arabic: {
    title: "Arabic Mehandi",
    description:
      "Stunning Arabic mehandi designs featuring bold lines, intricate details, and contemporary flair perfect for modern celebrations.",
    details: [
      "Bold, striking geometric patterns",
      "Contemporary Arabic designs",
      "Quick drying formulas",
      "Modern aesthetic appeal",
      "Suitable for photoshoots and events",
    ],
  },
  legs: {
    title: "Leg & Feet Mehandi",
    description:
      "Beautiful mehandi designs for legs and feet, from simple patterns to elaborate artistic creations.",
    details: [
      "Full leg coverage designs",
      "Ankle and feet detailing",
      "Matching patterns with hands",
      "Comfortable application process",
      "Various design complexity options",
    ],
  },
  fullhands: {
    title: "Full Hand Mehandi",
    description:
      "Complete hand coverage with detailed, intricate mehandi patterns that showcase artistic excellence.",
    details: [
      "Wrist to fingertip coverage",
      "Intricate palm and finger designs",
      "Detailed back hand patterns",
      "Professional finishing touches",
      "Premium henna quality",
    ],
  },
  portrait: {
    title: "Portrait Mehandi",
    description:
      "Artistic mehandi that incorporates portraits and personalized elements for unique, memorable designs.",
    details: [
      "Custom portrait integration",
      "Personalized design elements",
      "Artistic masterpiece creation",
      "Perfect for special occasions",
      "Creative consultation included",
    ],
  },
};

const BridalMehndiService = ({ service }: { service: ServiceImage }) => {
  const details = serviceDescriptions[service.category as CategoryType];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16"
      style={{ backgroundColor: "#3b140f" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <img
              src={service.img}
              alt={service.alt}
              className="object-cover transform hover:scale-105 transition-transform duration-700 w-full h-full"
            />
            <div className="absolute -bottom-2 -left-2 w-24 h-24">
              <Flower2
                className="w-full h-full"
                style={{ color: "rgba(225, 173, 61, 0.2)" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1
              className="text-4xl lg:text-5xl font-bold"
              style={{ color: "rgb(225, 173, 61)" }}
            >
              {details.title} Package
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#fff" }}>
              {details.description}
            </p>

            <div className="space-y-3">
              <h3
                className="text-xl font-semibold"
                style={{ color: "rgb(225, 173, 61)" }}
              >
                What's Included:
              </h3>
              {details.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Sparkles
                    className="w-5 h-5 mt-1 flex-shrink-0"
                    style={{ color: "rgb(225, 173, 61)" }}
                  />
                  <span style={{ color: "#fff" }}>{detail}</span>
                </div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={"/booknow"}>
                <button
                  className="w-full py-4 px-6 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "rgb(225, 173, 61)" }}
                >
                  <ClipboardCheck className="w-5 h-5" />
                  Book Now
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              icon: Award,
              title: "Expert Artists",
              desc: "Certified professionals with years of experience",
            },
            {
              icon: Star,
              title: "Premium Quality",
              desc: "100% natural henna for best results",
            },
            {
              icon: Clock,
              title: "Timely Service",
              desc: "Punctual and efficient application",
            },
            {
              icon: Users,
              title: "Customer Satisfaction",
              desc: "Trusted by hundreds of happy clients",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl text-center border transition-all"
              style={{
                backgroundColor: "rgba(122, 57, 22, 0.5)",
                borderColor: "rgb(225, 173, 61)",
              }}
            >
              <item.icon
                className="w-12 h-12 mx-auto mb-3"
                style={{ color: "rgb(225, 173, 61)" }}
              />
              <h3
                className="font-semibold mb-2"
                style={{ color: "rgb(225, 173, 61)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "#fff" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      slug: "complete-guide-to-mehandi-application",
      title: "Complete Guide to Mehandi Application",
      excerpt:
        "Learn everything you need to know about professional mehandi application techniques, henna quality, and aftercare tips.",
      date: "Dec 20, 2025",
      category: "Guide",
      image: "🎨",
    },
    {
      slug: "bridal-mehandi-designs-trending-in-2025",
      title: "Bridal Mehandi Designs Trending in 2025",
      excerpt:
        "Discover the latest bridal mehandi design trends, from Arabic fusion to contemporary patterns that are making waves in weddings.",
      date: "Dec 18, 2025",
      category: "Trends",
      image: "💍",
    },
    {
      slug: "how-to-make-mehandi-darker-and-last-longer",
      title: "How to Make Mehandi Darker and Last Longer",
      excerpt:
        "Expert tips on preparing your skin, application techniques, and aftercare practices to get darker mehandi that lasts 2-3 weeks.",
      date: "Dec 15, 2025",
      category: "Tips",
      image: "✨",
    },
    {
      slug: "arabic-vs-traditional-mehandi-what's-the-difference",
      title: "Arabic vs Traditional Mehandi: What's the Difference?",
      excerpt:
        "Understanding the differences between Arabic and traditional mehandi styles, their origins, and which one suits your occasion.",
      date: "Dec 12, 2025",
      category: "Education",
      image: "📚",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20"
      style={{ backgroundColor: "#3b140f" }}
    >
      <div className="container mx-auto px-4 lg:px-12">
        <h2
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "rgb(225, 173, 61)" }}
        >
          Mehandi Tips & Guides
        </h2>
        <p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: "#fff" }}
        >
          Explore our comprehensive collection of mehandi guides, design
          inspiration, and professional tips to help you make the most of your
          mehandi experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -8 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: "rgba(122, 57, 22, 0.6)" }}
            >
              <div
                className="h-32 flex items-center justify-center text-6xl"
                style={{ backgroundColor: "rgba(225, 173, 61, 0.2)" }}
              >
                {blog.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: "#3b140f",
                      backgroundColor: "rgb(225, 173, 61)",
                    }}
                  >
                    {blog.category}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgb(138, 103, 35)" }}
                  >
                    {blog.date}
                  </span>
                </div>
                <h3
                  className="font-bold mb-2 line-clamp-2"
                  style={{ color: "rgb(225, 173, 61)" }}
                >
                  {blog.title}
                </h3>
                <p className="text-sm line-clamp-2" style={{ color: "#fff" }}>
                  {blog.excerpt}
                </p>
                <Link
                  className="mt-4 font-semibold text-sm transition"
                  style={{ color: "rgb(225, 173, 61)" }}
                  href={`/blog/${blog.slug}`}
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const SEOContent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20"
      style={{ backgroundColor: "#3b140f" }}
    >
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: "rgb(225, 173, 61)" }}
        >
          About Professional Mehandi Services in Chennai
        </h2>

        <div className="space-y-6 leading-relaxed" style={{ color: "#fff" }}>
          <p>
            Welcome to our professional mehandi services in Chennai, where
            tradition meets artistic excellence. We specialize in creating
            stunning mehandi designs for all occasions, from intimate
            celebrations to grand weddings. Our team of expert henna artists
            brings years of experience and a passion for this beautiful art
            form.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            What is Mehandi?
          </h3>
          <p>
            Mehandi, also known as henna, is a natural dye used for centuries in
            South Asian, Middle Eastern, and African cultures to create
            beautiful temporary tattoos. The art of applying mehandi has evolved
            into a sophisticated craft, with patterns ranging from traditional
            geometric designs to contemporary artistic creations. Professional
            mehandi application requires skill, precision, and an understanding
            of various design styles.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Our Mehandi Services
          </h3>
          <p>
            We offer a comprehensive range of mehandi services tailored to your
            specific needs and preferences. Whether you're looking for
            traditional mehandi for a festival, elaborate bridal designs for
            your wedding, or contemporary Arabic mehandi for a modern event, our
            skilled artists are equipped to deliver exceptional results. Each
            design is customized based on your preferences, skin tone, and
            occasion.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Why Choose Our Mehandi Services?
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Experienced and certified mehandi artists with extensive training
            </li>
            <li>100% natural, organic henna for safe and long-lasting color</li>
            <li>Custom design consultation to match your vision perfectly</li>
            <li>Professional application ensuring precision and symmetry</li>
            <li>Affordable pricing without compromising on quality</li>
            <li>Flexible scheduling with home visit options available</li>
            <li>Aftercare guidance to extend the life of your mehandi</li>
          </ul>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Popular Mehandi Designs in 2025
          </h3>
          <p>
            The mehandi industry continues to evolve with new trends emerging
            each season. Current popular designs include fusion patterns that
            blend Arabic and Indian styles, minimalist modern designs, bridal
            heavy mehandi with detailed finger work, and personalized portrait
            mehandi. Our artists stay updated with the latest trends while also
            respecting traditional patterns that have been cherished for
            generations.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Mehandi for Different Occasions
          </h3>
          <p>
            Mehandi is perfect for various celebrations. For weddings, bridal
            mehandi is a cherished tradition featuring intricate full-hand
            designs. Baby showers call for lighter, festive patterns. Festivals
            like Diwali and Eid are incomplete without mehandi. Professional
            events and photoshoots often feature contemporary designs. We
            customize our mehandi services to match the essence and formality of
            your specific occasion.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Mehandi Care and Longevity
          </h3>
          <p>
            To get the most out of your mehandi application, proper aftercare is
            essential. We provide detailed guidance on how to protect your
            mehandi during the first 24 hours, recommended moisturizing
            practices, and tips for extending the color duration. With proper
            care, professional mehandi can last 2-3 weeks, with the color
            gradually fading to a natural brown hue.
          </p>

          <h3
            className="text-2xl font-semibold mt-8"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Book Your Mehandi Appointment Today
          </h3>
          <p>
            Ready to adorn your hands with beautiful mehandi? We offer flexible
            booking options, competitive pricing, and personalized service.
            Whether you need mehandi for a wedding, festival, or special event,
            our team is here to create designs that exceed your expectations.
            Contact us today to schedule your consultation and discuss your
            mehandi preferences.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default function Service() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [tab, setActiveTab] = useState(category || "bridal");

  const data = useMemo(() => {
    return imagesData.filter((item) => item.category === tab);
  }, [tab]);

  const currentService = data[0];

  return (
    <div style={{ backgroundColor: "#3b140f" }}>
      <Head>
        <title>
          Professional Mehandi Services in Chennai - Bridal & Events
        </title>
        <meta
          name="description"
          content="Expert mehandi services in Chennai for weddings, events, and celebrations. Bridal mehandi, Arabic designs, traditional patterns. Book professional henna artist today."
        />
        <meta
          name="keywords"
          content="mehandi services, bridal mehandi, henna designs, arabic mehandi, traditional mehandi, Chennai mehandi artist, wedding mehandi"
        />
        <meta name="author" content="Professional Mehandi Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Professional Mehandi Services in Chennai"
        />
        <meta
          property="og:description"
          content="Expert mehandi services for all occasions. Bridal, traditional, Arabic, and contemporary designs."
        />
      </Head>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 mb-8"
        style={{ backgroundColor: "rgba(225, 173, 61, 0.15)" }}
      >
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            Professional Mehandi Services in Chennai
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#fff" }}>
            Expert henna application for weddings, festivals, and celebrations.
            Choose from bridal, traditional, Arabic, and contemporary mehandi
            designs.
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 lg:px-12 py-8">
        <div className="sm:hidden mb-4">
          <select
            value={tab}
            onChange={(e) =>
              setActiveTab(e.target.value.toString() as CategoryType)
            }
            className="text-sm rounded-md block w-full p-3 shadow-sm"
            style={{
              backgroundColor: "rgba(122, 57, 22, 0.5)",
              color: "rgb(225, 173, 61)",
              borderColor: "rgb(225, 173, 61)",
              borderWidth: "2px",
            }}
          >
            {serviceTypes.map((type) => (
              <option
                key={type}
                value={type}
                style={{ backgroundColor: "#3b140f", color: "#fff" }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi
              </option>
            ))}
          </select>
        </div>

        <ul
          className="hidden sm:flex text-sm font-medium text-center rounded-full shadow-lg p-1 overflow-x-auto"
          style={{ borderColor: "rgb(225, 173, 61)", borderWidth: "2px" }}
        >
          {serviceTypes.map((type) => (
            <li key={type} className="flex-1 min-w-max">
              <button
                onClick={() => setActiveTab(type)}
                className={`w-full px-5 py-3 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap`}
                style={{
                  backgroundColor:
                    tab === type ? "rgb(225, 173, 61)" : "transparent",
                  color: tab === type ? "#3b140f" : "rgb(225, 173, 61)",
                }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentService && <BridalMehndiService service={currentService} />}

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-20"
        style={{ backgroundColor: "#3b140f" }}
      >
        <div className="container mx-auto px-4 lg:px-12">
          <h2
            className="text-center text-4xl font-bold mb-3 flex items-center justify-center gap-2"
            style={{ color: "rgb(225, 173, 61)" }}
          >
            <Sparkles className="w-8 h-8" />
            Our {currentService?.title} Creations
          </h2>
          <p className="text-center mb-12" style={{ color: "#fff" }}>
            Explore our portfolio of professional mehandi designs showcasing
            various styles and complexity levels.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={img.img}
                  alt={img.alt}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog Section */}
      <BlogSection />

      {/* SEO Content */}
      <SEOContent />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16"
        style={{ backgroundColor: "rgb(225, 173, 61)" }}
      >
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#3b140f" }}>
            Ready to Get Your Mehandi Done?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#3b140f" }}>
            Book your appointment today and let our expert artists create a
            beautiful mehandi design for your special occasion.
          </p>
          <Link href={"/booknow"}>
            <button
              className="px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#3b140f",
                color: "rgb(225, 173, 61)",
              }}
            >
              Book Your Mehandi Now
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
