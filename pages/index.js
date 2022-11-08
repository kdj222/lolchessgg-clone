import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  faBars,
  faSearch,
  faRefresh,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav";
import HeaderInput from "../components/home/HeaderInput";
import HeaderAlert from "../components/home/HeaderAlert";
import HomeInput from "../components/home/HomeInput";

export default function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Nav />
      <HeaderInput />
      <HeaderAlert />
      <HomeInput />
      <div className='bg-black w-10/12 h-56 mx-auto my-5'>Ad</div>
      <div className='px-2 flex flex-col gap-2'>
        <section className='bg-neutral-200 w-full h-40'>랭킹</section>
        <section className='bg-neutral-200 w-full h-40'>인기 유저</section>
        <section className='bg-neutral-200 w-full h-40'>공지사항</section>
        <section className='bg-neutral-200 w-full h-40'>이벤트</section>
      </div>
      <style jsx>{`
        .bgImg {
          background: url("https://cdn-lostark.game.onstove.com/2022/event/220625_update_YBETKCt1dE/images/pc/illiakan.220824.apXEczPi/@bg_event4.jpg");
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
