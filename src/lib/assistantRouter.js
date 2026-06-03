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
        "assessment",
        "agentic",
        "what do you do",
        "heuristic",
        "do you",
    ];

    return relevantTerms.some((term) => text.includes(term));
}

export function detectIntent(message) {
    const text = normalize(message);

    const assessmentTerms = [
        "assessment",
        "readiness",
        "where do i start",
        "how ready",
        "evaluate",
        "$300",
        "three hundred",
        "what is the ai readiness",
        "ai readiness assessment",
    ];

    const whitePaperTerms = [
        "white paper",
        "paper",
        "architecture paper",
        "download",
    ];

    const frameworkTerms = [
        "framework",
        "worksheet",
        "automation candidate",
        "3 minute",
        "three minute",
    ];

    const strategyTerms = [
        "strategy call",
        "book",
        "schedule",
        "talk",
        "need help",
        "implementation",
        "work with you",
        "speak with someone",
        "call",
        "i want to schedule",
        "want to schedule",
    ];

    const servicesTerms = [
        "what do you offer",
        "services",
        "what can you build",
        "voice agent",
        "voice receptionist",
        "agentic",
        "workflow automation",
        "crm",
        "education",
        "training",
        "workshop",
        "workshops",
        "staff training",
        "team training",
        "ai training",
        "ai education",
        "business ai",
        "teach my team",
    ];

    const solutionsTerms = [
        "solutions",
        "tools",
        "products",
        "demo",
        "social media",
        "real estate",
        "auto dealer",
    ];

    const caseStudiesTerms = [
        "case study",
        "case studies",
        "what have you built",
        "proof",
        "examples",
        "clients",
        "crafted for courage",
        "what has heuristic built",
        "heuristic built",
        "built",
    ];

    const aboutTerms = [
        "about",
        "who are you",
        "experience",
        "background",
        "credentials",
        "trust",
    ];

    if (assessmentTerms.some((term) => text.includes(term))) return "assessment";
    if (whitePaperTerms.some((term) => text.includes(term))) return "white_paper";
    if (frameworkTerms.some((term) => text.includes(term))) return "framework_download";
    if (strategyTerms.some((term) => text.includes(term))) return "strategy_call";
    if (servicesTerms.some((term) => text.includes(term))) return "services";
    if (solutionsTerms.some((term) => text.includes(term))) return "solutions";
    if (caseStudiesTerms.some((term) => text.includes(term))) return "case_studies";
    if (aboutTerms.some((term) => text.includes(term))) return "about";

    return "general";
}

export function buildAssistantReply({ message, state, offers }) {
    const intent = detectIntent(message);

    if (intent === "general" && !isRelevantBusinessQuery(message)) {
        return {
            intent: "off_topic",
            text: "I am focused on helping visitors understand Heuristic Consulting's services and next steps. I can tell you about our AI Readiness Assessment, what we have built, or help you schedule a call.",
            ctas: [
                {
                    label: offers.assessment.ctaLabel,
                    href: offers.assessment.href,
                },
                {
                    label: offers.strategy_call.ctaLabel,
                    href: offers.strategy_call.href,
                },
            ],
            nextState: { ...state, intent: "off_topic", pendingQuestion: null },
        };
    }

    if (intent === "assessment") {
        return {
            intent,
            text: `The AI Readiness Assessment is the best starting point. It is a structured evaluation of your organization's readiness — people, processes, data, and infrastructure. Starting at $300, with the full cost credited toward any Heuristic implementation engagement.`,
            ctas: [
                {
                    label: offers.assessment.ctaLabel,
                    href: offers.assessment.href,
                },
                {
                    label: offers.strategy_call.ctaLabel,
                    href: offers.strategy_call.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "white_paper") {
        return {
            intent,
            text: `The White Paper is the best starting point if you want a practical overview of AI systems architecture and where automation may create value. Use the White Paper form and it will be sent immediately.`,
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
            text: `The Framework is better if you want a structured way to evaluate AI readiness, use cases, and implementation paths. Use the Framework form to get the download and a clearer path for next-step evaluation.`,
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
                text: `A Strategy Call makes sense if you already have a business problem, process bottleneck, or implementation question in mind. I’ll ask two short questions to see whether a strategy call is the right next step. What kind of business are you in?`,
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

    if (intent === "services") {
        return {
            intent,
            text: `Heuristic offers four core services: AI Readiness Assessment, Data & Governance, AI Implementation — including agentic systems that complete multi-step workflows autonomously — and Business AI Education, live workshops for business teams delivered on-site or virtually.`,
            ctas: [
                { label: "View Services", href: "/services" },
                {
                    label: offers.assessment.ctaLabel,
                    href: offers.assessment.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "solutions") {
        return {
            intent,
            text: `Heuristic has built several tools available to license: an AI Voice Receptionist, Social Media Content Generator, Real Estate Marketing Tool, and an Agentic System. Each has a demo available.`,
            ctas: [
                { label: "View Solutions", href: "/solutions" },
                {
                    label: offers.strategy_call.ctaLabel,
                    href: offers.strategy_call.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "case_studies") {
        return {
            intent,
            text: `Heuristic has deployed an AI voice receptionist for an IT support company and built a social media automation pipeline for Crafted for Courage. Both are live and running.`,
            ctas: [
                { label: "View Case Studies", href: "/case-studies" },
                {
                    label: offers.assessment.ctaLabel,
                    href: offers.assessment.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    if (intent === "about") {
        return {
            intent,
            text: `Heuristic is led by a technologist with 35 years of engineering and project management experience, with background in regulated, data-sensitive environments. We build what we recommend — our AI receptionist and webchat are both live on this site.`,
            ctas: [
                { label: "About Heuristic", href: "/about" },
                {
                    label: offers.assessment.ctaLabel,
                    href: offers.assessment.href,
                },
            ],
            nextState: { ...state, intent },
        };
    }

    return {
        intent: "general",
        text: `Heuristic Consulting helps mid-market companies move from AI curiosity to AI capability. The best starting point is usually the AI Readiness Assessment — a structured evaluation of where you stand, starting at $300.`,
        ctas: [
            {
                label: offers.assessment.ctaLabel,
                href: offers.assessment.href,
            },
            {
                label: offers.white_paper.ctaLabel,
                href: offers.white_paper.href,
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
