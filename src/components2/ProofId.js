import React, { Component } from "react";
import UploadImg from "../images/downloadUopload.svg";

export default class Proofid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploaded: false,
    };
  }

  imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["fileID"] = base64;
      console.debug("file stored", base64);
      this.setState({ uploaded: true });
    });
  };
  render() {
    return (
      <div className="formUpload">
        {" "}
        <label htmlFor="fileUpload2" className="fileUpload">
          {" "}
          {/* <i className="fa fa-upload" />{" "} */}
          <img src={UploadImg} alt="UImg" className="uploadImg" />
          <input
            type="file"
            id="fileUpload2"
            style={{ display: "none" }}
            onChange={this.imageUpload}
          />{" "}
          {/* <br /> */}
          <div className="fileTxt">
            <p className="mb0" style={{ marginBottom: "0" }}>
              Browse File
            </p>
            {this.state.uploaded ? (
              <p
                className="textSize"
                style={{ fontSize: "13px", fontWeight: "500" }}
              >
                Uploaded!
              </p>
            ) : (
              <p
                className="textSize"
                style={{ fontSize: "13px", fontWeight: "500" }}
              >
                Choose a file
              </p>
            )}
          </div>
        </label>{" "}
      </div>
    );
  }
}
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
