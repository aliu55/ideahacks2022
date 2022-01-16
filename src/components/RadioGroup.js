import React from 'react'
import { Grid, useRadioGroup } from '@chakra-ui/react';
import PropTypes from 'prop-types'
import RadioCard from './RadioCard';

/* 2. Use the `useRadioGroup` hook to control a group of custom radios. */
const RadioGroup = ({options, handleChange}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    onChange: handleChange,
  })

  const group = getRootProps()

  return (
    <Grid {...group} gridTemplateColumns="repeat(auto-fill, minmax(200px, 2fr))" gridTemplateRows="1fr" rowGap={5}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </Grid>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
}

export default RadioGroup;

