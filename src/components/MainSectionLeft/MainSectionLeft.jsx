import React from 'react';
import './MainSectionLeft.css';
import { TbAlertTriangle } from 'react-icons/tb';

let leftData = [
    {
        title: 'Friends',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeG_jX42ckdgzysBhyK2UVbkqfpKmA4GtxSp-kqYDga3FLr4QsTO3JvSOZSJBv9B8M0S1Ng7D9RmnAmi7aOyqbL',
    },
    {
        title: 'Groups',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeH3pCnUOvDnvwgZTRyKyP4tZ3xAUM5_bWpnfEBQzn9tat9oeoP76DB3_ctWEr1gbVZTcYp7ztCR5hdTuZUN4lJe',
    },
    {
        title: 'Marketplace',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeHy8iEVOQD_2AMms9bY3C7K-vsl1K9A-9v6-yXUr0D72_5xIlF_Kn6VPaJY6lOt0hT_VZqsuWeEuGFJvh6hxrdJ',
    },
    {
        title: 'Watch',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeGc_ovfQcMHItKHyxpenmki2NRDTXGHJ53Y1ENNcYcnnSxqlYCYlEOwqaV58lUtPrHSMJHibyONMM60a4Mivj5R',
    },
    {
        title: 'Memories',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeGakA9xW4Brw_BA2h2f7jqIa4YXxTz5jX9rhhfFPPmNf7pUVx9eExN2IfhZBig5-JqScwEgyEet31F5zjh8tdsh',
    },
    {
        title: 'Saved',
        image: 'https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeE67pwTk9YdRq65oauo4DLk-5kYScafj0T7mRhJxp-PRPuDfeyMSelPqbj_rTYpNJQ6fA6l7XlWylYB1tdkrd0L  ',
    },
]
let shortcutData = [
    {
        title: '8 Ball Pool',
        image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeEslwIhbRx4K0CmRgSyXT29kGwkPrvJAp6QbCQ-u8kCnjIH7WDtpnjXT4aJ1nZEt6COCNGgAJcm0yI3K9Tdu8DW&_nc_ohc=wbwWGerqxCgAX_3S1xK&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-QfWfiAmW1Mc1pazc97KKdPeO6CQy-26k4ec-Juft-hw&oe=62E3EAEF',
    },
    {
        title: 'Executive - Fight for Survival',
        image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t31.18172-1/20448915_1408258519290057_7378179719973603565_o.jpg?stp=c20.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeGQA34f8VLgAq3Ik4nK4cWJHaO1mjddrFMdo7WaN12sUw2f4EpyZL02japlVKduEOHO5L1o9OcBrGZfxP637Jw4&_nc_ohc=3MZdTIa1Gu0AX_nfh0E&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT_bF80HGrW023rJGowl91VfMT5vOUHQNHkA17d1ZqM6BQ&oe=63054022',
    },
    {
        title: 'Soccer Stars',
        image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.2081-6/38857289_967432326791829_6476944985995345920_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeEqQmp7ANzPTldh-zSDRAuwOPPuwsG-LvQ48-7Cwb4u9BuISfTu2eRksUbcsRXmczGZCXS5OhU1lcCjJXKtYEsZ&_nc_ohc=an4xASbB6CkAX-apZZP&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-LN6vOqk7Ei-SSzyze3D08FxvF8z9ZFpcuXk0a9jLslg&oe=62E40CC0',
    },
    {
        title: 'জীবন সংগ্রামী নারী',
        image: 'https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/263816428_421482963016757_8101602786535586818_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeETPx7-KALEKT5hva6chcqlydYZqyBW3iLJ1hmrIFbeIoDqZATD_LojQ9X4xnNlZ4UCGl5poEBo7GjeDA3UXPdR&_nc_ohc=es609J0tjbUAX-nR2f9&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-RF0wnEOoX_W88I3bwAPhh0n6yO7cW5PIGG8Xu-2iTAA&oe=62E3C913',
    },

]

const MainSectionLeft = () => {
    return (
        <div className='main-section-left-right'>
            <div className='left-right-first'>
                <div className="left-right-item-user">
                    <img className="left-right-user" src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/262295709_5351580041524973_229989686152442541_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz5ABa-fKIuG-FuzCLvnMc5yX41LpJrjDnJfjUukmuMI4enOsSteOYtpbbRnCwFld_07k0fKCrUyAqcRKKDI5k&_nc_ohc=nOKUEXRfAZMAX8aidrf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT_j0zzDjnDWpoUiJMUR1wS9jpWawrZG42joiX1GzkypfQ&oe=62E4DAD1" alt="" />
                    <p>
                        Mohammad Yasin
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