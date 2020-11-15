import React from 'react';
import style from './Profile.module.css';
import Wall from './Wall/Wall';


const Profile = () => {


  return (
    <div className={style.main}>
      <div className={style.My_profile}>
        <div className={style.wrap}>
          <div className={style.img}></div>

          <h2 className={style.title}>Мой профиль</h2>
        </div>

        <div className={style.wrapper}>
          <textarea className={style.myPost}></textarea>

          <button className={style.addMyPost}>отправить пост</button>
        </div>
      </div>
      <Wall wall= 'Привет мир'></Wall>

    </div>
  );
}

export default Profile;
