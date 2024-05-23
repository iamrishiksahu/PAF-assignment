import React from 'react'
import { FlexBox } from './reusables/AllContainers'
import { Button, TextField, Typography } from '@mui/material'
import { ArrowDownward, ArrowDropDown, Search } from '@mui/icons-material'

const ActionBar = () => {
    return (
        <FlexBox sx={{
            justifyContent: 'space-between',
            width: '100%',
            boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
            marginTop: '-1rem',
            zIndex: 5,
            height: '3rem',
            position: 'sticky',
            top: -1,
            backgroundColor: 'white',
            paddingX: { md: '2rem', sm: '1rem', xs: '1rem' }


        }}>
            <FlexBox sx={{ justifyContent: 'flex-start' }}>
                <img style={{
                    width: '5rem'
                }} src="https://acharyaprashant.org/images/ic_videoseries.png" alt="content home" />

                <FlexBox sx={{
                    marginLeft: '1rem',
                    border: '1px solid #ebebeb',
                    borderRadius: '0.25rem',
                    display: {sm: 'flex', xs: 'none'},
                    justifyContent: 'flex-start',
                    maxWidth: '36rem',
                    height: '2.375rem',
                    boxShadow: '0 0 1px rgba(0,0,0,0.2)'

                }}>

                    <FlexBox sx={{
                        width: 'auto',
                        borderRight: '1px solid #ebebeb',
                        height: '100%',
                        padding: '0 0.5rem',
                        gap: '0.25rem',
                        color: 'var(--text-2)',
                    }}>

                        <Typography fontSize={'0.75rem'}>All</Typography>
                        <ArrowDropDown sx={{ marginTop: '-0.25rem', fontSize: '1.125 rem' }} />
                    </FlexBox>

                    <input
                        style={{
                            outline: 'none',
                            border: 'none',
                            fontSize: '.875rem',
                            width: '100%'
                        }}
                        placeholder='Search for video series' />

                    <FlexBox sx={{
                        width: 'max-content',
                        height: '100%',
                        backgroundColor: 'var(--color-accent)',
                        padding: '0 0.25rem',
                        borderLeft: '1px solid #ebebeb'
                    }}>

                        <Search sx={{ color: 'var(--text-2)', mx: '0.125rem' }} />
                    </FlexBox>



                </FlexBox>
            </FlexBox>


            <Button variant='contained' sx={{
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
                boxShadow: 'none',
                padding: '0.125rem 0.125rem',
                textTransform: 'none'
            }}>
                Login
            </Button>
        </FlexBox>
    )
}

export default ActionBar