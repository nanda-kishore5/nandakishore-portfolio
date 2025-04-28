import ProgressBar from '@ramonak/react-progress-bar';

export default function SkillItem({key, skillname, percent}) {
  return (
    <div className='flex w-full flex-col' key={key}>
      <div className='flex justify-between w-full p-1 items-center'>
        <p className='text-lg md:text-xl capitalize'>{skillname}</p>
        <p className='flex justify-center items-center px-1 text-sm bg-gray-500 rounded-md'>
          {percent}%
        </p>
      </div>
      <ProgressBar
        completed={percent}
        className='w-full'
        height='6px'
        isLabelVisible={false}
      />
    </div>
  );
}
