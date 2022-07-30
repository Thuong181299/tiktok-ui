import Button from '~/components/Button';
import classname from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classname.bind(styles);

function MenuItem({ data, onClink }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={cx(classes)} to={data.to} leftIcon={data.icon} onClick={onClink}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
