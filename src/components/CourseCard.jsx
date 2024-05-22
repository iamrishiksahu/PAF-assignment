import React from 'react'
import { FlexBox } from '../components/reusables/AllContainers'
import { Box, Button, Typography } from '@mui/material'
const CourseCard = ({ data, idx }) => {

  const durationStr = () => {
    const hh = Math.floor(data.courseHours)
    const mm = Math.round((data.courseHours - hh) * 60)
    const hhStr = hh > 1 ? `${hh} hours ` : hh < 1 ? '' : `${hh} hour `
    const mmStr = mm > 1 ? `${mm} minutes ` : mm < 1 ? '' : `${mm} minute `
    return hhStr + mmStr
  }
  return (
    <FlexBox column sx={{
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }} >

      <Box sx={{
        backgroundColor: 'var(--color-bg-3)',
        color: 'white',
        borderRadius: '0.25rem',
        padding: '0 0.25rem',
        position: 'relative',
        // "&::after": {
        //   content: '',
        //   position: 'absolute',
        // }
      }}>
        भाग {idx + 1}

      </Box>
      <Typography>{data.title}</Typography>
      <Typography>{data.subtitle}</Typography>
      <Typography>{durationStr()}</Typography>
      <Typography>Contribution: ₹{data.amount} <s>₹{data.originalAmount}</s></Typography>
      <Typography>{data.language.slice(0, 1).toUpperCase() + data.language.slice(1)}</Typography>

      <FlexBox>
        <Button>ADD TO CART</Button>
        <Button>ENROLL NOW</Button>
      </FlexBox>

    </FlexBox>
  )
}

export default CourseCard