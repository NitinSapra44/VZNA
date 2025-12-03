"use client";
import { useRouter } from "next/navigation";
import AppViewport from "../../components/AppViewport"
import { Check } from 'lucide-react';
import { X } from 'lucide-react';


export default function Impressum() {

    const router = useRouter();
  return (
    <AppViewport>
      {/* 🔹 Intro Animation (Full Screen) */}
      <div className="animate-fade-in flex flex-col items-center justify-center h-full gap-8 bg-[#DBDBDB]">
        <div className="bg-white h-[95%] w-[90%] rounded-3xl flex flex-col items-center pt-8 ">
      <div className="flex items-start flex-col">  <h1 className="text-black text-base">Pizzeria Veneziana</h1>
        <h1 className="text-black text-base">Besim Mustafi</h1></div>
        
        <div className="flex items-start flex-col">  <h1 className="text-black text-base">Usterstrasse 61</h1>
        <h1 className="text-black text-base">CH-8600 Dübendorf ZH</h1></div>

    <div className="flex items-start flex-col">  <h1 className="text-black text-base">Stampfenbachstrasse 102</h1>
        <h1 className="text-black text-base">CH-8006 Zürich ZH</h1></div>

    <div className="flex items-start flex-col">  <h1 className="text-black text-base">+41 44 501 88 33</h1>
        <h1 className="text-black text-base">Info@pizzeriaveneziana.ch</h1></div>

 <div className="flex items-start flex-col">  <h1 className="text-black text-base">Veneziana GmbH</h1>
        <h1 className="text-black text-base">
CHE-139.272.389</h1></div>
         
         <div className="flex items-start flex-col">  <p className="text-black text-base">Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte dieser Website wird keine Gewähr übernommen. Haftungsansprüche aufgrund der Nutzung dieser Website sind ausgeschlossen.</p></div>
         <div className="flex items-start flex-col">  <p className="text-black text-base">Alle Texte, Bilder und weiteren Inhalte dieser Website sind urheberrechtlich geschützt und dürfen ohne schriftliche Zustimmung nicht verwendet werden.</p></div>

           <div className="flex items-start flex-col">  <h1 className="text-black text-base">Design:</h1>
        <h1 className="text-black text-base">
Janic, +41 78 304 76 86</h1></div>

 <button 
            style={{ fontFamily: 'var(--font-fira-sans)' }}
              onClick={() => router.push(`/z`)}
              className="flex items-center gap-4 bg-[#D5D5D5] text-black font-semibold px-6 py-3 rounded-full text-lg active:scale-95 transition-all shadow-md"
            >
              Schliessen

              <span className="bg-[#797979] rounded-full w-8 h-8 flex items-center justify-center">
                <X className="w-6 h-6" color="white" />
              </span>
            </button>

        </div>

       

  
          </div>
      
    </AppViewport>
  );
}
