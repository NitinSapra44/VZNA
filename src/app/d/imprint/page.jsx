"use client";
import { useRouter } from "next/navigation";
import AppViewport from "../../components/AppViewport";
import { X } from "lucide-react";

export default function Imprint() {
  const router = useRouter();

  return (
    <AppViewport>
      <div
        className="flex flex-col items-center justify-center h-full bg-[#D5D5D5]"
        style={{ fontFamily: "var(--font-fira-sans)" }}
      >
        {/* 🔷 WHITE CARD */}
        <div className="h-[95%] w-[90%] bg-white rounded-3xl shadow-md px-6 py-8 ">
          <div className="flex flex-col gap-6 text-black text-base">

            <div>
              <p>Pizzeria Veneziana</p>
              <p>Besim Mustafi</p>
            </div>

            <div>
              <p>Usterstrasse 61</p>
              <p>CH-8600 Dübendorf ZH</p>
            </div>

            <div>
              <p>Stampfenbachstrasse 102</p>
              <p>CH-8006 Zürich ZH</p>
            </div>

            <div>
              <p>+41 44 501 88 33</p>
              <p>Info@pizzeriaveneziana.ch</p>
            </div>

            <div>
              <p>Veneziana GmbH</p>
              <p>CHE-139.272.389</p>
            </div>

            <div>
              <p>
                No guarantee is given for the accuracy, completeness, or timeliness
                of the content on this website. Liability claims arising from the
                use of this website are excluded.
              </p>
            </div>

            <div>
              <p>
                All text, images, and other content on this website are protected
                by copyright and may not be used without written permission.
              </p>
            </div>

            <div>
              <p>Design:</p>
              <p>Janic, +41 78 304 76 86</p>
            </div>

            {/* CLOSE / BACK BUTTON */}
           <div className="flex justify-center">
            <button
              onClick={() => router.push("/d")}
              style={{ fontFamily: "var(--font-fira-sans)" }}
              className="mt-8 w-[40%] flex items-center justify-between bg-[#D5D5D5] px-3 py-2 rounded-full text-black font-semibold text-lg shadow-md active:scale-95 transition-all"
            >
              Back
              <span className="bg-[#797979] rounded-full w-10 h-10 flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </span>
            </button>
          </div>  
          </div>
        </div>
      </div>
    </AppViewport>
  );
}
