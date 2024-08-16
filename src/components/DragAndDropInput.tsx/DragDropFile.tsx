import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./drop-file-input.css";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"

interface DragDropFileProps {
	onFileChange: (fileList: File[]) => void;
}

const DragDropFile: React.FC<DragDropFileProps> = (props) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [fileList, setFileList] = useState<File[]>([]);

	const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
	const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");
	const onDrop = () => wrapperRef.current?.classList.remove("dragover");

	const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			if (newFile.type === "application/pdf") {
				const updatedList = [...fileList, newFile];
				setFileList(updatedList);
				props.onFileChange(updatedList);
			} else {
				alert("Please only upload PDF files.");
			}
		}
	};

	const fileRemove = (file: File) => {
		const updatedList = [...fileList];
		const index = updatedList.indexOf(file);
		if (index !== -1) {
			updatedList.splice(index, 1);
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	};

	const uploadFiles = async () => {
		try {
			const formData = new FormData();
			fileList.forEach((file) => {
				formData.append("files", file);
			});
			await axios.post("your_backend_url_here", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			// Optionally, perform any actions after successful upload
			console.log("Files uploaded successfully!");
		} catch (error) {
			console.error("Error uploading files:", error);
			// Optionally, handle errors
		}
	};
	

	return (
		<div className=" p-2 w-full h-screen">
			<div className="flex ml-auto items-center justify-between w-full mb-8">
				<div className="inline-block">
					<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">
						upload document
					</h1>
				</div>
			</div>


			<div className="bg-white rounded-md dark:bg-slate-900 pb-2 ">
				<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
					<h2 className="text-left w-full p-2 pl-3 text-xl">
						Submit Resignation
					</h2>
				</div>

				<div className="center-items justify-center flex mt-5 mb-3">
					<div className="drop-file-input__label border-4 border-gray-800 dark:border-white rounded-lg border-dashed w-[400px]">
						<div className="text-center center-items justify-center flex mt-2">
							<div
								ref={wrapperRef}
								className="drop-file-input"
								onDragEnter={onDragEnter}
								onDragLeave={onDragLeave}
								onDrop={onDrop}
							>
								<div className="">
									<img src={uploadImg} alt="" className="ml-12" />
									<p className="w-full text-center">
										Drag & Drop your files here
									</p>
								</div>
								<input type="file" value="" onChange={onFileDrop} />
							</div>
						</div>
					</div>
				</div>

			{fileList.length > 0 ? (
				<div className="drop-file-preview p-6">
					<p className="drop-file-preview__title">Ready to upload</p>
					{fileList.map((item, index) => (
						<div key={index} className="drop-file-preview__item">
							{/*  tsx Error */}
							<img
								src={
									// @ts-ignore
									ImageConfig[item.type.split("/")[1]] ||
									ImageConfig["default"]
								}
								alt=""
							/>
							<div className="drop-file-preview__item__info">
								<p>{item.name}</p>
								<p>{item.size}B</p>
							</div>
							<span
								className="drop-file-preview__item__del"
								onClick={() => fileRemove(item)}
							>
								<IconButton className="text-gray-900 dark:text-gray-500">
									<ClearRoundedIcon className="text-gray-500 h-10 w-[100px]" />
								</IconButton>
							</span>
						</div>
					))}
				</div>
			) : null}
		
	
		</div><div className="mt-4 justify-center flex items-center overflow-y">
          <Link to="offBoardingcheckList">
            <button className="bg-green-500 text-white h-9 w-32 rounded-md ">
              Submit
            </button>
          </Link>
        </div>

		<div className="text-center mt-10">
			<h2 className=" font-bold text-red-800 dark:text-red-400 ">Please wait for feed back after submiting your Resignation letter</h2>
		</div>
		</div>
	);
};

DragDropFile.propTypes = {
	onFileChange: PropTypes.func.isRequired,
};

export default DragDropFile;



//this component is rendered using resignation.