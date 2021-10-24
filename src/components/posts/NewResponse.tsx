import React, { FormEvent, useState } from "react"
import { Container, Row, Form, Button, Col, Alert } from "react-bootstrap"
import { IconX } from "@tabler/icons"
import { Editor, EditorState } from "react-draft-wysiwyg"
import { convertToRaw } from "draft-js"
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { PostStatus, submitNewResponse } from "../../api/posts"
import { getCurrentUser } from "../../api/users"
import { capitalizeFirstLetter } from "../../utils/func"

enum NewPostStatus {
  open = "open",
  replied = "replied",
  closed = "closed",
  solved = "solved",
}

function NewResponse({ postId, close, success}: { postId: string; close: () => void; success: (data: any) => void }) {
  const [editor, setEditor] = useState<EditorState>(() => null)
  const [error, setError] = useState<boolean>(() => false)
  const [errorMessage, setErrorMessage] = useState<string>(() => "")
  const [status, setStatus] = useState<string>(() => PostStatus.replied)
  const handleEdit = (e: EditorState) => {
    setEditor(e)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const {data} = await submitNewResponse({
        post_key: postId,
        content: JSON.stringify(convertToRaw(editor.getCurrentContent())),
        status: status ? status : PostStatus.replied,
      })
      success(data)
      close()
    } catch (error) {
      setError(true)
      setErrorMessage(
        "An error Occured while submitting the response. Kindly check your network connection."
      )
    }
  }

  const handleChangeStatus = e => {
    setStatus(e.target.value)
  }

  const currentUser = getCurrentUser()

  return (
    <Container>
      <Row>
        <Col>
          <h3>Add new response</h3>
        </Col>
        <Col onClick={close} className="cursor-pointer" sm="auto">
          <IconX onClick={close} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <ErrorMessage
              message={errorMessage}
              show={error}
              setShow={setError}
            />

            <Form.Group className={"border-1"}>
            {typeof window !== 'undefined' &&
              <Editor
                editorState={editor}
                onEditorStateChange={handleEdit}
                editorClassName="form-control"
              />}
            </Form.Group>
            {currentUser?.type === "staff" ? (
              <Col md={6} lg={4} xl={3}>
                <Form.Group className="my-3" controlId="formBasicPassword">
                  <Form.Label>Change Status</Form.Label>
                  <Form.Select
                    onChange={handleChangeStatus}
                    value={status}
                    aria-label="veryLow"
                  >
                    {Object.keys(NewPostStatus).map(key => (
                      <option key={key} value={NewPostStatus[key]}>
                        {capitalizeFirstLetter(key)}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            ) : (
              ""
            )}
            <Button className="mt-3" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default NewResponse

function ErrorMessage({ message, show, setShow }) {
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    )
  }
  return null
}
