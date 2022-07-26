import React from 'react';
import './FriendRequest.css';

const FriendRequest = () => {
    return (
        <div className='friend-request-card'>
            <div className="d-flex justify-content-between align-items-center friend-request-header mb-3">
                <p className='mb-0'>Friend requests</p>
                <a href="#/">See all</a>
            </div>
            <div className='friend-request'>

                <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH2p3NQQK2Hrit9PuXv14-Jso2H55p0AlGyjYfnmnQCUcl0p1b5TipI861c5R0J_nclVQCDGaycnzU6hV7EhZXk&_nc_ohc=Xui_C6PlBu4AX8vEQy9&_nc_ht=scontent.fdac14-1.fna&oh=00_AT9-bdpM4ECqq5NTAzUkHbbMblfFcLQadQV4n97JHulsdg&oe=6305CB78" alt="" />

                <div className='friend-request-footer'>
                    <div className='request-details'>
                        <p>Tamim Iqbal</p>
                        <small>5d</small>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/148073903_714194762793217_1478072575256228727_n.jpg?stp=cp0_dst-jpg_p24x24&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFBjXFbxhKuYDcsgfUnTxdVGh2ieoPfmpUaHaJ6g9-ale3j2rB6YuNxVoY5GhKtoQJKekAKzKA2mJAy1hTiwKa4&_nc_ohc=tznKuq7WJ0kAX_uoS5t&_nc_ht=scontent.fdac14-1.fna&oh=00_AT_d-Ae4y3zr1wZkkJelSItjTSl1uznJnBO-26LQrvNP-w&oe=63070599" alt="" />
                        <small className='ms-1'>1 mutual friend</small>
                    </div>

                    <div className="request-btn-wrapper mt-2">
                        <button className='btn-confirm'>Confirm</button>
                        <button className='btn-delete'>Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendRequest;