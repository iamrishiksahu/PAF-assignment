import React, { useState, useContext } from 'react'
import { FlexBox } from './reusables/AllContainers'
import { Box, Typography } from '@mui/material'
import { ArrowDropDown, MenuOutlined, PhoneOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/langContext';

const Header = () => {

    const { language, setLanguage, langStr } = useContext(LanguageContext)

    const switchLanguage = () => {
        if (language === 'HINDI') {
            setLanguage('ENGLISH')
        } else {
            setLanguage('HINDI')
        }
    }

    const navMenuList = [
        { title: langStr.nav_menu.menu_1, link: '/' },
        {
            title: 'Live Sessions',
            link: '',
            subMenu: [
                {
                    title: 'Gita Samagam',
                    link: 'https://acharyaprashant.org/en/gita'
                },
                {
                    title: 'Vedanta: Basics to Classics',
                    link: 'https://acharyaprashant.org/en/vedanta-basics-to-classics'
                }]
        },
        {
            title: 'Video Series',
            link: 'https://acharyaprashant.org/en/video-modules',
        },
        {
            title: 'AP Books',
            link: 'https://acharyaprashant.org/en/books',
        },
        {
            title: 'AP Articles',
            link: 'https://acharyaprashant.org/en/articles',
        },
        {
            title: 'Invite',
            link: '',
            subMenu: [
                {
                    title: 'For a talk',
                    link: 'https://acharyaprashant.org/en/invite?tIn=0'
                },
                {
                    title: 'For an Interview',
                    link: 'https://acharyaprashant.org/en/invite?tIn=1'
                }]
        },
        {
            title: 'Donate',
            link: 'https://acharyaprashant.org/en/contribute'
        },


    ]

    const navigate = useNavigate()

    const [showSubMenu, setShowSubMenu] = useState(false)

    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <FlexBox sx={{
                height: '3rem',
                justifyContent: 'space-between',
                backgroundColor: 'var(--color-primary)',
                paddingX: '1rem',
            }}>

                <FlexBox sx={{ width: 'fit-content', gap: '2rem' }}>
                    <img
                        style={{
                            height: '2rem',
                            width: '2rem',
                            cursor: 'pointer'
                        }}
                        src="https://acharyaprashant.org/images/ic_favicon.png"
                        alt="Acharya Prashant" />
                    <FlexBox gap={'2rem'} >
                        {navMenuList.map((item, idx) => (
                            <FlexBox
                                onClick={() => {
                                    item?.subMenu ? setShowSubMenu(true) : navigate(item.link)
                                }}
                                sx={{
                                    width: 'fit-content',
                                    color: 'white',
                                    height: '100%',
                                    gap: 0,
                                    cursor: 'pointer'
                                }} key={idx}>

                                <Typography sx={{ fontSize: '0.875rem' }}>{item.title}</Typography>
                                {item?.subMenu ? <ArrowDropDown /> : <></>}

                                {item?.subMenu && showSubMenu && <SubMenu />}
                            </FlexBox>
                        ))}
                    </FlexBox>
                </FlexBox>

                <FlexBox sx={{ width: 'fit-content', color: 'white', gap: '0.75rem' }}>

                    <FlexBox gap={0} sx={{ cursor: 'pointer' }}
                    onClick={switchLanguage}
                    >

                        <Box sx={{
                            color: 'white',
                            fontWeight: '600',
                            border: '2px solid white',
                            borderRadius: '0.25rem',
                            fontSize: '0.8rem',
                            paddingX: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {language === 'HINDI' ? 'HI' : 'EN'}
                        </Box>
                        <ArrowDropDown />
                    </FlexBox>


                    <PhoneOutlined sx={{ cursor: 'pointer' }} />

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}>
                        <MenuOutlined />
                        <Typography fontSize={'0.75rem'} ml={'0.125rem'}>Menu</Typography>
                    </Box>


                </FlexBox>

            </FlexBox>

            <FlexBox sx={{
                backgroundColor: 'var(--color-bg-2)',
                color: 'white',
                paddingY: '1rem'
            }}>
                <Box sx={{
                    backgroundColor: 'rgb(220 38 38)',
                    padding: '0.45rem',
                    borderRadius: '100%',
                    border: '1px solid white',
                    marginRight: '-0.5rem'
                }}>

                </Box>
                <Typography sx={{ fontSize: '1.25rem' }}>{langStr.header_notice.text}</Typography>
                <Typography sx={{
                    border: '1px solid white',
                    borderRadius: '0.25rem',
                    padding: '0.125rem 0.5rem',
                    fontSize: '0.875rem',

                }}>{langStr.header_notice.button_text}</Typography>
            </FlexBox>
        </Box>
    )
}

export default Header

const SubMenu = () => {
    return (
        <>
            <p>Menu</p>
        </>
    )
}