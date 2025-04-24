import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address}>
      <Icon />
      <p className="uppercase hidden sm:line">{title}</p>
    </Link>
  );
}
