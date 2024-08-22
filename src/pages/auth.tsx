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
import { useAuth } from "@falcon-z/hooks/useAuth";

export default function AuthPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isValid, setIsValid] = useState(true);
  const { createUser, login } = useAuth();

  const validate = () => {
    const error = { username: "", password: "" };

    if (!formData.username) {
      error.username = "Username is required";
      setIsValid(false);
    }
    if (!formData.password) {
      error.password = "Password is required";
      setIsValid(false);
    }

    setErrors(errors);
    return isValid;
  };

  const handleUserCreate = () => {
    if (validate()) {
      createUser(formData.username, formData.password);
    }
  };

  const handleLogin = () => {
    if (validate()) {
      login(formData.username, formData.password);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  return (
    <div className="h-screen grid place-items-center">
      <Card className="w-full max-w-sm bg-opacity-25 border-opacity-50 backdrop-blur bg-gray-950 shadow-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            <PersonIcon className="inline-block mr-2 h-12 w-12" />
          </CardTitle>
          <CardDescription className="text-center">
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
          <Button
            className="w-full"
            variant={"ghost"}
            onClick={handleUserCreate}
          >
            Create new account
          </Button>
          <Button className="w-full" onClick={handleLogin}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
