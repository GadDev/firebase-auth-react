import { FirebaseContext } from '../Firebase';
const Home = () => (
  <div className="account__wrapper">
    <h2 className="page-title">Home</h2>
    <FirebaseContext.Consumer>
      {(firebase) => {
        console.log(firebase);
        return <div>I&apos;ve access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer>
  </div>
);

export default Home;
