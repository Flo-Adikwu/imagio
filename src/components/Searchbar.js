import React from 'react';
// import ReactDOM from 'react-dom';


class Searchbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      term: '',
    }
  }


//we don't need this method since it's doing just one thing. what we
// have here is same as what's in the callback below

  // onInputChange = (e) => {
  //   console.log(e.target.value);
  // }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term);
  }


  render(){
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field" style={{padding: "10px"}}>
            <label>Search</label>
        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
        </div>
        </form>
      </div>
    )
  }
}

export default Searchbar;
