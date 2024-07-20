import React from "react";

function Skill() {
  return (
    <>
      <div className="container-fluid text-white ">
        <h1 className="text-center shead">SKILLS</h1>
        <hr className="text-white"></hr>
        <div className="container mt-5 p-3">
          <div className="row">
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                className="img rounded-top"
                alt=""
                style={{ width: "20rem" }}
              />
            </div>
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                className="img rounded-top"
                style={{ width: "20rem" }}
                alt=""
              />
            </div>
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              {" "}
              <img
                src="https://www.freepnglogos.com/uploads/javascript-png/logo-html5-js-css3-png-transparent-logo-4.png"
                className="img rounded-top"
                style={{ width: "20rem" }}
                alt=""
              />
            </div>
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              {" "}
              <img
                src="https://satyamportfolio.vercel.app/static/media/express.99cf727d8ecae42905ce.png"
                className="img rounded-top"
                alt=""
                style={{ width: "20rem" }}
              />
            </div>
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              {" "}
              <img
                src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                className="img rounded-top"
                alt=""
                style={{ width: "20rem" }}
              />
            </div>
            <div className="col sty m-auto p-2 d-flex justify-content-center">
              {" "}
              <img
                src="https://imgs.search.brave.com/vivqBJZIe-PAXZVARYFCXGN2nDPAfKLH7Jy5DGfyyck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvZmln/bWEtMS1sb2dvLXBu/Zy10cmFuc3BhcmVu/dC5wbmc"
                className="img rounded-top"
                alt=" figma "
                title="figma"
                style={{ width: "8rem",margin:"5px" }}
              />
            </div>
          </div>
        </div>
        <hr className="text-white"></hr>
      </div>
    </>
  );
}

export default Skill;
