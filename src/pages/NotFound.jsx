import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>
        <strong>404 </strong>Page not found!
      </h2>

      <p>Go to the <Link to="/">HomePage</Link>.</p>
    </div>

    
  );
};

export default NotFound;
