import NewPost from "@falcon-z/components/feed/newPost";
import Header from "@falcon-z/components/header";
import { Avatar, AvatarFallback } from "@falcon-z/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@falcon-z/components/ui/card";
import { db, sea } from "@falcon-z/lib/db";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ListBulletIcon } from "@radix-ui/react-icons";
import Gun from "gun/gun";
import { useEffect, useState } from "react";

export default function FeedPage() {
  const [posts, setPosts] = useState<
    {
      who: string;
      what: string;
      when: string;
    }[]
  >([]);

  useEffect(() => {
    db.get("feed")
      .map()
      .once(async (data, id) => {
        if (data) {
          //key for end to end encryption
          const key = "#foo";

          const post = {
            who: await db.user(data).get("alias"),
            what: (await sea.decrypt(data.what, key)) + "",
            when: Gun.state.is(data, "what"),
          };

          console.log(post);

          if (post.what) {
            setPosts((prev) => [{ ...post, who: String(post.who) }, ...prev]);
          }
        }
      });
  });

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
          <ul className="flex flex-col gap-4">
            {posts.map((post, index) => (
              <li key={index}>
                <Card className="bg-opacity-25  border-opacity-50 backdrop-blur bg-gray-950">
                  <CardHeader>
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${post.who}&backgroundType=gradientLinear&backgroundRotation=0,360`}
                      />
                      <AvatarFallback>{post.who.charCodeAt(0)}</AvatarFallback>
                    </Avatar>

                    <h1 className="text-xl font-semibold">{post.who}</h1>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{post.what}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
