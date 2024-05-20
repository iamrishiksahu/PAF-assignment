import React from 'react'
import { FlexBox } from './reusables/AllContainers'
import { List, ListItem, Typography } from '@mui/material'

const Header = () => {

    const navMenuList = [
        { title: 'Home', link: '/' },
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
            link: 'https://acharyaprashant.org/en/video-modules', subMenu: [{ title: '' }]
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
    return (
        <FlexBox sx={{
            height: '3rem',
            justifyContent: 'flex-start',
            backgroundColor: 'var(--color-primary)'
        }}>

            <FlexBox sx={{ width: 'fit-content' }}>
                <img
                    style={{
                        height: '2rem',
                        width: '2rem',
                        marginLeft: '1rem',
                        cursor: 'pointer'
                    }}
                    src="https://acharyaprashant.org/images/ic_favicon.png"
                    alt="Acharya Prashant" />

                <List>
                    {navMenuList.map((item, idx) => {
                        <FlexBox sx={{ width: 'fit-content', color: 'white' }} key={idx}>

                            <Typography>{item.title}</Typography>
                        </FlexBox>
                    })}

                </List>
            </FlexBox>

            <FlexBox sx={{ width: 'fit-content' }}>

            </FlexBox>




        </FlexBox>
    )
}

export default Header