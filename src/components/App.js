import React from "react";
import unsplash from "../api/unsplash"
// import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";
import Logo from "../assets/Imagio2.png";
import ImageList from "./ImageList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

   onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },

    });
    this.setState({ images: response.data.results });
    console.log(response.data.results)
  }

  render() {
    return (
      <div>
        <div
          className="ui container"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="ui container" style={{ marginTop: "30px" }}>
          <Searchbar onSubmit={this.onSearchSubmit} />
          <p className="ui teal image label" style={{marginBottom: "15px"}}>
            Found {this.state.images.length} images
            </p>

          <ImageList images={this.state.images}/>
        </div>

      </div>
    );
  }
}

export default App;
