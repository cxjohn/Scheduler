import React, { Fragment } from 'react'


import "components/Appointment/style.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import classNames from "classnames";

import useVisualMode from "hooks/useVisualMode";
import Form from './Form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {

    
  const interview = {
    student: name,
    interviewer
  };
    
  transition(SAVING);

  props
    .bookInterview(props.id, interview)
    .then(() => {
    transition(SHOW);
    })
    .catch(() => transition(ERROR_SAVE, true))
}

function onDelete() {
  transition(DELETING, true);
  props
    .cancelInterview(props.id)
    .then(() => {
      transition(EMPTY);
    })
    .catch(() => transition(ERROR_DELETE, true))
  }

  return (
    <Fragment>
    <article className="appointment">
      
      <Header time={props.time} />
    
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
{mode === SHOW && (
  <Show
  
  name={props.interview.student}
  interviewer={props.interview.interviewer}
  onDelete={() => transition(CONFIRM)}
  onEdit={() => transition(CREATE)}
  />
  )}
{mode === CREATE && 
  
  <Form 
interviewers={props.interviewers}
interviewer={props.interviewer}

onCancel={back}
onSave={save}

/>
}

{mode === SAVING &&
  <Status message={"Saving"} 
  />
}

{mode === CONFIRM && 
  <Confirm message={'Are you sure you would like to delete?'}
  onConfirm={() => onDelete()}
  onCancel={() => back()}
  />
}
{mode === DELETING &&
  <Status message={"Deleting"} 
  />
}
{mode === ERROR_SAVE &&
<Error
  message={'Saving error'}
  onClose={() => back()}
/>
}
{mode === ERROR_DELETE &&
<Error
  message={'Deletion error'}
  onClose={() => back()}
/>
}

    </article>
  

    </Fragment>
  );
}