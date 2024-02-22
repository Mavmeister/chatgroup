"use client";

import { UploadButton } from "@/lib/uploadthing";

const FileUpload = () => {
  return (
      <UploadButton
        endpoint="serverImage"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  );
}

export default FileUpload;
