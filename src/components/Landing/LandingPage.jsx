
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import "./LandingPage.css";
import Card from "../Card/Card";
import DoneImg from "./images/done.svg";
import HighImg from "./images/high.svg";
import BacklogImg from "./images/backlog.svg";
import CancelledImg from "./images/cancelled.svg";
import LowImg from "./images/low.svg";
import InProgressImg from "./images/in_progress.svg";
import NoPriorityImg from "./images/no_priority.svg";
import UrgentImg from "./images/urgent.svg";
import TodoImg from "./images/todo.svg";
import mid from "./images/Img - Medium Priority.svg";


const titleImageMap = {
  Done: DoneImg,
  High: HighImg,
  Backlog: BacklogImg,
  Cancelled: CancelledImg,
  Low: LowImg,
  "In progress": InProgressImg,
  "No priority": NoPriorityImg,
  Urgent: UrgentImg,
  Todo: TodoImg,
  Medium:mid,
};

const LandingPage = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="landingContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="landCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    <img
                      src={titleImageMap[elem[index]?.title] || DoneImg} 
                      alt={elem[index]?.title}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        position: "relative",
                        top: "5px", 
                        right:"2px",
                      }}
                    />
                  ) : (
                    <div
                      className="imageContainer relative"
                      style={{
                        width: "15px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src="https://plus.unsplash.com/premium_photo-1682092603230-1ce7cf8ca451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="UserImage"
                      />
                    </div>
                  )}
                  <span>
                    {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView">
                  <AiOutlinePlus />{" "}
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) => {
                  return (
                    <Card id={elem.id} title={elem.title} tag={elem.tag} userId={elem.userId} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default LandingPage;
