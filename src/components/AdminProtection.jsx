import { useNavigate } from "react-router-dom";

const AdminProtection = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-20 h-[calc(100vh-5rem)] flex flex-col gap-2.5 justify-center items-center text-center">
      <p>This is a protected page for admin, you can not access this page.</p>
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default AdminProtection;
