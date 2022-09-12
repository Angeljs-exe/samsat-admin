import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import home from "./home.scss"
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
