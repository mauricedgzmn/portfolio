'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface JournalImage {
  src: string;
  description: string;
}

interface JournalEntry {
  id: string;
  title: string;
  coverImage: string;
  images: JournalImage[];
}

const journalEntries: JournalEntry[] = [
  {
    id: 'cebu-tour',
    title: 'Cebu Tour 2025',
    coverImage: '/cebu.png',
    images: [
      {
        src: '/cebutour/packing.jpg',
        description: 'Getting ready to go to the airport :)'
      },
      {
        src: '/cebutour/arrived.jpg',
        description: 'quick handcarry photo lmao, we have arrived'
      },
      {
        src: '/cebutour/wdabois.jpg',
        description: 'with da bois <3 xx'
      },
      {
        src: '/cebu.png',
        description: 'quick photo session before we fly hihi'
      },
      {
        src: '/cebutour/gotmyticket.jpg',
        description: 'Got me my ticket <3'
      },
      {
        src: '/cebutour/airplane.jpg',
        description: 'Erflen <3'
      },
      {
        src: '/cebutour/wehavearrived.jpg',
        description: 'w in the chat we at cebu now'
      },
      {
        src: '/cebutour/magellan.jpg',
        description: 'we at lapulapu statue at cebu'
      },
      {
        src: '/cebutour/randos.jpg',
        description: 'random pic'
      },
      {
        src: '/cebutour/artgallery.jpg',
        description: 'W Art in the chat'
      },
       {
        src: '/cebutour/lapulapu.jpg',
        description: 'lapu lapu'
      },
      {
        src: '/cebutour/otwtothemall.jpg',
        description: 'on the way to the mall to grab sum lunch'
      },
      {
        src: '/cebutour/quickbuspic.jpg',
        description: 'quick bus pic'
      },
      {
        src: '/cebutour/journalbook.jpg',
        description: 'btw we got this :)'
      },
      {
        src: '/cebutour/at the mall.jpg',
        description: 'we at cebu seaside mall'
      },
      {
        src: '/cebutour/SOMAC SO GOOD.jpg',
        description: 'SOMAC W FOOD <3'
      },
       {
        src: '/cebutour/worldtech.jpg',
        description: 'first company visit World technologies :)'
      },
       {
        src: '/cebutour/worldtechh.jpg',
        description: 'world technology conclusion'
      },
       {
        src: '/cebutour/cebuchurch.jpg',
        description: 'now we at magellans cross after the company visit'
      },
       {
        src: '/cebutour/randomp1.jpg',
        description: 'The church in cebu <3'
      },
       {
        src: '/cebutour/randomp2.jpg',
        description: 'gothhhh'
      },
       {
        src: '/cebutour/outside the mall.jpg',
        description: 'outside the mall pic?'
      },
       {
        src: '/cebutour/quickbuspic.jpg',
        description: 'quick bus pic before we check in to the bai hotel'
      },
       {
        src: '/cebutour/bai_hotel_mirror.jpg',
        description: 'we arrived at the bai hotel?'
      },
       {
        src: '/cebutour/baihotelrooftop.jpg',
        description: 'quick rooftop pic, W VIEW in the chat'
      },
       {
        src: '/cebutour/cebu at night.jpg',
        description: 'walking outside to grab dinner?'
      },
       {
        src: '/cebutour/goodmorning.jpg',
        description: 'Goodmorning haha quick aesthetic pic tho?'
      },
       {
        src: '/cebutour/breakfastp.jpg',
        description: 'breakfast was so good i had to eat a lot'
      },
       {
        src: '/cebutour/rivanit.jpg',
        description: 'Oh we at Rivan IT'
      },
       {
        src: '/cebutour/rivanit2.jpg',
        description: 'Doing activities at Rivan IT, it was so fun!'
      },
       {
        src: '/cebutour/rivanitc.jpg',
        description: 'Rivan IT Conclusion'
      },
       {
        src: '/cebutour/vikings.jpg',
        description: 'we eating lunch at vikings after Rivan It visit'
      },
       {
        src: '/cebutour/codechump.jpeg',
        description: 'Visiting Codechump'
      },
       {
        src: '/cebutour/codechump2.jpg',
        description: 'Meeting the Co Founder at CodeChump was great!'
      },
       {
        src: '/cebutour/codechumpp.jpg',
        description: 'Code Chump Conclusion'
      },
       {
        src: '/cebutour/quickpasalubong.jpg',
        description: 'bought some pasalubong from cebu'
      },
       {
        src: '/cebutour/heritage monument.jpg',
        description: 'we at the heritage monument'
      },
      {
        src: '/cebutour/wtheboss.jpg',
        description: 'quick fun pic with our tour guide!'
      },
       {
        src: '/cebutour/UA.jpg',
        description: 'bought sum essentials'
      },
       {
        src: '/cebutour/cityhall.jpg',
        description: 'quick visit at the city hall of Cebu'
      },
       {
        src: '/cebutour/donate.jpg',
        description: 'Donated some stuffs too due to cebu earthquake'
      },
      {
        src: '/cebutour/otwbohol.jpg',
        description: 'We on the way to Bohol'
      },
    ]
  },
  {
    id: 'bohol-tour',
    title: 'Bohol Tour 2025',
    coverImage: '/bohol.png',
    images: [
       {
        src: '/boholtour/arrivedatbohol.png',
        description: 'FINALLY!'
      },
      {
        src: '/bohol.png',
        description: 'Quick group photo because we had arrived at Bohol'
      },
       {
        src: '/boholtour/boholatnight.jpg',
        description: 'I miss home pic, btw this is bohol at night pov at the bus lmao!'
      },
      {
        src: '/boholtour/visasuites.jpg',
        description: 'Here we are at Vista Suits!'
      },
       {
        src: '/boholtour/vistasuits2.jpg',
        description: 'Another one!'
      },
       {
        src: '/boholtour/weswim.jpg',
        description: 'Cannot wait to go swimming!'
      },
       {
        src: '/boholtour/matatech2.jpg',
        description: 'We went to Mata Technology <3'
      },
       {
        src: '/boholtour/matatech.jpg',
        description: 'My Matatech Conclusion'
      },
       {
        src: '/boholtour/panglaobeach.jpg',
        description: 'oh we went to alona to have fun!'
      },
       {
        src: '/boholtour/tagbiliran.jpg',
        description: 'We went to T.A.R.S.I.E.R'
      },
       {
        src: '/boholtour/tarsier journal.jpg',
        description: 'T.A.R.S.I.E.R conclusion'
      },
      {
        src: '/boholtour/Chocolate Hills.jpg',
        description: 'at Chocolate Hills'
      },
      {
        src: '/boholtour/river.jpg',
        description: 'loboc river cruise, we had lunch here before going home'
      },

      {
        src: '/boholtour/erflenpic.jpg',
        description: 'W City Lights broski'
      },
       {
        src: '/boholtour/erflenpic2.jpg',
        description: 'City lights'
      },
       {
        src: '/boholtour/goinghome.jpg',
        description: 'Were going home now :( ill miss bohol'
      },
      
      
    ]
  },
];

export default function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const openEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setSelectedImageIndex(null);
    setCurrentPage(1); // Reset to first page when opening entry
  };

  const closeEntry = () => {
    setSelectedEntry(null);
    setSelectedImageIndex(null);
    setCurrentPage(1);
  };

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedEntry && selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % selectedEntry.images.length);
    }
  };

  const prevImage = () => {
    if (selectedEntry && selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? selectedEntry.images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  return (
    <section id="journal" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-bold text-white mb-4"
          >
            Journal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Explore my journals, documenting projects, experiences, and adventures.
          </motion.p>
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openEntry(entry)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900"
            >
              {/* Image */}
              <Image
                src={entry.coverImage}
                alt={entry.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  // Fallback to gradient if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl md:text-3xl font-bold">
                  {entry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Entry Detail Modal */}
      {selectedEntry && selectedImageIndex === null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
        >
          <div className="min-h-screen p-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={closeEntry}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="text-lg">Back</span>
              </motion.button>
              
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white text-center flex-1"
              >
                {selectedEntry.title}
              </motion.h2>

              <button
                onClick={closeEntry}
                className="text-white hover:text-gray-300 transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedEntry.images
                .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
                .map((image, index) => {
                  const actualIndex = (currentPage - 1) * imagesPerPage + index;
                  return (
                    <motion.div
                      key={actualIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => openImage(actualIndex)}
                      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800"
                    >
                      <Image
                        src={image.src}
                        alt={image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    </motion.div>
                  );
                })}
            </div>

            {/* Pagination */}
            {selectedEntry.images.length > imagesPerPage && (
              <div className="max-w-7xl mx-auto mt-12 flex justify-center gap-2">
                {Array.from({ length: Math.ceil(selectedEntry.images.length / imagesPerPage) }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-full font-semibold flex items-center justify-center transition-all ${
                      currentPage === pageNum
                        ? 'bg-white text-black'
                        : 'border-2 border-gray-600 text-gray-400 hover:bg-white hover:text-black'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Image Lightbox */}
      {selectedEntry && selectedImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
        >
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {selectedEntry.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2 z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2 z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          <div className="w-full h-full flex flex-col items-center justify-center px-6 py-20">
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full max-h-[70vh] flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedEntry.images[selectedImageIndex].src}
                    alt={selectedEntry.images[selectedImageIndex].description}
                    width={1920}
                    height={1080}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-center mt-8 text-lg px-4"
              >
                {selectedEntry.images[selectedImageIndex].description}
              </motion.p>

              {/* Pagination dots */}
              {selectedEntry.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {selectedEntry.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedImageIndex
                          ? 'bg-white w-8'
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}