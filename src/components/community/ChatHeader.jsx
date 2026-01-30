const ChatHeader = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div>
        <h2 className="font-semibold"># general</h2>
        <p className="text-sm text-gray-500">
          Main community discussion for all Mosalak users
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button>🔍</button>
        <button>📌</button>
        <button>👥</button>
        <button>ℹ️</button>
      </div>
    </header>
  );
};

export default ChatHeader;