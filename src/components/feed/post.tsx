import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Post(post: {
  who: string;
  what: string;
  when: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Avatar>
          <AvatarImage
            src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${post.who}&backgroundType=gradientLinear&backgroundRotation=0,360`}
          />
          <AvatarFallback>{post.who.charCodeAt(0)}</AvatarFallback>
        </Avatar>
        <h4 className="text-lg font-semibold">{post.who}</h4>
        <p className="text-sm text-muted-foreground">{post.when}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-400">{post.what}</p>
      </div>
    </div>
  );
}
