import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Login from "./login";
import Registation from "./register";

export default function AuthCard() {
  return (
    <Card className="max-w-xl w-full">
      <Tabs defaultValue="sign-in" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="sign-in" className="w-full">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="sign-up" className="w-full">
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in" className="p-4">
          <Login />
        </TabsContent>
        <TabsContent value="sign-up" className="p-4">
          <Registation />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
