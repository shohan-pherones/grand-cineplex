import axios from "axios";
import toast from "react-hot-toast";

export const axiosPut = async (endpoint, data, token = "") => {
  try {
    const res = await axios.put(
      `https://grand-cineplex-server.vercel.app${endpoint}`,
      data,
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
