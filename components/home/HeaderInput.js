import { useState } from "react";
import { faBars, faSearch, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderInput() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='bg-gray-700 h-14 border-t border-gray-600 flex items-center px-4 w-full'>
      <div className='text-lg mr-4'>
        <FontAwesomeIcon icon={faBars} className='text-white' />
      </div>
      <form
        onSubmit={onSubmit}
        className='overflow-hidden rounded-lg flex w-full justify-between bg-gray-800'>
        <div className='flex items-center gap-10 text-white text-xs self-center bg-gray-900 p-3'>
          <div>
            <b>KR</b>
          </div>
          <FontAwesomeIcon icon={faRefresh} size='xs' className='pt-0.5' />
        </div>
        <input className='text-xs bg-gray-800 p-3' placeholder='소환사 검색' />
        <button>
          <FontAwesomeIcon
            icon={faSearch}
            size='xs'
            className='text-gray-500 pr-4 pt-0.5'
          />
        </button>
      </form>
    </div>
  );
}
