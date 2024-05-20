import React from 'react'
import Header from '../components/Header'
import { FlexBox } from '../components/reusables/AllContainers'

const VideoSeriesPage = () => {
    return (
        <>

            <FlexBox column sx={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '100vw',
            }}>
            <Header />

            </FlexBox>
        </>
    )
}

export default VideoSeriesPage