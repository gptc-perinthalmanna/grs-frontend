import { IconFileInvoice, IconWorld } from "@tabler/icons"
import React from "react"

const DATA = [
  {
    title: "Fix dart Sass compatibility (#29755)",
    date: "28 Nov 2019",
    etender: false,
  },
  {
    title: "Change deprecated html tags to text decoration classes (#29604)",
    date: "28 Nov 2019",
    etender: true,
  },
  {
    title: "justify-content:between ⇒ justify-content:space-between (#29734)",
    date: "27 Nov 2019",
    etender: true,
  },
  {
    title: "Fix dart Sass compatibility (#29755)",
    date: "27 Nov 2019",
    etender: false,
  },
  {
    title: "Change deprecated html tags to text decoration classes (#29604)",
    date: "26 Nov 2019",
    etender: false,
  },
  {
    title: "justify-content:between ⇒ justify-content:space-between (#29734)",
    date: "23 Nov 2019",
    etender: true,
  },
  {
    title: "Fix dart Sass compatibility (#29755)",
    date: "14 Nov 2019",
    etender: false,
  },
]

type Tender = {
  title: string
  date: string
  etender: boolean
}

function TendersList({ tenders = DATA }: { tenders?: Tender[] }) {
  return (
    <div className="card-table table-responsive">
      <table className="table table-vcenter">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender, index) => (
            <tr key={index}>
              <td className="w-1">
                <span className="avatar avatar-sm">
                  {tender.etender ? <IconWorld /> : <IconFileInvoice />}
                </span>
              </td>
              <td className="td-truncate">
                <div className="text-truncate">{tender.title}</div>
              </td>
              <td className="text-nowrap text-muted">{tender.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TendersList
