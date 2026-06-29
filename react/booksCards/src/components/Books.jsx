import "./Books.css";

const Books = ({ data }) => {
  console.log(data);
  return (
    <div className="outer">
      {data.map((element) => (
        <div className="container">
          <div className="card">
            <img src={element.cover} className="imgg" alt="" />
            <h1>{element.title}</h1>
            <p>Release Date :{element.releaseDate}</p>
            <p>Description: {element.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
