/**
 * Create a new React function component called Greeting.
 * Inside the component, return a h1 element that says "Hello, World!".
 */

function Greeting() {
  return null;
}

/**
 * Create a new React function component called Profile.
 * Inside the component, return a div that includes a h1 element for the user's name, and a p element for the user's bio.
 * The name should be "John Doe" and the bio should be "Web Developer from California".
 */

function Profile() {
  return null;
}

/**
 * Create a new React function component called Header. This component should return a h1 element with the text "Welcome to My Profile!".
 * In your Profile component, include the Header component at the top of your JSX.
 * Check that "Welcome to My Profile!" appears above the user's name and bio when you render the Profile component.
 */

// function Header() {
//   return null;
// }

/**
 * Create a new React function component called Skills.
 * This component should return an unordered list (ul) with at least three list items (li), each describing a skill (e.g., "JavaScript", "React", "CSS").
 * Include the Skills component in your Profile component, so that it appears below the bio.
 * Render the Profile component and verify that the skills list appears correctly.
 */

// function Skills() {
//   return null;
// }

function App() {
  return (
    <>
      <Greeting />
      <hr />
      <Profile />
      <hr />
    </>
  );
}

export default App;
