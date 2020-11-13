import React from 'react';
import style from './Wall.module.css';

const Wall = (props) => {
  return (
    <div className={style.My_wall}>
      <div className={style.wrap}>
        <div className={style.img_wall}>

        </div>
        <h2 className={style.title_wall}>{props.wall}</h2>
      </div>
    </div>
  );
};

export default Wall;
