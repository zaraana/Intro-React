
import Task from "./Task";
import PropTypes from 'prop-types';

export default function Tasks({ tasks, onComplete, onDelete, onEdit }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  const pPending ={
    color: "orange",
  }

  const pCompleted ={
    color: "green",
  }



  return (
    <section className="container">
      <section className="filter">
        <div>
          <p style={pPending}>Pending</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p style={pCompleted}>Completed</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </section>

      <div className="taskListContainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </section>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};