import React from 'react';
import style from'./Header.module.css';
const Header=()=> {
  return (
    <div className={style.Header}>
      <div className={style.logo}>
      </div>
      <div className={style.title}>
        <h1>Социальная сеть</h1>
        <h3>(как-то назовем)</h3>
      </div>
    </div>
  );
}

export default Header;
