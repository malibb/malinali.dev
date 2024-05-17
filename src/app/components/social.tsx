import { FC, ReactNode } from "react";
import SocialLink from "./social-link";

interface SocialProps {
  title: string,
  children: ReactNode,
};

const Social: FC<SocialProps> = ({ title, children }) => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        
        {children}
        <h1 className="pb-1 text-center text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="p-3 text-center"> Software Developer | Senseí | Mentora | Embajadora | Organizadora | Facilitadora | Líder Técnica </p>
        <p className="p-3 text-center">
          DEV.F | Google for Startups | TECNOLOchicas | Women TechMakers | Technolatinas | GDG IPN | Tech-mania | IAMRemarkable | Velara
        </p>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6 pb-10 mb-20">
            <SocialLink
              url="https://www.linkedin.com/in/malibb/"
              text="Linkedin"
            />
            <SocialLink
              url="https://www.instagram.com/_mesurashii"
              text="Instagram"
            />
            <SocialLink
              url="https://twitter.com/_mesurashii"
              text="Twitter"
            />
            <SocialLink
              url="https://github.com/malibb"
              text="Github"
            />
            <SocialLink
              url="mailto:malinalibb98@gmail.com"
              text="Email"
            />
            <SocialLink
              url="https://edu.devf.la/courses/antes-del-codigo?target=meetups"
              text="CURSO: ANTES DEL CÖDIGO"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
