
export function getAppointmentsForDay(state, day) {
  const appt = state.days.filter(dayAppointments => dayAppointments.name === day);
  if (!appt[0]) {
    return [];
  }
  
  let obj = appt[0].appointments.map(apptId => (state.appointments[apptId]));

  return obj;
}

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Mildred Nazir",
      avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    "4": {
      id: 4,
      name: "Cohana Roy",
      avatar: "https://i.imgur.com/FK8V841.jpg"
    },
    "5": {
      id: 5,
      name: "Sven Jones",
      avatar: "https://i.imgur.com/twYrpay.jpg"
    }
  }
};


export function getInterview(state, interview) {
  let obj = {};
  if (interview) {
    return { ...interview, interviewer: state.interviewers[interview.interviewer]}
    
    
  } else {
    return null;
  }

}

export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(item => item.name === day)
  if(!dayObj) {
    return [];
  }
  
  const interviewersData = dayObj.interviewers.map(item => state.interviewers[item])
  return interviewersData;
}