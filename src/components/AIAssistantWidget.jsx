import { useMemo, useState } from "react";
import { assistantContext } from "../lib/assistantContext";
import {
    applyPendingQuestion,
    buildAssistantReply,
} from "../lib/assistantRouter";

const initialAssistantMessage = {
    role: "assistant",
    text: "I can help you understand where AI automation may create value, point you to the right resource, or help determine whether a strategy call makes sense.",
    ctas: [],
};

export default function AIAssistantWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([initialAssistantMessage]);
    const [state, setState] = useState({
        intent: null,
        pendingQuestion: null,
        businessType: "",
        bottleneck: "",
        leadSummary: "",
    });

    const quickActions = useMemo(() => assistantContext.quickActions, []);

    const handleSend = (rawMessage) => {
        const message = rawMessage.trim();
        if (!message) return;

        const userMessage = { role: "user", text: message };
        const lower = message.toLowerCase();

        const writeLeadSummaryToForms = (summary) => {
            const strategyField = document.getElementById("lead_summary");
            if (strategyField) {
                strategyField.value = summary || "";
            }

            const frameworkField = document.getElementById("framework_lead_summary");
            if (frameworkField) {
                frameworkField.value = summary || "";
            }
        };

        const questionTriggers = [
            "what",
            "how",
            "why",
            "can",
            "do",
            "should",
            "tell",
            "who",
            "when",
            "where",
        ];

        let workingState = state;

        // If the assistant is waiting for a qualification answer,
        // but the user asks a new question instead, reset the flow first.
        if (
            state.pendingQuestion &&
            questionTriggers.some((word) => lower.startsWith(word))
        ) {
            workingState = {
                intent: null,
                pendingQuestion: null,
                businessType: "",
                bottleneck: "",
                leadSummary: "",
            };
        }

        let updatedState = applyPendingQuestion(workingState, message);

        let reply;

        if (
            updatedState.intent === "strategy_call" &&
            !updatedState.pendingQuestion &&
            updatedState.businessType &&
            !updatedState.bottleneck
        ) {
            reply = {
                intent: "strategy_call",
                text: "Understood. What process or bottleneck are you trying to improve?",
                ctas: [],
                nextState: { ...updatedState, pendingQuestion: "bottleneck" },
            };
        } else if (
            updatedState.intent === "strategy_call" &&
            !updatedState.pendingQuestion &&
            updatedState.businessType &&
            updatedState.bottleneck
        ) {
            reply = {
                intent: "strategy_call",
                text: `It sounds like you're exploring AI automation for a ${updatedState.businessType} and focusing on improving ${updatedState.bottleneck}. A short strategy call is usually the fastest way to determine whether automation or system redesign makes sense. Use the Strategy Call link to book directly.`,
                summary: `Lead Intent: Strategy Call | Business Type: ${updatedState.businessType} | Focus Area: ${updatedState.bottleneck}`,
                ctas: [
                    {
                        label: assistantContext.offers.strategy_call.ctaLabel,
                        href: assistantContext.offers.strategy_call.href,
                    },
                ],
                nextState: {
                    ...updatedState,
                    leadSummary: `Lead Intent: Strategy Call | Business Type: ${updatedState.businessType} | Focus Area: ${updatedState.bottleneck}`,
                },
            };
        } else {
            reply = buildAssistantReply({
                message,
                state: updatedState,
                offers: assistantContext.offers,
            });
        }

        const assistantMessage = {
            role: "assistant",
            text: reply.text,
            ctas: reply.ctas || [],
            summary: reply.summary || "",
        };

        if (reply.summary) {
            writeLeadSummaryToForms(reply.summary);
        }

        setMessages((prev) => [...prev, userMessage, assistantMessage]);
        setState(reply.nextState);
        setInput("");
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-5 z-50 rounded-full bg-gray-900 text-white px-5 py-3 shadow-lg hover:bg-black transition"
                    aria-label="Open AI Readiness Advisor"
                >
                    AI Advisor
                </button>
            )}

            {isOpen && (
                <div className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[92vw] rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                {assistantContext.assistantTitle}
                            </p>
                            <p className="text-xs text-gray-500">
                                Focused guidance for AI automation next steps
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-800 text-sm"
                            aria-label="Close assistant"
                        >
                            Close
                        </button>
                    </div>

                    <div className="px-4 pt-3 pb-2 border-b border-gray-100 bg-white">
                        <div className="flex flex-wrap gap-2">
                            {quickActions.map((action) => (
                                <button
                                    key={action}
                                    onClick={() => handleSend(action)}
                                    className="text-xs rounded-full border border-gray-300 px-3 py-1.5 hover:bg-gray-100"
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-[360px] overflow-y-auto px-4 py-4 space-y-3 bg-white">
                        {messages.map((msg, idx) => (
                            <div
                                key={`${msg.role}-${idx}`}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-gray-900 text-white"
                                        : "bg-gray-100 text-gray-900"
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    {msg.summary && (
                                        <div className="mt-3 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700">
                                            <p className="font-semibold text-gray-900">Lead Summary</p>
                                            <p className="mt-1">{msg.summary}</p>
                                        </div>
                                    )}
                                    {msg.role === "assistant" && !msg.ctas?.length && idx > 0 && (
                                        <div className="mt-3 text-xs text-gray-500">
                                            <p>You could also ask:</p>
                                            <ul className="mt-1 list-disc list-inside">
                                                <li>What types of workflows can AI automate?</li>
                                                <li>How does a RAG knowledge system work?</li>
                                                <li>How long does an AI implementation usually take?</li>
                                            </ul>
                                        </div>
                                    )}

                                    {msg.ctas?.length > 0 && (
                                        <div className="mt-3 flex flex-col gap-2">
                                            {msg.ctas.map((cta) => (
                                                <a
                                                    key={`${cta.label}-${cta.href}`}
                                                    href={cta.href}
                                                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className="inline-flex justify-center rounded-lg bg-white border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                                                >
                                                    {cta.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 p-3 bg-white">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSend(input);
                                }}
                                placeholder="Ask about AI automation, the framework, or a strategy call"
                                className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            <button
                                onClick={() => handleSend(input)}
                                className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}