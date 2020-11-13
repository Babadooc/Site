import React from 'react';
import { NavLink } from 'react-router-dom';
import style from'./Sidebar.module.css';
const Sidebar=()=> {
  return (
    <div className={style.nav}>
      <div className={style.nav_item}>
        <NavLink to='/profile' activeClassName={style.active}>Профиль</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/dialogs' activeClassName={style.active}>Диалоги</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/music' activeClassName={style.active}>Музыка</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/news' activeClassName={style.active}>Новости</NavLink>
      </div>
      <div className={style.nav_item}>
        <NavLink to='/settings' activeClassName={style.active}>Настройки</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
