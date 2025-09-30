import React from "react";
import "../styles/Icon.scss";

type IconProps = {
  lang: string;
};

const fa_class: { [key: string]: string } = {
  php: "fa-brands fa-php",
  symfony: "fa-brands fa-symfony",
  rust: "fa-brands fa-rust",
  //   mysql: "fa-solid fa-database",
  //   nosql: "fa-solid fa-database",
  js: "fa-brands fa-js",
  vue: "fa-brands fa-vue",
  react: "fa-brands fa-react",
  css: "fa-brands fa-css",
  sass: "fa-brands fa-sass",
};

const Icon: React.FC<IconProps> = ({ lang, ...others }) => {
  const lower = lang.toLowerCase();
  if (!fa_class.hasOwnProperty(lower)) return <></>;
  return <i {...others} className={fa_class[lower]}></i>;
};

export default Icon;
