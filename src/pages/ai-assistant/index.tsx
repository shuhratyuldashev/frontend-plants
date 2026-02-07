import AiChatInput from "@/widgets/ai-chat-input/ui";

export default function AiAssistantPage() {
  return (
    <div className="relative container py-8 h-screen mx-auto max-w-4xl">
      <h1 className="text-3xl font-medium">AI Assistant</h1>

      <AiChatInput />
    </div>
  );
}
