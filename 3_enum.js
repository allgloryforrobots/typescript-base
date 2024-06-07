var Membership;
(function (Membership) {
    Membership[Membership["Single"] = 0] = "Single";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
// Reversed enum
var reversedMembership = Membership[2];
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.VK;
console.log(SocialMedia.VK);
