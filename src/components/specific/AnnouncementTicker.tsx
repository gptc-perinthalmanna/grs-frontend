import React from "react"
import { Carousel } from "react-bootstrap"
import {
  IconAlertOctagon,
  IconAlertTriangle,
  IconSquareCheck,
} from "@tabler/icons"

const iconLiteral = {
  success: <IconSquareCheck size={24} color="green" />,
  danger: <IconAlertOctagon size={24} color="red" />,
  warning: <IconAlertTriangle size={24} color="orange" />,
}

type Announcement = {
  title: string
  type?: "success" | "danger" | "warning" | null
  date?: "string"
}

const DATA: Announcement[] = [
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
  {
    title:
      "Third allotment published on polyadmission.org. All students kindly check the details.",
    type: "warning",
  },
  {
    title: "Result Published for even semesters",
    type: "danger",
  },
  {
    title:
      "Event: New campus placement request recieved from ABC Corporations, Dubai. Intrested cantidates sent biodata to example@gmail.com and contact placement cell officer.",
    type: "success",
  },
]

const chunkArray = <T extends unknown>(
  array: T[],
  chunkSize: number
): T[][] => {
  const numberOfChunks = Math.ceil(array.length / chunkSize)

  return [...Array(numberOfChunks)].map((value, index) => {
    return array.slice(index * chunkSize, (index + 1) * chunkSize)
  })
}

function AnnouncementTicker() {
  const chunks = chunkArray<Announcement>(DATA, 6)

  return (
    <Carousel className="vert" indicators={false} controls={false} slide={true}>
      {chunks.map((page, index) => (
        <Carousel.Item key={index}>
          <ul className="list-unstyled">
            {page.map((anouncement, count) => {
              // seperator
              const border = page.length === count + 1 ? null : "border-bottom"
              return (
                <li key={count} className={`${border} py-2`}>
                  {iconLiteral[anouncement.type]} {anouncement.title}
                </li>
              )
            })}
          </ul>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default AnnouncementTicker
