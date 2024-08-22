import { PlusCircledIcon, Share2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { set } from "react-hook-form";

export default function NewPost() {
  const [formData, setFormData] = useState({ postContent: "" });
  const [errors, setErrors] = useState({ postConentent: "" });
  const [isValid, setIsValid] = useState(true);

  const validate = () => {
    const error = { postContent: "" };

    if (!formData.postContent) {
      error.postContent = "Write something before sharing";
      setIsValid(false);
    }

    setErrors(errors);
    return isValid;
  };

  const handlePostCreate = () => {
    if (validate()) {
      console.log("Post created");
      setFormData({ postContent: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  return (
    <div className="flex items-center gap-4">
      <Input
        type="text"
        id="postContent"
        placeholder="What's happening?"
        value={formData.postContent}
        onChange={handleChange}
        required
      />
      {errors.postConentent && (
        <span className="text-red-500 text-sm">{errors.username}</span>
      )}

      <Button onClick={handlePostCreate} disabled={!formData.postContent}>
        Share <Share2Icon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
