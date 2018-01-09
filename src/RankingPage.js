import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Section from '../../layout/Section/Section';
import RankingHeader from './RankingHeader.container';
import RankingList from '../../common/Ranking/Ranking';
import Empty from '../../slices/Empty/Empty';
import Modal from '../../layout/Modal/Modal';
import UserInviteForm from '../../slices/UserInviteForm/UserInviteForm';

import StyledRankingWrapper from './Ranking.styles';


class Ranking extends PureComponent {
  static propTypes = {
    profiles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
    isAdmin: PropTypes.bool,
    rankingPageLoads: PropTypes.func,
  }

  static defaultProps = {
    profiles: [],
    isAdmin: false,
    rankingPageLoads: () => {},
  }

  state = {
    invitingUsers: false,
  };

  componentWillMount() {
    this.props.rankingPageLoads();
  }

  handleInvite = () => {
    this.setState({
      invitingUsers: true,
    });
  }

  resetInvite = () => {
    this.setState({
      invitingUsers: false,
    });
  }

  handleSubmitInvites = () => {
    this.setState({
      invitingUsers: false,
    });
  }

  render() {
    const Heading = <RankingHeader />;
    const { invitingUsers } = this.state;
    const { profiles, isAdmin } = this.props;
    return (
      <div>
        {profiles.length > 0 &&
          <Section heading={Heading}>
            <StyledRankingWrapper>
              <RankingList users={profiles} />
            </StyledRankingWrapper>
          </Section>
        }
        {!profiles.length && isAdmin &&
          <Empty
            title="Vous n’avez pas encore de contributeur"
            subtitle="Créez votre équipe dès maintenant"
            buttonText="Invitez des utilisateurs"
            buttonAction={this.handleInvite}
            buttonIcon="addUser"
          />
        }
        <Modal
          hasBottomDecoration
          hasCloseButton
          hasLogo
          theme="lightest"
          show={invitingUsers}
          onHide={this.resetInvite}
          preventBackdropClose
        >
          <UserInviteForm onSubmit={this.handleSubmitInvites} />
        </Modal>
      </div>
    );
  }
}

export default Ranking;
