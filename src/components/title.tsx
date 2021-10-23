import React from "react"

function Title({ title, subTitle }: { title: string; subTitle?: string }) {
  return (
    <div className="page-header d-print-none">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="page-title">{title}</h2>
          {subTitle && <div className="text-muted mt-1">{subTitle}</div>}
        </div>
        {/* Page title actions */}
        <div className="col-auto ms-auto d-print-none"></div>
      </div>
    </div>
  )
}

export default Title
