import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { AiOutlineReload } from 'react-icons/ai';

const EmailVerification = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleVerification = async () => {
    await sendEmailVerification();
    toast("Email verification sent...");
  };

  useEffect(() => {
    if (user?.emailVerified) {
      navigate("/home");
    }
  }, [user, navigate]);

  const refreshPage = () =>{
      window.location.reload(false);
  }

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h4 className="text-3xl font-bold mb-3">
                Verify your email at <br />
                {user?.email}
              </h4>
              <button className="text-xl px-4 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800" onClick={handleVerification}>
                Send verification again
              </button>
              <p className="mt-2">Refresh the page you have verified the email</p>
              <button className="mt-2 rounded-full text-2xl border-red-7 bg-blue-700 p-1 text-white" onClick={refreshPage}>
                  <AiOutlineReload className="" />
              </button>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default EmailVerification;