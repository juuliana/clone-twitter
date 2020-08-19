import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return(
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Juu</h1>
                <h2>@juu_ribeiro1</h2>

                <p>
                    Você só vive uma vez, mas se você fizer isso direito, uma vez é suficiente
                </p>
                
                <ul>
                    <li>
                        <LocationIcon/>
                        Avaré-SP, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 19 de julho de 2001
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>205</strong>
                    </span>
                    <span>
                        <strong>212 </strong> seguidores
                    </span>
                </Followage>
          </ProfileData>

          <Feed/>
      </Container>
  );
}

export default ProfilePage;