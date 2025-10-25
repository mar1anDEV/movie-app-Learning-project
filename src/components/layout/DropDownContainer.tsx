import React from 'react';

// 1. Define the shape of a single link item
type LinkItem = {
  name: string;
  path: string;
};


type DropDownContainerProps = {
  ulDropdown: LinkItem[]; 
};


const DropDownContainer = ({ ulDropdown }: DropDownContainerProps) => {
  return (
    <ul className='dropdown-container inline-block'>
      {ulDropdown.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropDownContainer;