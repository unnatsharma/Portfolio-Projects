const Contact = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span>50 Main St Bostan
                MA
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span>333-333-3333
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span>666-666-6666
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span>
                Enrollment@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span>Student@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
