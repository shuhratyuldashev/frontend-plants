import { Button } from "@/shared/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/shared/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Send } from "lucide-react";

export default function AiChatInput() {
  return (
    <div className="sticky space-y-4 top-[calc(100vh-80px)] left-0 right-0  p-4">
      <nav className="flex items-center justify-center w-full gap-4">
        <Button variant="outline">When to Water?</Button>
        <Button variant="outline">Why do leaves turn yellow?</Button>
        <Button variant="outline">Can I keep it on the balcony?</Button>
      </nav>
      <div className="rounded-xl left-20 right-20 shadow-2xl bg-card border p-4">
        <InputGroup>
          <InputGroupTextarea placeholder="Ask something..." />
          <InputGroupAddon align="block-end">
            <Select defaultValue="model-1">
              <SelectTrigger className="border-none shadow-none py-1 hover:bg-secondary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Models</SelectLabel>
                  <SelectItem value="model-1">Model 1</SelectItem>
                  <SelectItem value="model-2">Model 2</SelectItem>
                  <SelectItem value="model-3">Model 3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputGroupButton
              className="ml-auto"
              size="icon-sm"
              variant="default"
            >
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
