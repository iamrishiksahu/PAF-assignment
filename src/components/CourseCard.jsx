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
      alignItems: 'flex-start',
      padding: '1rem',
      gap: '0.5rem',
      cursor: 'pointer',
      borderBottom: '1px solid var(--text-4)',
      ":hover": {
        borderRadius: '0.5rem',
        background: 'var(--card-hover-bg)',
        boxShadow: '0 0 2px rgba(0,0,0,0.2)',
        border: 'none',
      }
    }} >

      <Box sx={{
        backgroundColor: 'var(--color-bg-3)',
        color: 'white',
        borderRadius: '0.25rem',
        padding: '0.125rem 0.5rem',
        position: 'relative',
        fontSize: '0.75rem',
        mb: '0.5rem',
      }}>
        भाग {idx + 1}
      </Box>
      <Typography sx={{fontSize: '0.875rem'}} fontWeight={600}>{data.title}</Typography>
      <Typography sx={{fontSize: '0.875rem'}} >{data.subtitle}</Typography>
      <Typography sx={{fontSize: '0.875rem'}}>{durationStr()}</Typography>
      <Typography sx={{fontSize: '0.875rem'}}>Contribution: ₹{data.amount} <s>₹{data.originalAmount}</s></Typography>
      <Typography sx={{
        fontSize: '0.75rem',
        backgroundColor: 'rgb(248 250 252)'
      }}>{data.language.slice(0, 1).toUpperCase() + data.language.slice(1)}</Typography>

      <FlexBox sx={{
        justifyContent: 'flex-start',
      }}>
        <Typography sx={{color: 'var(--color-secondary)', fontSize: '0.75rem',
          ":hover": {
            color: 'var(--color-primary)'
          }
         }}>ADD TO CART</Typography>
        <Typography sx={{color: 'var(--color-bg-3)', fontSize: '0.75rem'}}>|</Typography>
        <Typography sx={{color: 'var(--color-secondary)' , fontSize: '0.75rem',
          ":hover": {
            color: 'var(--color-primary)'
          }
        }}>ENROLL NOW</Typography>
      </FlexBox>

    </FlexBox>
  )
}

export default CourseCard