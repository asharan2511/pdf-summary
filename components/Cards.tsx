import { LucideIcon } from "lucide-react";

const Cards = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) => {
  return (
    <div className="relative flex flex-col items-center w-fit max-w-xs px-4 py-6 rounded-xl text-center space-y-3 border border-transparent hover:border-rose-300 transition duration-200">
      <div className="bg-rose-100 p-4 rounded-2xl">
        <Icon size={48} className="text-rose-600" />
      </div>

      <h3 className="text-lg font-bold text-black">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export default Cards;
