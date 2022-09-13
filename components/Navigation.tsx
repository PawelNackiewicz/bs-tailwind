import Link from 'next/link';
import Image from 'next/image'

export const Navigation = () => {
  return (
    <nav className="w-full border-b flex justify-between items-center p-4">
      <Link href="/">
        <a>
          <Image alt="logo" src="/logo.png" width="160" height="40" />
        </a>
      </Link>
      <ul className="flex justify-center h-full">
        <LinkItem href="/przedluzanie-rzes" title="RZĘSY" />
        <LinkItem href="/stylizacja-brwi" title="BRWI" />
        <LinkItem href="/szkolenia" title="SZKOLENIA" />
        <LinkItem href="/cennik" title="CENNIK" />
        <LinkItem href="/Natalia-Golomb" title="O MNIE" />
      </ul>
    </nav>
  );
};

interface LinkItemProps {
  readonly href: string;
  readonly title: string;
}

const LinkItem = ({ href, title }: LinkItemProps) => {
  return (
    <li className="mr-8 uppercase">
      <Link href={href}>
        <a>
          {title}
        </a>
      </Link>
    </li>
  );
};