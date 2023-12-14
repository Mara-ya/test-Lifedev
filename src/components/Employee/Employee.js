import avatar from 'assets/avatars/evano.jpg';
import './Employee.scss';

export const Employee = () => {
    return (
      <div className='employee'>
        <img src={avatar} alt="" />
        <div className='employee__info'>
            <p className='employee__info__name'>Evano</p>
            <p className='employee__info__position'>Project Manager</p>
        </div>
      </div>
    );
  };