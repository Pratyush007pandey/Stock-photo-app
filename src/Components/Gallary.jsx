import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import "./Gallary.css";
import Filler from "./Filler";

const Gallary = ({ onLanding }) => {
  const a = useContext(noteContext);
  return (
    <>
      {onLanding ? (
        <div className="photo-container desktop photo-height">
          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index < 10 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index <= 19 && index >= 10 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index <= 30 && index > 19 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>
          <Filler />
        </div>
      ) : (
        <div className="photo-container desktop">
          <div className="photo-col">
            {a.state.map((item, index) => {
              return index < 3 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col">
            {a.state.map((item, index) => {
              return index < 6 && index >= 3 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col">
            {a.state.map((item, index) => {
              return index < 10 && index > 6 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {onLanding ? (
        <div className="photo-container tablet photo-height">
          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index < 15 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                  <div className="card__content">
                    <p className="card__title">{item.alt_description}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index >= 15 && index < 30 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                  <div className="card__content">
                    <p className="card__title">{item.alt_description}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <Filler />
        </div>
      ) : (
        <div className="photo-container tablet">
          <div className="photo-col">
            {a.state.map((item, index) => {
              return index < 5 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                  <div className="card__content">
                    <p className="card__title">{item.alt_description}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>

          <div className="photo-col">
            {a.state.map((item, index) => {
              return index >= 5 && index < 10 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                  <div className="card__content">
                    <p className="card__title">{item.alt_description}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {onLanding ? (
        <div className="photo-container mobile photo-height">
          <div className="photo-col photo-col-height">
            {a.state.map((item, index) => {
              return index >= 0 && index <= 15 ? (
                <div className="card" key={item.id}>
                  <img
                    src={item.urls.small}
                    alt={`Image ${index + 1}`}
                    key={item.id}
                  />
                  <div className="card__content">
                    <p className="card__title">{item.alt_description}</p>
                  </div>
                </div>
              ) : null;
            })}
          </div>
          <Filler />
        </div>
      ) : (
        <>
          <div className="photo-container mobile">
            <div className="photo-col">
              {a.state.map((item, index) => {
                return index >= 0 && index <= 10 ? (
                  <div className="card" key={item.id}>
                    <img
                      src={item.urls.small}
                      alt={`Image ${index + 1}`}
                      key={item.id}
                    />
                    <div className="card__content">
                      <p className="card__title">{item.alt_description}</p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Gallary;
