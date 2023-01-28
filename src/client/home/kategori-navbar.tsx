import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./st.css";
export default function KategoriNavbar() {
  const [show, setShow] = useState(false);
  const sidebarCartRef = useRef<HTMLDivElement>(null);
  let ktgs = [];
  for (let index = 0; index < 150; index++) {
    ktgs.push("index" + index);
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-ignore
      if (sidebarCartRef.current && !sidebarCartRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarCartRef]);
  return (
    <>
      <div className="relative pr-4 p-2 border-b sm:py-4 sm:border-b-0">
        <div className="flex overflow-x-auto flex-nowrap gap-2  hide-scroll-bar">
          <button className="w-auto whitespace-nowrap text-primary">All</button>
          {[1, 2, 3, 4, 5, 6, 7].map((r) => {
            return (
              <button key={r} className="w-auto whitespace-nowrap">
                Kategori Austeread - ke {r}
              </button>
            );
          })}
        </div>
        <div className="flex absolute top-0 right-0 h-full items-center bg-gradient-to-l from-white sm:via-white to-transparent backdrop-opacity-10 pl-10 pr-2">
          <button className="outline-none bg-white" onClick={() => setShow(true)}>
            <img src="/static/icons/menu.png" className="w-6" />
          </button>
        </div>
      </div>
      <div className={`absolute transform duration-300 ease-in-out inset-0 h-full z-50 ${!show ? "translate-x-full" : ""}`}>
        <div className="h-full w-full relative bg-white/90 z-10 flex justify-end">
          <div ref={sidebarCartRef} className="w-full  sm:w-[400px] h-full relative">
            <button className="absolute right-0 z-20" onClick={() => setShow(false)}>
              <img src="/static/icons/icon_close_white.png" alt="" />
            </button>
            <div className="absolute w-full top-0 bg-gradient-to-b from-black via-black/40 to-black h-full "></div>
            {/* <div className="absolute w-full bottom-0 bg-gradient-to-t from-black via-black/80 to-black/30  h-1/2 "></div> */}
            <div className="absolute w-full h-full overflow-y-auto text-white flex flex-col gap-4 mix-blend-overlay">
              {ktgs.map((e) => (
                <div key={e} className="text-center hover:font-bold  cursor-pointer text-2xl">
                  sdsd sdhjgs sdug -- {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
