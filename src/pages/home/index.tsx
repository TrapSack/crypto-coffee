import classNames from 'classnames';
import { CreateCoffeeCup } from '@src/widgets/create-coffee-cup';
import styles from './styles.module.scss';

export function HomePage() {
  return (
    <div className={classNames('center', styles.main)}>
        <CreateCoffeeCup />
    </div>
  );
}
