import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
    };
  }

  render() {
    return <h1>MEME GENERATOR SECTION</h1>;
  }
}

export default MemeGenerator;