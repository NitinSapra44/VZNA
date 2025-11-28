"use client";
export default function MenuTile({ item, index, language, onOpenProduct }) {
  const title = language === "de" ? item.title_de : item.title_en;
  const subtitle = language === "de" ? item.subtitle_de : item.subtitle_en;
  
  return (
    <div className="relative h-full w-full snap-center">
      {/* Background Image */}
      <img
        src={item.image_url}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Fixed Logo - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <img 
          src="/logo.svg"
          alt="Restaurant Logo" 
          className="h-14 w-auto drop-shadow-lg"
        />
      </div>
      
      {/* Bottom-left text */}
      <div className="absolute bottom-6 left-6 text-white max-w-md">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-base opacity-90">{subtitle}</p>
      </div>
      
      {/* Bottom-right button */}
      <button
        onClick={() => onOpenProduct(index)}
        className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        Information
        <span className="text-xl">+</span>
      </button>
    </div>
  );
}