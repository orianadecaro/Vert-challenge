import React from 'react';
import { Layout } from '../../../components/Layout/Layout.components';
import UserMonthlyStats from '../components/UserMonthlyStats';

const MonthlyStats = () => {
  return (
    <Layout>
        <h1>Monthly Stats</h1>
        <UserMonthlyStats/> 
      </Layout>
  )
}

export default MonthlyStats;