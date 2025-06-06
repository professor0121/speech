import React from "react";
import styles from "./Footer.module.css";
import { Smile, Paperclip, Mic } from "lucide-react";

const ChatInput = () => {
  return (
    <div className={styles.chatInputContainer}>
      <button className={styles.iconButton}><Smile size={20} /></button>
      <button className={styles.iconButton}><Paperclip size={20} /></button>
      <input
        type="text"
        className={styles.textInput}
        placeholder="Type a message"
      />
      <button className={styles.iconButton}><Mic size={20} /></button>
    </div>
  );
};

export default ChatInput;
