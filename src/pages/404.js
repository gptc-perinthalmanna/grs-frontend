import { IconArrowLeft } from "@tabler/icons"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div class="empty">
      <div class="empty-header">404</div>
      <p class="empty-title">Oops… You just found an error page</p>
      <p class="empty-subtitle text-muted">
        Try adjusting your search or filter to find what you're looking for.
      </p>
      <div class="empty-action">
        <a href="/" class="btn btn-primary">
          <IconArrowLeft />
          Take me home
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
