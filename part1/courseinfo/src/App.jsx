const Header = (props) => {
  return <h1>{props.course.name}</h1>;
}

const Content = (props) =>  {
  return (
    <div>
        {props.parts.map((part, index) => (
          <p key={index}>{part.name} {part.exercises}</p>
        ))}
    </div>
  );
}

const Total = (props) => {
  let sum = 0;
  props.parts.map((part) => {
    sum += part.exercises;
  });
  return (
    <div>
      Total Number of exercises:{sum}
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;