import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';

const mapContainerStyle = {
  height: '200px',
  width: '100%',
};

const center = {
  lat: 28.6139, // Default location (New Delhi)
  lng: 77.2090,
};

export default function SubmitIssue() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(center);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const handleMapClick = (event) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setCoordinates({ lat, lng });
    setLocation(`Lat: ${lat}, Lng: ${lng}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title || !description || !image) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');

    // Here you can handle your image upload and form submission
    // For example, using Fetch or Axios to send the data to your backend
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('location', location);
    // formData.append('coordinates', JSON.stringify(coordinates));
    // formData.append('image', image);

    // const response = await fetch('/api/issues', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (response.ok) {
    //   setSuccess(true);
    //   setTitle('');
    //   setDescription('');
    //   setLocation('');
    //   setImage(null);
    // } else {
    //   setError('Submission failed. Please try again.');
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold text-center mb-6">Submit an Issue</h2>
        {success && (
          <div className="bg-green-100 text-green-800 border border-green-400 p-2 mb-4 rounded">
            Issue submitted successfully!
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-800 border border-red-400 p-2 mb-4 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Issue Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Issue Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter a brief title for your issue"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Please describe the issue in detail (e.g., what happened, when, and any other relevant information)"
              rows="4"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={location}
              readOnly
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Click on the map to select your location"
            />
          </div>

          {/* Google Maps Component */}
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onClick={handleMapClick}
            >
              <Marker position={coordinates} />
            </GoogleMap>
          </LoadScript>

          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image Upload <span className="text-gray-500">(optional but recommended)</span>
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Submit Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
