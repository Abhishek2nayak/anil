import Link from "next/link";
import Logo from "./Header/Logo";

const insta =
  "https://www.instagram.com/anil_mahendi_bikanerwala_t_n?igsh=N245eTVrbHhkNHNq";
const mobileNumber = "+917730001180";
const facebook = "https://www.facebook.com/share/15auww2Lrr/";
const email = "Ajaynayaknayak88@gmail.com";

export default function Footer() {
  return (
    <div className="relative mt-16 bg-yellow-500">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 text-white">
            <div className="flex gap-2 items-center">
              <img
                src="logo.jpg"
                alt="Anil Mehndi Art"
                width={100}
                height={100}
              />
              <h3 className="text-3xl font-bold text-black">Anil Mehndi Art</h3>
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
            <p className="text-base font-bold tracking-wide text-dark">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-dark">Phone:</p>
              <a
                href={`tel:${mobileNumber}`}
                className="transition-colors duration-300 text-dark hover:text-yellow-300"
              >
                {mobileNumber}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-dark">Email:</p>
              <a
                href={`mailto:${email}`}
                className="transition-colors duration-300 text-dark hover:text-yellow-300"
              >
                {email}
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-dark">Location:</p>
              <p className="text-dark">Chennai</p>
            </div>
          </div>
          <div>
            <p className="text-base font-bold tracking-wide text-dark">
              Social
            </p>
            <div className="flex flex-col mt-1 space-y-2">
              <a
                href={insta}
                target="_blank"
                className="text-dark hover:text-dark"
              >
                Instagram
              </a>
              <a
                href={facebook}
                target="_blank"
                className="text-dark hover:text-dark"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/${mobileNumber}`}
                target="_blank"
                className="text-dark hover:text-dark"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
          <p className="text-sm text-dark">
            &copy; {new Date().getFullYear()} CHENNAI MEHANDI ARTIST. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
