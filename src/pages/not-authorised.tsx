import { IconArrowLeft } from "@tabler/icons"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

function NotAuthorisedPage() {
  return (
    <Layout>
      <Seo title="401: Not Permission" />
      <div className="container py-4">
        <div className="empty">
          <div className="empty-header">Oops its a 401!</div>
          <p className="empty-title">Which means… You don't have permission to access this page!</p>
          <p className="empty-subtitle text-muted">
            We are sorry but the page you are looking is not accessible to you. This also occures when you are not logged in.  <br /> 
          </p>
          <div className="empty-action">
            <Link to="/" className="btn btn-primary">
              <IconArrowLeft /> Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotAuthorisedPage
