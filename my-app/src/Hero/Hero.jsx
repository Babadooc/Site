import React from 'react';
import style from'./Hero.module.css';
import Profile from './Profile/Profile';
const Hero=()=> {
  return (
    <div className={style.Hero}>
      <Profile></Profile>
    </div>
  );
}

export default Hero;
