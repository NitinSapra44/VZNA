     {!hideContent && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full px-5">
          <div className="bg-white rounded-[35px] w-full max-w-md mx-auto px-5 py-4 flex items-center justify-center gap-4 shadow-xl">

            {/* Left content */}
            <div className="flex flex-col text-center">
              <h2 className="text-[18px] font-normal text-black leading-tight">
                {title}
              </h2>

              <p className="text-[12px] font-normal text-black mt-1">
                {item.price ? `Ab ${item.price} Fr.` : "—"}
              </p>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Mehr Infos Button */}
              <button
                onClick={handleOpen}
                className="h-[50px] px-5 rounded-[25px] bg-[#E5E5E5] text-black
                           text-[18px] font-medium flex items-center whitespace-nowrap"
              >
                {language === "de" ? "Mehr Infos" : "More Info"}
              </button>

              {/* Plus Button */}
              <button
                onClick={handleOpen}
                className="h-[50px] w-[50px] rounded-full bg-[#999999]
                           flex items-center justify-center flex-shrink-0"
              >
                <div
                  className="h-[40px] w-[40px] rounded-full bg-white
                             flex items-center justify-center"
                >
                  <span className="text-[20px] font-bold text-black">+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
