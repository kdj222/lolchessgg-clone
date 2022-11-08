import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeInput() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='bgImg'>
      <div className='py-10 text-center'>
        <p className='text-white font-bold'>LOA.GG</p>
        <div className='p-4'>
          <form
            onSubmit={onSubmit}
            className='bg-white h-10 flex justify-between overflow-hidden'>
            <input
              className='h-full w-full text-xs p-4'
              placeholder='모험가명을 입력해주세요!'
            />
            <button>
              <FontAwesomeIcon
                icon={faSearch}
                className='p-3 text-neutral-200 bg-lime-700'
              />
            </button>
          </form>
        </div>
        <div className='text-center text-white text-sm pt-10 pb-8'>
          <p>
            네이버에서 <span className='text-green-500'>롤체지지</span>를
            검색하세요!
          </p>
        </div>
      </div>
      <style jsx>{`
        .bgImg {
          background: url("https://cdn-lostark.game.onstove.com/2022/event/220625_update_YBETKCt1dE/images/pc/illiakan.220824.apXEczPi/@bg_event4.jpg");
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
