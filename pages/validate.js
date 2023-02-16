import getConfig from "next/config";

const Validate = () => {
  const { publicRuntimeConfig } = getConfig();
  return <span>{JSON.stringify(publicRuntimeConfig)}</span>;
};

export default Validate;
