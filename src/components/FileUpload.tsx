"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Inbox } from "lucide-react";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": ["pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });
  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            "cursor-pointer border-2 border-dashed rounded-xl bg-gray-50 p-8 flex justify-center items-center flex-col",
        })}
      >
        <input {...getInputProps()} />
        <Inbox className="w-10 h-10 text-blue-500" />
        <p className="mt-2 text-sm text-slate-400"> Drop PeDoFiLe here</p>
      </div>
    </div>
  );
};

export default FileUpload;
