import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full flex items-center justify-around">
        <h2 className="font-bold text-lg">Connect with me!</h2>
        <Link
          to="mailto:garbaccio20@gmail.com"
          className="hover:text-teal-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </Link>
        <Link
          to="https://github.com/nicogarbaccio"
          className="hover:text-teal-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/nicogarbaccio/"
          className="hover:text-teal-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link
          to="https://portfolio-nicogarbaccio.vercel.app/"
          className="hover:text-teal-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </Link>
      </div>
    </Footer>
  );
}
