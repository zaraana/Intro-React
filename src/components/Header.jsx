

import React  from 'react';
import { MdAddTask } from "react-icons/md";
import PropTypes from 'prop-types';
import logo from './../Assets/images/daily-task.png';

export default function Header({ handleAddTask }) {
  const [title, setTitle] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Ɱყ ƬօƊօ Ɑƥƥ</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task...."
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit">
          Add
          <MdAddTask size={20} />
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};
