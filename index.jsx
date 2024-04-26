// import "index.css";
let Heading = () => {
  return (
    <div id="heading1">
      <h1>Topics Covered</h1>
      <p style={{fontSize:"larger"}}>
        The following is the list of all the topics we cover in the MDN learning
        area.
      </p>
    </div>
  );
};
let Para1 = (props) => {
    const {data} = props
  return (
    <div id="para1">
      <h2><a href="">{data.links}</a></h2>
      <p style={{fontSize:"larger" , marginLeft:"1%"}}>
        {data.text}
      </p>
    </div>
  );
};


let paraarr = [
  {
    links: "Getting started with the web",
    text: "Provides a practical introduction to web development for complete beginners.",
  },
  {
    links: "HTML — Structuring the web",
    text: "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
  },
  {
    links: "CSS - Styling the web",
    text: "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.",
  },
];
let Body = () => {
  return (
    <div id="body1" style={{marginLeft:"5%"  }}>
      {/* <h1>Mahakal</h1> */}
      <Heading />
      {
        paraarr.map((item) => {
            
            return <Para1 data={item}/>
        })
      }
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
