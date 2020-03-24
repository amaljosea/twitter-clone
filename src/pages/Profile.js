import React from 'react'
import { MainTabs } from '../components/MainTabs'
import Header from '../components/Header'

const Profile = () => {
    return (
        <>
            <Header displayLinks/>
            <div>
                Profile
                <MainTabs></MainTabs>
            </div>
        </>
    )
}

export default Profile
