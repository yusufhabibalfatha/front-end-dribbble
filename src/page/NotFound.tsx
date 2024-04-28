import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">
          Sorry, page you want doesn't exist!
        </h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, in
          illo. Sit suscipit dicta, blanditiis natus qui aliquid quas assumenda
          quasi quod eos, in fuga.
        </p>
      </div>
      <div>
        <p>
          Back to the{" "}
          <Link to="/" className="underline italic">
            Homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
