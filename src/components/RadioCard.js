import React from 'react';
import { Box, useRadio } from '@chakra-ui/react';

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='20px'
        boxShadow='md'
        marginRight='20px'
        transition='box-shadow 0.6s ease'
        letterSpacing='1px'
        textAlign='center'
        _checked={{
          bg: '#889675',
          color: 'white',
          borderColor: '#889675',
          boxShadow: 'dark-lg',
        }}
        _hover={{
          boxShadow: 'dark-lg',
        }}
        px={5}
        py={10}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioCard;