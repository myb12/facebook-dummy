import React from 'react';
import FriendRequest from '../FriendRequest/FriendRequest';
import './MainSectionRight.css';

const onlineData =
    [
        {
            title: 'Karim khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/289151658_10220525027731503_679096869304353505_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFFqF0RK-f2w1kgsAME1hKmL6cYGyM1G4MvpxgbIzUbgzbxiXAoybOcc0ReFNk-lKdsuLLv5oNYLDHAJzavkMFz&_nc_ohc=mUpSL7-c3yYAX9jWouf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8Il8YwU6H13EiHn8rY-ihchwtryMybIsxTEyGMT0JxqQ&oe=62E49CBC',
        },
        {
            title: 'Imran Hossain',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/285240192_10225137943693232_7118106208170302563_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHw0lHgKXxy1yghmjGMkHDrmNsO0A-TAmuY2w7QD5MCRs-SipSFIVC6D__h7mB0oPx4Tij5lJXzwlXnSxUoPmd&_nc_ohc=4E3t4QjnITIAX9uSuQz&_nc_oc=AQnGL5X3sxmd996FrMfwq8RRk7eajBTipqJVWHTjtaJV91Xj4S9lOu3vxvM0Z1FP9sg&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8MkhenGAQaI8Kso6btqmifTgmrXJqPkvm0m4i_pfe0JA&oe=62E47F74',
        },
        {
            title: 'MD Shakil',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/258745193_10227991899768779_535979156332448838_n.jpg?stp=c0.0.74.74a_cp0_dst-jpg_p74x74&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeErczBGNMrDmfAxPwEKZE6cKkrH4LZoiT4qSsfgtmiJPm-JxHBywFaQaOYI6sOOhI3Vmjfq7Z6IWQob1GCbm5nV&_nc_ohc=DQ8I9V8JNnUAX8LsR4g&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8AU-OlT71r1_ZTzdv8sc9WBgjfqUmOO8APwgTBRRE7YQ&oe=62E48D5C',
        },
        {
            title: 'Rony Chy',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/222597674_6501113793248078_1695809398797757874_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEUXeWDQkVf83qbcNIBJ3B1GPQdjB6Gxx0Y9B2MHobHHUFdY7MI39Dq9_JXfyj97Z9yJSOGC7kTziLWuszKu0ps&_nc_ohc=6d5xaIj41lUAX-Af2hG&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-o8MZ_EdUn0dUGdiKHTwZUe3vyQnGwfXi24GuBAXQ-ew&oe=62E5BA79'
        },
        {
            title: 'Noman khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/294469874_778146093200531_3289317010184032573_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHcehR0Bovg2oqyH_LI44k1CfSzETtBhPwJ9LMRO0GE_Icxf8__KHCAas8Cf0Fzd9Vweb7zd1RxT8HUskMGpNG8&_nc_ohc=MLreTStjkWEAX9O4_sf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-CSUa6PSMKSyWNKmVu5BOzrfjZnmVfOjR_oyVUvyzXZQ&oe=62E4F0FF',
        },
        {
            title: 'Raju Ahmed',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/274063952_4481269288667204_8651666571521923443_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFWM2CZeJNOi9l-MhHz0f_SLKcASFqnmCQspwBIWqeYJAb8lFDmw0YQ6dp9edRgN09YD3Y3gn3sKZHIKDZPc2PJ&_nc_ohc=N0ytTuGZduIAX9G-EIF&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-Aedk4ke9apFz1Krrry6zn7yfI0CcooRHCZYIG5wZJEQ&oe=62E5CD15',
        },
        {
            title: 'Karim khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/289151658_10220525027731503_679096869304353505_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFFqF0RK-f2w1kgsAME1hKmL6cYGyM1G4MvpxgbIzUbgzbxiXAoybOcc0ReFNk-lKdsuLLv5oNYLDHAJzavkMFz&_nc_ohc=mUpSL7-c3yYAX9jWouf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8Il8YwU6H13EiHn8rY-ihchwtryMybIsxTEyGMT0JxqQ&oe=62E49CBC',
        },
        {
            title: 'Imran Hossain',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/285240192_10225137943693232_7118106208170302563_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHw0lHgKXxy1yghmjGMkHDrmNsO0A-TAmuY2w7QD5MCRs-SipSFIVC6D__h7mB0oPx4Tij5lJXzwlXnSxUoPmd&_nc_ohc=4E3t4QjnITIAX9uSuQz&_nc_oc=AQnGL5X3sxmd996FrMfwq8RRk7eajBTipqJVWHTjtaJV91Xj4S9lOu3vxvM0Z1FP9sg&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8MkhenGAQaI8Kso6btqmifTgmrXJqPkvm0m4i_pfe0JA&oe=62E47F74',
        },
        {
            title: 'MD Shakil',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/258745193_10227991899768779_535979156332448838_n.jpg?stp=c0.0.74.74a_cp0_dst-jpg_p74x74&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeErczBGNMrDmfAxPwEKZE6cKkrH4LZoiT4qSsfgtmiJPm-JxHBywFaQaOYI6sOOhI3Vmjfq7Z6IWQob1GCbm5nV&_nc_ohc=DQ8I9V8JNnUAX8LsR4g&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8AU-OlT71r1_ZTzdv8sc9WBgjfqUmOO8APwgTBRRE7YQ&oe=62E48D5C',
        },
        {
            title: 'Rony Chy',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/222597674_6501113793248078_1695809398797757874_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEUXeWDQkVf83qbcNIBJ3B1GPQdjB6Gxx0Y9B2MHobHHUFdY7MI39Dq9_JXfyj97Z9yJSOGC7kTziLWuszKu0ps&_nc_ohc=6d5xaIj41lUAX-Af2hG&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-o8MZ_EdUn0dUGdiKHTwZUe3vyQnGwfXi24GuBAXQ-ew&oe=62E5BA79'
        },
        {
            title: 'Noman khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/294469874_778146093200531_3289317010184032573_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHcehR0Bovg2oqyH_LI44k1CfSzETtBhPwJ9LMRO0GE_Icxf8__KHCAas8Cf0Fzd9Vweb7zd1RxT8HUskMGpNG8&_nc_ohc=MLreTStjkWEAX9O4_sf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-CSUa6PSMKSyWNKmVu5BOzrfjZnmVfOjR_oyVUvyzXZQ&oe=62E4F0FF',
        },
        {
            title: 'Raju Ahmed',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/274063952_4481269288667204_8651666571521923443_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFWM2CZeJNOi9l-MhHz0f_SLKcASFqnmCQspwBIWqeYJAb8lFDmw0YQ6dp9edRgN09YD3Y3gn3sKZHIKDZPc2PJ&_nc_ohc=N0ytTuGZduIAX9G-EIF&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-Aedk4ke9apFz1Krrry6zn7yfI0CcooRHCZYIG5wZJEQ&oe=62E5CD15',
        },
        {
            title: 'Karim khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/289151658_10220525027731503_679096869304353505_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFFqF0RK-f2w1kgsAME1hKmL6cYGyM1G4MvpxgbIzUbgzbxiXAoybOcc0ReFNk-lKdsuLLv5oNYLDHAJzavkMFz&_nc_ohc=mUpSL7-c3yYAX9jWouf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8Il8YwU6H13EiHn8rY-ihchwtryMybIsxTEyGMT0JxqQ&oe=62E49CBC',
        },
        {
            title: 'Imran Hossain',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/285240192_10225137943693232_7118106208170302563_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHw0lHgKXxy1yghmjGMkHDrmNsO0A-TAmuY2w7QD5MCRs-SipSFIVC6D__h7mB0oPx4Tij5lJXzwlXnSxUoPmd&_nc_ohc=4E3t4QjnITIAX9uSuQz&_nc_oc=AQnGL5X3sxmd996FrMfwq8RRk7eajBTipqJVWHTjtaJV91Xj4S9lOu3vxvM0Z1FP9sg&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8MkhenGAQaI8Kso6btqmifTgmrXJqPkvm0m4i_pfe0JA&oe=62E47F74',
        },
        {
            title: 'MD Shakil',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/258745193_10227991899768779_535979156332448838_n.jpg?stp=c0.0.74.74a_cp0_dst-jpg_p74x74&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeErczBGNMrDmfAxPwEKZE6cKkrH4LZoiT4qSsfgtmiJPm-JxHBywFaQaOYI6sOOhI3Vmjfq7Z6IWQob1GCbm5nV&_nc_ohc=DQ8I9V8JNnUAX8LsR4g&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8AU-OlT71r1_ZTzdv8sc9WBgjfqUmOO8APwgTBRRE7YQ&oe=62E48D5C',
        },
        {
            title: 'Rony Chy',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/222597674_6501113793248078_1695809398797757874_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEUXeWDQkVf83qbcNIBJ3B1GPQdjB6Gxx0Y9B2MHobHHUFdY7MI39Dq9_JXfyj97Z9yJSOGC7kTziLWuszKu0ps&_nc_ohc=6d5xaIj41lUAX-Af2hG&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-o8MZ_EdUn0dUGdiKHTwZUe3vyQnGwfXi24GuBAXQ-ew&oe=62E5BA79'
        },
        {
            title: 'Noman khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/294469874_778146093200531_3289317010184032573_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHcehR0Bovg2oqyH_LI44k1CfSzETtBhPwJ9LMRO0GE_Icxf8__KHCAas8Cf0Fzd9Vweb7zd1RxT8HUskMGpNG8&_nc_ohc=MLreTStjkWEAX9O4_sf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-CSUa6PSMKSyWNKmVu5BOzrfjZnmVfOjR_oyVUvyzXZQ&oe=62E4F0FF',
        },
        {
            title: 'Raju Ahmed',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/274063952_4481269288667204_8651666571521923443_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFWM2CZeJNOi9l-MhHz0f_SLKcASFqnmCQspwBIWqeYJAb8lFDmw0YQ6dp9edRgN09YD3Y3gn3sKZHIKDZPc2PJ&_nc_ohc=N0ytTuGZduIAX9G-EIF&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-Aedk4ke9apFz1Krrry6zn7yfI0CcooRHCZYIG5wZJEQ&oe=62E5CD15',
        },
        {
            title: 'Karim khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/289151658_10220525027731503_679096869304353505_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFFqF0RK-f2w1kgsAME1hKmL6cYGyM1G4MvpxgbIzUbgzbxiXAoybOcc0ReFNk-lKdsuLLv5oNYLDHAJzavkMFz&_nc_ohc=mUpSL7-c3yYAX9jWouf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8Il8YwU6H13EiHn8rY-ihchwtryMybIsxTEyGMT0JxqQ&oe=62E49CBC',
        },
        {
            title: 'Imran Hossain',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/285240192_10225137943693232_7118106208170302563_n.jpg?stp=cp0_dst-jpg_s74x74&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFHw0lHgKXxy1yghmjGMkHDrmNsO0A-TAmuY2w7QD5MCRs-SipSFIVC6D__h7mB0oPx4Tij5lJXzwlXnSxUoPmd&_nc_ohc=4E3t4QjnITIAX9uSuQz&_nc_oc=AQnGL5X3sxmd996FrMfwq8RRk7eajBTipqJVWHTjtaJV91Xj4S9lOu3vxvM0Z1FP9sg&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8MkhenGAQaI8Kso6btqmifTgmrXJqPkvm0m4i_pfe0JA&oe=62E47F74',
        },
        {
            title: 'MD Shakil',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/258745193_10227991899768779_535979156332448838_n.jpg?stp=c0.0.74.74a_cp0_dst-jpg_p74x74&_nc_cat=104&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeErczBGNMrDmfAxPwEKZE6cKkrH4LZoiT4qSsfgtmiJPm-JxHBywFaQaOYI6sOOhI3Vmjfq7Z6IWQob1GCbm5nV&_nc_ohc=DQ8I9V8JNnUAX8LsR4g&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT8AU-OlT71r1_ZTzdv8sc9WBgjfqUmOO8APwgTBRRE7YQ&oe=62E48D5C',
        },
        {
            title: 'Rony Chy',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/222597674_6501113793248078_1695809398797757874_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEUXeWDQkVf83qbcNIBJ3B1GPQdjB6Gxx0Y9B2MHobHHUFdY7MI39Dq9_JXfyj97Z9yJSOGC7kTziLWuszKu0ps&_nc_ohc=6d5xaIj41lUAX-Af2hG&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-o8MZ_EdUn0dUGdiKHTwZUe3vyQnGwfXi24GuBAXQ-ew&oe=62E5BA79'
        },
        {
            title: 'Noman khan',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/294469874_778146093200531_3289317010184032573_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHcehR0Bovg2oqyH_LI44k1CfSzETtBhPwJ9LMRO0GE_Icxf8__KHCAas8Cf0Fzd9Vweb7zd1RxT8HUskMGpNG8&_nc_ohc=MLreTStjkWEAX9O4_sf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-CSUa6PSMKSyWNKmVu5BOzrfjZnmVfOjR_oyVUvyzXZQ&oe=62E4F0FF',
        },
        {
            title: 'Raju Ahmed',
            image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/274063952_4481269288667204_8651666571521923443_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFWM2CZeJNOi9l-MhHz0f_SLKcASFqnmCQspwBIWqeYJAb8lFDmw0YQ6dp9edRgN09YD3Y3gn3sKZHIKDZPc2PJ&_nc_ohc=N0ytTuGZduIAX9G-EIF&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-Aedk4ke9apFz1Krrry6zn7yfI0CcooRHCZYIG5wZJEQ&oe=62E5CD15',
        },
    ];


const MainSectionRight = () => {
    return (
        <div className='main-section-left-right right-section-wrapper'>
            <FriendRequest />
            <div className='left-right-first right-section-online'>

                <div className='contacts'>
                    <p>Contacts</p>

                    <div className="d-flex">
                        <div className='contact-icon'>
                            <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh gl3lb2sf hhz5lgdu">
                                <g fillRule="evenodd" transform="translate(-448 -544)">
                                    <path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path>
                                </g>
                            </svg>
                        </div>

                        <div className='contact-icon'>
                            <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh gl3lb2sf hhz5lgdu"><g fillRule="evenodd" transform="translate(-448 -544)">
                                <g fillRule="nonzero">
                                    <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                                    <path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path>
                                    <path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path>
                                    <path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path>
                                </g>
                            </g>
                            </svg>
                        </div>

                        <div className="contact-icon">
                            <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" className="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3">
                                <g fillRule="evenodd" transform="translate(-446 -350)">
                                    <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {
                    onlineData.map((el, i) => <div key={i} className="left-right-item-user">
                        <img className="left-right-user" src={el.image} alt={el.title} />
                        <p>
                            {el.title}
                        </p>
                    </div>)
                }

            </div>

        </div>
    );
};

export default MainSectionRight;