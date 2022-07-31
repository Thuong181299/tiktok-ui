import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icons';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feefback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const cx = classNames.bind(styles);

export default function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // const handleMenuChange = () = {
    //    switch (a.type) {
    //     case 'language':
    //         //
    //         break;
    //     default
    //    }
    // };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feefback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck={false} placeholder="Search account and video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <Tippy delay={[0, 200]} content="Upload video" placement="bottom"> */}
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="data:image/jpeg;base64,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"
                                className={cx('user-avatar')}
                                alt="Adele"
                                fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKRVVxUBgEis26amRv7K3tFyhq4M8HbhnQg&usqp=CAU"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
