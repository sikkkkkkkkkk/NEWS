// components/Card.js
import React from "react";

const Card = ({ title, date, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-date">{date}</p>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          margin: 16px;
          width: 300px;
          height: 300px;
          color: white;
          text-shadow: 1px 1px 2px black;
          background: rgba(0, 0, 0, 0.5);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          padding: 8px;
        }
        .card-title {
          margin: 0;
          font-size: 1.2em;
        }
        .card-date {
          margin: 0;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  );
};

export default Card;
