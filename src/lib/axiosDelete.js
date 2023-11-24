import axios from "axios";
import toast from "react-hot-toast";

export const axiosDelete = async (endpoint, token = "") => {
  try {
    const res = await axios.delete(
      `https://grand-cineplex-server.vercel.app${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};
