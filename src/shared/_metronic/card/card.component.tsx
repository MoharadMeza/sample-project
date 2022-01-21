import React from "react";

function Card() {
  return (
    <div className="card card-custom">
      <div className="card-header">
        <h3 className="card-title">Title</h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-light">
            Action
          </button>
        </div>
      </div>
      <div className="card-body">Lorem Ipsum is simply dummy text...</div>
      <div className="card-footer">Footer</div>
    </div>
  );
}

export default Card;
