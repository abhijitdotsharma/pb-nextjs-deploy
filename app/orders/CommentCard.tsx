"use-client";
import React, { useEffect, useState, FormEvent } from "react";
import { PopoverClose } from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

// import AWS from "aws-sdk";

export const CommentCard = () => {
  const [file, setFile] = useState<any>(null);
  const [uploadingStatus, setUploadingStatus] = useState<boolean>(false);

  const uploadFile = async () => {
    setUploadingStatus(true);

    try {
      let { data } = await axios.post(
        "/api/upload",
        {
          file: file,
          type: file.type,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log(data, "DATA");

      setUploadingStatus(false);
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  return (
    <>
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
      <Textarea />
      {uploadingStatus && <p>Uploading...</p>}
      <div className="flex justify-between mt-2">
        {/* <Button onClick={handleUpload} size="sm" className="mr-4">
          Comment
        </Button> */}
        <input
          type="file"
          accept="image/*"
          name="image"
          id="selectFile"
          onChange={(e: any) => setFile(e.target.files[0])}
        />
      </div>
    </>
  );
};
