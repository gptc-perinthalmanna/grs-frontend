import React, { FormEvent, useState } from "react"
import { Form, Button, Col, Alert } from "react-bootstrap"
import { Editor, EditorState } from "react-draft-wysiwyg"
import { convertToRaw } from 'draft-js';
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { submitNewPost } from "../../api/posts"

function NewPostForm() {
  const [editor, setEditor] = useState<EditorState>(() => null)
  const [subject, setSubject] = useState<string>(() => null)
  const [checkbox, setCheckbox] = useState(() => false)
  const [priority, setPriority] = useState<string>(() => 'veryLow')
  const [error, setError] = useState<boolean>(() => false)
  const [errorMessage, setErrorMessage] = useState<string>(() => "")

  const handleEdit = (e: EditorState) => {
    setEditor(e)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Validation
    if (subject.length < 20) {
      setError(true)
      setErrorMessage("Subject should contain minimum 10 letters.")
      return
    }
    console.log(`%c Subject ${subject} `, "color: green")
    console.log(`%c Priority ${priority} `, "color: green")
    try {
      const res = await submitNewPost({
        subject,
        priority,
        content: JSON.stringify(convertToRaw(editor.getCurrentContent())),
      })
      console.log("Response", res)
    } catch (error) {
      setError(true)
      setErrorMessage(
        "An error Occured while submitting the post. Kindly check your network connection."
      )
    }
  }

  const handleChangePriority = e => {
    setPriority(e.target.value)
  }



  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMessage message={errorMessage} show={error} setShow={setError} />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          onChange={c => setSubject(c.target.value)}
          type="text"
          placeholder="Type your subject here.."
        />
      </Form.Group>
      <Col md={6} lg={4} xl={3}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Priority</Form.Label>
          <Form.Select
            onChange={handleChangePriority}
            value={priority}
            aria-label="veryLow"
          >
            <option value="veryLow">Very Low</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="important">Important</option>
          </Form.Select>
        </Form.Group>
      </Col>

      <Form.Group className={"border-1"}>
        <Editor
          editorState={editor}
          onEditorStateChange={handleEdit}
          editorClassName="form-control"
        />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I hereby accept all details furnished above are correct according to my knowledge."
          onChange={e => setCheckbox(!checkbox)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!checkbox}>
        Submit
      </Button>
    </Form>
  )
}

export default NewPostForm

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
