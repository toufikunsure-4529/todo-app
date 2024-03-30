import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Name({ setName }) {
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfoLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfoLocalStorage) {
      setName(userInfoLocalStorage);
      setLoading(false); // Set loading to false once name is retrieved
    }
  }, []);

  const handleUserNameForm = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(userName));
    console.log("Submitted username:", userName);
    setPopupOpen(false); // Close the popup after form submission
    toast.success("Name Update Successfully");
  };
  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enter your Name</h2>
            <form onSubmit={handleUserNameForm}>
              <input
                type="text"
                placeholder="Enter your name..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Name;
