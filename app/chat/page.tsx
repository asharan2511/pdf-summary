"use client";
import axios from "axios";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface Message {
  id: number;
  text?: string;
  fileName?: string;
  sender: "user" | "llm";
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! Ask me anything.", sender: "llm" },
  ]);
  const [input, setInput] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Mock LLM response (replace with real API call as needed)
  const fetchLLMResponse = async (input: string) => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }

      formData.append("question", input);
      const upload = await axios.post(
        "http://192.168.1.36:8081/ask",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(upload);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async (): Promise<void> => {
    if (input.trim() === "" && !file) return;

    const newMessages: Message[] = [];
    if (input.trim() !== "") {
      newMessages.push({ id: Date.now(), text: input, sender: "user" });
    }
    if (file) {
      newMessages.push({
        id: Date.now() + 1,
        fileName: file.name,
        sender: "user",
      });
    }

    setMessages((prev) => [...prev, ...newMessages]);
    setInput("");
    setFile(null);

    if (input.trim() !== "") {
      const llmResponse = await fetchLLMResponse(input);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, text: llmResponse, sender: "llm" },
      ]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      void handleSend();
    }
  };

  return (
    <div className="w-96 border border-gray-300 p-4 rounded flex flex-col">
      <div className="h-72 overflow-y-auto mb-3 border border-gray-200 p-2 rounded flex flex-col gap-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[75%] px-3 py-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            {msg.text && <div>{msg.text}</div>}
            {msg.fileName && (
              <div>
                📎{" "}
                <a href="#" className="underline">
                  {msg.fileName}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type message..."
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => void handleSend()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Send
        </button>
        <label
          htmlFor="upload"
          className="cursor-pointer px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition flex items-center"
        >
          Upload
        </label>
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".pdf,.jpg"
        />
      </div>

      {file && (
        <div className="mt-3 text-sm text-gray-700">
          <strong>Selected file:</strong> {file.name}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
