import React, { useState } from "react";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleArrowUp, FaFilePdf, FaFolder } from "react-icons/fa6"; // Import PDF & Folder Icons
import { motion } from "framer-motion";

const Fileuploader = () => {
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const startUpload = () => {
    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setUploading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const handleFiles = (selectedFiles) => {
    if (!(selectedFiles instanceof FileList)) return; // Type check

    const newFiles = Array.from(selectedFiles);
    const newFileNames = newFiles.map((file) => file.name);

    // Generate previews or icons based on file type
    const previews = newFiles.map((file) => {
      if (file.type.startsWith("image/")) {
        return URL.createObjectURL(file); // Image preview
      } else if (file.name.endsWith(".pdf")) {
        return "pdf"; // Placeholder for PDF icon
      } else {
        return "folder"; // Placeholder for folder icon
      }
    });

    setFiles([...files, ...newFileNames]);
    setFilePreviews([...filePreviews, ...previews]);
    startUpload();
  };

  return (
    <div
      className=" flex justify-center items-center h-screen w-screen"
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
    >
      <div className="relative p-2 rounded-lg w-[400px] text-center">
        {/* Blurred Gradient Background */}
        <motion.div
          className="absolute  w-full h-[100%] blur-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 opacity-40 rounded-full"
          animate={{ x: ["-10%", "5%", "-10%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Drag & Drop Box */}
        {!uploading && files.length === 0 && (
          <label
            htmlFor="fileInput"
            className="bg-white rounded-lg p-1.5 cursor-pointer flex flex-col items-center justify-center relative z-10"
          >
            <motion.div
              className={`w-full p-6 flex flex-col items-center justify-center gap-2 transition-all ${
                isDragging ? "border-2 border-black bg-black bg-opacity-10" : "border-2 border-transparent"
              } border-dashed rounded-lg`}
            >
              <motion.div
                animate={{
                  y: isDragging ? -10 : 0,
                  opacity: isDragging ? 1 : 0.8,
                  scale: isDragging ? 1.2 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isDragging ? (
                  <FaCircleArrowUp className="text-4xl text-black" />
                ) : (
                  <RiUploadCloud2Fill className="text-4xl text-black" />
                )}
              </motion.div>
              <span className={`${isDragging ? "text-black" : "text-black"}`}>
                {isDragging ? "Drop Files Here" : "Drag and Drop Files to Upload"}
              </span>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
              />
            </motion.div>
          </label>
        )}

        {/* Uploading Progress */}
        {uploading && (
          <div className=" flex items-center bg-white p-2 rounded-lg relative z-10">
            {/* File Preview Icon */}
            {filePreviews.length > 0 && (
              <div className="mr-1 mt-8">
                {filePreviews[filePreviews.length - 1] === "pdf" ? (
                  <FaFilePdf className="text-red-500 text-2xl" />
                ) : filePreviews[filePreviews.length - 1] === "folder" ? (
                  <FaFolder className="text-yellow-500 text-2xl" />
                ) : (
                  <img
                    src={filePreviews[filePreviews.length - 1]}
                    alt="File Preview"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                )}
              </div>
            )}
            {/* Progress Bar */}
            <div className="w-full">
              <h3 className="text-black font-semibold text-base font-sans ">Uploading...</h3>
              <div className="mt-2 w-full bg-[#929191] rounded-lg overflow-hidden p-0.5">
                <motion.div
                  className="bg-green-500 p-1 rounded-sm"
                  animate={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Uploaded Files */}
        {!uploading && files.length > 0 && (
          <div className="p-6 bg-white rounded-md relative z-10">
            <h3 className="text-white font-semibold mb-2 rounded-lg bg-green-500 py-1 px-3 flex justify-center items-center gap-2 w-fit mx-auto font-sans">
              <IoIosCheckmarkCircleOutline />
              Completed
            </h3>
            <ul className="list-disc text-sm text-black font-sans font-semibold mt-4 flex flex-col gap-2">
              {files.map((file, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {filePreviews[idx] === "pdf" ? (
                    <FaFilePdf className="text-red-500 text-2xl" />
                  ) : filePreviews[idx] === "folder" ? (
                    <FaFolder className="text-yellow-500 text-2xl" />
                  ) : (
                    <img
                      src={filePreviews[idx]}
                      alt="File Preview"
                      className="w-8 h-8 object-cover rounded-md border"
                    />
                  )}
                  {file}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fileuploader;



