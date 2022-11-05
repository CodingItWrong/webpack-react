import ReactDOM from 'react-dom/client';

const Home = () => {
  return <div>React Application</div>;
};

const container = document.createElement('div');
document.body.appendChild(container);

const root = ReactDOM.createRoot(container);

root.render(<Home />);
