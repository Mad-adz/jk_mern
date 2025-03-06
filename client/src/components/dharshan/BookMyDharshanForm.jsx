import { useState } from "react";
import PropTypes from "prop-types";
const BookMyDharshanForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Request a Dharshan
      </h3>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full mb-4">
          <label
            className="block text-zinc-500 text-sm font-semibold mb-3"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className="block text-sm custom-input w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-zinc-100"
            placeholder="Enter first name"
            type="text"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="w-full mb-4">
          <label
            className="block text-zinc-500 text-sm font-semibold mb-3"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            className="block text-sm custom-input w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-zinc-100"
            placeholder="Enter last name"
            type="text"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full mb-4">
        <label
          className="block text-zinc-500 text-sm font-semibold mb-3"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="block text-sm custom-input w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-zinc-100"
          placeholder="Enter email address"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="w-full mb-4">
        <label
          className="block text-zinc-500 text-sm font-semibold mb-3"
          htmlFor="mobile"
        >
          Mobile
        </label>
        <input
          className="block text-sm custom-input w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-zinc-100"
          placeholder="Enter mobile number"
          type="text"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>
      <div className="w-full mb-4">
        <label
          className="block text-zinc-500 text-sm font-semibold mb-3"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="block text-sm custom-input w-full px-4 py-2 border border-zinc-300 rounded-lg shadow-sm bg-zinc-100"
          placeholder="Enter message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="bg-zinc-100 p-4 rounded-md flex flex-row-reverse">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-emerald-600 transition-colors duration-300"
        >
          Request
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mr-2 bg-white text-gray-900 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

BookMyDharshanForm.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default BookMyDharshanForm;
