import Trans from 'next-translate/Trans';
import Image from 'next/image';

import logo from '#assets/zerf-logo.svg';

export default function RemoveThisComponent() {
  return (
    <div className="h-screen flex flex-col items-start justify-between py-24 px-44 bg-home text-white">
      <div className="row items-start justify-between w-full">
        <div>
          <Image height={35} width={154.8} src={logo} alt="logo" />
        </div>
      </div>
      <h1 className="max-w-4xl text-title font-extrabold">
        <Trans i18nKey="common:title" components={{ b: <b className="text-portage" /> }} />
      </h1>
      <a
        href="https://github.com/Zerf-dev/bootstrap-kickoff#readme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="font-medium cursor-pointer">
          <span className="font-medium text-body-sm">
            <Trans i18nKey="common:footer" components={{ b: <b className="font-semibold opacity-80" /> }} />
          </span>
        </div>
      </a>
    </div>
  );
}
