import React from "react";
import Emoji from "./Emoji";
import TitleEmj from "./TitleEmj";
import DescriptionEmj from "./DescriptionEmj";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />

        <TitleEmj name={props.name} />
      </dt>
      <DescriptionEmj meaningInfo={props.meaning} />
    </div>
  );
}

export default Card;
