import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [navList, setNavList] = useState([
    "전적검색",
    "e스포츠 일정",
    "레벨업지지",
    "게임코치온라인",
    "GCL",
  ]);
  const [activeMenu, setActiveMenu] = useState("전적검색");
  return (
    <nav className='bg-gray-700 text-white text-sm'>
      <section className='flex gap-4 text-center px-4 h-10'>
        <Link href={"/"} className='self-center'>
          DAK.GG
        </Link>
        <div className='flex whitespace-nowrap items-center overflow-x-scroll gap-3 text-gray-400'>
          {navList.map((a) => (
            <>
              <Link
                href={"/"}
                onClick={() => {
                  setActiveMenu(a);
                }}
                className={activeMenu === a ? "text-white" : ""}>
                {a}
              </Link>
              {a !== "GCL" && (
                <div className='overflow-y-hidden h-2 w-px inline-flex border-l mx-0.5 border-gray-500'></div>
              )}
            </>
          ))}
        </div>
      </section>
    </nav>
  );
}
