import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';



function SignaturePad() {
    const [sign, setSign] = useState();
    const [urls, setUrls] = useState([]);

    const handleClear = () => {
         // @ts-ignore
        sign.clear();
    };

    const handleGenerate = () => {
         // @ts-ignore
        const newUrl = sign.getTrimmedCanvas().toDataURL('image/png');
        if(urls.length <= 2){
            // @ts-ignore
            setUrls([...urls, newUrl]);
        }
    };
                 // @ts-ignore
    const handleDelete = (index) => {
        const updatedUrls = urls.filter((_, i) => i !== index);
        setUrls(updatedUrls);
    };

    return (
        <div>
            <br />
            <h1 className="mb-8 mt-8 font-bold text-xl md:text-2xl">Signatures</h1>
            <div className="border-2 border-purple-700 rounded-md ml-3 w-[350px] sm:h-[200px] sm:w-[530px] md:w-[530px] md:ml-72">
                <SignatureCanvas
                    canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                     // @ts-ignore
                    ref={(data) => setSign(data)}
                />
            </div>

            <br />
            <div className="center-items justify-center flex space-x-5">
                <button className="text-white bg-purple-700 h-[40px] w-[100px] rounded-md" onClick={handleClear}>Clear</button>
                <button className="text-white bg-purple-700 h-[40px] w-[100px] rounded-md" onClick={handleGenerate}>Save</button>
            </div>

            <br />
            <div className='flex space-x-3 items-center justify-center '>
            {urls.map((url, index) => (
                index < 3 && (
        <div key={index} className="border-2 border-purple-700 h-[100px] w-[200px] flex flex-col ">
            <img src={url} className="h-[100px] w-[200px] " alt={`Signature ${index + 1}`} />
            <div className='justify-center center-items flex'>
                            <button className="text-white bg-red-700 h-[30px] w-[100px] rounded-md mt-10" onClick={() => handleDelete(index)}>Delete</button>

            </div>

        </div>
    )
        ))}



            </div>
        </div>
    );
}

export default SignaturePad;
