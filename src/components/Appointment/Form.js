import React, { useState } from "react";

import Button from "components/Button";

import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [name, setName] = useState(props.name || "")
  const [interviewer, setInterviewer] = useState(props.interviewer || null)
  const [error, toggleError] = useState("")

  function reset() {
    setName("")
    setInterviewer(null)
    console.log("reset")
  }
  function cancel() {
    reset()
    props.onCancel()
    console.log("cancelled")
  }

  function save() {
    if (name === "") {
      toggleError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      toggleError("Please select an interviewer");
      return;
    }
    toggleError("");
    return props.onSave(name, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-testid="student-name-input"
        />
      </form>
      <section className="appointment__validation">{error}</section>
      <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button onClick={cancel} danger>Cancel</Button>
        <Button onClick={save} confirm>Save</Button>
      </section>
    </section>
  </main>
  );
}