import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { ConversationCard } from "./ConversationCard";
import { Badge } from "@/components/ui/badge";
import { CommentCard } from "./CommentCard";

export const CommentPopup = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Badge variant="outline">Comment</Badge>
      </PopoverTrigger>
      <PopoverContent style={{ marginRight: "8px" }} className="w-[350px]">
        <CommentCard />
      </PopoverContent>
    </Popover>
  );
};

export const TableRowCustom = ({ conversations }) => {
  console.log("conversations in tablerowcustom", conversations);
  console.log("Tablerowcustom ");
  return (
    <tr>
      <ConversationCard conversationsFromTable={conversations} />
    </tr>
  );
};
