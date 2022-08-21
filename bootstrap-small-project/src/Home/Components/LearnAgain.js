import image from "../../shared/assetes/react.svg";

const LearnAgain = () => {
  return (
    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-item-center justify-content-between">
          <div className="col-md p-5">
            <h2>Learn React</h2>
            <p className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              tenetur exercitationem corporis sed, iure fugiat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              non aperiam enim aspernatur aliquid. Accusantium veritatis
              architecto enim obcaecati amet est possimus culpa quisquam
              voluptates iste laborum, laboriosam cum blanditiis?
            </p>
            <a href="/" className="btn btn-light mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
          <div className="col-md">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAgain;
