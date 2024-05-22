import React from 'react'
import { FlexBox } from './reusables/AllContainers'
import { Box, Divider, Typography } from '@mui/material'

const Footer = () => {

    const menus = [
        {
            title: 'LIVE EVENTS',
            sub_menus: [
                {
                    title: 'Gita Samagam',
                    link: ''
                },
                {
                    title: 'Vedanta: Basics to Classics',
                    link: ''
                },


            ]
        },
        {
            title: 'WISDOM CONTENT',
            sub_menus: [
                {
                    title: 'Video Series',
                    link: ''
                },
                {
                    title: 'AP Books',
                    link: ''
                }, {
                    title: 'AP Article',
                    link: ''
                },
                {
                    title: 'AP Circle',
                    link: ''
                },


            ]
        },
        {
            title: 'MORE',
            sub_menus: [
                {
                    title: 'About Acharya Prashant',
                    link: ''
                },
                {
                    title: 'Invite Him',
                    link: ''
                }, {
                    title: 'Interview Him',
                    link: ''
                },
                {
                    title: 'Ghar Ghar Upanishad',
                    link: ''
                }, {
                    title: 'Media and Public Interaction',
                    link: ''
                },
            ]
        },
    ]
    return (
        <FlexBox column sx={{
            width: 'calc(100% + 4rem)',
            position: 'relative',
            padding: '2rem 0rem 3rem 1rem',
            marginLeft: '-2rem',
            backgroundColor: 'var(--color-bg-2)',
        }}>
            <Box sx={{
                display: 'grid',

                gap: '1rem',
                gridTemplateColumns: { md: 'repeat(6,1fr)', sm: 'repeat(3,1fr)', xs: '1fr' },
            }}>

                {menus.map((item, idx) => (
                    <FooterSection key={idx}>
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>{item.title}</Typography>
                        {item.sub_menus.map((sub, i) => (
                            <a href={sub.link} target='_blank' key={i} style={{
                                color: 'var(--text-4)'
                            }}>
                                <Typography sx={{
                                    ":hover": {
                                        color: 'var(--color-primary)'
                                    }
                                }}>{sub.title}</Typography>
                            </a>
                        ))}
                    </FooterSection>
                ))}

            </Box>

            <Divider sx={{width: '100px'}} />
            <Typography>asdf</Typography>
        </FlexBox>
    )
}

export default Footer

const FooterSection = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.875rem',
        }}>
            {children}
        </Box>
    )
}