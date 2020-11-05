import React from "react";

import PropTypes from 'prop-types';

import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
import classNames from "classnames";

export default function InterviewerList(props) {
 
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  return (
    
<section className="interviewers">
<h4 className="interviewers__header text--light">Interviewer</h4>
<ul className="interviewers__list">
   {
  props.interviewers.map(int => (
  <InterviewerListItem
    key={int.id}
    name={int.name}
    avatar={int.avatar}
    selected={int.id === props.value}
    onChange={event => props.onChange(int.id)}
  />
    
  ))}
  </ul>
  
</section>

  );

  
}