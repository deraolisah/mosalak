const MessageInput = () => {
  return (
    <div className="bg-white p-4 flex items-center gap-3">
      <button>📎</button>
      <button>🖼️</button>
      <button>📅</button>

      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
      />

      <button className="bg-primary text-white px-4 py-2 rounded-lg">
        ➤
      </button>
    </div>
  );
};

export default MessageInput;