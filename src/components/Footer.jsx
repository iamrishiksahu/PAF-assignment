import React from 'react'
import { FlexBox } from './reusables/AllContainers'
import { Box, Button, Divider, Typography } from '@mui/material'
import { ArrowCircleDown } from '@mui/icons-material'

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
            alignItems: {xs: 'flex-start', sm: 'center', md: 'center'},
            padding: '3rem 0rem 3rem 1rem',
            marginLeft: '-2rem',
            backgroundColor: 'var(--color-bg-4)',
            overflow: 'hidden'
        }}>
            <Box sx={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: { md: 'repeat(6,1fr)', sm: 'repeat(3,1fr)', xs: '1fr' },
            }}>

                {menus.map((item, idx) => (
                    <FooterSection key={idx}>
                        <Typography sx={{ color: 'white', fontWeight: 600 }}>{item.title}</Typography>
                        {item.sub_menus.map((sub, i) => (
                            <a href={sub.link} target='_blank' key={i} style={{
                                color: 'var(--text-4)'
                            }}>
                                <FooterTextLink>{sub.title}</FooterTextLink>
                            </a>
                        ))}
                    </FooterSection>
                ))}

                <FooterSection>
                    <Typography sx={{ color: 'white', fontWeight: 600 }}>
                        SOCIAL MEDIA
                    </Typography>

                    <Typography sx={{ color: 'var(--text-4)' }}>For English</Typography>

                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>
                        <a href='https://www.youtube.com/c/AcharyaPrashant'>
                            <img src='/yt-grey.svg' alt='email' />
                        </a>
                        <a href='https://twitter.com/Prashant_Advait'>
                            <img src='/twitter-grey.svg' alt='email' />
                        </a>
                        <a href='https://www.facebook.com/AdvaitAcharyaPrashant'>
                            <img src='/fb-grey.svg' alt='email' />
                        </a>
                        <a href='https://www.instagram.com/acharya_prashant_paf/'>
                            <img src='/insta-grey.svg' alt='email' />
                        </a>
                        <a href='https://en.wikipedia.org/wiki/Acharya_Prashant'>
                            <img src='/wordpress-grey.svg' alt='email' />
                        </a>

                    </FlexBox>


                    <Typography sx={{ color: 'var(--text-4)' }}>For Hindi</Typography>

                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>
                        <a href='https://www.youtube.com/c/ShriPrashant'>
                            <img src='/yt-grey.svg' alt='email' />
                        </a>
                        <a href='https://twitter.com/Advait_Prashant'>
                            <img src='/twitter-grey.svg' alt='email' />
                        </a>
                        <a href='https://en.wikipedia.org/wiki/Acharya_Prashant'>
                            <img src='/thread-grey.svg' alt='email' />
                        </a>
                        <a href='https://www.facebook.com/Acharya.Prashant.Advait'>
                            <img src='/fb-grey.svg' alt='email' />
                        </a>
                        <a href='https://www.instagram.com/acharya_prashant_ap/'>
                            <img src='/insta-grey.svg' alt='email' />
                        </a>

                    </FlexBox>



                </FooterSection>
                <FooterSection>
                    <Typography sx={{ color: 'white', fontWeight: 600 }}>
                        DOWNLOAD APP
                    </Typography>

                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>

                        <img
                            style={{
                                height: '1.5rem',
                                width: '1.5rem',
                            }}
                            src="https://acharyaprashant.org/images/ic_favicon.png"
                            alt="Acharya Prashant" />
                        <Typography sx={{ color: 'white' }}>Acharya Prashant</Typography>
                    </FlexBox>


                    <a target="_blank" href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks">
                        <img style={{
                            borderRadius: '0.25rem',
                            width: '116px',
                            border: '1.4px solid rgb(203 213 225)'
                        }} src="https://acharyaprashant.org/images/ic_googleplay.png" alt="Get it on Google Play" /></a>

                    <a target="_blank" href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"><img
                        style={{
                            borderRadius: '0.25rem',
                            width: '116px',
                            border: '1.4px solid rgb(203 213 225)'
                        }}
                        src="https://acharyaprashant.org/images/ic_appstore.png" alt="Download on the App Store" /></a>
                </FooterSection>
                <FooterSection>
                    <Typography sx={{ color: 'white', fontWeight: 600 }}>
                        CONTACT US
                    </Typography>


                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>
                        <img src='/email.svg' alt='email' />
                        <a href="mailto:support@advait.org.in">
                            <FooterTextLink>support@advait.org.in</FooterTextLink>
                        </a>
                    </FlexBox>
                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>
                        <img src='/whatsapp-grey.svg' alt='email' />
                        <a href="https://wa.me/919650585100">
                            <FooterTextLink>+91 9650585100</FooterTextLink>
                        </a>
                    </FlexBox>
                    <FlexBox gap={'0.5rem'} sx={{ width: 'max-content' }}>
                        <img src='/phone-grey.svg' alt='email' />
                        <a href="tel:+919650585100">
                            <FooterTextLink>+91 9650585100</FooterTextLink>
                        </a>
                    </FlexBox>
                </FooterSection>


            </Box>

            <FlexBox column sx={{
                alignItems: {md: 'center', sm: 'center',xs: 'flex-start'}
            }}>

                <Box sx={{
                    width: { md: '50%', sm: '50%', xs: '100%' },
                    marginTop: '2rem',
                    borderBottom: '1px solid var(--text-3)'
                }}></Box>

                <FlexBox sx={{
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    width: '60%',
                    flexDirection: {md: 'row', sm: 'row', xs: 'column' },
                    marginBottom: '2.5rem',
                    marginTop: '1rem',
                    color: 'var(--text-4)'
                }}>
                    <Typography sx={{ color: 'var(--text-4)' }} fontSize={'0.875rem'}>Copyright © 2022 PrashantAdvait Foundation</Typography>
                    <FlexBox sx={{ width: { md: 'max-content', xs: '100%' }, justifyContent: { xs: 'flex-start' } }}>
                        <FooterTextLink small>Terms & Conditions</FooterTextLink>|
                        <FooterTextLink small>Privacy Policy</FooterTextLink>|
                        <FooterTextLink small>Undertaking</FooterTextLink>
                    </FlexBox>
                </FlexBox>
            </FlexBox>

            {/* STICKY CTA Section */}
            <FlexBox sx={{
                height: '4rem',
                backgroundColor: 'var(--color-accent)',
                justifyContent: 'space-between',
                paddingX: '2rem',
                position: 'fixed',
                bottom:0,
                left: 0,
                display: {md: 'none', sm: 'flex', xs: 'flex'}
            }}>

                <Typography>Read 130+ eBooks in App</Typography>
                <Button variant='contained' sx={{
                    borderRadius: '5rem',
                    backgroundColor: 'var(--color-secondary)',
                    textTransform: 'none',
                    fontSize: '.875rem'
                }}><ArrowCircleDown sx={{fontSize: '1rem'}}/>&nbsp; Download App</Button>

            </FlexBox>

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

const FooterTextLink = ({ children, small }) => {
    return (
        <Typography sx={{
            width: 'max-content',
            cursor: 'pointer',
            color: 'var(--text-4)',
            fontSize: small ? '0.875rem' : '1rem',
            ":hover": {
                color: 'var(--color-primary)'
            }
        }}>
            {children}

        </Typography>
    )
}