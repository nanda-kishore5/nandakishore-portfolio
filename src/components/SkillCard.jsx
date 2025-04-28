export default function SkillCard({ index, skill }) {
    console.log(index);
    
  return (
    <div
      className='text-white capitalize p-6 border b-1 hover:shadow-md hover:shadow-slate-600 rounded-lg'
      key={index}
    >
      <div className='flex items-center justify-start gap-4'>
        {skill.icon}
        <h3 className='text-lg md:text-xl'>{skill.category}</h3>
      </div>
      <div className='flex flex-wrap gap-1 mt-5'>
        {skill.values.map((val, i) => {
          return (
            <span
              key={i}
              className='capitalize rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
            >
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
}
