import React, { Component } from "react";

class DemoTab extends Component {
  state = {
    selectedTab: "monday",
  };

  renderTab = () => {
    if (this.state.selectedTab === "monday")
      return <div className="tab-pane">this is Monday</div>;
    if (this.state.selectedTab === "tuesday")
      return <div className="tab-pane"> This is Tuesday</div>;
    if (this.state.selectedTab === "wednesday")
      return <div className="tab-pane">this is Wednesday</div>;
    if (this.state.selectedTab === "thursday")
      return <div className="tab-pane"> this is Thursday</div>;
    if (this.state.selectedTab === "friday")
      return <div className="tab-pane"> this is Friday</div>;
  };

  handleChange = (event) => {
    // event.target => button vừa nhấn
    this.setState({
      selectedTab: event.target.id,
    });
  };

  // => lần đầu : selectedTab = monday => renderTab() => tab monday
  // => nhất nút friday  : selectedTab = friday => renderTab() => tab friday

  render() {
    return (
      <div>
        <h1>DEMO TAB</h1>
        <div className="menu">
          <button onClick={this.handleChange} id="monday">
            Monday
          </button>
          <button onClick={this.handleChange} id="tuesday">
            Tuesday
          </button>
          <button onClick={this.handleChange} id="wednesday">
            Wednesday
          </button>
          <button onClick={this.handleChange} id="thursday">
            Thursday
          </button>
          <button onClick={this.handleChange} id="friday">
            Friday
          </button>
        </div>
        <div className="tab-content">
          {/* {this.renderTab()} */}
          {this.state.selectedTab === "monday" && (
            <div className="tab-pane">this is Monday</div>
          )}
          {this.state.selectedTab === "tuesday" && (
            <div className="tab-pane">this is Tuesday</div>
          )}

          {this.state.selectedTab === "wednesday" && (
            <div className="tab-pane">this is Wednesday</div>
          )}
          {this.state.selectedTab === "thursday" && (
            <div className="tab-pane">this is Thursday</div>
          )}
          {this.state.selectedTab === "friday" && (
            <div className="tab-pane">this is Friday</div>
          )}
        </div>
      </div>
    );
  }
}

export default DemoTab;
