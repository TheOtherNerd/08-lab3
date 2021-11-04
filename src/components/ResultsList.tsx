import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifs: Gif[];
}

const ResultsList = ({ gifs }: Props) => {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <ul>
        {gifs.map((item) => (
          <Result gif={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
