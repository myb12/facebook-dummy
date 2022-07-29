import React from 'react';
import './MainSectionLeft.css';
import { TbAlertTriangle } from 'react-icons/tb';
import { leftData, shortcutData } from '../../fakeData/fakeData';
import UseData from '../../hooks/UseData';

const MainSectionLeft = () => {
    const [user] = UseData();
    return (
        <div className='main-section-left-right'>
            <div className='left-right-first'>
                <div className="left-right-item-user">
                    <img className="left-right-user" src={user?.profile_picture} alt="" />
                    <p>
                        {user?.name}
                    </p>
                </div>

                {
                    leftData.map((el, i) => <div key={i} className="left-item">
                        <img className="left-right-user" src={el.image} alt={el.title} />
                        <p>
                            {el.title}
                        </p>
                    </div>)
                }
                <div className="left-right-item-user">
                    <div className="left-see-more">
                        <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c jnigpg78 odw8uiq3"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                    </div>
                    <p>
                        See More
                    </p>
                </div>
            </div>
            <div className="left-footer">
                <div className='left-right-item-user'>
                    <div className="shortcuts">
                        <h5>Your Shortcuts</h5>
                        <a href="/#" className='shortcut-edit'>Edit</a>
                    </div>
                </div>

                {
                    shortcutData.map((el, i) => <div key={i} className="left-item">
                        <img className="left-right-user" src={el.image} alt={el.title} />
                        <p>
                            {el.title}
                        </p>
                    </div>)
                }


                <div className="footer-text">
                    <small>
                        Privacy  · Terms  · Advertising  · Ad Choices <TbAlertTriangle />
                        <br />
                        · Cookies  · · Meta © 2022
                    </small>
                </div>
            </div>



        </div>
    );
};

export default MainSectionLeft;