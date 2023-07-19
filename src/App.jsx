import _ from "lodash";
import classnames from "classnames";
import "./style.css";

/**
 * Create a new React function component called Greeting.
 * Inside the component, return a h1 element that says "Hello, World!".
 */

function Greeting({ children }) {
  return <h1>{children}</h1>;
}

/**
 * Create a new React function component called Profile.
 * Inside the component, return a div that includes a h2 element for the user's name, and a p element for the user's bio.
 * The name should be "John Doe" and the bio should be "Web Developer from California".
 */

function Profile({ name, bio }) {
  return (
    <>
      <Header greeting="Yoooooooooooooooooooooooooooooooooooooooooooo" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <Skills />
    </>
  );
}

/**
 * Create a new React function component called Header. This component should return a h2 element with the text "Welcome to My Profile!".
 * In your Profile component, include the Header component at the top of your JSX.
 * Check that "Welcome to My Profile!" appears above the user's name and bio when you render the Profile component.
 */

function Header(props) {
  return <h2>{props.greeting}</h2>;
}

/**
 * Create a new React function component called Skills.
 * This component should return an unordered list (ul) with at least three list items (li), each describing a skill (e.g., "JavaScript", "React", "CSS").
 * Include the Skills component in your Profile component, so that it appears below the bio.
 * Render the Profile component and verify that the skills list appears correctly.
 */

function Skills() {
  return (
    <ul>
      <li>Javascript</li>
      <li>React</li>
      <li>CSS</li>
    </ul>
  );
}

function ChickenThingy({ thingy }) {
  const { name: somethingElse, isDelicious } = thingy;

  // const name = thingy.name;
  // const isDelicious = thingy.isDelicious;

  // return (
  //   <p style={{ color: isDelicious ? "green" : "red", fontSize: 40, fontWeight: "bold" }}>
  //     {somethingElse} {isDelicious ? " is finger-lickin good" : " sux"}
  //   </p>
  // );

  // return (
  //   <p className={"chicken-thingy " + (isDelicious ? "delicious" : "")}>
  //     {somethingElse} {isDelicious ? " is finger-lickin good" : " sux"}
  //   </p>
  // );

  return (
    <p className={classnames({ delicious: isDelicious, "chicken-thingy": true})}>
      {somethingElse} {isDelicious ? " is finger-lickin good" : " sux"}
    </p>
  );
}

function App() {
  const chickenThingies = [
    { name: "Chicken wingies", isDelicious: true },
    { name: "Chicken beakies", isDelicious: false },
    { name: "Chicken feeties", isDelicious: false },
    { name: "Chicken nuggies", isDelicious: true },
    { name: "Chicken tendies", isDelicious: true },
    { name: "Chicken fingies", isDelicious: true },
  ];

  return (
    <>
      {_.map(chickenThingies, (c) => (
        <ChickenThingy key={c.name} thingy={c} />
      ))}
      <Greeting><span>Hello Nicole</span></Greeting>
      <Greeting><span>Hello Loc</span></Greeting>
      <hr />
      {/* comment */}
      <Profile name="Isabel" bio="Web developer from Winston-Salem." />
      <Profile name="Brayan" bio="Also a web developer from Winston-Salem." />
      <hr />
    </>
  );
}

export default App;
