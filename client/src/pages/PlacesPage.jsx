import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Perks from "../PerksLabels";
import PhotosUploader from "../PhotosUploader";
export default function PlacesPage(){
    const{action}=useParams();
    const [title, setTitle] = useState('');
const [address, setAddress] = useState('');
const [addedPhotos, setAddedPhotos] = useState([]);
const [description, setDescription] = useState('');
const [perks, setPerks] = useState([]);
const [extraInfo, setExtraInfo] = useState('');
const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
const [maxGuests, setMaxGuests] = useState (1);
function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>
}


function inputDescription(text) {
    return (<p className="text-gray-500 text-sm">{text}</p>)
}

function preInput(header, description) {
    return (
        <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    )
}


    return(<div>
        {action!== 'new' &&(

             <div className="text-center">
            <Link className="inline-flex bg-primary text-white py-2 px-6 rounded-full" to ={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                add new place</Link>
                </div>

        ) }
       
       {action==='new' &&(
       <div>
            <form >
                {preInput('Title','title for your place. should be short and catchy')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
                {preInput('Address','address ofthe place')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
                {preInput('Photos','the more the better')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>

           
 
                {preInput('Description','description of the place')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
                {preInput('Perks','select all the perks of your place')}

            
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:cols-6">
                <Perks selected={perks} onChange={setPerks} />                
                </div>
                {preInput('Extra info','personal rules')}
                <textarea value={extraInfo} onChange={ev=> setExtraInfo(ev.target.value)}/>
                {preInput('Check in&out times','add check in&out times, remember to have some time window for cleaning the room between guest')}
                <div className="grid sm:grid-cols-3">

                    <div>
                        <h3 className="mt-2 -mb-1">check in time</h3>
                        <input type="text" value={checkIn} onChange={ev=> setCheckIn(ev.target.value)} placeholder="14" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">check out time</h3>
                        <input type="text" value={checkOut} onChange={ev=> setCheckOut(ev.target.value)} placeholder="11" />
                    </div>
                    <div>
                    <h3 className="mt-2 -mb-1">max number of guests</h3>

                        <input type="text" value={maxGuests} onChange={ev=> setMaxGuests(ev.target.value)} />
                    </div>
                 
                </div>
                <div>
                       <button className="primary my-4"> Save</button> 
                    </div>
            </form>
       </div> 
       )}
    </div> 
    );
} 