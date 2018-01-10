import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { spacings, colors, neutrals } from '../theme';

const StyledToggleButton = styled.button`
  background-color: ${neutrals.lightest};
  width: auto;
  border: 0;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px ${neutrals.borderLighter};
  color: ${neutrals.buttonDefaultColor};
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.1;
  padding: 11px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 0 0 0 1px ${neutrals.borderLight};
  }
  margin-right: ${spacings.s}px;
  color: ${neutrals.dark};
  box-shadow: inset 0 0 0 1px ${neutrals.borderLighter};

  :hover,
  :focus {
    outline: none;
    box-shadow: inset 0 0 0 1px ${colors.primary};
  }

  ${props => props.isActive && css`
    background-color: ${colors.primary};
    color: ${neutrals.lightest};
    box-shadow: none;
  `};
`;


class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      this.props.onChange(nextState.value);
    }
  }

  onChange = value => () => this.setState({ value });

  render() {
    const { options } = this.props;
    const { value } = this.state;
    return (
      <div>
        {Object.keys(options).map(key => (
          <StyledToggleButton
            type="button"
            isActive={key === value}
            key={key}
            onClick={this.onChange(key)}
          >
            {options[key]}
          </StyledToggleButton>
        ))}
      </div>
    );
  }
}

Toggle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Toggle.defaultProps = {
  value: null,
  onChange: () => null,
};

export default Toggle;
