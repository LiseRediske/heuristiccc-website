const normalize = (text = "") => text.toLowerCase().trim();

function isRelevantBusinessQuery(message) {
    const text = normalize(message);

    const relevantTerms = [
        "ai",
        "automation",
        "automate",
        "business",
        "operations",
        "workflow",
        "process",
        "system",
        "systems",
        "architecture",
        "rag",
        "agent",
        "agents",
        "consulting",
        "strategy",
        "framework",
        "white paper",
        "implementation",
        "governance",
        "risk",
        "productivity",
        "efficiency",
        "llm",
    ];

    return relevantTerms.some((term) => text.includes(term));
}

export function detectIntent(message) {
    const text = normalize(message);

    const whitePaperTerms = [
        "white paper",
        "paper",
        "architecture paper",
        "send me the paper",
    ];

    const frameworkTerms = [
        "framework",
        "download",
        "assessment",
        "model",
        "readiness",
    ];

    const strategyTerms = [
        "strategy call",
        "book",
        "call",
        "talk",
        "consulting",
        "consult",
        "need help",
        "implementation",
    ];

    const generalTerms = [
        "what do you do",
        "what is ai automation",
        "can ai help",
        "business operations",
        "systems architecture",
        "automation",
    ];

    if (whitePaperTerms.some((term) => text.includes(term))) return "white_paper";
    if (frameworkTerms.some((term) => text.includes(term))) return "framework_download";
    if (strategyTerms.some((term) => text.includes(term))) return "strategy_call";
    if (generalTerms.some((term) => text.includes(term))) return "general";

    return "general";
}

export function buildAssistantReply({ message, state, offers }) {
    const intent = detectIntent(message);

    if (!isRelevantBusinessQuery(message)) {
        return {
            intent: "off_topic",
            text: "I’m focused on helping visitors understand Heuristic Consulting’s AI automation resources and next steps. I can point you to the White Paper, the Framework, or help determine whether a Strategy Call makes sense.",
            ctas: [
                {
                    label: offers.white_paper.ctaLabel,
                    href: offers.white_paper.href,
                },
                {
                    label: offers.framework_download.ctaLabel,
                    href: offers.framework_download.href,
                },
                {
                    label: offers.strategy_call.ctaLabel,
                    href: offers.strategy_call.href,
                },
            ],
            nextState: { ...state, intent: "off_topic", pendingQuestion: null },
        };
    }

    if (intent === "white_paper") {
        return {
            intent,
            text: `The White Paper is the best starting point if you want a practical overview of AI systems architecture and where automation may create value. ${offers.white_paper.summary}`,
            ctas: [
                {
                    label: offers.white_paper.ctaLabel,
                    href: offers.white_paper.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "framework_download") {
        return {
            intent,
            text: `The Framework is better if you want a more structured way to think about AI readiness, use cases, and next steps. ${offers.framework_download.summary}`,
            ctas: [
                {
                    label: offers.framework_download.ctaLabel,
                    href: offers.framework_download.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "strategy_call") {
        if (!state.businessType) {
            return {
                intent,
                text: `A Strategy Call makes sense if you already have a business problem, process bottleneck, or implementation question in mind. What kind of business are you in?`,
                ctas: [],
                nextState: { ...state, intent, pendingQuestion: "businessType" },
            };
        }

        if (!state.bottleneck) {
            return {
                intent,
                text: `Understood. What process or bottleneck are you trying to improve?`,
                ctas: [],
                nextState: { ...state, intent, pendingQuestion: "bottleneck" },
            };
        }

        return {
            intent,
            text: `Based on what you shared, a Strategy Call is likely the right next step. You can use the form below to request one.`,
            ctas: [
                {
                    label: offers.strategy_call.ctaLabel,
                    href: offers.strategy_call.href,
                },
            ],
            nextState: { ...state, intent, pendingQuestion: null },
        };
    }

    return {
        intent: "general",
        text: `Heuristic Consulting helps businesses identify where AI automation and systems architecture can create practical value. I can point you to the White Paper, the Framework, or help determine whether a Strategy Call makes sense.`,
        ctas: [
            {
                label: offers.white_paper.ctaLabel,
                href: offers.white_paper.href,
            },
            {
                label: offers.framework_download.ctaLabel,
                href: offers.framework_download.href,
            },
            {
                label: offers.strategy_call.ctaLabel,
                href: offers.strategy_call.href,
            },
        ],
        nextState: { ...state, intent: "general", pendingQuestion: null },
    };
}

export function applyPendingQuestion(state, message) {
    if (!state.pendingQuestion) return state;

    if (state.pendingQuestion === "businessType") {
        return {
            ...state,
            businessType: message,
            pendingQuestion: null,
        };
    }

    if (state.pendingQuestion === "bottleneck") {
        return {
            ...state,
            bottleneck: message,
            pendingQuestion: null,
        };
    }

    return state;
}