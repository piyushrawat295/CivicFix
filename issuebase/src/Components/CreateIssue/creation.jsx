import axios from 'axios';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set default marker icon
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Map and Modal styles
const mapContainerStyle = {
  height: '300px',
  width: '100%',
};

const modalMapContainerStyle = {
  height: '500px',
  width: '100%',
};

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

const LocationMarker = ({ position }) => {
  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <div style={{ textAlign: 'center' }}>
          <FaMapMarkerAlt style={{ fontSize: '24px', color: 'red' }} />
          <p>Selected Location</p>
        </div>
      </Popup>
    </Marker>
  );
};

// Function to get address from coordinates
const getAddressFromCoordinates = async (lat, lng) => {
  const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
  return response.data.display_name; 
};

const SubmitIssue = () => {
  const [coordinates, setCoordinates] = useState(center);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

  const onSubmit = async (data) => {
    const file = watch('image');
    if (!file || file.length === 0) {
      toast.error('Please upload an image, video, or audio file.');
      return;
    }

    console.log('Form Data:', data);
    toast.success('Issue submitted successfully!');

    // Reset the form and states after submission
    reset();
    setCoordinates(center); // Reset coordinates
    setAddress(''); // Clear address
    closeMapModal(); // Ensure the modal is closed
  };

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    if (query) {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
      if (response.data.length > 0) {
        const { lat, lon, display_name } = response.data[0];
        const newCoordinates = { lat: parseFloat(lat), lng: parseFloat(lon) };
        setCoordinates(newCoordinates);
        setAddress(display_name);
        toast.success('Location found and set!');
      } else {
        toast.error('Location not found.');
      }
    }
  };

  const handleMapClick = async (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    const newCoordinates = { lat, lng };
    setCoordinates(newCoordinates); 

    const fetchedAddress = await getAddressFromCoordinates(lat, lng);
    setAddress(fetchedAddress);
    toast.success('Location selected on the map!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-[-24]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] mb-14">Submit an Issue</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Title</label>
            <input
              type="text"
              {...register('title', { 
                required: 'Title is required',
                minLength: { value: 10, message: 'Title must be at least 10 characters' }
              })}
              className={`block w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter a brief title for your issue"
            />
            {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              {...register('description', { 
                required: 'Description is required', 
                minLength: { value: 30, message: 'Description must be at least 30 characters' }
              })}
              className={`block w-full p-2 border rounded ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Please describe the issue in detail"
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div>
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Search for a location..."
                className="block w-full p-2 border rounded mb-2"
              />
              {!isMapModalOpen && (
                <MapContainer center={coordinates} zoom={13} style={mapContainerStyle} whenCreated={map => map.locate()}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />
                  <LocationMarker position={coordinates} />
                </MapContainer>
              )}
              <button 
                type="button" 
                onClick={openMapModal} 
                className="mt-2 p-2 bg-gray-600 text-white rounded"
              >
                Select Location on Map
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image, Video or Audio</label>
            <input
              type="file"
              {...register('image', { required: 'Please upload a file' })}
              className={`block w-full p-2 border rounded ${errors.image ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
          </div>

          <button type="submit" className="w-full p-3 bg-gray-600 text-white rounded hover:bg-gray-800">Submit Issue</button>
        </form>

        <Modal isOpen={isMapModalOpen} onRequestClose={closeMapModal} style={{ content: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '80%' } }}>
          <h2 className="text-lg font-bold mb-4">Select Locations</h2>
          <MapContainer center={coordinates} zoom={13} style={modalMapContainerStyle} onClick={handleMapClick}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <LocationMarker position={coordinates} />
          </MapContainer>
          <button onClick={closeMapModal} className="mt-4 p-2 bg-red-500 text-white rounded">Close Map</button>
        </Modal>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SubmitIssue;
