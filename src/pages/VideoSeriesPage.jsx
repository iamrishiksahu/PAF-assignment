import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FlexBox } from '../components/reusables/AllContainers'
import ActionBar from '../components/ActionBar'
import { Box, Typography } from '@mui/material'
import { LanguageContext } from '../context/langContext'
import { ArrowBack, ArrowLeft } from '@mui/icons-material'
import { axiosInstance } from '../api/axiosInstance'
import socialData from '../resources/socialLinks.json'
import CourseCard from '../components/CourseCard'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'

const VideoSeriesPage = () => {

    const { language, langStr } = useContext(LanguageContext)

    const [pageData, setPageData] = useState()

    const fetchPageData = async () => {
        try {
            const res = await axiosInstance.get('/courses/series/optuser/course-series-eeb9d3')
            setPageData(res.data)
        } catch (err) {
            console.error(err)
            alert('Something went wrong! Please try to refresh the page.')
        }
    }


    const fetchTags = async () => {
        try {
            const res = await axiosInstance.get(`/courses/faqs?language=${language.toLowerCase()}`)
            console.log(res.data)
        } catch (err) {
            console.error(err)
            alert('Something went wrong! Please try to refresh the page.')
        }
    }


    useEffect(() => {
        fetchPageData()
    }, [])

    return (
        <>
            <FlexBox column={true} className='test' sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                maxWidth: '100vw',
            }}>
                <Header />
                <ActionBar />

                {pageData ?
                    <FlexBox column sx={{
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        padding: '0rem 2rem 0rem 2rem'
                    }}>

                        {/* Bread Crumb */}
                        <Box >
                            <Typography sx={{ color: 'var(--text-2)', fontSize: '0.85rem' }}>
                                Home <span style={{ fontWeight: '600' }}> &gt; {langStr.home}</span>
                            </Typography>
                        </Box>

                        {/* Title */}
                        <FlexBox sx={{ justifyContent: 'flex-start', mt: '0.5rem' }}>
                            <ArrowBack sx={{ color: 'var(--color-secondary)', fontSize: '1.125rem' }} />
                            <Typography fontWeight={600}>{pageData.details.title}</Typography>
                        </FlexBox>


                        {/* Hero Section */}
                        <FlexBox sx={{
                            alignItems: 'flex-start',
                            flexDirection: { md: 'row', sm: 'row', xs: 'column' }
                        }}>
                            <FlexBox column sx={{
                                width: { md: '65%', sm: '65%', xs: '100%' },
                                alignItems: 'flex-start',
                            }}>
                                <img
                                    width={'100%'} height={'100%'}
                                    style={{ borderRadius: '.5rem', aspectRatio: '16/9' }}
                                    src={`${pageData.details.thumbnail.domain}/${pageData.details.thumbnail.basePath}/10/image.jpg`}
                                    alt={pageData.details.thumbnail.id} />

                                <FlexBox column sx={{
                                    alignItems: 'flex-start',
                                    display: {md: 'flex', sm: 'none', xs: 'none'}
                                }}>

                                    <Typography>Share this series:</Typography>
                                    <FlexBox sx={{
                                        justifyContent: 'flex-start',
                                        gap: '3rem'
                                    }} >
                                        {socialData.map((item) => (
                                            <a href={item.link} target='_blank' key={item.name}>
                                                <img width={'24px'} height={'24px'} src={item.iconUrl} alt={item.name} />
                                            </a>
                                        ))}
                                    </FlexBox>
                                </FlexBox>


                            </FlexBox>
                            <FlexBox column sx={{
                                height: '100%',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                color: 'var(--text-2)',
                            }}>

                                <Typography sx={{
                                    color: 'var(--text-1)',
                                    fontWeight: 600,
                                }}>{pageData.details.subtitle}</Typography>
                                <Typography sx={{
                                    fontSize: '0.875rem',
                                    lineHeight: '2'
                                }}>{pageData.details.description}</Typography>
                            </FlexBox>
                        </FlexBox>

                        {/* VIDEO SERIES */}

                        <FlexBox column>
                            <Box sx={{
                                width: '100%',
                                borderBottom: '1px solid var(--border-bottom-color)',
                                padding: '.75rem 0'
                            }}>
                                <Typography fontSize={'1.25rem'} >Video Series ({pageData.courses.length})</Typography>
                            </Box>

                            <Box sx={{
                                display: 'grid',
                                width: '100%',
                                gap: '1rem',
                                gridTemplateColumns: { lg: 'repeat(4,1fr)', md: 'repeat(3,1fr)', sm: 'repeat(2,1fr)', xs: '1fr' },
                            }}>
                                {pageData.courses.map((item, idx) => (
                                    <CourseCard data={item} idx={idx} key={idx} />
                                ))}
                            </Box>

                        </FlexBox>

                        {/* FAQ Section */}

                        <FAQs />

                        {/* FOOTER */}
                        <Footer />
                    </FlexBox>
                    : <></>}
            </FlexBox >
        </>
    )
}

export default VideoSeriesPage