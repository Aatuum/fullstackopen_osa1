const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name}
      {exercises}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      {content.map((part) => (
        // `key`-proppi React voi tehokkaasti tunnistaa jokaisen elementin ja käsitellä niitä oikein, kun lista muuttuu.
        <Part key={part.name} name={part.name} />
      ))}
    </div>
  );
};
const Total = ({ total }) => {
  // Reduce-metodi kaikkien osien exercises määrän laskemiseksi yhteen.
  // reduce käy läpi jokaisen total-taulukon osan osat ja laskee yhteen niiden
  // exercises-kentän arvot.
  // Alkuarvo summalle sum on 0.
  const kaikkiYhteen = total.reduce((sum, osat) => sum + osat.exercises, 0);
  return (
    <div>
      <p>{kaikkiYhteen}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
