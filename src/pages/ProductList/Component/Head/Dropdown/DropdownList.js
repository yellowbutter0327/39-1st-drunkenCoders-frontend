import React from 'react';
import './DropdownList.scss';

const DropdownList = ({ visibility, children }) => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  React.useEffect(() => {
    if (visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400)
      );
    }
  }, [visibility]);

  return (
    <article
      className={`components-dropdown ${
        visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }`}
    >
      {visibilityAnimation && children}
    </article>
  );
};

export default DropdownList;
