import React from 'react';
import styles from './Header.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}
