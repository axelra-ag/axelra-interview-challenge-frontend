export const getDomain = () => {
  if (isProduction()) {
    // TODO: insert prod url
    return "";
  }
  return "http://localhost:3001";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
