import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
    if (!response.ok) {
      console.log(error.message);
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="container my-2">
      <h2 className="text-center"> All Data </h2>

      <div className="row">
        {data?.map((ele) => {
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.age}</h6>
                <p className="card-text">{ele.email}</p>
                <a href="#" className="card-link">
                  Delete
                </a>
                <a href="#" className="card-link">
                  edit{""}
                </a>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Read;
