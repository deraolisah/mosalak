const Sidebar = () => {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      {/* <div className="p-6 font-bold text-xl">
        Mosalak<span className="text-primary">Hub</span>
      </div> */}

      {/* Community Info */}
      <div className="px-6 py-4">
        <h3 className="font-semibold">Mosalak Community</h3>
        <p className="text-sm text-gray-500">1,247 members</p>

        <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg">
          Invite to Community
        </button>
      </div>

      {/* Channels */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-6">
        <ChannelGroup
          title="Announcements"
          channels={["platform-updates"]}
          locked
        />

        <ChannelGroup
          title="General"
          channels={["general", "introductions"]}
        />

        <ChannelGroup
          title="Lounges"
          channels={[
            "buyers-lounge",
            "sellers-lounge",
            "freelancers-lounge",
          ]}
        />

        <ChannelGroup
          title="Opportunities"
          channels={["gigs-marketplace"]}
          highlight
        />
      </nav>

      {/* Create Channel */}
      <div className="p-4">
        <button className="w-full border border-dashed py-2 rounded-lg">
          + Create Channel
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

/* Helper */
const ChannelGroup = ({ title, channels, locked, highlight }) => (
  <div>
    <h4 className="text-xs uppercase text-gray-500 mb-2">{title}</h4>
    <ul className="space-y-1">
      {channels.map((ch) => (
        <li
          key={ch}
          className={`px-3 py-2 rounded-lg cursor-pointer text-sm
            ${
              highlight
                ? "bg-primary/10 text-primary"
                : "hover:bg-gray-100"
            }`}
        >
          # {ch}
          {locked && <span className="ml-2 text-xs">🔒</span>}
        </li>
      ))}
    </ul>
  </div>
);
