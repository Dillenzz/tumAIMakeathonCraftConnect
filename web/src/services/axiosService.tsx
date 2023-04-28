import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// send the text report to the backend
export const postTextReport = (report: string) => {
  return axiosInstance.post("/api/report", {
    reportType: "text",
    report,
  });
};
