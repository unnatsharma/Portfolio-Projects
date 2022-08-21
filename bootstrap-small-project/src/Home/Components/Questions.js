const Questions = () => {
  return (
    <section className="p-5" id="questions">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-1"
              >
                Where exaclty are you localed?
              </button>
            </h2>
            <div
              id="question-1"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                excepturi architecto consequuntur soluta eius corporis, numquam
                maxime ex delectus quisquam tempore dolore et? Aliquam, iusto
                quis molestiae vero quae veniam vel. Fugiat, tempore. Sapiente
                sit voluptates saepe voluptas eveniet, laudantium quidem laborum
                accusantium et vitae eum repellendus ducimus ab nemo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-2"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-2"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                excepturi architecto consequuntur soluta eius corporis, numquam
                maxime ex delectus quisquam tempore dolore et? Aliquam, iusto
                quis molestiae vero quae veniam vel. Fugiat, tempore. Sapiente
                sit voluptates saepe voluptas eveniet, laudantium quidem laborum
                accusantium et vitae eum repellendus ducimus ab nemo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-3"
              >
                what do i need to know?
              </button>
            </h2>
            <div
              id="question-3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                excepturi architecto consequuntur soluta eius corporis, numquam
                maxime ex delectus quisquam tempore dolore et? Aliquam, iusto
                quis molestiae vero quae veniam vel. Fugiat, tempore. Sapiente
                sit voluptates saepe voluptas eveniet, laudantium quidem laborum
                accusantium et vitae eum repellendus ducimus ab nemo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-4"
              >
                How do i sing up?
              </button>
            </h2>
            <div
              id="question-4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                excepturi architecto consequuntur soluta eius corporis, numquam
                maxime ex delectus quisquam tempore dolore et? Aliquam, iusto
                quis molestiae vero quae veniam vel. Fugiat, tempore. Sapiente
                sit voluptates saepe voluptas eveniet, laudantium quidem laborum
                accusantium et vitae eum repellendus ducimus ab nemo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-5"
              >
                Do you help me find a job?
              </button>
            </h2>
            <div
              id="question-5"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                excepturi architecto consequuntur soluta eius corporis, numquam
                maxime ex delectus quisquam tempore dolore et? Aliquam, iusto
                quis molestiae vero quae veniam vel. Fugiat, tempore. Sapiente
                sit voluptates saepe voluptas eveniet, laudantium quidem laborum
                accusantium et vitae eum repellendus ducimus ab nemo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
