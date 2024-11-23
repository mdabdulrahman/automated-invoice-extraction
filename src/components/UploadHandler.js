import React, { useRef, useState } from "react";
import { addInvoice } from "../slices/invoiceSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
function UploadHandler() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const supportedFiles =
    ".pdf, .txt , .html , .csv , .xls , .xlsx , .jpg , .jpeg , .png , .webp";
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("Maximum 3 files!");

  let handleFileChange = (e) => {
    let noOfFiles = e.target.files.length;
    if (noOfFiles > 3) {
      setInfo(
        "Maximum of 3 files can be extracted at a time! Please select up to 3 files only."
      );
      fileRef.current.value = "";
    } else {
      let fileNames = "";

      Array.from(e.target.files).forEach((file, i) => {
        fileNames += file.name;
        if (i != noOfFiles - 1) fileNames += " , ";
      });
      setInfo("Selected Files : " + fileNames);
    }
  };

  let upload = () => {
    if (fileRef.current.files.length == 0) {
      setInfo("Please Select a file to extract!");
      return;
    }

    const formData = new FormData();
    const url = "https://geminiapi-express.onrender.com/upload";

    console.log(`Uploading files...`);

    setIsLoading(true);
    setInfo("Please Wait ....");

    Array.from(fileRef.current.files).forEach((file) => {
      formData.append("files", file);
    });

    // Send POST request
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.candidates[0].finishReason === "MAX_TOKENS") {
          setInfo(
            "Error: The file you uploaded caused the response to exceed the maximum token limit. If this occurred while uploading an Excel file, it may contain too much data—try splitting it into smaller files and re-uploading."
          );
          fileRef.current.value = "";
          setIsLoading(false);
          return;
        }

        //processing response to valid json
        let invoicesData = response.data.candidates[0].content.parts[0].text;

        invoicesData = invoicesData.replace(/```json|```/g, "");
        console.log(invoicesData);
        try {
          invoicesData = JSON.parse(invoicesData);

          //adding each invoices in the invoiceSlice
          invoicesData.invoices.forEach((invoice) => {
            dispatch(addInvoice(invoice));
          });

          setInfo("Extraction Done!");
          console.log("Extraction Done!");
        } catch (error) {
          console.log(error);
        }
        fileRef.current.value = "";
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <div className="m-3 w-1/2">
      <div className=" flex mb-2 ">
        <input
          type="file"
          className="w-3/4 text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
          ref={fileRef}
          accept={supportedFiles}
          onChange={handleFileChange}
          multiple
        />
        <button
          onClick={() => upload()}
          className="bg-green-500 w-1/4 text-white  p-3 font-medium rounded-sm "
          disabled={isLoading}
        >
          {isLoading ? "Extracting..." : "Extract Data"}
        </button>
      </div>
      <div className=" text-orange-500 "> {info}</div>
    </div>
  );
}

export default UploadHandler;