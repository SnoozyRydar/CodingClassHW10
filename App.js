import './App.css';

const users = [
  {
    name: 'Peter',
    avtar: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'human'
  },
  {
    name: 'Jerry',
    avtar: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'human'
  },
  {
    name: 'Ben',
    avtar: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'human'
  },
  {
    name: 'Ryan',
    avtar: 'https://www.w3schools.com/howto/img_avatar.png',
    title: 'human'
  },
];

function App() {
  return (
    <div className='App'>
      <h1>Hello world</h1>
      {users.map((v, i) => (
        <Card name={v.name} age={v.age} key={i} />
      ))}
    </div>
  );
}

const Card = ({ name, age }) => {
  return (
    <div className='card'>
      <p>
        This is {name}'s card, he is {age} years old
      </p>
    </div>
  );1
};

export default App;