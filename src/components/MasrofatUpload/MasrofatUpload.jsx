import React from "react";
import { Button, Img, Text } from "components";
import MasrofatSectionheader from "components/MasrofatSectionheader/MasrofatSectionheader";
import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

const MasrofatUpload = () => {
  const [isNaviVisible, setIsNaviVisible] = useState(true);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [masrof, setMasrof] = React.useState("");

  const handleChangeMasrof = (event) => {
    setMasrof(event.target.value);
  };

  return (
    <div>
      <div className=" right-[0] flex flex-col justify-start left-[0] md:px-5 w-auto">
        <div className="flex flex-col items-start justify-start max-w-[1098px] p-8 sm:px-5 w-full">
          <div className="bg-white-A700 flex flex-col gap-6 items-end justify-start p-6 sm:px-5 rounded-[12px] w-full">
            <MasrofatSectionheader className="flex flex-col gap-5 items-end justify-start w-full" />
            <div
              className="bg-white-A700 border-2 border-deep_purple-400 border-solid flex flex-col items-center justify-start sm:px-5 px-6 py-4 rounded-[12px] w-full upload-data cursor-pointer"
              onClick={handleUploadClick}
            >
              <div className="flex flex-col gap-3 items-center justify-start w-full">
                <Button className="bg-white-A700 border border-blue_gray-50 border-solid flex h-10 items-center justify-center p-2.5 rounded-lg shadow-bs w-10">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <Img
                    className="h-5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <div className="flex flex-col gap-1 items-center justify-start w-full">
                  <div className="flex flex-row gap-1 items-start justify-center w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="ArRe14BlueGray700"
                    >
                      أو قم بسحبه هنا
                    </Text>
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-deep_purple-500 text-sm w-auto"
                        size="PlArSemiBoldPurple14"
                      >
                        أضغط هنا لرفع الملف
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-center text-xs w-full"
                    size="PlexRegular12"
                  >
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-end w-full">
              <div className="flex sm:flex-1 flex-col gap-4 items-end justify-start w-[512px] sm:w-full">
                <div className="flex flex-col gap-4 items-end justify-start w-full">
                  <Box className="h-[46px]   justify-center  w-full">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        بند المصروف
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={masrof}
                        label="بند المصروف"
                        onChange={handleChangeMasrof}
                      >
                        <MenuItem value={1}>البند الأول</MenuItem>
                        <MenuItem value={2}> البند الثاني</MenuItem>
                        <MenuItem value={3}>البند الثالث</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <TextField
                    className="  h-[46px]   justify-start  w-full"
                    label="وصف المصروف"
                    variant="outlined"
                  />
                  <TextField
                    className="  h-[46px]   justify-start  w-full"
                    label="المبلغ"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end justify-start w-[280px]">
                <Text
                  className="text-blue_gray-800 text-right text-sm w-full"
                  size="ArBo14BlueGray800"
                >
                  إضافة مصروفات
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button className="bg-deep_purple-400 border border-deep_purple-400 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-lg shadow-bs text-base text-center text-white-A700 w-full">
                    إضافة
                  </Button>
                  <Button className="bg-gray-50_02 border border-deep_purple-50 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-lg shadow-bs text-base text-center text-deep_purple-500 w-full">
                    إلغاء
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasrofatUpload;
