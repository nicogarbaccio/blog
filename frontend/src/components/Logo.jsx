import { AiFillBug } from "react-icons/ai";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-gradient-to-r from-indigo-500 to-green-500 rounded-xl px-2 py-1 text-white cursor-pointer">
        <AiFillBug className="text-4xl" />
        <span className="px-2 py-1 rounded-lg">Buggin&#39; Out!</span>
      </div>
      <span className="text-md">a QA Blog</span>
    </div>
  );
}
