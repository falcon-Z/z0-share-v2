import React, { useState } from "react";
import { Button } from "@falcon-z/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@falcon-z/components/ui/card";
import { Input } from "@falcon-z/components/ui/input";
import { PersonIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";

export default function AuthPage() {
  // State for storing form values and errors
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  // Validate form fields
  const validate = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    if (!formData.username) {
      errors.username = "Username is required";
      valid = false;
    }
    if (!formData.password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle form submission for creating an account
  const createAccount = () => {
    if (validate()) {
      console.log("Creating account with:", formData);
      // Add your account creation logic here
    }
  };

  // Handle form submission for login
  const login = () => {
    if (validate()) {
      console.log("Logging in with:", formData);
      // Add your login logic here
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">
            <PersonIcon className="inline-block mr-2 h-12 w-12" />
          </CardTitle>
          <CardDescription>
            Choose Create an account or login to your existing account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Button className="w-full" variant={"ghost"} onClick={createAccount}>
            Create new account
          </Button>
          <Button className="w-full" onClick={login}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
