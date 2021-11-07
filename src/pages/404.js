import { IconArrowLeft } from "@tabler/icons"
import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container-tight py-4">
        <div className="empty">
          <div className="empty-header">404</div>
          <p className="empty-title">Oops… You just found an error page</p>
          <p className="empty-subtitle text-muted">
            We are sorry but the page you are looking for was not found.
          </p>
          <div className="empty-action">
            <Link to="/" className="btn btn-primary">
             <IconArrowLeft /> Take me home
            </Link>
          </div>
        </div>
      </div>
  </Layout>
)

export default NotFoundPage
