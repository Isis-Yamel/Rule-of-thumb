import React from 'react';
import './addCandidate.scss';

const AddCandidate = () => {
  return (
    <section className="add__container">
      <p className="add__container--text">Is there anyone else you would want us to add?</p>
      <input className="add__container--button" type="submit" value="Submit Name"/>
    </section>
  );
}

export default AddCandidate;