import React from 'react';
import { Button, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const VerticalButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    justifyContent: 'center',
    height: '150px', // Set height to 150px
    width: '10px',   // Set width to 10px
    margin: '5px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '20px 0 0 20px', // Rounded corners on the left side
    '&:focus': {
      outline: 'none',
    },
  }));

const ButtonLabel = styled('span')(({ theme }) => ({
  transform: 'rotate(-90deg)',
  transformOrigin: 'left bottom',
  whiteSpace: 'nowrap',
  color: theme.palette.common.black, // Adjust color as needed
  position: 'absolute', // Position it absolutely
  bottom: '50%', // Center it vertically
  left: '120%', // Center it horizontally
  marginLeft: '-50%', // Adjust for the width of the label
  marginBottom: '-50%', // Adjust for the height of the label
}));

const RippleButton = ({ label, onClick }) => {
  const theme = useTheme();

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      // Trigger the ripple effect on Tab key press
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = theme.palette.primary.main;
      ripple.style.opacity = '0.5';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'scale(0)';
      ripple.style.transition = 'transform 0.6s, opacity 0.6s';

      const rect = event.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      event.currentTarget.appendChild(ripple);

      // Trigger the ripple animation
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)';
        ripple.style.opacity = '0';
      });

      // Remove the ripple element after animation
      ripple.addEventListener('transitionend', () => {
        ripple.remove();
      });
    }
  };

  return (
    <VerticalButton
      onClick={onClick}
      onKeyDown={handleKeyDown}
      variant="contained"
      color="primary"
    >
      <ButtonLabel>{label}</ButtonLabel>
    </VerticalButton>
  );
};

const ButtonRippleEffect = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RippleButton label="Button 1" onClick={handleClick} />
      <RippleButton label="Button 2" onClick={handleClick} />
      <RippleButton label="Button 3" onClick={handleClick} />
    </div>
  );
};

export default ButtonRippleEffect;