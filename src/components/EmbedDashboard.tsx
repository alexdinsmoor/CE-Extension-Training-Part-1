import React, { useCallback } from 'react';
import styled from  "styled-components";
import { LookerEmbedSDK } from '@looker/embed-sdk';

const EmbedDashboard = (props) => {

    const DashboardDiv = useCallback((el:any ) => {
        LookerEmbedSDK.init('https://adinmsoor-dev.looker.lookerce.dev')
        console.log(props)
        LookerEmbedSDK.createDashboardWithId(props.id)
        .appendTo(el)
        .withNext()
        .build()
        .connect()
        .catch((error: any) => {
         console.error('An unexpected error occurred', error)
       })
    
    
    }, [])
    

    return(
        <>
        <Dashboard ref={DashboardDiv}></Dashboard>
        </>
    )
}

const Dashboard = styled.div`
width: 100%;
height: 95vh;
& > iframe {
width: 100%;
height: 100%;
}
`


export default EmbedDashboard
