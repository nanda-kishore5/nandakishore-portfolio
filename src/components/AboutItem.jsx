import { FaRegDotCircle } from 'react-icons/fa';
import { GoDash } from "react-icons/go";

export default function AboutItem({ tag, value, tagCase = 'capitalize', valueCase='capitalize' }) {
  return (
    <div className='flex gap-1 p-1 items-center'>
      <FaRegDotCircle className='text-slate-600 w-3 h-3 md:w-5 md:h-5' />
      <p className={`text-md ${tagCase}`}>{tag}</p>
      <GoDash className='text-slate-500 w-5 h-5 md:w-8 md:h-8' />
      <p className={`text-md md:text-lg ${valueCase} text-slate-400`}>
        {value}
      </p>
    </div>
  );
}
