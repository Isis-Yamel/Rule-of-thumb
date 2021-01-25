import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getVotes } from '../../store/actions';
import './votes.scss';

class Votes extends Component {
  state = {
    status: "",
    id: "",
  }

  voteThumbsDown = (id) => {
    this.setState({
      ...this.state,
      status: "negative",
      id,
    })
  }

  voteThumbsUp = (id) => {
    this.setState({
      ...this.state,
      status: "positive",
      id,
    })
  }

  voteNow = () => {
    toast('Thank you for voting!');
    this.props.getVotes({
      id: this.state.id,
      status: this.state.status
    })
  }

  calculateVotes = item => {
    return item.thumbUp * 100 / item.total
  }

  renderCandidates = () => {
    return this.props.candidates.candidates.map((item, index) => {
      const image = require(`../../assets/${item.image}.png`);

      return (
        <article key={index} className="votes__item">
          <img className="votes__image" src={image.default} alt="kanye west" />
          <div className="votes__information">
            <h3 className="votes__information--title">
              <span className={`votes__button votes__button--${item.thumbUp > item.thumbDown ? 'up' : 'down'} votes__button--track`}>
                {item.thumbUp > item.thumbDown ? <i className="fas fa-thumbs-up"></i> : <i className="fas fa-thumbs-down"></i>}
              </span>
              {item.name}
            </h3>
            <p className="votes__information--time">{`${item.time} months ago`}</p>
            <p className="votes__information--description">{item.description}</p>
            <button onClick={() => this.voteThumbsUp(item.id)} className="votes__button votes__button--up">
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button onClick={() => this.voteThumbsDown(item.id)} className="votes__button votes__button--down">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <button onClick={() => this.voteNow()} className="votes__button--vote">Vote Now</button>
          </div>
          <progress className="votes__progressBar" id="progress" max="100" value={this.calculateVotes(item)}></progress>
          <div className="votes__progressBar--info">
            <div>
              <i className="fas fa-thumbs-up"></i>
              <span>{`${item.thumbUp}%`}</span>
            </div>
            <div>
              <span>{`${item.thumbDown}%`}</span>
              <i className="fas fa-thumbs-down"></i>
            </div>
          </div>
        </article>
      )
    })
  }
  render () {
    return (
      <Fragment>
        <h2 className="votes__title">Votes</h2>
        <section className="votes__container">
          {this.renderCandidates()}
        </section>
        <ToastContainer autoClose={3000}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
  };
};


export default connect(mapStateToProps, { getVotes })(Votes);
