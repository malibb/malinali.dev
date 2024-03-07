import { FC } from "react";

interface SocialLinkProps {
  url: string,
  text: string,
};

const SocialLink: FC<SocialLinkProps> = ({ url, text }) => {
  return (
    <a
      className="p-4"
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <button
        className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-3 text-sm font-semibold text-lg leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        {text}
      </button>
    </a>
  );
};

export default SocialLink;
