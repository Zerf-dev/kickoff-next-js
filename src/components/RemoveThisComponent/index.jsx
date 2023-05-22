import Trans from 'next-translate/Trans';
import Image from 'next/image';

import logo from '#assets/zerf-logo.svg';

export default function RemoveThisComponent() {
  return (
    <div className="flex h-screen flex-col items-start justify-between bg-home px-44 py-24 text-white">
      <div className="row w-full items-start justify-between">
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
        <div className="cursor-pointer font-medium">
          <span className="text-body-sm font-medium">
            <Trans i18nKey="common:footer" components={{ b: <b className="font-semibold opacity-80" /> }} />
          </span>
        </div>
      </a>
    </div>
  );
}
