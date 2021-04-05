import { FirebaseContext } from '../Firebase';
const Home = () => (
  <div>
    <h1>Home</h1>
    <FirebaseContext.Consumer>
      {(firebase) => {
        console.log(firebase);
        return <div>I&apos;ve access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer>
  </div>
);

export default Home;
