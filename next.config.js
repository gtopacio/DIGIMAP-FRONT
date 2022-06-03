/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/jobs",
        destination: "http://localhost:8080/jobs",
      },
    ];
  };
  return {
    reactStrictMode: true,
    rewrites,
  };
};