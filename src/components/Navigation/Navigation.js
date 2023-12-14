import { NavLink } from "react-router-dom";
import './Navigation.scss';
import symbolDefs from 'assets/images/symbol-defs.svg';
import groupImage from 'assets/images/group_31.jpg';

export const Navigation = () => {
  return (
    <div>
      <div className="sidebar__title">
        <h1>Dashboard</h1>
        <img src={groupImage} alt="description" />
        <p>v.01</p>
      </div>
      <nav>
        <ul className="sidebar__list">
          <li className="sidebar__list__item">
            <NavLink to='/dashboard'>
              <svg className="sidebar-icon">
                <use href={`${symbolDefs}#key-square`}></use>
              </svg>
              Dashboard
              </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink to='/product'>
              <svg className="sidebar-icon bold-icon">
                <use href={`${symbolDefs}#d-square`}></use>
              </svg>
              Product
              <svg className="sidebar-icon chevron-right">
                <use href={`${symbolDefs}#chevron-right`}></use>
              </svg>
            </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink to='/customers'>
              <svg className="sidebar-icon">
                <use href={`${symbolDefs}#user-square`}></use>
              </svg>
              Customers
              <svg className="sidebar-icon chevron-right">
                <use href={`${symbolDefs}#chevron-right`}></use>
              </svg>
            </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink to='/income'>
              <svg className="sidebar-icon">
                <use href={`${symbolDefs}#wallet-money`}></use>
              </svg>
              Income
              <svg className="sidebar-icon chevron-right">
                <use href={`${symbolDefs}#chevron-right`}></use>
              </svg>
            </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink to='/promote'>
              <svg className="sidebar-icon bold-icon">
                <use href={`${symbolDefs}#discount-shape`}></use>
              </svg>
              Promote
              <svg className="sidebar-icon chevron-right">
                <use href={`${symbolDefs}#chevron-right`}></use>
              </svg>
            </NavLink>
          </li>
          <li className="sidebar__list__item">
            <NavLink to='/help'>
              <svg className="sidebar-icon bold-icon">
                <use href={`${symbolDefs}#message-question`}></use>
              </svg>
              Help
              <svg className="sidebar-icon chevron-right">
                <use href={`${symbolDefs}#chevron-right`}></use>
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
