import styles from './game.module.css';
import DiamondItem from '@/components/DiamondItem';
import KebabLine from '@/components/KebabLine';
import Button from '@/components/ui/Button';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';

const GameScreen = () => {
  const renderMenu = () => {
    const windowSize = useWindowSize()
    const isDesktop = windowSize.width > 1000
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

    useEffect(() => {
      if (isDesktop) {
        setIsMobileMenuOpened(false)
        return
      }
    }, [isDesktop])

    const getMenuWidth = () => {
      if (!isDesktop && isMobileMenuOpened) {
        return '100%'
      }

      if (!isDesktop) {
        return 'auto'
      }
    }

    return (
      <div 
        className={styles.levelMenu}
        style={{
          position: isMobileMenuOpened ? 'fixed': 'initial',
          width: getMenuWidth(),
        }}
       >
        {isMobileMenuOpened && !isDesktop ? (
          <Button className={styles.levelMenuButton} onClick={() => setIsMobileMenuOpened(false)} >
            <img
              className={styles.handImage}
              src='/how-to-be-millionaire/close.svg'
              alt='close'
            />
        </Button>) : null}
        {!isMobileMenuOpened && !isDesktop ? (
        <Button className={styles.levelMenuButton} onClick={() => setIsMobileMenuOpened(true)} >
          <img
            className={styles.handImage}
            src='/how-to-be-millionaire/menu.svg'
            alt='menu'
          />
          </Button>
        ): null}
        {isMobileMenuOpened || isDesktop ? (
          <div className={styles.menuItems}>
            <KebabLine>
              <DiamondItem
                text='what'
                size='small'
              />
            </KebabLine>
            <KebabLine isActive>
              <DiamondItem
                text='what'
                size='small'
                isActive
              />
            </KebabLine>
            <KebabLine>
              <DiamondItem
                text='what'
                size='small'
                isDisabled
              />
            </KebabLine>
          </div>) 
        : null}
      </div>
    )
  }

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
      {renderMenu()}
    </div>
  );
};

export default GameScreen;
