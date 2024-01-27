import React from "react";

const sizeClasses = {
  ArRe14BlueGray700:"font-ibmplexsansarabic font-normal",
  ArMe14BlueGray800: "font-ibmplexsansarabic font-medium",
  ArBo14BlueGray800:"font-ibmplexsansarabic font-semibold",
  PLArSemiBold20: "font-ibmplexsansarabic font-semibold",
  PLArSemiBold18: "font-ibmplexsansarabic font-semibold",
  InArSemiBold14: "font-inter font-semibold",
  PlArSemiBoldGray16: "font-ibmplexsansarabic font-semibold",
  PlArSemiBoldPurple14:"font-ibmplexsansarabic font-semibold",
  PlArSemiBold14: "font-ibmplexsansarabic font-semibold",
  InArSemiBold18: "font-inter font-semibold",
  InArSemiBold14Bluegray: "font-inter font-semibold",
  PlexMedium14: "font-ibmplexsansarabic font-medium",
  PlexSemiBold16: "font-ibmplexsansarabic font-semibold",
  PlexMedium12: "font-ibmplexsansarabic font-medium",
  PlexRegular16: "font-ibmplexsansarabic font-normal",
  PlexRegular14: "font-ibmplexsansarabic font-normal",
  InRegular14: "font-inter font-normal",
  InRegular12: "font-ibmplexsans font-normal",
  PlexRegular12: "font-ibmplexsansarabic font-normal",
  PlexRegular14Gray900: "font-ibmplexsansarabic font-normal",
  PlexRegular16Gray600: "font-ibmplexsansarabic font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
