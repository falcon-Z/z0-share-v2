import Gun from "gun/gun";
import SEA from "gun/sea";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";
import "gun/lib/webrtc";
import "gun/nts";

export const db = Gun({
  peers: ["http://localhost:3000/gun"],
});
export const sea = SEA;

export const User = db.user();
