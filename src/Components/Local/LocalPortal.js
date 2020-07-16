import ReactDOM from 'react-dom';

const LocalPortal = ({ children }) => {
  const el = document.getElementById('portal');
  return ReactDOM.createPortal(children, el);
};

export default LocalPortal;
