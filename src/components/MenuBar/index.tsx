import React from 'react';

import Button from '../Button';

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon
} from './styles';

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topside>
              <Logo/>

              <MenuButton>
                  <HomeIcon/>
                  <span>Página Inicial</span>
              </MenuButton>

              <MenuButton>
                  <BellIcon/>
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon/>
                  <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton>
                  <ProfileIcon className="active"/>
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Twittar</span>
              </Button>
          </Topside>
      </Container>
  );
}

export default MenuBar;