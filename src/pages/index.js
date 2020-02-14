import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Feed from "../components/Feed"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <ToastContainer />
      <Feed />
    </Layout>
  )
}
