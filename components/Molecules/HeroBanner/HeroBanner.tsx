import { Button } from "@heroui/button";

import styles from "./HeroBanner.module.scss";

interface IActionButtonProps {
  text: string;
  onClick: () => void;
}

interface IHeroBannerProps {
  heroImage: string;
  name?: string;
  title?: string;
  actionButton?: IActionButtonProps;
}

function HeroBanner(props: IHeroBannerProps) {
  const { heroImage, name, title, actionButton = null } = props;

  function handleActionButtonClick() {
    if (actionButton) {
      actionButton.onClick();
    }
  }

  return (
    <div
      className={styles.heroBanner}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {name && <h1 className={styles.name}>{name}</h1>}
          {title && <p className={styles.title}>{title}</p>}
        </div>
        {actionButton && (
          <div className={styles.actionButtonContainer}>
            <Button fullWidth variant="ghost" onPress={handleActionButtonClick}>
              <span className="text-white uppercase">{actionButton.text}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroBanner;
