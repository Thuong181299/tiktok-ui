import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://www.datocms-assets.com/56778/1655607118-1647961882-rihanna.jpg?auto64=Zm9ybWF0LGNvbXByZXNz&cs=srgb"
                alt="Rihanna"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Rihanna Fenty</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>rihannafenty</span>
            </div>
        </div>
    );
}
