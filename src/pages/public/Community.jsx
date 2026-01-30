import Sidebar from "../../components/community/Sidebar";
import ChatHeader from "../../components/community/ChatHeader";
import MessageList from "../../components/community/MessageList";
import MessageInput from "../../components/community/MessageInput";

const Community = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        <ChatHeader />
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default Community;