export const Card = ({text}: {text: string}) => { 
  return <a className="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25" target="_blank">
      <span className="my-6 grid h-24 w-24 place-items-center text-black">
      {text}
      </span>
  </a>
}