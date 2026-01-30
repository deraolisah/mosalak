const MessageList = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* System Message */}
      <div className="bg-primary/10 p-4 rounded-lg text-sm">
        🔒 Payment held in escrow for Order #MOS-2847
        <span className="block text-xs text-gray-500 mt-1">10:45 AM</span>
      </div>

      <Message
        name="Chioma Adeleke"
        badge="Gold"
        role="Seller"
        message="Good morning everyone! Just launched my new collection on the marketplace. Would love your feedback! 🎉"
      />

      <Message
        name="Tunde Bakere"
        badge="Silver"
        role="Buyer"
        message="Congratulations Chioma! I’ll check it out. Has anyone tried the new search filters?"
      />

      <Message
        name="Ngozi Okonkwo"
        badge="Platinum"
        role="Freelancer"
        message="Yes! The filters are super helpful. Makes discovery much easier."
      />
    </div>
  );
};

export default MessageList;

/* Message Component */
const Message = ({ name, badge, role, message }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
      {name[0]}
    </div>

    <div className="flex-1">
      <div className="flex items-center gap-2">
        <span className="font-semibold">{name}</span>
        <span className="text-xs bg-yellow-100 px-2 rounded">
          {badge}
        </span>
        <span className="text-xs bg-gray-100 px-2 rounded">
          {role}
        </span>
        <span className="text-xs text-gray-400">10:24 AM</span>
      </div>

      <p className="text-gray-700 mt-1">{message}</p>

      <div className="flex gap-2 mt-2 text-sm">
        <button className="px-2 py-1 bg-gray-100 rounded">👍 5</button>
        <button className="px-2 py-1 bg-gray-100 rounded">🔥 3</button>
      </div>
    </div>
  </div>
);