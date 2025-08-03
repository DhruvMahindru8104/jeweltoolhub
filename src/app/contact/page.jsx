
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
export const metadata = {
  title: "Contact JewelToolHub | Goldsmith Tools Supplier in Amritsar",
  description: "Get in touch for goldsmith tools and jewellery equipment with direct shop delivery in Amritsar.",
  keywords: ["contact goldsmith tools", "Amritsar jewellery tools", "direct delivery contact"],
  openGraph: {
    title: "Contact JewelToolHub | Goldsmith Tools Supplier in Amritsar",
    description: "Contact us for goldsmith tools and jewellery boxes. Direct shop delivery in Amritsar.",
    url: "https://jeweltoolhub.vercel.app/contact",
    siteName: "JewelToolHub",
    images: [
      {
        url: "https://jeweltoolhub.vercel.app/Logobhai.png",
        width: 1200,
        height: 630,
        alt: "Contact JewelToolHub",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
};

const contactItems = [
  {
    icon: <MdEmail className="w-6 h-6" />,
    title: 'Email',
    description: 'Feel free to send us an email anytime.',
    value: 'dhruv.mahindru08@gmail.com',
    action: 'mailto:dhruv.mahindru08@gmail.com',
  },
  {
    icon: <MdPhone className="w-6 h-6" />,
    title: 'Phone',
    description: 'Available Mon–Sat, 10am–8pm.',
    value: '+91 62395 35324',
    action: 'tel:+916239535324',
    whatsapp: 'https://wa.me/916239535324',
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    title: 'Instagram',
    description: 'Follow us for latest updates and designs.',
    value: '@jeweltoolhub',
    action: 'https://www.instagram.com/jeweltoolhub',
  },

]

export default function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 ">
    <section className="bg-white dark:bg-gray-950 py-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center"
        >
          <p className="text-yellow-600 font-medium">Contact us</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Reach out via any of the methods below.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="grid gap-10">
            {contactItems.map((item, index) => (
              <div
                className="flex flex-col"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full dark:bg-gray-800 dark:text-yellow-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-500 mt-1 break-words">{item.value}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="mt-3 space-x-3">
                  {item.action && (
                    <a
                      href={item.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-1.5 text-sm bg-yellow-700 text-white rounded hover:bg-yellow-800 transition"
                    >
                      {item.title === 'Email'
                        ? 'Send Email'
                        : item.title === 'Phone'
                        ? 'Call'
                        : `Visit ${item.title}`}
                    </a>
                  )}
                  {item.whatsapp && (
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                      <FaWhatsapp className="mr-1" />
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div
        
            className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.489381737052!2d74.87084521112189!3d31.620448574060536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197b5623e8aa15%3A0xc2d9e509bfc7170c!2sGanpati%20Tools%20Center!5e0!3m2!1sen!2sin!4v1754115016532!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
