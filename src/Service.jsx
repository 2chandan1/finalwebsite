import React from "react";

import Sdata from './Sdata';
import Card from './Card';
const Service = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
           
              {
                  Sdata.map((val,ind)=>{
                      return <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      />
                  })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
