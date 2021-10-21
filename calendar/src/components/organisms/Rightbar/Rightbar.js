import React, { useContext } from 'react';
import { Wrapper } from './Rightbar.styles';
import RightbarUp from 'components/molecules/RightbarUp/RightbarUp';
import RightbarMiddle from 'components/molecules/RightbarMiddle/RightbarMiddle';
import RightbarBottom from 'components/molecules/RightbarBottom/RightbarBottom';
import { CalendarContext } from 'providers/CalendarProvider';

const Rightbar = () => {
  const { openState } = useContext(CalendarContext);
  const [isOpenRightbar, setOpenRightbarState] = openState;

  const closeSidebar = () => {
    setOpenRightbarState(false);
  };
  return (
    <Wrapper isOpacity={isOpenRightbar} data-testid="rightbar">
      {isOpenRightbar ? (
        <>
          <RightbarUp closeSidebar={closeSidebar} />
          <RightbarMiddle />
          <RightbarBottom />
        </>
      ) : null}
    </Wrapper>
  );
};

export default Rightbar;
