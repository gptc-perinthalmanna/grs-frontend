import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  IconPhone,
  IconAward,
  IconHome,
  IconAffiliate,
  IconDownload,
  IconBuildingFortress,
  IconBook,
  IconSchool,
  IconBuildingPavilon,
} from "@tabler/icons"

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { fetchToken } from "../api/posts"

type SubMenuType = {
  title: string
  link: string
}

type MenuType = {
  title: string
  link?: string | undefined
  dropdown: boolean
  icon: JSX.Element
  child?: SubMenuType[]
}

const DATA: MenuType[] = [
  {
    title: "Home",
    link: "/",
    dropdown: false,
    icon: <IconHome />,
  },
  {
    title: "The College",
    dropdown: true,
    icon: <IconSchool />,
    child: [
      {
        title: "Breif History",
        link: "/about/history",
      },
      {
        title: "Who's Who",
        link: "/about/whoswho",
      },
      {
        title: "Principal's Desk",
        link: "/about/principals-desk",
      },
      {
        title: "Placement Officer's Desk",
        link: "/about/placement",
      },
      { title: "Industrial Relationships", link: "/about/industiralrelations" },
      { title: "Press and Media", link: "/about/press" },
      { title: "Right To Information", link: "/about/rti" },
    ],
  },
  {
    title: "Departments",
    dropdown: true,
    icon: <IconAffiliate />,
    child: [
      {
        title: "Civil Engineering",
        link: "/departments/civil-engineering",
      },
      {
        title: "Mechanical Engineering",
        link: "/departments/Mechanical-engineering",
      },
      {
        title: "Electrical and Electronics Engineering",
        link: "/departments/electrical-and-electronics-engineering",
      },
      {
        title: "Electronics Engineering",
        link: "/departments/electronics-engineering",
      },
      { title: "General Department", link: "/general-department" },
      { title: "Office", link: "/departments/office-section" },
    ],
  },
  {
    title: "Academics",
    dropdown: true,
    icon: <IconBook />,
    child: [
      {
        title: "Courses Offerred",
        link: "/academics/courses",
      },
      {
        title: "Faculty and Staffs",
        link: "/academics/faculty",
      },
      {
        title: "Prospectus",
        link: "/academics/prospectus",
      },
      {
        title: "GIFD",
        link: "/academics/gifd",
      },
      {
        title: "CTDP",
        link: "/academics/ctdp",
      },
      {
        title: "Scholar Support Programme",
        link: "/academics/ssp",
      },
      {
        title: "Academic Calendar",
        link: "/academics/calendar",
      },
      {
        title: "Moodle LMS",
        link: "/academics/moodle",
      },
    ],
  },
  {
    title: "Facilities",
    dropdown: true,
    icon: <IconBuildingFortress />,
    child: [
      {
        title: "Advanced Library",
        link: "/facilities/to-be-done",
      },
      {
        title: "Health Centre",
        link: "/facilities/to-be-done",
      },
      {
        title: "Finishing School",
        link: "/facilities/to-be-done",
      },
      {
        title: "Language Lab",
        link: "/facilities/to-be-done",
      },
      {
        title: "Co-operative Society",
        link: "/facilities/to-be-done",
      },
      {
        title: "Internet Common Facility Centre",
        link: "/facilities/to-be-done",
      },
      {
        title: "Womens Hostel",
        link: "/facilities/to-be-done",
      },
      {
        title: "Staff Quaters",
        link: "/facilities/to-be-done",
      },
      {
        title: "Auditorium",
        link: "/facilities/to-be-done",
      },
      {
        title: "Electronics Block",
        link: "/facilities/to-be-done",
      },
      {
        title: "Civil Block",
        link: "/facilities/to-be-done",
      },
      {
        title: "Medical Facility",
        link: "/facilities/to-be-done",
      },
    ],
  },
  {
    title: "Campus",
    icon: <IconBuildingPavilon />,
    dropdown: true,
    child: [
      {
        title: "Students Union",
        link: "/campus/to-be-done",
      },
      {
        title: "National Service Scheme",
        link: "/campus/to-be-done",
      },
      {
        title: "Industrial Enterpernership Develepment Centre",
        link: "/campus/to-be-done",
      },
      {
        title: "Boomithrasena Club",
        link: "/campus/to-be-done",
      },
      {
        title: "Staff Club",
        link: "/campus/to-be-done",
      },
      {
        title: "Parents Teachers Association",
        link: "/campus/to-be-done",
      },
      {
        title: "Greivence Redressal Committee",
        link: "/campus/to-be-done",
      },
      {
        title: "Alumini",
        link: "/campus/to-be-done",
      },
      {
        title: "Placement Cell",
        link: "/campus/to-be-done",
      },
      {
        title: "Continuing Education Cell",
        link: "/campus/to-be-done",
      },
      {
        title: "Enterpenership Development Club",
        link: "/campus/to-be-done",
      },
      {
        title: "Anti Ragging Committee",
        link: "/campus/to-be-done",
      },
    ],
  },
  {
    title: "Archives",
    icon: <IconDownload />,
    dropdown: true,
    child: [
      {
        title: "Student Downloads",
        link: "/archives/student-downloads",
      },
      {
        title: "Important GOs and Circulars",
        link: "/archives/gos",
      },
      {
        title: "College Archives",
        link: "/archives/archives",
      },
      { title: "Public Links", link: "/archives/public-link" },
      { title: "Image Gallery", link: "/other/album" },
    ],
  },
]

const DropDownMenuItem = ({ item }: { item: MenuType }): React.ReactElement => {
  // Split Dropdown menu into multiple columns based on total content

  const Title = (): React.ReactElement => (
    <Nav.Item className="flex-row">
      {/* <IconHome
    className="nav-link-icon d-md-none d-lg-inline-block"
    size={24}
  /> */}
      <div className="nav-link-icon d-md-none d-lg-inline-block">
        {item.icon}
      </div>

      <div className="nav-link-title">{item.title}</div>
    </Nav.Item>
  )

  return (
    <NavDropdown title={<Title />}>
      <div className="dropdown-menu-columns">
        <div className="dropdown-menu-column">
          {item.child.map((val: SubMenuType) => (
            <Link key={val.title} className="text-decoration-none" to="/other/album">
              <NavDropdown.Item key={val.title}>{val.title}</NavDropdown.Item>
            </Link>
          ))}
        </div>
      </div>
    </NavDropdown>
  )
}

const Menu = (): React.ReactElement => (
  <Nav>
    {DATA.map((menuItem: MenuType) => {
      if (menuItem.dropdown) {
        return <DropDownMenuItem key={menuItem.title} item={menuItem} />
      } else {
        return (
          <Link key={menuItem.title} className="nav-link" to={menuItem.link}>
            <Nav.Item className="flex-row">
              <div className="nav-link-icon d-md-none d-lg-inline-block">
                {menuItem.icon}
              </div>
              <div className="nav-link-title">{menuItem.title}</div>
            </Nav.Item>
          </Link>
        )
      }
    })}
  </Nav>
)

const Header = ({ siteTitle }) => {
  const [toggleNavBar, settoggleNavBar] = React.useState(false)
  return (
    <React.Fragment>
      <Navbar>
        <Container fluid="xl">
          <Navbar.Brand className="navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            Govt Polytechnic College, Perinthalmanna
          </Navbar.Brand>
          <Nav className="flex-row order-md-last">
            <Nav.Item bsPrefix="top-nav" className="d-md-flex d-none me-3">
              <div className="btn-list">
                <Link className="btn btn-outline-white" to="/">
                  <IconPhone size={24} />
                  Contact Us
                </Link>
                <Link className="btn btn-outline-white" onClick={fetchToken} to="/">
                  <IconAward size={24} />
                  Login
                </Link>
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Navbar
        expand="md"
        onToggle={() => {
          settoggleNavBar(!toggleNavBar)
        }}
        className="d-print-none"
      >
        <Navbar.Toggle aria-expanded={toggleNavBar}>
          {" "}
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <div className="container-xl">
            <Menu />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
