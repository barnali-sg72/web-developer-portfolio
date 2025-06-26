export default function Laptop({ children }) {
  return (
    <div className="flex flex-col">
      <div className="relative mx-auto border-slate-600 dark:border-slate-500 border-[8px] rounded-t-xl  ">
        <div className=" overflow-hidden">{children}</div>
      </div>
      <div className="relative mx-auto bg-slate-800 dark:bg-slate-600 w-full rounded-b-xl rounded-t-sm h-[17px] md:h-[21px] ">
        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2  rounded-b-xl  w-[120%] h-[10px]  md:h-[20px] bg-slate-800 dark:bg-slate-600"></div>
      </div>
    </div>
  );
}
