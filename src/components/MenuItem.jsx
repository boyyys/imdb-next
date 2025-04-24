import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address}>
      {Icon && <Icon className="text-2xl sm:hidden" />}
      <p className="uppercase hidden sm:inline text-sm ">{title}</p>
    </Link>
  );
}
