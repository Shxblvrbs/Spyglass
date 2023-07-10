/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
/* eslint-disable default-case */
import React from "react";
import Button from "../FormSubmitButton/FormSubmitButton";
export default function ShareUrlButton(props) {
  const { link, platform, text, children } = props;
  const subject = props?.subject;
  const urlShareHandler = () => {
    let platformUrl;
    switch (platform) {
      case "twitter": {
        platformUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          link
        )}&text=${encodeURIComponent(text)}`;
        break;
      }
      case "facebook": {
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          link
        )}&quote=${encodeURIComponent(text)}`;
        break;
      }
      case "likendin": {
        platformUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          link
        )}&title=${encodeURIComponent(
          "join the chashola".replaceAll(" ", "%20")
        )}`;
        break;
      }
      case "email": {
        platformUrl = `mailto:?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          "Hi,\n\nI wanted to share this website with you:\n\n" + link
        )}`;
        break;
      }
    }

    window.open(platformUrl, "_blank", "width=500,height=500");
  };
  return <Button onClick={urlShareHandler}>{children}</Button>;
}
