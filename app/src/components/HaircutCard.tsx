import Haircut from "../types/haircut";

interface haircutCardProps {
  haircut: Haircut;
  haircutName: string;
}

function HaircutCard({ haircut, haircutName }: haircutCardProps) {
  return (
    <div className="p-2 w-[240px] h-[320px] flex flex-col items-center justify-center  rounded-xl bg-white border border-slate-400 shadow-lg hover:shadow-xl hover:border-slate-600">
      <img
        className="rounded-xl w-[210px] h-[140px]"
        src={haircut.imageUrl}
        alt={haircutName}
      />
      <h1 className="mt-1 text-center text-black text-2xl">{haircutName}</h1>
      <p className="mt-2 h-[70px] overflow-auto text-base">
        The <span className="font-semibold text-black">{haircutName}</span> is a
        haircut characterized by x, y, and z.
      </p>
      <div className="flex w-full px-4 justify-between items-center">
        <p className="mt-1 text-center text-black text-2xl">{`$${haircut.price}`}</p>
        <button className="bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl px-2 text-slate-700 hover:bg-gradient-to-br hover:from-amber-300 hover:to-orange-400">
          More Info
        </button>
      </div>
    </div>
  );
}

export default HaircutCard;
