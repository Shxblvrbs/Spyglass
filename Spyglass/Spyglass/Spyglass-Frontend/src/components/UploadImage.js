import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
const UploadImage = ({ onAddImage, images }) => {
  const onChange = ({ fileList: newFileList }) => {
    onAddImage(newFileList);
  };
  const onPreview = async file => {
    console.log("executed");
    let src = file?.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const beforeUpload = file => {
    const allowedTypes = ["image/jpeg", "image/png"];
    const isAllowedType = allowedTypes.includes(file.type);
    if (!isAllowedType) {
      message.error("You can only upload JPG/PNG images");
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB");
      return false;
    }
    return true; // Return true to allow adding the file to the state
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        className="upload-image "
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={images}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload} // Add this line
      >
        {images?.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};
export default UploadImage;
