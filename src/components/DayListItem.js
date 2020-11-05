import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {

  let dayClass = classNames("day-list__item", {"day-list__item--selected": props.selected, "day-list__item--full": props.spots === 0});

  let formatSpots = classNames({"no spots remaining": props.spots === 0, "1 spot remaining": props.spots === 1, "2 spots remaining": props.spots === 2, "3 spots remaining": props.spots === 3, "4 spots remaining": props.spots === 4, "5 spots remaining": props.spots === 5});

  console.log(formatSpots);

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2>{props.name}</h2> 
      <h3 className="text--light">{formatSpots}</h3>
    </li>
  );
}