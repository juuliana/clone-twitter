import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon,ProfileInfo,
         BottomMenu, HomeIcon, SearchIcon, BellIcon,
         EmailIcon}
from './styles';

const Main: React.FC = () => {
  return(
      <Container>
          <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Juu</strong>
                <span>1.200 Tweets</span>
            </ProfileInfo>

            <ProfilePage/>

            <BottomMenu>
                <HomeIcon/>
                <SearchIcon/>
                <BellIcon/>
                <EmailIcon/>
            </BottomMenu>
          </Header>
      </Container>
  );
}

export default Main;