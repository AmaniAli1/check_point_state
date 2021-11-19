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
  render() {
    return (
      <div
        style={{
          backgroundColor: "grey",
          width: "500px",
          padding: "50px",
          margin: "50px auto",
        }}
      >
        {this.state.show && (
          <div>
            <h1 style={{ color: "purple" }}>{this.state.Person.fullName}</h1>
            <h2 style={{ color: "purple" }}>{this.state.Person.bio}</h2>
            <img src={this.state.Person.imgSrc} alt="ma photo"></img>
            <h3 style={{ color: "purple" }}>{this.state.Person.profession}</h3>
            <h3>le Cycle de vie est de {this.state.count} secondes</h3>

            <br />
            <br />
          </div>
        )}
        <button
          style={{ color: "purple", backgroundColor: "pink", width: "150px" }}
          onClick={() => {
            this.handleShowPerson;
            this.handleClick;
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
