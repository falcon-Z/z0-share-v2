import Gun from "gun/gun";
import SEA from "gun/sea";
import "gun/lib/radix";
import "gun/lib/radisk";
import "gun/lib/store";
import "gun/lib/rindexed";
import "gun/lib/webrtc";
import "gun/nts";

export const db = Gun();
export const sea = SEA;
export const user = db.user().recall({ sessionStorage: true });
