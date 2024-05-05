"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must be a valid email address.";
    }
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required.";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required.";
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone must be in the number format and 10 digit long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", formData);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxOmon6_FAMdxra3R5BOb293Aaw6pSRc6l8a1jf7ABaV8HY5cHdu27dlF80fCKlTrLr/exec",
          {
            redirect: "follow",
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.ok) {
          const data = await response.json();
          setFormData({
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
          });
          setErrors({});
          alert("Record added successfully.");
        }
        // console.log("Form data submitted:", formData,response);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  return (
    <div className="my-2 w-3/4 mx-auto md:w-full">
      <h3 className="font-semibold text-center text-lg md:text-2xl">
        I&#39;m Interested in This Course
      </h3>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.firstName
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:text-white"
              } appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.firstName}
            />
            <label
              htmlFor="floating_first_name"
              className={`peer-focus:font-medium absolute text-sm ${
                errors.firstName
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              }  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              First name
            </label>
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.lastName
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:text-white"
              } appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.lastName}
            />
            <label
              htmlFor="floating_last_name"
              className={`peer-focus:font-medium absolute text-sm ${
                errors.lastName
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              }  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Last name
            </label>
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.email
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:text-white"
              } appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.email}
            />
            <label
              htmlFor="floating_email"
              className={`peer-focus:font-medium absolute text-sm ${
                errors.email
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              }  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Email address
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              id="floating_phone"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                errors.phone
                  ? "border-red-500 text-red-500"
                  : "border-gray-300 dark:border-gray-600 dark:text-white"
              } appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.phone}
            />
            <label
              htmlFor="floating_phone"
              className={`peer-focus:font-medium absolute text-sm ${
                errors.phone
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              }  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Phone number (123-456-7890)
            </label>
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className="md:w-full grid">
          <button
            type="submit"
            className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Processed
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
