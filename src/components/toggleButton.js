import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Slider = styled.span`
  position: relative;
  display: flex;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.checked ? props.darkBackground : props.lightBackground)};
  border-radius: 90px;
  margin-left: 10px;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 5%;
    left: 3%;
    width: 30%;
    height: 90%;
    background-color: white;
    border-radius: 50%;
    transition: 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateX(${props => (props.checked ? '149%' : '0')});
  }
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;


  &:checked + ${Slider}::before {
    transform: translateX(${props => (props.checked ? '210%' : '0')});
  }
`;

const FaIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.2s;
  opacity: ${props => (props.visible ? '1' : '0')};
`;

const ToggleSwitcher = ({ checked, onChange, width, height, lightBackground, darkBackground }) => {
  return (
    <SwitchContainer>
      <Input checked={checked} onChange={onChange} />
      <Slider width={width} height={height} checked={checked} lightBackground={lightBackground} darkBackground={darkBackground}>
        <FaIcon
          icon={checked ? faMoon : faSun}
          visible={checked}
          style={{ color: '#F5F3CE', left: '5px', height: '90%' }}
        />
        <FaIcon
          icon={checked ? faMoon : faSun}
          visible={!checked}
          style={{ color: '#f39c12', right: '5px', height: '90%' }}
        />
      </Slider>
    </SwitchContainer>
  );
};

export default ToggleSwitcher;
