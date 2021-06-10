import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons__button">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="buttons__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
                <button className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytkie
        </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;