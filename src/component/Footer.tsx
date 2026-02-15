import Link from "next/link";
import Logo from "./Header/Logo";
import {
  EMAIL_ID,
  EMAIL_MAILTO_LINK,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MOBILE_NUMBER,
} from "@/contstant";

export default function Footer() {
  return (
    <div className="relative mt-16 bg-dark border-t-2 border-yellow-500 bg-yellow-600">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 text-white">
            <div className="flex gap-2 items-center">
              <img
                alt="Prince Mehndi"
                src="./logo.png"
                width={100}
                height={100}
              />
              <h3 className="text-3xl font-bold text-black">Prince Mehndi</h3>
            </div>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-black">
                We bring your bridal dreams to life through the art of mehndi,
                offering exquisite designs that make your day even more
                memorable.
              </p>
              <p className="mt-4 text-sm text-black">
                Our artists are highly skilled, providing the best mehndi for
                your wedding, parties, and other events.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-black">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-black">Phone:</p>
              <a
                href={`tel:${MOBILE_NUMBER}`}
                className="transition-colors duration-300 text-black hover:text-yellow-300"
              >
                {MOBILE_NUMBER}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Email:</p>
              <a
                href={`mailto:${EMAIL_MAILTO_LINK}`}
                className="transition-colors duration-300 text-black hover:text-yellow-300"
              >
                {EMAIL_ID}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Location:</p>
              <p className="text-black">Chennai</p>
            </div>
          </div>
          <div>
            <p className=" font-bold tracking-wide text-black">Social</p>
            <div className="flex flex-col mt-1 space-y-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                className="text-black hover:text-black"
              >
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                className="text-black hover:text-black"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/${MOBILE_NUMBER}`}
                target="_blank"
                className="text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} CHENNAI MEHANDI ARTIST. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
