import React from 'react'
import Header from '../../components/Header'
import TopInfo from './components/TopInfo'
import FilterQuota from './components/FilterQouta'
import ListQuotas from './components/ListQuotas'

const page = () => {
  return (
    <div className='flex flex-col'>
        <Header title="Cuotas: loan_id" url="/pageloans" /> 
        <TopInfo /> 
        <FilterQuota />
        <ListQuotas />
    </div>
  )
}

export default page