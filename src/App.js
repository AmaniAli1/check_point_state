import "./App.css";
import React, { Component } from "react";
import myPhoto from "./images/me2.png";

class App extends Component {
  state = {
    Person: {
      fullName: "Amani Ali ep Djebbi",
      bio: "j'ai 29 ans , j'habite a ben arous ",
      imgSrc: { myPhoto },
      profession: "Conseiller Clt",
    },
    show: false,
    count: 0,
    intervalId: 0,
  };
  //Function qui affiche le temps écoulé
  handleClick = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState((prevState) => {
        return {
          ...prevState,
          intervalId: 0,
          count: 0,
        };
      });
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  };
  //function d'affichage du Person
  handleShowPerson = () => {
    this.setState({
      ...this.state.Person,
      show: !this.state.show,
    });
  };
  /*******************************/
  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          width: "400px",
          padding: "50px",
          margin: "20px auto",
          borderRadius: "200px",
        }}
      >
        {this.state.show && (
          <div>
            <h1 style={{ color: "purple", textAlign: "center" }}>
              {this.state.Person.fullName}
            </h1>
            <h2 style={{ color: "purple", textAlign: "center" }}>
              {this.state.Person.bio}
            </h2>
            <img
              src={myPhoto}
              alt="ma photo"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "200px",
              }}
            ></img>
            <h3 style={{ color: "purple", textAlign: "center" }}>
              {this.state.Person.profession}
            </h3>
            <h3 style={{ textAlign: "center", color: "purple" }}>
              the life cycle= <input type="text" value={this.state.count} />{" "}
              secondes
            </h3>

            <br />
            <br />
          </div>
        )}
        <button
          style={{
            color: "purple",
            backgroundColor: "pink",
            width: "150px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => {
            this.handleShowPerson();
            this.handleClick();
          }}
          className="btn"
        >
          Show Person
        </button>
      </div>
    );
  }
}
export default App;
