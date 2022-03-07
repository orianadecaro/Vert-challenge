import React from 'react';
import { Layout } from '../../../components/Layout/Layout.components';
import { UserActivityList } from '../components/UserActivityList.components';

const Activities = () => {
  return (
    <Layout>
        <h1> Recent Activities </h1>
        <UserActivityList/>  
    </Layout>
  )
}
export default Activities;