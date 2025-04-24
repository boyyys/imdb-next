import React from 'react';
import MenuItem from './menuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillinfoCircleFill } from 'react-icons/bs';

export default function header() {
  return (
    <div>
      <div className="">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={AiFillHome} />
      </div>
      <div className=""></div>
    </div>
  );
}
