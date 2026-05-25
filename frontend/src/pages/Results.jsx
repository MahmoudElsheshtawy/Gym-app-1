import { useRef, useState, useEffect, useCallback } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: assets.b, alt: "Client 1", name: "Sarah Johnson", result: "Lost 24 lbs in 3 months" },
  { src: assets.blog, alt: "Client 2", name: "Mike Chen", result: "Gained 15 lbs muscle" },
  { src: assets.bolbol, alt: "Client 3", name: "Emma Williams", result: "Body fat reduced by 12%" },
  { src: assets.b4b, alt: "Client 4", name: "David Brown", result: "Lost 30 lbs in 4 months" },
  { src: assets.b5b, alt: "Client 5", name: "Lisa Anderson", result: "Gained 10 lbs muscle" },
  { src: assets.b6b, alt: "Client 6", name: "Tom Martinez", result: "Lost 18 lbs, 8% body fat" },
  { src: assets.b7b, alt: "Client 7", name: "Rachel Green", result: "Transformed in 6 months" },
  { src: assets.b8b, alt: "Client 8", name: "Chris Evans", result: "Competition ready" },
];

export default function Results() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Drag handlers with improved performance
  const startDrag = useCallback((e) => {
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    if (!pageX) return;
    
    setIsDragging(true);
    setStartX(pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.scrollSnapType = "none";
  }, []);

  const onMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    if (!pageX) return;
    
    const walk = (pageX - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const stopDrag = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.scrollSnapType = "x mandatory";
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    
    if (e.key === "Escape") {
      setSelectedImage(null);
    } else if (e.key === "ArrowLeft") {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      setSelectedImage(images[prevIndex]);
    } else if (e.key === "ArrowRight") {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src);
      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(images[nextIndex]);
    }
  }, [selectedImage]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Hide scroll hint after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scroll = useCallback((direction) => {
    const scrollAmount = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white">
      {/* Animated title section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-red-500 text-xs tracking-[4px] mb-2 font-semibold">
          RESULTS
        </p>
        <h2 className="text-xl md:text-6xl lg:text-7xl font-black mb-12">
          CLIENT{" "}
          <span className="text-red-500 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            TRANSFORMATIONS
          </span>
        </h2>
      </motion.div>

      {/* Slider container */}
      <div className="relative w-full max-w-7xl mx-auto group">
        {/* Scroll hint */}
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white/50 flex items-center gap-2 z-10"
          >
            <span>←</span>
            Drag to scroll
            <span>→</span>
          </motion.div>
        )}

        {/* Navigation buttons - desktop */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-red-500 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xl hover:bg-red-500 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide scroll-smooth py-4 px-2"
          style={{ scrollSnapType: "x mandatory" }}
          onMouseDown={startDrag}
          onMouseMove={onMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={onMove}
          onTouchEnd={stopDrag}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              onClick={() => setSelectedImage(img)}
              className="min-w-[200px] md:min-w-[260px] lg:min-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-white/5 to-transparent relative cursor-pointer group/item transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
              style={{ scrollSnapAlign: "start" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

              {/* Image info overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0, y: hoveredIndex === i ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
              >
                <p className="text-white font-bold text-sm">{img.name}</p>
                <p className="text-red-400 text-xs">{img.result}</p>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(239,68,68,0.3)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instagram link */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 px-8 py-3 border-2 border-white/20 rounded-full text-sm font-semibold hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
      >
        <span>📸</span>
        See more transformations on Instagram
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </motion.a>

      {/* Modal with improved UX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image info in modal */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <p className="text-white text-2xl font-bold">{selectedImage.name}</p>
                <p className="text-red-400 text-lg">{selectedImage.result}</p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white text-2xl hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Navigation arrows in modal */}
              <button
                onClick={() => {
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                  setSelectedImage(images[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white text-3xl hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={() => {
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(images[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white text-3xl hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                aria-label="Next image"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
    
  );
}