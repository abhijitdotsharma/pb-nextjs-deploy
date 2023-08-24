"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentPopup } from "./TableRowCustom";
import axios from "axios";
import { useEffect, useState } from "react";

export function ConversationCard({ conversationsFromTable }) {
  // const conversations = await getConversations();

  const [conversations, setConversations] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("conversations from table", conversationsFromTable);

  async function getConversations() {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:3000/api/orders/conversation"
      );
      console.log("res - ", res.data.conversations);
      setConversations(res.data.conversations);
      console.log("yoo - ");
    } catch (error) {
      console.log("err - ", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getConversations();
  }, []);

  if (loading) {
    return <div className="space-y-8 ml-2 p-4">Loading ... </div>;
  }

  return (
    <div className="space-y-8 ml-2 p-4">
      <>
        {conversations &&
          conversations.map((conversation, idx) => (
            <div key={idx} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Financer</p>
                <p className="text-sm text-muted-foreground">3 mins ago</p>
              </div>
              <div className="ml-auto font-medium">
                {conversation?.comment || ""}
              </div>
            </div>
          ))}
        <CommentPopup />
      </>
    </div>
  );
}
