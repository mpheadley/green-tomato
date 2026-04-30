import Comments from "@/app/components/Comments";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Guestbook",
  description: `Sign the guestbook for ${siteConfig.name}.`,
};

const fakeEntries = [
    {
        name: "BrendaC61",
        location: "Oxford, AL",
        date: "April 12, 1999",
        message: "Great site!!! Found y'all thru my cousin Darlene. Keep up the good work!!!! 🍅",
    },
    {
        name: "DaleW_Anniston",
        location: "Anniston, AL",
        date: "March 3, 2001",
        message: "First time visitor. Very informative. Will bookmark.",
    },
    {
        name: "PastorBrad_Oxford",
        location: "Oxford, AL",
        date: "February 14, 2003",
        message: "Wonderful resource for our community. God bless. — Pastor B",
    },
    {
        name: "WarEagle72",
        location: "Lincoln, AL",
        date: "September 1, 2001",
        message: "Where is the sports section?? Need scores from the Wellborn game.",
    },
    {
        name: "Kathy_from_Saks",
        location: "Saks, AL",
        date: "June 22, 2000",
        message: "My grandson is in the paper for his pinewood derby car. I am so proud. Thank you Green Tomato.",
    },
    {
        name: "ConcernedCitizen",
        location: "Weaver, AL",
        date: "October 30, 2002",
        message: "I am concerned about the proposed bypass. It will bring too much traffic. I have written the commission.",
    },
    {
        name: "HotRodMan",
        location: "Eastaboga, AL",
        date: "July 4, 1998",
        message: "Yall need to cover the races at Talladega more. It is the biggest thing in the county.",
    },
    {
        name: "GlendaB",
        location: "Jacksonville, AL",
        date: "December 25, 2004",
        message: "Merry Christmas to all the staff at the Green Tomato. And a happy new year.",
    },
    {
        name: "Dale",
        location: "Anniston, AL",
        date: "April 30, 2026",
        message: "GT is the best free news, beats the pants off AL.bomb!!!",
    },
]

export default function GuestbookPage() {
  return (
    <>
      <div className="gt-section-header">★ Sign Our Guestbook ★</div>
      <div className="guestbook-entries">
        {fakeEntries.map((entry, i) => (
          <div key={i} className="guestbook-entry">
            <p className="guestbook-message">&quot;{entry.message}&quot;</p>
            <p className="guestbook-meta">
              — <strong>{entry.name}</strong> · {entry.location} · {entry.date}
            </p>
          </div>
        ))}
      </div>
      <hr className="gt-rule" />
      <div className="guestbook-form-container">
        <p className="guestbook-notice">All entries subject to editorial review by The Green Tomato staff.</p>
        <Comments slug="guestbook" />
      </div>
    </>
  );
}