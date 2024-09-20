const Person = (props) => {
  return (
    <div>
      <div className="Person">
        <p>
          I'm {props.name} and I am {props.age} years old!
        </p>
      </div>
    </div>
  );
};

export default Person;
