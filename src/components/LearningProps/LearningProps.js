import React from "react";

function LearningProps(props) {
  console.log(props.count);
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Learning Props in React</h1>
      <br />
      <br />
      <p>
        Now, unlike state, props are like pipes which transfer data from one
        component to other. Props help in saving a lot of time from importing
        data and passing it. You could easily use props to bring data anywhere
        within the UI. In this example, we would be using props from the counter
        component, along with our component. Remember, for the data from the
        counter to reflect in this props component, the counter component has to
        send the data in its html tag. Also I could see, if you are sending a
        state data via props, remember that the component which receives should
        most likely be a presentation or a dumb component. Also note that for
        react, a unified state is seen to be much appreciated
      </p>
      <br />
      <br />
      <h1>Counter from Learning State Component : {props.count}</h1>
      <br />
      <br />
      <p>
        Now I could use this component to make some calculations in my props
        component. I dont necessarily have to add a state to every component
        based on this theory
      </p>
      <br />
      <br />
      <h2>Money added in my bank account : {props.count * 1000}</h2>
    </div>
  );
}

export default LearningProps;
