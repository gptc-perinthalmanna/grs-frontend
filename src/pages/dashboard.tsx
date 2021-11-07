import { IconList, IconPlus } from "@tabler/icons"
import { Link } from "gatsby"
import React from "react"
import { Button, Container } from "react-bootstrap"
import { adminRoles } from "../api/posts"
import { getCurrentUser } from "../api/users"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import MyPosts from "../components/posts/MyPosts"
import Seo from "../components/seo"

function DashboardPage() {
  const isAdmin = adminRoles.includes(getCurrentUser()?.type)
  return (
    <Layout>
      <Seo title="My Grievances" />
      <Container fluid="xl" className="page-body">
        <PageHeader
          title="Grievance Cell"
          preTitle="Dashboard"
          SecondaryButton={
            isAdmin ? (
              <Link to="/posts/all-posts">
                <Button className="d-none d-sm-inline-block">
                  <IconList />
                  All Grievances
                </Button>
                <Button className="d-sm-none btn-icon">
                  <IconPlus />
                </Button>
              </Link>
            ) : null
          }
          PrimaryButton={
            <Link to="/posts/new-post">
              <Button className="d-none btn-secondary d-sm-inline-block">
                <IconPlus />
                New Grievance
              </Button>
              <Button className="d-sm-none btn-icon">
                <IconPlus />
              </Button>
            </Link>
          }
        />

        <MyPosts />
      </Container>
    </Layout>
  )
}

export default DashboardPage
