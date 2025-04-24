import MenuItem from './MenuItem';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillinfoCircleFill } from 'react-icons/bs';

export default function Header() {
  return (
    <div>
      <div className="">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillinfoCircleFill} />
      </div>
      <div className=""></div>
    </div>
  );
}
