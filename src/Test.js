import React from "react";
import axios from "axios";
function Test() {
  return (
    <div>
      <h1>Upload Multiple Files</h1>

      <input type="file" id="files" name="files" multiple />
      <button onClick={() => upload()}>Upload</button>
    </div>
  );
}
export default Test;
