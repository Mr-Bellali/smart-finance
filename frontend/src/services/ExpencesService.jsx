import api from "../api/api";

const createExpence = async (transactionData) => {
    try {
      const response = await api.post('/expence', transactionData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export { createExpence }