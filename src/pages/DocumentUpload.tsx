import { useEffect, useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Autocomplete, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from "@mui/material";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from '@mui/material/Checkbox';

const nameData = [
    { names: 'Taonga Nambela', gn: 1234 },
    { names: 'Nashon Kampamba', gn: 1123 },
    { names: 'Wilson Simwanza', gn: 2223 },
    { names: 'Alinaswe ', gn: 2344 }
];

function DocumentUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedNames, setSelectedNames] = useState([]);
    const [submittedData, setSubmittedData] = useState([]);
    const [namesData, setNamesData] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
//@ts-ignore
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
//@ts-ignore

    const handleNameChange = (event, newValue) => {
        setSelectedNames(newValue);
    };

    const handleSubmit = async () => {
        try {
            if (!selectedFile) {
                setError("No file selected");
                return;
            }
    
            const formData = new FormData();
            formData.append('file', selectedFile);
            selectedNames.forEach((name) => {
                //@ts-ignore

                formData.append('names[]', name.names);
            });
    
            const response = await axios.post(`url`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    //@ts-ignore

            setSubmittedData([...submittedData, response.data]);
    
            setSelectedFile(null);
            setSelectedNames([]);
    
            setSuccess("Data submitted successfully");
            setTimeout(() => {
                setSuccess("");
            }, 3000);
        } catch (error) {
            setError("Error submitting data");
            console.error('Error submitting data:', error);
        }
    };

    const fetchNamesData = async () => {
        try {
            const response = await axios.get('api for combo box');
            return response.data;
        } catch (error) {
            console.error('Error fetching names data:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNamesData();
            setNamesData(data);
        };

        fetchData();
    }, []);

    return (
        <div className=''>
            <br /><br /><br />

            <h1 className=" font-bold text-xl md:text-2xl">
                File Upload
            </h1>
            <br /> {success && (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    {success}
                </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <form action="">
                <div className="flex flex-col center-items justify-center text-center sm:flex-col md:flex-row">
                    <div className="flex gap-5 flex-col center-items justify-center text-center sm:flex-col md:flex-row md:space-x-28 md:justify-between ">
                        <div>
                            <input
                                id="file-input"
                                type="file"
                                accept=".jpg, .jpeg, .png, .pdf"
                                onChange={handleFileChange}
                                hidden
                            />
                            <button className="bg-[#7f23cf] text-white w-[300px] h-[55px] rounded-md sm:ml-[0px] sm:w-[500px] md:w-[450px]">
                                <label htmlFor="file-input" > <CloudUploadIcon className="h-[60px] mr-6"/> Upload Document</label>
                            </button>
                        </div>
                        <div className="ml-[49px] sm:ml-[60px]">
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={nameData}
                                getOptionLabel={(option) => option.names}
                                onChange={handleNameChange}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Signed By"
                                        placeholder=""
                                        InputLabelProps={{
                                            style: { color: 'black' }
                                        }}
                                        sx={{
                                            color: 'green',
                                            borderColor: 'purple',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#9333EA',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#9333EA',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#9333EA',
                                                },
                                            },
                                        }}
                                    />
                                )}
                                className="w-[300px] sm:w-[500px] md:w-[450px]"
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="absolute right-4 bottom-5 md:right-0">
                <button className="h-[50px] w-[300px] text-white bg-[#9333EA] rounded-md md:mr-20" onClick={handleSubmit}>Submit</button>
            </div>
            <br />
        </div>
    );
}

export default DocumentUpload;
