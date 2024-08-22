import NewPost from "@falcon-z/components/feed/newPost";
import Header from "@falcon-z/components/header";
import { Card, CardContent, CardHeader } from "@falcon-z/components/ui/card";
import { ListBulletIcon } from "@radix-ui/react-icons";

export default function FeedPage() {
  return (
    <div className="h-full w-full">
      <Header />
      <Card className="w-full h-full container mx-auto my-32 bg-opacity-25  border-opacity-50 backdrop-blur bg-gray-950">
        <CardHeader>
          <h1 className="text-2xl font-semibold flex items-center">
            <ListBulletIcon className="inline mr-2 h-8 w-8" />
            Feed
          </h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <NewPost />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
