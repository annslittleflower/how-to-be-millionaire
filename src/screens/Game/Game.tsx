import styles from './game.module.css';
import DiamondItem from '@/components/DiamondItem';
import KebabLine from '@/components/KebabLine';

const GameScreen = () => {
  return (
    <div className={styles.game}>
      <div className={styles.questionBoard}>
        <p className={styles.questionTitle}>
          How old your elder brother was 10 years before you was born, mate?
        </p>
        <div className={styles.answers}>
          <KebabLine size={1}>
            <DiamondItem
              text='what'
              prefix='a'
            />
          </KebabLine>

          <KebabLine size={1}>
            <DiamondItem
              text='what'
              prefix='b'
            />
          </KebabLine>

          <KebabLine size={1}>
            <DiamondItem
              text='what'
              prefix='c'
            />
          </KebabLine>

          <KebabLine size={1}>
            <DiamondItem
              text='what'
              prefix='d'
            />
          </KebabLine>
        </div>
      </div>
      <div className={styles.levelMenu}>
        <KebabLine size={7}>
          <DiamondItem
            text='what'
            size='small'
          />
        </KebabLine>
        <KebabLine
          size={7}
          isActive
        >
          <DiamondItem
            text='what'
            size='small'
            isActive
          />
        </KebabLine>
        <KebabLine size={7}>
          <DiamondItem
            text='what'
            size='small'
            isDisabled
          />
        </KebabLine>
      </div>
    </div>
  );
};

export default GameScreen;
