import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons__button">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
                <button className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszytkie
        </button>
            </>
        )}
    </div>
);

export default Buttons;