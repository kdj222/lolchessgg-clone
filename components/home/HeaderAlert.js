import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderAlert() {
  return (
    <section className='bg-gradient-to-r from-cyan-500 to-blue-500 text-sm text-white py-2 px-4'>
      <p className='text-center'>
        <FontAwesomeIcon icon={faCheckCircle} color='white' className='mx-1' />
        LCK 내전으로 펼쳐진 2022 롤드컵 결승 결과는?
      </p>
    </section>
  );
}
