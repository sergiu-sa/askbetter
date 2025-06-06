import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Copy,
  Download,
  Sparkles,
  Code,
  BookOpen,
  PenTool,
  BarChart3,
  Search,
  GraduationCap,
  Palette,
  Monitor,
  Moon,
  Sun,
  Zap,
  Star,
  ChevronDown,
  Eye,
  Sliders,
  Plus,
  X,
  Edit3,
  Save,
  Trash2,
  Heart,
  Filter,
  ArrowRight,
  Settings,
  User,
  Briefcase,
  TrendingUp,
  Users,
  Target,
  Brain,
  TestTube,
  Upload,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Share2,
  MessageSquare,
  Bell,
  Calendar,
  Database,
  LineChart,
  PieChart,
  Activity,
  Layers,
  Workflow,
  Cpu,
  Lightbulb,
  Shield,
  Award,
  FileText,
  Maximize2,
  Minimize2,
  MoreVertical,
  Bookmark,
  History,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Gamepad2,
  Wind,
  Waves,
  Mountain,
  Coffee,
  Flame,
} from "lucide-react";

const AskBetter = () => {
  const [mode, setMode] = useState("basic");
  const [theme, setTheme] = useState("professional");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeView, setActiveView] = useState("builder");
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedPrompts, setSavedPrompts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [promptHistory, setPromptHistory] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [workflowSteps, setWorkflowSteps] = useState([]);
  const [apiConnections, setApiConnections] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [realTimeUsers, setRealTimeUsers] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [automationRules, setAutomationRules] = useState([]);
  const [securitySettings, setSecuritySettings] = useState({});
  const [customFields, setCustomFields] = useState([]);
  const [industryTemplates, setIndustryTemplates] = useState({});
  const [exportFormats, setExportFormats] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [performanceBaselines, setPerformanceBaselines] = useState({});
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationSuggestions, setOptimizationSuggestions] = useState([]);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [abTests, setAbTests] = useState([]);
  const [batchJobs, setBatchJobs] = useState([]);

  const themeMenuRef = useRef(null);
  const templateModalRef = useRef(null);
  const recognition = useRef(null);

  const [promptConfig, setPromptConfig] = useState({
    topic: "",
    context: "",
    tone: "professional",
    outputFormat: "essay",
    length: "detailed",
    audience: "general",
    instructions: "",
    constraints: "",
    customFields: {},
    style: "clear",
    complexity: "intermediate",
    creativity: 50,
    strictness: 30,
  });

  // Enhanced themes with more personality and better design
  const themes = {
    professional: {
      name: "Corporate Elite",
      icon: Briefcase,
      description: "Executive-grade design for enterprise professionals",
      persona: "C-Suite Executive",
      gradient: "from-slate-900 via-blue-900 to-indigo-900",
      accent: "from-blue-500 to-cyan-500",
      classes: {
        bg: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
        cardBg: "bg-white/90",
        cardBorder: "border-slate-200/60",
        text: "text-slate-900",
        textSecondary: "text-slate-700",
        textMuted: "text-slate-500",
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600",
        primaryHover: "hover:from-blue-500 hover:to-indigo-500",
        accent: "bg-gradient-to-r from-emerald-500 to-teal-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        inputBg: "bg-white/80",
        inputBorder: "border-slate-300/60",
        inputFocus: "focus:border-blue-400 focus:ring-blue-400/20",
        shadow: "shadow-xl shadow-slate-500/10",
      },
    },
    creative: {
      name: "Artist Studio",
      icon: PenTool,
      description: "Vibrant, inspiring workspace for creative minds",
      persona: "Creative Director",
      gradient: "from-purple-900 via-pink-900 to-orange-900",
      accent: "from-purple-500 to-pink-500",
      classes: {
        bg: "bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50",
        cardBg: "bg-white/85",
        cardBorder: "border-purple-200/50",
        text: "text-purple-900",
        textSecondary: "text-purple-700",
        textMuted: "text-purple-500",
        primary: "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500",
        primaryHover:
          "hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
        accent: "bg-gradient-to-r from-pink-500 to-rose-500",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-rose-500",
        inputBg: "bg-white/70",
        inputBorder: "border-purple-300/50",
        inputFocus: "focus:border-purple-400 focus:ring-purple-400/20",
        shadow: "shadow-xl shadow-purple-500/15",
      },
    },
    developer: {
      name: "Code Matrix",
      icon: Code,
      description: "Dark, focused environment for technical mastery",
      persona: "Senior Engineer",
      gradient: "from-gray-900 via-slate-900 to-black",
      accent: "from-green-400 to-cyan-400",
      classes: {
        bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900",
        cardBg: "bg-slate-800/95",
        cardBorder: "border-slate-600/40",
        text: "text-slate-100",
        textSecondary: "text-slate-300",
        textMuted: "text-slate-400",
        primary: "bg-gradient-to-r from-emerald-500 to-cyan-500",
        primaryHover: "hover:from-emerald-400 hover:to-cyan-400",
        accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
        success: "bg-green-400",
        warning: "bg-yellow-400",
        danger: "bg-red-400",
        inputBg: "bg-slate-700/70",
        inputBorder: "border-slate-500/40",
        inputFocus: "focus:border-emerald-400 focus:ring-emerald-400/20",
        shadow: "shadow-2xl shadow-slate-900/25",
      },
    },
    gaming: {
      name: "Neon Arena",
      icon: Gamepad2,
      description: "Electric gaming aesthetic with RGB vibes",
      persona: "Pro Gamer",
      gradient: "from-gray-900 via-purple-900 to-black",
      accent: "from-cyan-400 to-purple-400",
      classes: {
        bg: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
        cardBg: "bg-gray-800/95",
        cardBorder: "border-cyan-500/30",
        text: "text-gray-100",
        textSecondary: "text-gray-200",
        textMuted: "text-gray-400",
        primary: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
        primaryHover:
          "hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300",
        accent: "bg-gradient-to-r from-green-400 to-emerald-400",
        success: "bg-green-400",
        warning: "bg-yellow-400",
        danger: "bg-red-400",
        inputBg: "bg-gray-700/70",
        inputBorder: "border-purple-500/40",
        inputFocus: "focus:border-cyan-400 focus:ring-cyan-400/20",
        shadow: "shadow-2xl shadow-cyan-500/25",
      },
    },
    sunset: {
      name: "Golden Hour",
      icon: Sun,
      description: "Warm, energizing colors of a perfect sunset",
      persona: "Lifestyle Enthusiast",
      gradient: "from-orange-900 via-red-900 to-yellow-900",
      accent: "from-orange-400 to-yellow-400",
      classes: {
        bg: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50",
        cardBg: "bg-white/85",
        cardBorder: "border-orange-200/50",
        text: "text-orange-900",
        textSecondary: "text-orange-800",
        textMuted: "text-orange-600",
        primary: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500",
        primaryHover:
          "hover:from-orange-400 hover:via-amber-400 hover:to-yellow-400",
        accent: "bg-gradient-to-r from-red-500 to-pink-500",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        inputBg: "bg-white/75",
        inputBorder: "border-orange-300/50",
        inputFocus: "focus:border-orange-400 focus:ring-orange-400/20",
        shadow: "shadow-xl shadow-orange-500/15",
      },
    },
    ocean: {
      name: "Deep Waters",
      icon: Waves,
      description: "Calming ocean depths for focused thinking",
      persona: "Mindfulness Expert",
      gradient: "from-blue-900 via-cyan-900 to-teal-900",
      accent: "from-cyan-400 to-blue-400",
      classes: {
        bg: "bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50",
        cardBg: "bg-white/90",
        cardBorder: "border-cyan-200/50",
        text: "text-cyan-900",
        textSecondary: "text-cyan-800",
        textMuted: "text-cyan-600",
        primary: "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500",
        primaryHover:
          "hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-400",
        accent: "bg-gradient-to-r from-teal-500 to-emerald-500",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        inputBg: "bg-white/80",
        inputBorder: "border-cyan-300/50",
        inputFocus: "focus:border-cyan-400 focus:ring-cyan-400/20",
        shadow: "shadow-xl shadow-cyan-500/15",
      },
    },
    forest: {
      name: "Emerald Forest",
      icon: Mountain,
      description: "Natural greens connecting you with nature",
      persona: "Eco Warrior",
      gradient: "from-green-900 via-emerald-900 to-teal-900",
      accent: "from-green-400 to-emerald-400",
      classes: {
        bg: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
        cardBg: "bg-white/85",
        cardBorder: "border-green-200/50",
        text: "text-green-900",
        textSecondary: "text-green-800",
        textMuted: "text-green-600",
        primary: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600",
        primaryHover:
          "hover:from-green-500 hover:via-emerald-500 hover:to-teal-500",
        accent: "bg-gradient-to-r from-lime-500 to-green-500",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        inputBg: "bg-white/80",
        inputBorder: "border-green-300/50",
        inputFocus: "focus:border-green-400 focus:ring-green-400/20",
        shadow: "shadow-xl shadow-green-500/15",
      },
    },
    cosmic: {
      name: "Space Odyssey",
      icon: Star,
      description: "Deep space exploration with stellar accents",
      persona: "Futurist",
      gradient: "from-violet-900 via-purple-900 to-indigo-900",
      accent: "from-violet-400 to-purple-400",
      classes: {
        bg: "bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900",
        cardBg: "bg-violet-800/90",
        cardBorder: "border-violet-600/40",
        text: "text-violet-100",
        textSecondary: "text-violet-200",
        textMuted: "text-violet-300",
        primary:
          "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500",
        primaryHover:
          "hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400",
        accent: "bg-gradient-to-r from-cyan-400 to-blue-400",
        success: "bg-emerald-400",
        warning: "bg-amber-400",
        danger: "bg-red-400",
        inputBg: "bg-violet-700/70",
        inputBorder: "border-violet-500/40",
        inputFocus: "focus:border-violet-400 focus:ring-violet-400/20",
        shadow: "shadow-2xl shadow-violet-900/30",
      },
    },
    espresso: {
      name: "Coffee Shop",
      icon: Coffee,
      description: "Warm browns and cozy café atmosphere",
      persona: "Café Intellectual",
      gradient: "from-amber-900 via-orange-900 to-red-900",
      accent: "from-amber-400 to-orange-400",
      classes: {
        bg: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50",
        cardBg: "bg-white/90",
        cardBorder: "border-amber-200/50",
        text: "text-amber-900",
        textSecondary: "text-amber-800",
        textMuted: "text-amber-600",
        primary: "bg-gradient-to-r from-amber-600 via-orange-600 to-red-600",
        primaryHover:
          "hover:from-amber-500 hover:via-orange-500 hover:to-red-500",
        accent: "bg-gradient-to-r from-yellow-500 to-amber-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        inputBg: "bg-white/80",
        inputBorder: "border-amber-300/50",
        inputFocus: "focus:border-amber-400 focus:ring-amber-400/20",
        shadow: "shadow-xl shadow-amber-500/15",
      },
    },
    minimal: {
      name: "Zen Mode",
      icon: Wind,
      description: "Ultra-clean minimalist perfection",
      persona: "Minimalist",
      gradient: "from-gray-900 via-gray-800 to-black",
      accent: "from-gray-400 to-gray-500",
      classes: {
        bg: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
        cardBg: "bg-white/95",
        cardBorder: "border-gray-200/60",
        text: "text-gray-900",
        textSecondary: "text-gray-700",
        textMuted: "text-gray-500",
        primary: "bg-gradient-to-r from-gray-800 to-gray-700",
        primaryHover: "hover:from-gray-700 hover:to-gray-600",
        accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
        success: "bg-green-500",
        warning: "bg-amber-500",
        danger: "bg-red-500",
        inputBg: "bg-white/90",
        inputBorder: "border-gray-300/60",
        inputFocus: "focus:border-gray-400 focus:ring-gray-400/20",
        shadow: "shadow-lg shadow-gray-500/10",
      },
    },
  };

  // Enhanced template system with more sophistication
  const promptTemplates = {
    business: {
      name: "Business & Strategy",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      difficulty: "professional",
      templates: [
        {
          id: "business-strategy",
          name: "Strategic Business Analysis",
          description:
            "Comprehensive market analysis with competitive intelligence",
          difficulty: "advanced",
          estimatedTime: "25-35 minutes",
          category: "Strategy",
          template:
            "Conduct a {length} strategic analysis of {topic}. Context: {context}. Target audience: {audience}. Tone: {tone}. Analysis type: {analysisType}. Timeframe: {timeframe}. Include market dynamics, competitive landscape, risk assessment, and actionable recommendations. {instructions} {constraints}",
          customFields: [
            {
              key: "analysisType",
              label: "Analysis Type",
              type: "select",
              options: [
                "market-entry",
                "competitive",
                "growth",
                "operational",
                "financial",
              ],
              required: true,
            },
            {
              key: "timeframe",
              label: "Analysis Timeframe",
              type: "select",
              options: ["6 months", "1 year", "3 years", "5 years", "10 years"],
              required: true,
            },
            {
              key: "industry",
              label: "Industry Focus",
              type: "text",
              placeholder: "e.g., fintech, healthcare, retail",
            },
            {
              key: "geography",
              label: "Geographic Scope",
              type: "select",
              options: ["local", "regional", "national", "global"],
            },
          ],
          tags: ["strategy", "analysis", "business", "advanced", "executive"],
          performance: {
            averageRating: 4.7,
            usageCount: 1247,
            successRate: 94,
          },
          aiOptimized: true,
        },
        {
          id: "product-launch",
          name: "Product Launch Strategy",
          description: "Complete go-to-market strategy for new products",
          difficulty: "intermediate",
          estimatedTime: "20-30 minutes",
          category: "Marketing",
          template:
            "Create a comprehensive product launch strategy for {topic}. Context: {context}. Target market: {targetMarket}. Launch timeline: {timeline}. Budget tier: {budgetTier}. Include positioning, messaging, channel strategy, success metrics, and risk mitigation. {instructions} {constraints}",
          customFields: [
            {
              key: "targetMarket",
              label: "Target Market",
              type: "text",
              placeholder: "Primary customer segment",
              required: true,
            },
            {
              key: "timeline",
              label: "Launch Timeline",
              type: "select",
              options: ["2 weeks", "1 month", "3 months", "6 months", "1 year"],
            },
            {
              key: "budgetTier",
              label: "Budget Range",
              type: "select",
              options: ["minimal", "moderate", "substantial", "premium"],
            },
            {
              key: "channels",
              label: "Key Channels",
              type: "text",
              placeholder: "Primary marketing channels",
            },
          ],
          tags: ["marketing", "product", "launch", "strategy"],
          performance: { averageRating: 4.5, usageCount: 892, successRate: 89 },
        },
      ],
    },
    creative: {
      name: "Creative & Content",
      icon: PenTool,
      color: "from-purple-500 to-pink-500",
      difficulty: "intermediate",
      templates: [
        {
          id: "story-development",
          name: "Advanced Story Development",
          description:
            "Multi-layered narrative creation with deep character development",
          difficulty: "advanced",
          estimatedTime: "30-45 minutes",
          category: "Fiction",
          template:
            "Develop a {length} {genre} story about {topic}. Setting: {setting}. Character count: {characterCount}. Narrative style: {narrativeStyle}. Themes: {themes}. Target audience: {audience}. Include rich character development, compelling plot structure, atmospheric details, and meaningful themes. {instructions} {constraints}",
          customFields: [
            {
              key: "genre",
              label: "Genre",
              type: "select",
              options: [
                "fantasy",
                "sci-fi",
                "mystery",
                "romance",
                "thriller",
                "historical",
                "literary",
                "horror",
              ],
              required: true,
            },
            {
              key: "setting",
              label: "Setting/World",
              type: "text",
              placeholder: "Where does your story take place?",
            },
            {
              key: "characterCount",
              label: "Main Characters",
              type: "select",
              options: [
                "1-2 protagonists",
                "3-4 main characters",
                "5+ ensemble cast",
              ],
            },
            {
              key: "narrativeStyle",
              label: "Narrative Style",
              type: "select",
              options: [
                "first-person",
                "third-person limited",
                "third-person omniscient",
                "multiple POV",
              ],
            },
            {
              key: "themes",
              label: "Core Themes",
              type: "text",
              placeholder: "What themes should the story explore?",
            },
          ],
          tags: ["narrative", "fiction", "character", "advanced", "creative"],
          performance: { averageRating: 4.8, usageCount: 657, successRate: 91 },
          aiOptimized: true,
        },
      ],
    },
    technical: {
      name: "Technical & Code",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      difficulty: "advanced",
      templates: [
        {
          id: "architecture-design",
          name: "System Architecture Design",
          description: "Comprehensive technical architecture planning",
          difficulty: "expert",
          estimatedTime: "45-60 minutes",
          category: "Architecture",
          template:
            "Design a {systemType} architecture for {topic}. Context: {context}. Scale: {scale}. Tech stack: {techStack}. Performance requirements: {performance}. Include component design, data flow, security considerations, scalability planning, and deployment strategy. {instructions} {constraints}",
          customFields: [
            {
              key: "systemType",
              label: "System Type",
              type: "select",
              options: [
                "web application",
                "mobile app",
                "microservices",
                "data platform",
                "AI/ML system",
              ],
              required: true,
            },
            {
              key: "scale",
              label: "Expected Scale",
              type: "select",
              options: [
                "small (1K users)",
                "medium (100K users)",
                "large (1M+ users)",
                "enterprise",
              ],
            },
            {
              key: "techStack",
              label: "Technology Preferences",
              type: "text",
              placeholder: "Preferred technologies/frameworks",
            },
            {
              key: "performance",
              label: "Performance Needs",
              type: "select",
              options: [
                "standard",
                "high-performance",
                "real-time",
                "batch-processing",
              ],
            },
          ],
          tags: ["architecture", "technical", "system-design", "expert"],
          performance: { averageRating: 4.6, usageCount: 234, successRate: 87 },
        },
      ],
    },
    academic: {
      name: "Academic & Research",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
      difficulty: "advanced",
      templates: [
        {
          id: "research-proposal",
          name: "Research Proposal Framework",
          description: "Structured academic research proposal development",
          difficulty: "advanced",
          estimatedTime: "40-50 minutes",
          category: "Research",
          template:
            "Develop a comprehensive research proposal for {topic}. Research field: {field}. Methodology: {methodology}. Timeline: {timeline}. Include literature review framework, hypothesis development, methodology design, expected outcomes, and significance statement. Academic level: {academicLevel}. {instructions} {constraints}",
          customFields: [
            {
              key: "field",
              label: "Research Field",
              type: "text",
              placeholder: "e.g., Psychology, Computer Science, Biology",
              required: true,
            },
            {
              key: "methodology",
              label: "Research Methodology",
              type: "select",
              options: [
                "quantitative",
                "qualitative",
                "mixed-methods",
                "theoretical",
                "experimental",
              ],
            },
            {
              key: "timeline",
              label: "Research Duration",
              type: "select",
              options: ["6 months", "1 year", "2 years", "3+ years"],
            },
            {
              key: "academicLevel",
              label: "Academic Level",
              type: "select",
              options: ["undergraduate", "masters", "doctoral", "postdoc"],
            },
          ],
          tags: ["academic", "research", "proposal", "methodology"],
          performance: { averageRating: 4.4, usageCount: 445, successRate: 86 },
        },
      ],
    },
  };

  // Voice recognition setup
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = "en-US";

      recognition.current.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setPromptConfig((prev) => ({ ...prev, topic: transcript }));
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  // Enhanced click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close theme panel if clicking outside
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target)
      ) {
        setShowThemePanel(false);
      }

      // Close template modal if clicking outside
      if (
        templateModalRef.current &&
        !templateModalRef.current.contains(event.target)
      ) {
        setShowTemplateModal(false);
      }
    };

    if (showThemePanel || showTemplateModal) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [showThemePanel, showTemplateModal]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeydown = (event) => {
      // Escape to close modals
      if (event.key === "Escape") {
        setShowThemePanel(false);
        setShowTemplateModal(false);
      }

      // Ctrl/Cmd + K for template search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setShowTemplateModal(true);
      }

      // Ctrl/Cmd + Enter to copy prompt
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        copyToClipboard();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (promptConfig.topic.length > 10) {
        const historyEntry = {
          id: Date.now(),
          config: { ...promptConfig },
          timestamp: new Date().toISOString(),
          prompt: generatePrompt(),
        };
        setPromptHistory((prev) => [historyEntry, ...prev.slice(0, 49)]); // Keep last 50
      }
    }, 2000);

    return () => clearTimeout(autoSave);
  }, [promptConfig]);

  const currentTheme = themes[theme];

  // Enhanced prompt generation with AI-style improvements
  const generatePrompt = useCallback(() => {
    if (!selectedTemplate) {
      const parts = [];
      if (promptConfig.topic)
        parts.push(`Primary Topic: ${promptConfig.topic}`);
      if (promptConfig.context)
        parts.push(`Context & Background: ${promptConfig.context}`);

      parts.push(
        `Communication Style: ${promptConfig.tone} tone with ${promptConfig.style} language`
      );
      parts.push(`Output Format: ${promptConfig.outputFormat}`);
      parts.push(`Content Length: ${promptConfig.length}`);
      parts.push(`Target Audience: ${promptConfig.audience}`);

      if (promptConfig.complexity !== "intermediate") {
        parts.push(`Complexity Level: ${promptConfig.complexity}`);
      }

      if (promptConfig.creativity !== 50) {
        parts.push(
          `Creative Expression: ${promptConfig.creativity}% (${
            promptConfig.creativity > 70
              ? "highly creative"
              : promptConfig.creativity > 30
              ? "balanced"
              : "structured"
          })`
        );
      }

      if (promptConfig.instructions)
        parts.push(`Specific Instructions: ${promptConfig.instructions}`);
      if (promptConfig.constraints)
        parts.push(`Important Constraints: ${promptConfig.constraints}`);

      // Add AI optimization suggestions
      parts.push(
        "\n[AI Enhancement]: Please ensure the response includes specific examples, actionable insights, and clear next steps where applicable."
      );

      return parts.join("\n\n");
    }

    let prompt = selectedTemplate.template;

    // Replace all template variables
    Object.keys(promptConfig).forEach((key) => {
      const value = promptConfig[key] || `[${key}]`;
      prompt = prompt.replace(new RegExp(`{${key}}`, "g"), value);
    });

    Object.keys(promptConfig.customFields).forEach((key) => {
      const value = promptConfig.customFields[key] || `[${key}]`;
      prompt = prompt.replace(new RegExp(`{${key}}`, "g"), value);
    });

    return prompt;
  }, [promptConfig, selectedTemplate]);

  // Enhanced copy functionality with animation
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt());
      setIsAnimating(true);

      // Add to notifications
      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "success",
          message: "Prompt copied to clipboard!",
          timestamp: Date.now(),
        },
        ...prev.slice(0, 4),
      ]);

      setTimeout(() => setIsAnimating(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // AI Optimization simulation
  const optimizePrompt = async () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);

    // Simulate AI optimization process
    const steps = [
      { progress: 20, message: "Analyzing prompt structure..." },
      { progress: 40, message: "Identifying optimization opportunities..." },
      { progress: 60, message: "Enhancing clarity and specificity..." },
      { progress: 80, message: "Adding advanced AI techniques..." },
      { progress: 100, message: "Optimization complete!" },
    ];

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setOptimizationProgress(step.progress);

      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "info",
          message: step.message,
          timestamp: Date.now(),
        },
        ...prev.slice(0, 4),
      ]);
    }

    // Apply optimizations
    setPromptConfig((prev) => ({
      ...prev,
      instructions:
        prev.instructions +
        (prev.instructions ? " " : "") +
        "Ensure response includes specific examples, measurable outcomes, and actionable next steps.",
      constraints:
        prev.constraints +
        (prev.constraints ? " " : "") +
        "Structure content for maximum clarity and practical application.",
    }));

    setIsOptimizing(false);

    setNotifications((prev) => [
      {
        id: Date.now(),
        type: "success",
        message:
          "Prompt optimized! Expected 23% improvement in response quality.",
        timestamp: Date.now(),
      },
      ...prev.slice(0, 4),
    ]);
  };

  // Voice mode functionality
  const toggleVoiceMode = () => {
    if (!recognition.current) {
      alert("Speech recognition not supported in this browser");
      return;
    }

    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    } else {
      recognition.current.start();
      setIsListening(true);
    }
    setVoiceMode(!voiceMode);
  };

  // Save prompt with enhanced metadata
  const savePrompt = () => {
    const newPrompt = {
      id: Date.now(),
      name: promptConfig.topic || "Untitled Prompt",
      template: selectedTemplate?.name || "Custom",
      content: generatePrompt(),
      config: { ...promptConfig },
      createdAt: new Date().toISOString(),
      performance: { rating: null, usageCount: 0 },
      tags: selectedTemplate?.tags || ["custom"],
      category: selectedTemplate?.category || "General",
      estimatedTokens: Math.ceil(generatePrompt().length / 4),
      complexity: promptConfig.complexity,
      aiOptimized: !!selectedTemplate?.aiOptimized,
    };

    const updated = [newPrompt, ...savedPrompts];
    setSavedPrompts(updated);

    setNotifications((prev) => [
      {
        id: Date.now(),
        type: "success",
        message: "Prompt saved successfully!",
        timestamp: Date.now(),
      },
      ...prev.slice(0, 4),
    ]);
  };

  // Enhanced AnimatedButton component
  const AnimatedButton = ({
    children,
    onClick,
    variant = "primary",
    className = "",
    icon: Icon,
    size = "md",
    loading = false,
    disabled = false,
    tooltip,
    ...props
  }) => {
    const sizes = {
      xs: "px-3 py-1.5 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
      xl: "px-10 py-5 text-lg",
    };

    const baseClasses =
      "group relative overflow-hidden font-medium transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

    let variantClasses = "";
    if (variant === "primary") {
      variantClasses = `${currentTheme.classes.primary} ${currentTheme.classes.primaryHover} text-white ${currentTheme.classes.shadow}`;
    } else if (variant === "secondary") {
      variantClasses = `${currentTheme.classes.cardBg} backdrop-blur-sm ${currentTheme.classes.text} border ${currentTheme.classes.cardBorder} hover:bg-opacity-90`;
    } else if (variant === "accent") {
      variantClasses = `${currentTheme.classes.accent} text-white hover:opacity-90`;
    } else if (variant === "success") {
      variantClasses = `${currentTheme.classes.success} text-white hover:opacity-90`;
    } else if (variant === "warning") {
      variantClasses = `${currentTheme.classes.warning} text-white hover:opacity-90`;
    } else if (variant === "danger") {
      variantClasses = `${currentTheme.classes.danger} text-white hover:opacity-90`;
    } else {
      variantClasses = `${currentTheme.classes.textSecondary} hover:${currentTheme.classes.text} hover:bg-white/10 backdrop-blur-sm`;
    }

    const button = (
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`${baseClasses} ${variantClasses} ${sizes[size]} ${className}`}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        <div className="relative flex items-center justify-center space-x-2">
          {loading ? (
            <div className="w-4 h-4 border-2 border-current rounded-full animate-spin border-t-transparent" />
          ) : (
            Icon && <Icon className="w-4 h-4" />
          )}
          <span>{children}</span>
        </div>
      </button>
    );

    if (tooltip) {
      return (
        <div className="relative group/tooltip">
          {button}
          <div className="absolute z-50 px-3 py-1 mb-2 text-xs text-white transition-opacity duration-200 transform -translate-x-1/2 bg-gray-900 rounded-lg opacity-0 pointer-events-none bottom-full left-1/2 whitespace-nowrap group-hover/tooltip:opacity-100">
            {tooltip}
            <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent top-full left-1/2 border-t-gray-900"></div>
          </div>
        </div>
      );
    }

    return button;
  };

  // Enhanced Theme Selector with better UX and proper z-index
  const ThemeSelector = () => (
    <div className="relative" ref={themeMenuRef}>
      <AnimatedButton
        onClick={() => setShowThemePanel(!showThemePanel)}
        variant="ghost"
        icon={Palette}
        size="sm"
        tooltip="Change theme (or press T)"
        className="relative"
      >
        <span className="hidden sm:inline">{currentTheme.name}</span>
        <span className="sm:hidden">Theme</span>
        <div
          className={`absolute top-1 right-1 w-3 h-3 rounded-full ${currentTheme.classes.primary} opacity-80`}
        />
      </AnimatedButton>

      {showThemePanel && (
        <>
          {/* Backdrop with MAXIMUM z-index */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            style={{
              zIndex: 2147483647,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            onClick={() => setShowThemePanel(false)}
          />

          {/* Theme Panel with MAXIMUM z-index */}
          <div
            className={`fixed top-20 right-6 w-[480px] max-w-[90vw] ${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} p-6 max-h-[70vh] overflow-y-auto`}
            style={{
              zIndex: 2147483647,
              position: "fixed",
              top: "80px",
              right: "24px",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={`text-xl font-bold ${currentTheme.classes.text} flex items-center space-x-2`}
              >
                <Palette className="w-5 h-5" />
                <span>Choose Your Vibe</span>
              </h3>
              <button
                onClick={() => setShowThemePanel(false)}
                className={`p-2 ${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors rounded-lg z-10 relative`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(themes).map(([key, themeData]) => {
                const IconComponent = themeData.icon;
                const isActive = theme === key;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key);
                      setShowThemePanel(false);
                    }}
                    className={`group text-left p-4 rounded-2xl transition-all duration-500 hover:scale-[1.02] relative z-10 ${
                      isActive
                        ? `${themeData.classes.primary} text-white shadow-xl shadow-black/20 ring-2 ring-white/20`
                        : `bg-white/40 backdrop-blur-sm hover:bg-white/60 ${currentTheme.classes.text} hover:shadow-lg`
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 ${
                          isActive ? "bg-white/20" : themeData.classes.primary
                        } group-hover:scale-110`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-1 space-x-2">
                          <span className="text-base font-bold">
                            {themeData.name}
                          </span>
                          {isActive && (
                            <Star className="flex-shrink-0 w-4 h-4 text-yellow-300" />
                          )}
                        </div>
                        <div
                          className={`text-sm mb-2 ${
                            isActive
                              ? "text-white/80"
                              : currentTheme.classes.textMuted
                          }`}
                        >
                          {themeData.persona}
                        </div>
                        <div
                          className={`text-xs leading-relaxed ${
                            isActive
                              ? "text-white/70"
                              : currentTheme.classes.textMuted
                          }`}
                        >
                          {themeData.description}
                        </div>
                      </div>
                    </div>

                    {/* Theme preview dots */}
                    <div className="flex mt-3 space-x-1">
                      <div
                        className={`w-2 h-2 rounded-full ${themeData.classes.primary}`}
                      />
                      <div
                        className={`w-2 h-2 rounded-full ${themeData.classes.accent}`}
                      />
                      <div
                        className={`w-2 h-2 rounded-full ${themeData.classes.success}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 mt-6 border-t border-white/10">
              <p
                className={`text-xs ${currentTheme.classes.textMuted} text-center flex items-center justify-center space-x-2`}
              >
                <Sparkles className="w-3 h-3" />
                <span>
                  {Object.keys(themes).length} premium themes • Themes adapt to
                  your workflow
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Enhanced Template Modal
  const TemplateModal = () => {
    if (!showTemplateModal) return null;

    const allTemplates = Object.values(promptTemplates).flatMap((category) =>
      category.templates.map((template) => ({
        ...template,
        category: category.name,
      }))
    );

    const filteredTemplates = allTemplates.filter((template) => {
      const matchesCategory =
        filterCategory === "all" ||
        template.category.toLowerCase().includes(filterCategory);
      const matchesSearch =
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
        <div
          ref={templateModalRef}
          className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} w-full max-w-6xl max-h-[90vh] overflow-hidden`}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2
                className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
              >
                <BookOpen className="w-8 h-8" />
                <span>Template Library</span>
              </h2>
              <div className="flex items-center space-x-3">
                <div
                  className={`px-3 py-1 ${currentTheme.classes.primary} text-white rounded-full text-sm font-medium`}
                >
                  {filteredTemplates.length} templates
                </div>
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className={`p-2 ${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors rounded-lg`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${currentTheme.classes.textMuted}`}
                />
                <input
                  type="text"
                  placeholder="Search templates, categories, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={`px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
              >
                <option value="all">All Categories</option>
                <option value="business">Business & Strategy</option>
                <option value="creative">Creative & Content</option>
                <option value="technical">Technical & Code</option>
                <option value="academic">Academic & Research</option>
              </select>
            </div>
          </div>

          {/* Template Grid */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`${currentTheme.classes.cardBg} border ${currentTheme.classes.cardBorder} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group hover:shadow-xl`}
                  onClick={() => {
                    setSelectedTemplate(template);
                    setPromptConfig({ ...promptConfig, customFields: {} });
                    setShowTemplateModal(false);
                  }}
                >
                  {/* Template Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${
                          template.category === "Business & Strategy"
                            ? "bg-blue-500"
                            : template.category === "Creative & Content"
                            ? "bg-purple-500"
                            : template.category === "Technical & Code"
                            ? "bg-green-500"
                            : "bg-indigo-500"
                        } flex items-center justify-center text-white`}
                      >
                        {template.category === "Business & Strategy" ? (
                          <BarChart3 className="w-5 h-5" />
                        ) : template.category === "Creative & Content" ? (
                          <PenTool className="w-5 h-5" />
                        ) : template.category === "Technical & Code" ? (
                          <Code className="w-5 h-5" />
                        ) : (
                          <GraduationCap className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3
                          className={`font-bold ${currentTheme.classes.text} text-lg group-hover:text-blue-600 transition-colors`}
                        >
                          {template.name}
                        </h3>
                        <p
                          className={`text-sm ${currentTheme.classes.textMuted}`}
                        >
                          {template.category}
                        </p>
                      </div>
                    </div>
                    {template.aiOptimized && (
                      <div
                        className={`px-2 py-1 ${currentTheme.classes.accent} text-white rounded-full text-xs font-medium flex items-center space-x-1`}
                      >
                        <Brain className="w-3 h-3" />
                        <span>AI</span>
                      </div>
                    )}
                  </div>

                  <p
                    className={`${currentTheme.classes.textSecondary} mb-4 text-sm leading-relaxed`}
                  >
                    {template.description}
                  </p>

                  {/* Performance Metrics */}
                  {template.performance && (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span
                            className={`font-semibold ${currentTheme.classes.text} text-sm`}
                          >
                            {template.performance.averageRating}
                          </span>
                        </div>
                        <span
                          className={`text-xs ${currentTheme.classes.textMuted}`}
                        >
                          Rating
                        </span>
                      </div>
                      <div className="text-center">
                        <div
                          className={`font-semibold ${currentTheme.classes.text} text-sm`}
                        >
                          {template.performance.usageCount.toLocaleString()}
                        </div>
                        <span
                          className={`text-xs ${currentTheme.classes.textMuted}`}
                        >
                          Uses
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-green-600">
                          {template.performance.successRate}%
                        </div>
                        <span
                          className={`text-xs ${currentTheme.classes.textMuted}`}
                        >
                          Success
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 ${currentTheme.classes.inputBg} ${currentTheme.classes.textMuted} text-xs rounded-lg`}
                      >
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 4 && (
                      <span
                        className={`px-2 py-1 ${currentTheme.classes.textMuted} text-xs`}
                      >
                        +{template.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 text-xs border-t border-white/10">
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 ${
                          template.difficulty === "beginner"
                            ? "bg-green-100 text-green-800"
                            : template.difficulty === "intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : template.difficulty === "advanced"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-red-100 text-red-800"
                        } rounded-full font-medium`}
                      >
                        {template.difficulty}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span className={currentTheme.classes.textMuted}>
                          {template.estimatedTime}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 ${currentTheme.classes.textMuted} group-hover:text-blue-600 transition-colors`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="py-12 text-center">
                <Search
                  className={`w-12 h-12 ${currentTheme.classes.textMuted} mx-auto mb-4`}
                />
                <h3
                  className={`text-lg font-semibold ${currentTheme.classes.text} mb-2`}
                >
                  No templates found
                </h3>
                <p className={`${currentTheme.classes.textMuted}`}>
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Custom Fields Renderer
  const renderCustomFields = () => {
    if (!selectedTemplate?.customFields) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Settings className={`w-5 h-5 ${currentTheme.classes.text}`} />
          <h4 className={`font-bold ${currentTheme.classes.text}`}>
            Template Configuration
          </h4>
        </div>

        {selectedTemplate.customFields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label
              className={`block text-sm font-semibold ${currentTheme.classes.text}`}
            >
              {field.label}
              {field.required && <span className="ml-1 text-red-500">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                value={promptConfig.customFields[field.key] || ""}
                onChange={(e) =>
                  setPromptConfig({
                    ...promptConfig,
                    customFields: {
                      ...promptConfig.customFields,
                      [field.key]: e.target.value,
                    },
                  })
                }
                className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text} transition-all duration-200`}
                required={field.required}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            ) : field.type === "number" ? (
              <input
                type="number"
                min={field.min}
                max={field.max}
                value={
                  promptConfig.customFields[field.key] || field.default || ""
                }
                onChange={(e) =>
                  setPromptConfig({
                    ...promptConfig,
                    customFields: {
                      ...promptConfig.customFields,
                      [field.key]: e.target.value,
                    },
                  })
                }
                placeholder={field.placeholder}
                className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text} transition-all duration-200`}
                required={field.required}
              />
            ) : (
              <input
                type="text"
                placeholder={
                  field.placeholder || `Enter ${field.label.toLowerCase()}`
                }
                value={promptConfig.customFields[field.key] || ""}
                onChange={(e) =>
                  setPromptConfig({
                    ...promptConfig,
                    customFields: {
                      ...promptConfig.customFields,
                      [field.key]: e.target.value,
                    },
                  })
                }
                className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text} transition-all duration-200`}
                required={field.required}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  // Advanced Controls Component
  const AdvancedControls = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Sliders className={`w-5 h-5 ${currentTheme.classes.text}`} />
        <h4 className={`font-bold ${currentTheme.classes.text}`}>
          Advanced Parameters
        </h4>
      </div>

      {/* Creativity Slider */}
      <div>
        <label
          className={`block text-sm font-semibold ${currentTheme.classes.text} mb-3`}
        >
          Creative Expression: {promptConfig.creativity}%
        </label>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            value={promptConfig.creativity}
            onChange={(e) =>
              setPromptConfig({
                ...promptConfig,
                creativity: parseInt(e.target.value),
              })
            }
            className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${currentTheme.classes.primary}`}
            style={{
              background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${promptConfig.creativity}%, rgb(229, 231, 235) ${promptConfig.creativity}%, rgb(229, 231, 235) 100%)`,
            }}
          />
          <div className="flex justify-between mt-1 text-xs">
            <span className={currentTheme.classes.textMuted}>Structured</span>
            <span className={currentTheme.classes.textMuted}>Balanced</span>
            <span className={currentTheme.classes.textMuted}>Creative</span>
          </div>
        </div>
      </div>

      {/* Complexity Level */}
      <div>
        <label
          className={`block text-sm font-semibold ${currentTheme.classes.text} mb-2`}
        >
          Complexity Level
        </label>
        <div className="grid grid-cols-4 gap-2">
          {["basic", "intermediate", "advanced", "expert"].map((level) => (
            <button
              key={level}
              onClick={() =>
                setPromptConfig({ ...promptConfig, complexity: level })
              }
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                promptConfig.complexity === level
                  ? `${currentTheme.classes.primary} text-white`
                  : `${currentTheme.classes.inputBg} ${currentTheme.classes.text} hover:bg-opacity-80`
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Language Style */}
      <div>
        <label
          className={`block text-sm font-semibold ${currentTheme.classes.text} mb-2`}
        >
          Language Style
        </label>
        <select
          value={promptConfig.style}
          onChange={(e) =>
            setPromptConfig({ ...promptConfig, style: e.target.value })
          }
          className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
        >
          <option value="clear">Clear & Direct</option>
          <option value="eloquent">Eloquent & Sophisticated</option>
          <option value="conversational">Conversational & Friendly</option>
          <option value="technical">Technical & Precise</option>
          <option value="creative">Creative & Expressive</option>
        </select>
      </div>
    </div>
  );

  // Enhanced AI Optimization Panel
  const OptimizationPanel = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className={`w-5 h-5 ${currentTheme.classes.text}`} />
          <h4 className={`font-bold ${currentTheme.classes.text}`}>
            AI Optimization Engine
          </h4>
        </div>
        <AnimatedButton
          onClick={optimizePrompt}
          loading={isOptimizing}
          icon={Zap}
          size="sm"
          variant="accent"
          disabled={!promptConfig.topic}
        >
          {isOptimizing ? "Optimizing..." : "Optimize"}
        </AnimatedButton>
      </div>

      {isOptimizing && (
        <div
          className={`${currentTheme.classes.cardBg} rounded-xl p-4 border ${currentTheme.classes.cardBorder}`}
        >
          <div className="flex items-center mb-3 space-x-3">
            <div className="w-6 h-6 border-2 border-blue-500 rounded-full animate-spin border-t-transparent" />
            <span className={`font-medium ${currentTheme.classes.text}`}>
              AI Analysis in Progress...
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 rounded-full ${currentTheme.classes.primary} transition-all duration-500`}
              style={{ width: `${optimizationProgress}%` }}
            />
          </div>
          <p className={`text-xs ${currentTheme.classes.textMuted} mt-2`}>
            Analyzing prompt structure and applying advanced AI techniques...
          </p>
        </div>
      )}

      <div
        className={`${currentTheme.classes.cardBg} rounded-xl p-4 border ${currentTheme.classes.cardBorder}`}
      >
        <h5
          className={`font-medium ${currentTheme.classes.text} mb-3 flex items-center space-x-2`}
        >
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Optimization Features</span>
        </h5>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className={currentTheme.classes.textSecondary}>
              Context enhancement
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className={currentTheme.classes.textSecondary}>
              Specificity improvement
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className={currentTheme.classes.textSecondary}>
              Output structure guidance
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className={currentTheme.classes.textSecondary}>
              Actionability boost
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Notification Component
  const NotificationStack = () =>
    notifications.length > 0 && (
      <div className="fixed top-6 right-6 z-[300] space-y-3 max-w-sm">
        {notifications.slice(0, 4).map((notification) => (
          <div
            key={notification.id}
            className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-2xl p-4 border ${currentTheme.classes.cardBorder} shadow-xl transform transition-all duration-500 ease-out`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.type === "success"
                    ? currentTheme.classes.success
                    : notification.type === "warning"
                    ? currentTheme.classes.warning
                    : notification.type === "error"
                    ? currentTheme.classes.danger
                    : currentTheme.classes.primary
                }`}
              >
                {notification.type === "success" ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : notification.type === "warning" ? (
                  <AlertCircle className="w-4 h-4 text-white" />
                ) : notification.type === "error" ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Bell className="w-4 h-4 text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium ${currentTheme.classes.text} text-sm`}
                >
                  {notification.message}
                </p>
                <p className={`text-xs ${currentTheme.classes.textMuted} mt-1`}>
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </p>
              </div>
              <button
                onClick={() =>
                  setNotifications((prev) =>
                    prev.filter((n) => n.id !== notification.id)
                  )
                }
                className={`${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={`min-h-screen ${currentTheme.classes.bg} transition-all duration-700 relative overflow-hidden`}
    >
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-tl from-pink-500 to-orange-500 blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full top-1/2 left-1/3 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "4s" }}
        />
      </div>

      {/* Header */}
      <header
        className={`relative z-10 ${currentTheme.classes.cardBg} backdrop-blur-xl border-b ${currentTheme.classes.cardBorder}`}
      >
        <div className="px-6 py-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-14 h-14 ${currentTheme.classes.primary} rounded-2xl flex items-center justify-center ${currentTheme.classes.shadow} transition-all duration-300 hover:scale-110`}
              >
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div>
                <h1
                  className={`text-4xl font-bold ${currentTheme.classes.text} flex items-center space-x-2`}
                >
                  <span>AskBetter</span>
                  <span className="text-2xl">⚡</span>
                </h1>
                <p
                  className={`${currentTheme.classes.textMuted} text-base font-medium`}
                >
                  Advanced AI Prompt Engineering Platform •{" "}
                  {selectedTemplate ? selectedTemplate.name : "Custom Prompt"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mode Toggle */}
              <div
                className={`flex ${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-2 border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow}`}
              >
                <button
                  onClick={() => setMode("basic")}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    mode === "basic"
                      ? `${currentTheme.classes.primary} text-white shadow-lg`
                      : `${currentTheme.classes.textSecondary} hover:bg-white/20`
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Basic</span>
                </button>
                <button
                  onClick={() => setMode("pro")}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                    mode === "pro"
                      ? `${currentTheme.classes.primary} text-white shadow-lg`
                      : `${currentTheme.classes.textSecondary} hover:bg-white/20`
                  }`}
                >
                  <Settings className="w-4 h-4" />
                  <span>Pro</span>
                </button>
              </div>

              {/* Voice Mode Toggle */}
              <AnimatedButton
                onClick={toggleVoiceMode}
                variant={voiceMode ? "accent" : "ghost"}
                icon={isListening ? MicOff : Mic}
                size="sm"
                tooltip="Voice input (experimental)"
                className={isListening ? "animate-pulse" : ""}
              >
                <span className="hidden sm:inline">
                  {isListening ? "Stop" : "Voice"}
                </span>
              </AnimatedButton>

              {/* Fullscreen Toggle */}
              <AnimatedButton
                onClick={() => setIsFullscreen(!isFullscreen)}
                variant="ghost"
                icon={isFullscreen ? Minimize2 : Maximize2}
                size="sm"
                tooltip="Toggle fullscreen"
              />

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotifications([])}
                  className={`p-3 ${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors relative rounded-lg`}
                >
                  <Bell className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
                      {notifications.length}
                    </span>
                  )}
                </button>
              </div>

              <ThemeSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className={`relative z-10 max-w-7xl mx-auto px-6 py-8 ${
          isFullscreen ? "min-h-screen" : ""
        }`}
      >
        {mode === "basic" ? (
          /* Enhanced Basic Mode */
          <div className="max-w-5xl mx-auto">
            <div
              className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} overflow-hidden`}
            >
              {/* Hero Section */}
              <div className="p-8 text-center border-b border-white/10">
                <h2
                  className={`text-4xl font-bold ${currentTheme.classes.text} mb-4`}
                >
                  AI-Powered Prompt Builder
                </h2>
                <p
                  className={`${currentTheme.classes.textMuted} text-xl max-w-2xl mx-auto`}
                >
                  Create perfect prompts with advanced AI optimization and
                  professional templates
                </p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Selected Template Display */}
                {selectedTemplate && (
                  <div
                    className={`${currentTheme.classes.cardBg} rounded-2xl p-6 border-l-4 border-blue-500`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3
                          className={`font-bold ${currentTheme.classes.text} text-lg`}
                        >
                          {selectedTemplate.name}
                        </h3>
                        <p
                          className={`${currentTheme.classes.textMuted} text-sm`}
                        >
                          {selectedTemplate.description}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedTemplate(null)}
                        className={`p-2 ${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedTemplate.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${currentTheme.classes.inputBg} ${currentTheme.classes.textMuted} text-xs rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Template Selection */}
                <div>
                  <label
                    className={`block text-sm font-bold ${currentTheme.classes.text} mb-4 flex items-center space-x-2`}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Choose a Professional Template (Optional)</span>
                  </label>
                  <AnimatedButton
                    onClick={() => setShowTemplateModal(true)}
                    variant="secondary"
                    className="w-full py-4"
                    icon={Plus}
                    size="lg"
                  >
                    Browse Template Library • Press Ctrl+K
                  </AnimatedButton>
                </div>

                {/* Main Configuration */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <label
                        className={`block text-sm font-bold ${currentTheme.classes.text} mb-3 flex items-center space-x-2`}
                      >
                        <Target className="w-4 h-4" />
                        <span>What do you want help with? ✨</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={promptConfig.topic}
                          onChange={(e) =>
                            setPromptConfig({
                              ...promptConfig,
                              topic: e.target.value,
                            })
                          }
                          placeholder="e.g., Writing a product launch strategy, Creating a marketing campaign..."
                          className={`w-full px-6 py-4 ${currentTheme.classes.inputBg} backdrop-blur-sm border ${currentTheme.classes.inputBorder} rounded-2xl ${currentTheme.classes.inputFocus} transition-all duration-300 ${currentTheme.classes.text} text-lg`}
                        />
                        {voiceMode && (
                          <button
                            onClick={toggleVoiceMode}
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 ${
                              isListening
                                ? "text-red-500 animate-pulse"
                                : currentTheme.classes.textMuted
                            } hover:${
                              currentTheme.classes.text
                            } transition-colors`}
                          >
                            {isListening ? (
                              <MicOff className="w-5 h-5" />
                            ) : (
                              <Mic className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-bold ${currentTheme.classes.text} mb-3 flex items-center space-x-2`}
                      >
                        <Users className="w-4 h-4" />
                        <span>Target Audience 👥</span>
                      </label>
                      <select
                        value={promptConfig.audience}
                        onChange={(e) =>
                          setPromptConfig({
                            ...promptConfig,
                            audience: e.target.value,
                          })
                        }
                        className={`w-full px-6 py-4 ${currentTheme.classes.inputBg} backdrop-blur-sm border ${currentTheme.classes.inputBorder} rounded-2xl ${currentTheme.classes.inputFocus} transition-all duration-300 ${currentTheme.classes.text} text-lg appearance-none cursor-pointer`}
                      >
                        <option value="general">General Public</option>
                        <option value="executives">
                          Executives & Leadership
                        </option>
                        <option value="professionals">
                          Business Professionals
                        </option>
                        <option value="students">Students & Academics</option>
                        <option value="experts">Industry Experts</option>
                        <option value="developers">
                          Developers & Technical
                        </option>
                        <option value="creatives">Creatives & Artists</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-bold ${currentTheme.classes.text} mb-3`}
                      >
                        Additional Context (Optional)
                      </label>
                      <textarea
                        value={promptConfig.context}
                        onChange={(e) =>
                          setPromptConfig({
                            ...promptConfig,
                            context: e.target.value,
                          })
                        }
                        rows={4}
                        placeholder="Provide any background information, specific requirements, or context that would help generate a better response..."
                        className={`w-full px-6 py-4 ${currentTheme.classes.inputBg} backdrop-blur-sm border ${currentTheme.classes.inputBorder} rounded-2xl ${currentTheme.classes.inputFocus} transition-all duration-300 ${currentTheme.classes.text} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Tone & Style
                        </label>
                        <select
                          value={promptConfig.tone}
                          onChange={(e) =>
                            setPromptConfig({
                              ...promptConfig,
                              tone: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
                        >
                          <option value="professional">Professional</option>
                          <option value="casual">Casual & Friendly</option>
                          <option value="formal">Formal & Academic</option>
                          <option value="creative">Creative & Inspiring</option>
                          <option value="persuasive">
                            Persuasive & Compelling
                          </option>
                          <option value="analytical">
                            Analytical & Data-Driven
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Output Format
                        </label>
                        <select
                          value={promptConfig.outputFormat}
                          onChange={(e) =>
                            setPromptConfig({
                              ...promptConfig,
                              outputFormat: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
                        >
                          <option value="essay">Detailed Essay</option>
                          <option value="bullet-points">Bullet Points</option>
                          <option value="step-by-step">
                            Step-by-Step Guide
                          </option>
                          <option value="outline">Structured Outline</option>
                          <option value="report">Comprehensive Report</option>
                          <option value="creative">Creative Writing</option>
                          <option value="code">Code & Technical</option>
                        </select>
                      </div>
                    </div>

                    <AdvancedControls />
                  </div>
                </div>

                {/* Custom Fields for Selected Template */}
                {selectedTemplate && renderCustomFields()}

                {/* AI Optimization Panel */}
                <OptimizationPanel />

                {/* Generated Prompt Preview */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl overflow-hidden border-l-4 border-blue-500`}
                >
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <Eye className={`w-6 h-6 ${currentTheme.classes.text}`} />
                      <h3
                        className={`font-bold ${currentTheme.classes.text} text-xl`}
                      >
                        Your Generated Prompt
                      </h3>
                      <div
                        className={`px-3 py-1 ${currentTheme.classes.accent} text-white rounded-full text-sm font-medium`}
                      >
                        {Math.ceil(generatePrompt().length / 4)} tokens
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AnimatedButton
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        variant="ghost"
                        icon={isFullscreen ? Minimize2 : Maximize2}
                        size="sm"
                        tooltip="Toggle fullscreen preview"
                      />
                    </div>
                  </div>

                  <div
                    className={`p-6 ${currentTheme.classes.inputBg} backdrop-blur-sm`}
                  >
                    <div
                      className={`text-sm ${currentTheme.classes.text} whitespace-pre-wrap font-mono leading-relaxed min-h-[200px] max-h-[400px] overflow-y-auto`}
                    >
                      {generatePrompt() || (
                        <div className="py-12 text-center">
                          <Sparkles
                            className={`w-12 h-12 ${currentTheme.classes.textMuted} mx-auto mb-4`}
                          />
                          <p
                            className={`${currentTheme.classes.textMuted} text-lg`}
                          >
                            Configure your prompt above to see the magic
                            happen...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 p-6 border-t border-white/10">
                    <AnimatedButton
                      onClick={copyToClipboard}
                      icon={Copy}
                      size="lg"
                      className={isAnimating ? "animate-pulse" : ""}
                      disabled={!generatePrompt()}
                    >
                      {isAnimating ? "Copied! ✨" : "Copy Prompt"}
                    </AnimatedButton>
                    <AnimatedButton
                      onClick={savePrompt}
                      variant="secondary"
                      icon={Save}
                      size="lg"
                      disabled={!promptConfig.topic}
                    >
                      Save to Library
                    </AnimatedButton>
                    <AnimatedButton
                      onClick={() => setShowTemplateModal(true)}
                      variant="accent"
                      icon={BookOpen}
                      size="lg"
                    >
                      Browse Templates
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Pro Mode - Full Implementation */
          <div>
            {/* Pro Navigation */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                {
                  id: "builder",
                  label: "Advanced Builder",
                  icon: Edit3,
                  description: "Professional prompt engineering workspace",
                },
                {
                  id: "analytics",
                  label: "Analytics Hub",
                  icon: BarChart3,
                  description: "Performance metrics and insights",
                },
                {
                  id: "testing",
                  label: "A/B Testing",
                  icon: TestTube,
                  description: "Compare and optimize prompt variants",
                },
                {
                  id: "batch",
                  label: "Batch Processing",
                  icon: Database,
                  description: "Generate multiple prompts at scale",
                },
                {
                  id: "workflows",
                  label: "Workflows",
                  icon: Workflow,
                  description: "Automated prompt pipelines",
                },
                {
                  id: "integrations",
                  label: "API Hub",
                  icon: Globe,
                  description: "Connect with AI platforms and tools",
                },
                {
                  id: "collaboration",
                  label: "Team Hub",
                  icon: Users,
                  description: "Real-time collaboration workspace",
                },
                {
                  id: "industry",
                  label: "Industry Solutions",
                  icon: Briefcase,
                  description: "Specialized templates and workflows",
                },
                {
                  id: "security",
                  label: "Security & Compliance",
                  icon: Shield,
                  description: "Enterprise security controls",
                },
              ].map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`group relative flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                    activeView === view.id
                      ? `${currentTheme.classes.primary} text-white shadow-xl`
                      : `${currentTheme.classes.cardBg} ${currentTheme.classes.text} border ${currentTheme.classes.cardBorder} hover:shadow-lg`
                  }`}
                  title={view.description}
                >
                  <view.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-sm font-bold">{view.label}</div>
                    <div
                      className={`text-xs ${
                        activeView === view.id
                          ? "text-white/80"
                          : currentTheme.classes.textMuted
                      }`}
                    >
                      {view.description}
                    </div>
                  </div>
                  {activeView === view.id && (
                    <div className="absolute inset-0 bg-gradient-to-r animate-pulse from-white/0 via-white/20 to-white/0" />
                  )}
                </button>
              ))}
            </div>

            {/* Pro Mode Views */}
            {activeView === "builder" && (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 h-[calc(100vh-320px)]">
                {/* Left Panel - Configuration */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} p-6 overflow-y-auto`}
                >
                  <div className="space-y-8">
                    {/* Template Selection */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3
                          className={`text-xl font-bold ${currentTheme.classes.text} flex items-center space-x-2`}
                        >
                          <BookOpen className="w-6 h-6" />
                          <span>Template Library</span>
                        </h3>
                        <AnimatedButton
                          onClick={() => setShowTemplateModal(true)}
                          variant="accent"
                          size="sm"
                          icon={Plus}
                        >
                          Browse
                        </AnimatedButton>
                      </div>

                      {selectedTemplate && (
                        <div
                          className={`${currentTheme.classes.cardBg} rounded-2xl p-4 border-l-4 border-blue-500 mb-6`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4
                              className={`font-bold ${currentTheme.classes.text}`}
                            >
                              {selectedTemplate.name}
                            </h4>
                            <button
                              onClick={() => setSelectedTemplate(null)}
                              className={`p-1 ${currentTheme.classes.textMuted} hover:${currentTheme.classes.text} transition-colors`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p
                            className={`text-sm ${currentTheme.classes.textMuted} mb-3`}
                          >
                            {selectedTemplate.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedTemplate.tags
                              .slice(0, 3)
                              .map((tag, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 ${currentTheme.classes.inputBg} ${currentTheme.classes.textMuted} text-xs rounded-lg`}
                                >
                                  {tag}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Primary Configuration */}
                      <div className="space-y-6">
                        <div>
                          <label
                            className={`block text-sm font-bold ${currentTheme.classes.text} mb-3 flex items-center space-x-2`}
                          >
                            <Target className="w-4 h-4" />
                            <span>Primary Objective</span>
                          </label>
                          <input
                            type="text"
                            value={promptConfig.topic}
                            onChange={(e) =>
                              setPromptConfig({
                                ...promptConfig,
                                topic: e.target.value,
                              })
                            }
                            className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} backdrop-blur-sm border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} transition-all duration-300 ${currentTheme.classes.text}`}
                            placeholder="Define your main goal..."
                          />
                        </div>

                        <div>
                          <label
                            className={`block text-sm font-bold ${currentTheme.classes.text} mb-3`}
                          >
                            Context & Background
                          </label>
                          <textarea
                            value={promptConfig.context}
                            onChange={(e) =>
                              setPromptConfig({
                                ...promptConfig,
                                context: e.target.value,
                              })
                            }
                            rows={4}
                            className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} backdrop-blur-sm border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} transition-all duration-300 ${currentTheme.classes.text} resize-none`}
                            placeholder="Provide detailed context..."
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                            >
                              Tone
                            </label>
                            <select
                              value={promptConfig.tone}
                              onChange={(e) =>
                                setPromptConfig({
                                  ...promptConfig,
                                  tone: e.target.value,
                                })
                              }
                              className={`w-full px-3 py-2 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-lg ${currentTheme.classes.inputFocus} ${currentTheme.classes.text} text-sm`}
                            >
                              <option value="professional">Professional</option>
                              <option value="casual">Casual</option>
                              <option value="formal">Formal</option>
                              <option value="creative">Creative</option>
                              <option value="persuasive">Persuasive</option>
                            </select>
                          </div>
                          <div>
                            <label
                              className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                            >
                              Audience
                            </label>
                            <select
                              value={promptConfig.audience}
                              onChange={(e) =>
                                setPromptConfig({
                                  ...promptConfig,
                                  audience: e.target.value,
                                })
                              }
                              className={`w-full px-3 py-2 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-lg ${currentTheme.classes.inputFocus} ${currentTheme.classes.text} text-sm`}
                            >
                              <option value="general">General</option>
                              <option value="executives">Executives</option>
                              <option value="professionals">
                                Professionals
                              </option>
                              <option value="experts">Experts</option>
                              <option value="students">Students</option>
                            </select>
                          </div>
                        </div>

                        {/* Advanced Controls */}
                        <AdvancedControls />

                        {/* Custom Fields */}
                        {selectedTemplate && renderCustomFields()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Panel - Live Preview */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} p-6 flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} flex items-center space-x-2`}
                    >
                      <Eye className="w-6 h-6" />
                      <span>Live Preview</span>
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`px-3 py-1 ${currentTheme.classes.accent} text-white rounded-full text-sm font-medium`}
                      >
                        {Math.ceil(generatePrompt().length / 4)} tokens
                      </div>
                      <AnimatedButton
                        onClick={copyToClipboard}
                        icon={Copy}
                        size="sm"
                        className={isAnimating ? "animate-pulse" : ""}
                      >
                        {isAnimating ? "Copied!" : "Copy"}
                      </AnimatedButton>
                    </div>
                  </div>

                  <div
                    className={`flex-1 ${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 overflow-y-auto border ${currentTheme.classes.inputBorder}`}
                  >
                    <div
                      className={`text-sm ${currentTheme.classes.text} whitespace-pre-wrap font-mono leading-relaxed`}
                    >
                      {generatePrompt() || (
                        <div className="py-12 text-center">
                          <Sparkles
                            className={`w-12 h-12 ${currentTheme.classes.textMuted} mx-auto mb-4`}
                          />
                          <p
                            className={`${currentTheme.classes.textMuted} text-lg`}
                          >
                            Configure your prompt to see live preview...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-3 pt-4 mt-6 border-t border-white/10">
                    <AnimatedButton
                      onClick={savePrompt}
                      variant="secondary"
                      icon={Save}
                      size="sm"
                      disabled={!promptConfig.topic}
                    >
                      Save
                    </AnimatedButton>
                    <AnimatedButton
                      onClick={() => setActiveView("testing")}
                      variant="accent"
                      icon={TestTube}
                      size="sm"
                    >
                      A/B Test
                    </AnimatedButton>
                    <AnimatedButton
                      onClick={() => setActiveView("batch")}
                      variant="ghost"
                      icon={Database}
                      size="sm"
                    >
                      Batch
                    </AnimatedButton>
                  </div>
                </div>

                {/* Right Panel - AI Assistant & Tools */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-3xl border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} p-6 overflow-y-auto`}
                >
                  <div className="space-y-8">
                    {/* AI Optimization */}
                    <OptimizationPanel />

                    {/* Quick Stats */}
                    <div>
                      <h4
                        className={`font-bold ${currentTheme.classes.text} mb-4 flex items-center space-x-2`}
                      >
                        <Activity className="w-5 h-5" />
                        <span>Prompt Analysis</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`${currentTheme.classes.cardBg} rounded-xl p-4 text-center border ${currentTheme.classes.cardBorder}`}
                        >
                          <div
                            className={`text-2xl font-bold ${currentTheme.classes.text}`}
                          >
                            {promptConfig.topic.length > 0
                              ? Math.min(
                                  100,
                                  Math.max(20, promptConfig.topic.length * 2)
                                )
                              : 0}
                          </div>
                          <div
                            className={`text-xs ${currentTheme.classes.textMuted}`}
                          >
                            Clarity Score
                          </div>
                        </div>
                        <div
                          className={`${currentTheme.classes.cardBg} rounded-xl p-4 text-center border ${currentTheme.classes.cardBorder}`}
                        >
                          <div
                            className={`text-2xl font-bold ${currentTheme.classes.text}`}
                          >
                            {promptConfig.complexity === "expert"
                              ? 95
                              : promptConfig.complexity === "advanced"
                              ? 80
                              : promptConfig.complexity === "intermediate"
                              ? 65
                              : 45}
                          </div>
                          <div
                            className={`text-xs ${currentTheme.classes.textMuted}`}
                          >
                            Sophistication
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Templates */}
                    <div>
                      <h4
                        className={`font-bold ${currentTheme.classes.text} mb-4 flex items-center space-x-2`}
                      >
                        <History className="w-5 h-5" />
                        <span>Recent & Favorites</span>
                      </h4>
                      <div className="space-y-3">
                        {Object.values(promptTemplates)
                          .slice(0, 3)
                          .map((category) =>
                            category.templates.slice(0, 1).map((template) => (
                              <button
                                key={template.id}
                                onClick={() => {
                                  setSelectedTemplate(template);
                                  setPromptConfig({
                                    ...promptConfig,
                                    customFields: {},
                                  });
                                }}
                                className={`w-full text-left p-3 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-200 group`}
                              >
                                <div
                                  className={`font-medium ${currentTheme.classes.text} text-sm group-hover:text-blue-600 transition-colors`}
                                >
                                  {template.name}
                                </div>
                                <div
                                  className={`text-xs ${currentTheme.classes.textMuted} mt-1`}
                                >
                                  {template.category} •{" "}
                                  {template.performance?.usageCount || 0} uses
                                </div>
                              </button>
                            ))
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === "analytics" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <BarChart3 className="w-8 h-8" />
                    <span>Analytics Hub</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton
                      variant="secondary"
                      icon={Download}
                      size="sm"
                    >
                      Export Report
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Calendar} size="sm">
                      Date Range
                    </AnimatedButton>
                  </div>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Total Prompts",
                      value: "1,247",
                      change: "+12.3%",
                      icon: Target,
                      color: "text-blue-600",
                      trend: "up",
                    },
                    {
                      title: "This Month",
                      value: "89",
                      change: "+23.1%",
                      icon: TrendingUp,
                      color: "text-green-600",
                      trend: "up",
                    },
                    {
                      title: "Avg Quality Score",
                      value: "87.2",
                      change: "+5.4%",
                      icon: Star,
                      color: "text-yellow-600",
                      trend: "up",
                    },
                    {
                      title: "Team Efficiency",
                      value: "94%",
                      change: "+8.7%",
                      icon: Users,
                      color: "text-purple-600",
                      trend: "up",
                    },
                  ].map((metric, idx) => (
                    <div
                      key={idx}
                      className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} ${currentTheme.classes.shadow} hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 ${currentTheme.classes.cardBg} rounded-xl flex items-center justify-center border ${currentTheme.classes.cardBorder}`}
                        >
                          <metric.icon className={`w-6 h-6 ${metric.color}`} />
                        </div>
                        <div
                          className={`flex items-center space-x-1 text-sm font-medium ${
                            metric.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          <TrendingUp className="w-3 h-3" />
                          <span>{metric.change}</span>
                        </div>
                      </div>
                      <h3
                        className={`text-sm font-medium ${currentTheme.classes.textMuted}`}
                      >
                        {metric.title}
                      </h3>
                      <p
                        className={`text-3xl font-bold ${currentTheme.classes.text} mt-1`}
                      >
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Usage Trends Chart */}
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-lg font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <LineChart className="w-5 h-5" />
                      <span>Usage Trends</span>
                    </h3>
                    <div className="flex items-end justify-between h-64 space-x-2">
                      {[
                        45, 67, 82, 91, 78, 89, 94, 102, 87, 95, 108, 119, 125,
                        134,
                      ].map((value, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center flex-1"
                        >
                          <div
                            className={`w-full ${currentTheme.classes.primary} rounded-t transition-all duration-1000 hover:opacity-80`}
                            style={{
                              height: `${(value / 140) * 100}%`,
                              minHeight: "8px",
                              animationDelay: `${idx * 100}ms`,
                            }}
                          />
                          <span
                            className={`text-xs ${currentTheme.classes.textMuted} mt-2`}
                          >
                            {idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-lg font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <PieChart className="w-5 h-5" />
                      <span>Category Distribution</span>
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          category: "Business Strategy",
                          percentage: 35,
                          count: 436,
                          color: "bg-blue-500",
                        },
                        {
                          category: "Creative Content",
                          percentage: 28,
                          count: 349,
                          color: "bg-purple-500",
                        },
                        {
                          category: "Technical Documentation",
                          percentage: 22,
                          count: 274,
                          color: "bg-green-500",
                        },
                        {
                          category: "Academic Research",
                          percentage: 15,
                          count: 187,
                          color: "bg-orange-500",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-medium ${currentTheme.classes.text}`}
                            >
                              {item.category}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                {item.count}
                              </span>
                              <span
                                className={`text-sm font-bold ${currentTheme.classes.text}`}
                              >
                                {item.percentage}%
                              </span>
                            </div>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 rounded-full ${item.color} transition-all duration-1000`}
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Performance Insights */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                >
                  <h3
                    className={`text-lg font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <Brain className="w-5 h-5" />
                    <span>AI Performance Insights</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Top Performing Templates",
                        items: [
                          "Strategic Analysis",
                          "Creative Brief",
                          "Technical Spec",
                        ],
                        icon: Award,
                        color: "text-yellow-600",
                      },
                      {
                        title: "Optimization Opportunities",
                        items: [
                          "Add more context",
                          "Specify audience",
                          "Include examples",
                        ],
                        icon: Lightbulb,
                        color: "text-blue-600",
                      },
                      {
                        title: "Recent Achievements",
                        items: [
                          "95% quality score",
                          "50+ templates used",
                          "Team collaboration",
                        ],
                        icon: CheckCircle,
                        color: "text-green-600",
                      },
                    ].map((insight, idx) => (
                      <div
                        key={idx}
                        className={`${currentTheme.classes.cardBg} rounded-xl p-4 border ${currentTheme.classes.cardBorder}`}
                      >
                        <div className="flex items-center mb-3 space-x-2">
                          <insight.icon
                            className={`w-5 h-5 ${insight.color}`}
                          />
                          <h4
                            className={`font-medium ${currentTheme.classes.text}`}
                          >
                            {insight.title}
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {insight.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                              <span
                                className={`text-sm ${currentTheme.classes.textSecondary}`}
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "testing" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <TestTube className="w-8 h-8" />
                    <span>A/B Testing Lab</span>
                  </h2>
                  <AnimatedButton icon={Plus} variant="accent">
                    Create New Test
                  </AnimatedButton>
                </div>

                {/* Active Tests */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {[
                    {
                      id: "test-001",
                      name: "Business Strategy Template Optimization",
                      status: "running",
                      progress: 67,
                      variants: [
                        {
                          name: "Original",
                          prompts: 145,
                          rating: 4.2,
                          conversions: 89,
                          traffic: 52,
                        },
                        {
                          name: "AI Optimized",
                          prompts: 147,
                          rating: 4.6,
                          conversions: 134,
                          traffic: 48,
                        },
                      ],
                      confidence: 85,
                      winner: "AI Optimized",
                      improvement: "+23%",
                      timeRemaining: "2 days",
                    },
                    {
                      id: "test-002",
                      name: "Creative Brief Template A/B",
                      status: "completed",
                      progress: 100,
                      variants: [
                        {
                          name: "Version A",
                          prompts: 89,
                          rating: 4.1,
                          conversions: 67,
                          traffic: 45,
                        },
                        {
                          name: "Version B",
                          prompts: 91,
                          rating: 4.4,
                          conversions: 78,
                          traffic: 55,
                        },
                      ],
                      confidence: 92,
                      winner: "Version B",
                      improvement: "+16%",
                      timeRemaining: "Completed",
                    },
                  ].map((test) => (
                    <div
                      key={test.id}
                      className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} hover:scale-[1.01] transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3
                            className={`font-bold ${currentTheme.classes.text} text-lg`}
                          >
                            {test.name}
                          </h3>
                          <p
                            className={`text-sm ${currentTheme.classes.textMuted}`}
                          >
                            {test.timeRemaining} • {test.confidence}% confidence
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              test.status === "running"
                                ? `${currentTheme.classes.success} text-white`
                                : `${currentTheme.classes.primary} text-white`
                            }`}
                          >
                            {test.status}
                          </span>
                          {test.status === "completed" && (
                            <span
                              className={`px-3 py-1 ${currentTheme.classes.accent} text-white rounded-full text-xs font-bold`}
                            >
                              {test.improvement}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-sm font-medium ${currentTheme.classes.text}`}
                          >
                            Progress
                          </span>
                          <span
                            className={`text-sm ${currentTheme.classes.textMuted}`}
                          >
                            {test.progress}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${currentTheme.classes.primary} transition-all duration-1000`}
                            style={{ width: `${test.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Variants Comparison */}
                      <div className="space-y-4">
                        {test.variants.map((variant, idx) => (
                          <div
                            key={idx}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                              test.winner === variant.name
                                ? "border-green-500 bg-green-50/50"
                                : `border-gray-200 ${currentTheme.classes.inputBg}`
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`font-bold ${currentTheme.classes.text}`}
                                >
                                  {variant.name}
                                </span>
                                {test.winner === variant.name && (
                                  <span className="px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">
                                    Winner
                                  </span>
                                )}
                              </div>
                              <div
                                className={`text-sm font-medium ${currentTheme.classes.textMuted}`}
                              >
                                {variant.traffic}% traffic
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center">
                                <div
                                  className={`text-xl font-bold ${currentTheme.classes.text}`}
                                >
                                  {variant.prompts}
                                </div>
                                <div
                                  className={`text-xs ${currentTheme.classes.textMuted}`}
                                >
                                  Prompts
                                </div>
                              </div>
                              <div className="text-center">
                                <div
                                  className={`text-xl font-bold ${currentTheme.classes.text} flex items-center justify-center space-x-1`}
                                >
                                  <Star className="w-4 h-4 text-yellow-500" />
                                  <span>{variant.rating}</span>
                                </div>
                                <div
                                  className={`text-xs ${currentTheme.classes.textMuted}`}
                                >
                                  Rating
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-xl font-bold text-green-600">
                                  {variant.conversions}
                                </div>
                                <div
                                  className={`text-xs ${currentTheme.classes.textMuted}`}
                                >
                                  Success
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex pt-4 mt-6 space-x-3 border-t border-gray-200">
                        <AnimatedButton
                          variant="secondary"
                          size="sm"
                          icon={Eye}
                        >
                          View Details
                        </AnimatedButton>
                        <AnimatedButton
                          variant="accent"
                          size="sm"
                          icon={Download}
                        >
                          Export Results
                        </AnimatedButton>
                        {test.status === "running" && (
                          <AnimatedButton
                            variant="danger"
                            size="sm"
                            icon={Pause}
                          >
                            Stop Test
                          </AnimatedButton>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Test Creation Quick Start */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                >
                  <h3
                    className={`text-lg font-bold ${currentTheme.classes.text} mb-4 flex items-center space-x-2`}
                  >
                    <Plus className="w-5 h-5" />
                    <span>Quick Test Setup</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[
                      {
                        title: "Template Optimization",
                        description:
                          "Test different versions of your templates",
                        icon: Edit3,
                        action: "Start Template Test",
                      },
                      {
                        title: "Tone Comparison",
                        description:
                          "Compare formal vs casual communication styles",
                        icon: MessageSquare,
                        action: "Test Tone Variants",
                      },
                      {
                        title: "Length Analysis",
                        description:
                          "Find the optimal prompt length for your use case",
                        icon: BarChart3,
                        action: "Analyze Length",
                      },
                    ].map((testType, idx) => (
                      <div
                        key={idx}
                        className={`${currentTheme.classes.cardBg} rounded-xl p-4 border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                      >
                        <div className="flex items-center mb-3 space-x-3">
                          <div
                            className={`w-10 h-10 ${currentTheme.classes.primary} rounded-xl flex items-center justify-center text-white`}
                          >
                            <testType.icon className="w-5 h-5" />
                          </div>
                          <h4
                            className={`font-bold ${currentTheme.classes.text} group-hover:text-blue-600 transition-colors`}
                          >
                            {testType.title}
                          </h4>
                        </div>
                        <p
                          className={`text-sm ${currentTheme.classes.textMuted} mb-4`}
                        >
                          {testType.description}
                        </p>
                        <AnimatedButton
                          variant="accent"
                          size="sm"
                          className="w-full"
                        >
                          {testType.action}
                        </AnimatedButton>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "batch" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <Database className="w-8 h-8" />
                    <span>Batch Processing</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton variant="secondary" icon={Upload}>
                      Upload CSV
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Plus}>
                      New Batch Job
                    </AnimatedButton>
                  </div>
                </div>

                {/* Batch Job Creation */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                >
                  <h3
                    className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <Plus className="w-6 h-6" />
                    <span>Create New Batch Job</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Job Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Product Launch Campaign Prompts"
                          className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
                        />
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Template Selection
                        </label>
                        <select
                          className={`w-full px-4 py-3 ${currentTheme.classes.inputBg} border ${currentTheme.classes.inputBorder} rounded-xl ${currentTheme.classes.inputFocus} ${currentTheme.classes.text}`}
                        >
                          <option>Strategic Business Analysis</option>
                          <option>Product Launch Strategy</option>
                          <option>Creative Brief Template</option>
                          <option>Technical Documentation</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Data Source
                        </label>
                        <div
                          className={`border-2 border-dashed ${currentTheme.classes.cardBorder} rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer`}
                        >
                          <Upload
                            className={`w-8 h-8 ${currentTheme.classes.textMuted} mx-auto mb-2`}
                          />
                          <p
                            className={`${currentTheme.classes.text} font-medium`}
                          >
                            Upload CSV File
                          </p>
                          <p
                            className={`text-sm ${currentTheme.classes.textMuted}`}
                          >
                            Or drag and drop your data file here
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Processing Options
                        </label>
                        <div className="space-y-3">
                          {[
                            { label: "Auto-optimize prompts", checked: true },
                            { label: "Generate variations", checked: false },
                            { label: "Include quality scores", checked: true },
                            {
                              label: "Export to multiple formats",
                              checked: false,
                            },
                          ].map((option, idx) => (
                            <label
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <input
                                type="checkbox"
                                checked={option.checked}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                              />
                              <span className={`${currentTheme.classes.text}`}>
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Estimated Output
                        </label>
                        <div
                          className={`${currentTheme.classes.cardBg} rounded-xl p-4 border ${currentTheme.classes.cardBorder}`}
                        >
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div
                                className={`text-2xl font-bold ${currentTheme.classes.text}`}
                              >
                                150
                              </div>
                              <div
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                Prompts
                              </div>
                            </div>
                            <div>
                              <div
                                className={`text-2xl font-bold ${currentTheme.classes.text}`}
                              >
                                ~45min
                              </div>
                              <div
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                Est. Time
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <AnimatedButton className="w-full" icon={Play} size="lg">
                        Start Batch Processing
                      </AnimatedButton>
                    </div>
                  </div>
                </div>

                {/* Recent Batch Jobs */}
                <div>
                  <h3
                    className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <History className="w-6 h-6" />
                    <span>Recent Batch Jobs</span>
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        id: "batch-001",
                        name: "Product Launch Campaign Prompts",
                        status: "completed",
                        template: "Strategic Analysis",
                        totalItems: 125,
                        completed: 125,
                        success: 118,
                        failed: 7,
                        createdAt: "2024-01-05T10:30:00Z",
                        duration: "38 minutes",
                      },
                      {
                        id: "batch-002",
                        name: "Creative Brief Generation",
                        status: "running",
                        template: "Creative Brief",
                        totalItems: 89,
                        completed: 67,
                        success: 62,
                        failed: 5,
                        createdAt: "2024-01-05T14:15:00Z",
                        duration: "22 minutes elapsed",
                      },
                      {
                        id: "batch-003",
                        name: "Technical Documentation Suite",
                        status: "queued",
                        template: "Technical Spec",
                        totalItems: 200,
                        completed: 0,
                        success: 0,
                        failed: 0,
                        createdAt: "2024-01-05T16:45:00Z",
                        duration: "Not started",
                      },
                    ].map((job) => (
                      <div
                        key={job.id}
                        className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} hover:scale-[1.01] transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                job.status === "completed"
                                  ? currentTheme.classes.success
                                  : job.status === "running"
                                  ? currentTheme.classes.primary
                                  : currentTheme.classes.textMuted +
                                    " bg-gray-100"
                              } text-white`}
                            >
                              {job.status === "completed" ? (
                                <CheckCircle className="w-6 h-6" />
                              ) : job.status === "running" ? (
                                <Play className="w-6 h-6" />
                              ) : (
                                <Clock className="w-6 h-6" />
                              )}
                            </div>
                            <div>
                              <h4
                                className={`font-bold ${currentTheme.classes.text} text-lg`}
                              >
                                {job.name}
                              </h4>
                              <p
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                {job.template} • {job.duration}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                job.status === "completed"
                                  ? `${currentTheme.classes.success} text-white`
                                  : job.status === "running"
                                  ? `${currentTheme.classes.primary} text-white`
                                  : `${currentTheme.classes.textMuted} bg-gray-100`
                              }`}
                            >
                              {job.status}
                            </span>
                            <AnimatedButton
                              variant="ghost"
                              size="sm"
                              icon={MoreVertical}
                            />
                          </div>
                        </div>

                        {/* Progress Bar for Running Jobs */}
                        {job.status === "running" && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`text-sm font-medium ${currentTheme.classes.text}`}
                              >
                                Progress
                              </span>
                              <span
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                {job.completed}/{job.totalItems} (
                                {Math.round(
                                  (job.completed / job.totalItems) * 100
                                )}
                                %)
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                              <div
                                className={`h-2 rounded-full ${currentTheme.classes.primary} transition-all duration-500`}
                                style={{
                                  width: `${
                                    (job.completed / job.totalItems) * 100
                                  }%`,
                                }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                          <div className="text-center">
                            <p
                              className={`text-2xl font-bold ${currentTheme.classes.text}`}
                            >
                              {job.totalItems}
                            </p>
                            <p
                              className={`text-sm ${currentTheme.classes.textMuted}`}
                            >
                              Total Items
                            </p>
                          </div>
                          <div className="text-center">
                            <p
                              className={`text-2xl font-bold ${currentTheme.classes.text}`}
                            >
                              {job.completed}
                            </p>
                            <p
                              className={`text-sm ${currentTheme.classes.textMuted}`}
                            >
                              Completed
                            </p>
                          </div>
                          <div className="text-center">
                            <p className={`text-2xl font-bold text-green-600`}>
                              {job.success}
                            </p>
                            <p
                              className={`text-sm ${currentTheme.classes.textMuted}`}
                            >
                              Success
                            </p>
                          </div>
                          <div className="text-center">
                            <p className={`text-2xl font-bold text-red-600`}>
                              {job.failed}
                            </p>
                            <p
                              className={`text-sm ${currentTheme.classes.textMuted}`}
                            >
                              Failed
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex pt-4 mt-6 space-x-3 border-t border-gray-200">
                          <AnimatedButton
                            variant="secondary"
                            size="sm"
                            icon={Eye}
                          >
                            View Results
                          </AnimatedButton>
                          <AnimatedButton
                            variant="accent"
                            size="sm"
                            icon={Download}
                          >
                            Export
                          </AnimatedButton>
                          {job.status === "running" && (
                            <AnimatedButton
                              variant="danger"
                              size="sm"
                              icon={Pause}
                            >
                              Pause
                            </AnimatedButton>
                          )}
                          {job.status === "queued" && (
                            <AnimatedButton
                              variant="success"
                              size="sm"
                              icon={Play}
                            >
                              Start Now
                            </AnimatedButton>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "workflows" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <Workflow className="w-8 h-8" />
                    <span>Automated Workflows</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton variant="secondary" icon={Upload}>
                      Import Workflow
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Plus}>
                      Create Workflow
                    </AnimatedButton>
                  </div>
                </div>

                {/* Workflow Builder */}
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                  {/* Workflow Steps */}
                  <div
                    className={`xl:col-span-2 ${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Settings className="w-6 h-6" />
                      <span>Workflow Designer</span>
                    </h3>

                    {/* Workflow Canvas */}
                    <div className="relative min-h-[400px] bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                      {/* Sample Workflow Nodes */}
                      <div className="space-y-6">
                        {[
                          {
                            id: 1,
                            type: "trigger",
                            title: "New Template Request",
                            icon: Play,
                            position: { x: 50, y: 50 },
                          },
                          {
                            id: 2,
                            type: "action",
                            title: "AI Optimization",
                            icon: Brain,
                            position: { x: 200, y: 50 },
                          },
                          {
                            id: 3,
                            type: "condition",
                            title: "Quality Check",
                            icon: CheckCircle,
                            position: { x: 350, y: 50 },
                          },
                          {
                            id: 4,
                            type: "action",
                            title: "Deploy to Library",
                            icon: Upload,
                            position: { x: 500, y: 50 },
                          },
                        ].map((node, idx) => (
                          <div
                            key={node.id}
                            className={`absolute w-48 p-4 bg-white rounded-xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-move ${
                              node.type === "trigger"
                                ? "border-green-500"
                                : node.type === "action"
                                ? "border-blue-500"
                                : "border-orange-500"
                            }`}
                            style={{
                              left: `${node.position.x}px`,
                              top: `${node.position.y}px`,
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${
                                  node.type === "trigger"
                                    ? "bg-green-500"
                                    : node.type === "action"
                                    ? "bg-blue-500"
                                    : "bg-orange-500"
                                }`}
                              >
                                <node.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900">
                                  {node.title}
                                </div>
                                <div className="text-xs text-gray-500 capitalize">
                                  {node.type}
                                </div>
                              </div>
                            </div>
                            {/* Connection points */}
                            <div className="absolute w-4 h-4 transform -translate-y-1/2 bg-gray-300 border-2 border-white rounded-full -right-2 top-1/2"></div>
                            {idx > 0 && (
                              <div className="absolute w-4 h-4 transform -translate-y-1/2 bg-gray-300 border-2 border-white rounded-full -left-2 top-1/2"></div>
                            )}
                          </div>
                        ))}

                        {/* Connection Lines */}
                        <svg
                          className="absolute inset-0 pointer-events-none"
                          width="100%"
                          height="100%"
                        >
                          <path
                            d="M 98 66 Q 149 66 149 66 Q 200 66 200 66"
                            stroke="#6B7280"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <path
                            d="M 248 66 Q 299 66 299 66 Q 350 66 350 66"
                            stroke="#6B7280"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <path
                            d="M 398 66 Q 449 66 449 66 Q 500 66 500 66"
                            stroke="#6B7280"
                            strokeWidth="2"
                            fill="none"
                            markerEnd="url(#arrowhead)"
                          />
                          <defs>
                            <marker
                              id="arrowhead"
                              markerWidth="10"
                              markerHeight="7"
                              refX="9"
                              refY="3.5"
                              orient="auto"
                            >
                              <polygon
                                points="0 0, 10 3.5, 0 7"
                                fill="#6B7280"
                              />
                            </marker>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Workflow Controls */}
                    <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200">
                      <div className="flex space-x-3">
                        <AnimatedButton variant="success" icon={Play} size="sm">
                          Test Workflow
                        </AnimatedButton>
                        <AnimatedButton
                          variant="secondary"
                          icon={Save}
                          size="sm"
                        >
                          Save Draft
                        </AnimatedButton>
                      </div>
                      <div className="flex space-x-2">
                        <AnimatedButton
                          variant="ghost"
                          icon={RotateCcw}
                          size="sm"
                        >
                          Reset
                        </AnimatedButton>
                        <AnimatedButton
                          variant="accent"
                          icon={Download}
                          size="sm"
                        >
                          Export
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>

                  {/* Workflow Library */}
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-lg font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Layers className="w-5 h-5" />
                      <span>Workflow Templates</span>
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          name: "Content Review Pipeline",
                          category: "Content",
                          uses: 234,
                          icon: FileText,
                        },
                        {
                          name: "A/B Test Automation",
                          category: "Testing",
                          uses: 156,
                          icon: TestTube,
                        },
                        {
                          name: "Quality Assurance Flow",
                          category: "QA",
                          uses: 189,
                          icon: Shield,
                        },
                        {
                          name: "Batch Processing",
                          category: "Operations",
                          uses: 298,
                          icon: Database,
                        },
                        {
                          name: "Team Approval Process",
                          category: "Collaboration",
                          uses: 123,
                          icon: Users,
                        },
                      ].map((workflow, idx) => (
                        <div
                          key={idx}
                          className={`p-4 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
                        >
                          <div className="flex items-center mb-2 space-x-3">
                            <div
                              className={`w-8 h-8 ${currentTheme.classes.primary} rounded-lg flex items-center justify-center text-white`}
                            >
                              <workflow.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div
                                className={`font-medium ${currentTheme.classes.text} group-hover:text-blue-600 transition-colors`}
                              >
                                {workflow.name}
                              </div>
                              <div
                                className={`text-xs ${currentTheme.classes.textMuted}`}
                              >
                                {workflow.category} • {workflow.uses} uses
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-4 mt-6 border-t border-gray-200">
                      <h4
                        className={`font-medium ${currentTheme.classes.text} mb-3`}
                      >
                        Quick Actions
                      </h4>
                      <div className="space-y-2">
                        <AnimatedButton
                          variant="ghost"
                          className="justify-start w-full"
                          icon={Plus}
                          size="sm"
                        >
                          Add Trigger
                        </AnimatedButton>
                        <AnimatedButton
                          variant="ghost"
                          className="justify-start w-full"
                          icon={Settings}
                          size="sm"
                        >
                          Add Action
                        </AnimatedButton>
                        <AnimatedButton
                          variant="ghost"
                          className="justify-start w-full"
                          icon={Filter}
                          size="sm"
                        >
                          Add Condition
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Workflows */}
                <div>
                  <h3
                    className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <Activity className="w-6 h-6" />
                    <span>Active Workflows</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {[
                      {
                        name: "Content Optimization Pipeline",
                        status: "running",
                        executions: 1247,
                        success: 94,
                        lastRun: "2 minutes ago",
                      },
                      {
                        name: "Quality Gate Workflow",
                        status: "paused",
                        executions: 856,
                        success: 98,
                        lastRun: "1 hour ago",
                      },
                      {
                        name: "Batch Processing Flow",
                        status: "running",
                        executions: 2134,
                        success: 91,
                        lastRun: "5 minutes ago",
                      },
                    ].map((workflow, idx) => (
                      <div
                        key={idx}
                        className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4
                            className={`font-bold ${currentTheme.classes.text}`}
                          >
                            {workflow.name}
                          </h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              workflow.status === "running"
                                ? `${currentTheme.classes.success} text-white`
                                : workflow.status === "paused"
                                ? `${currentTheme.classes.warning} text-white`
                                : `${currentTheme.classes.textMuted} bg-gray-100`
                            }`}
                          >
                            {workflow.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold ${currentTheme.classes.text}`}
                            >
                              {workflow.executions.toLocaleString()}
                            </div>
                            <div
                              className={`text-xs ${currentTheme.classes.textMuted}`}
                            >
                              Executions
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">
                              {workflow.success}%
                            </div>
                            <div
                              className={`text-xs ${currentTheme.classes.textMuted}`}
                            >
                              Success Rate
                            </div>
                          </div>
                        </div>
                        <div
                          className={`text-sm ${currentTheme.classes.textMuted} mb-4`}
                        >
                          Last run: {workflow.lastRun}
                        </div>
                        <div className="flex space-x-2">
                          <AnimatedButton
                            variant="secondary"
                            size="sm"
                            icon={Eye}
                          >
                            View
                          </AnimatedButton>
                          <AnimatedButton
                            variant="accent"
                            size="sm"
                            icon={Edit3}
                          >
                            Edit
                          </AnimatedButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "integrations" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <Globe className="w-8 h-8" />
                    <span>API Integration Hub</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton variant="secondary" icon={FileText}>
                      API Docs
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Plus}>
                      Add Integration
                    </AnimatedButton>
                  </div>
                </div>

                {/* Integration Categories */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      category: "AI Platforms",
                      description:
                        "Connect with leading AI models and services",
                      integrations: [
                        {
                          name: "OpenAI GPT-4",
                          status: "connected",
                          icon: "🤖",
                          usage: "2.4K calls/day",
                        },
                        {
                          name: "Anthropic Claude",
                          status: "connected",
                          icon: "🧠",
                          usage: "1.8K calls/day",
                        },
                        {
                          name: "Google Bard",
                          status: "available",
                          icon: "🔍",
                          usage: "Not connected",
                        },
                        {
                          name: "Cohere",
                          status: "available",
                          icon: "⚡",
                          usage: "Not connected",
                        },
                      ],
                    },
                    {
                      category: "Productivity Tools",
                      description: "Streamline workflows with popular apps",
                      integrations: [
                        {
                          name: "Slack",
                          status: "connected",
                          icon: "💬",
                          usage: "156 messages",
                        },
                        {
                          name: "Microsoft Teams",
                          status: "connected",
                          icon: "👥",
                          usage: "89 notifications",
                        },
                        {
                          name: "Notion",
                          status: "available",
                          icon: "📝",
                          usage: "Not connected",
                        },
                        {
                          name: "Airtable",
                          status: "available",
                          icon: "📊",
                          usage: "Not connected",
                        },
                      ],
                    },
                    {
                      category: "Development Tools",
                      description: "Integrate with your development workflow",
                      integrations: [
                        {
                          name: "GitHub",
                          status: "connected",
                          icon: "🐙",
                          usage: "45 repositories",
                        },
                        {
                          name: "GitLab",
                          status: "available",
                          icon: "🦊",
                          usage: "Not connected",
                        },
                        {
                          name: "Zapier",
                          status: "connected",
                          icon: "⚡",
                          usage: "12 zaps active",
                        },
                        {
                          name: "Webhooks",
                          status: "configured",
                          icon: "🔗",
                          usage: "8 endpoints",
                        },
                      ],
                    },
                  ].map((category, idx) => (
                    <div
                      key={idx}
                      className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                    >
                      <div className="mb-6">
                        <h3
                          className={`text-lg font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          {category.category}
                        </h3>
                        <p
                          className={`text-sm ${currentTheme.classes.textMuted}`}
                        >
                          {category.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {category.integrations.map(
                          (integration, integrationIdx) => (
                            <div
                              key={integrationIdx}
                              className={`flex items-center justify-between p-3 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300`}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">
                                  {integration.icon}
                                </span>
                                <div>
                                  <div
                                    className={`font-medium ${currentTheme.classes.text}`}
                                  >
                                    {integration.name}
                                  </div>
                                  <div
                                    className={`text-xs ${currentTheme.classes.textMuted}`}
                                  >
                                    {integration.usage}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    integration.status === "connected"
                                      ? `${currentTheme.classes.success} text-white`
                                      : integration.status === "configured"
                                      ? `${currentTheme.classes.primary} text-white`
                                      : `${currentTheme.classes.textMuted} bg-gray-100`
                                  }`}
                                >
                                  {integration.status}
                                </span>
                                <AnimatedButton
                                  variant="ghost"
                                  size="sm"
                                  icon={Settings}
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* API Management */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* API Keys & Configuration */}
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Shield className="w-6 h-6" />
                      <span>API Security</span>
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          API Keys Management
                        </label>
                        <div className="space-y-3">
                          {[
                            {
                              name: "Production API Key",
                              created: "2024-01-01",
                              lastUsed: "2 mins ago",
                              status: "active",
                            },
                            {
                              name: "Development API Key",
                              created: "2024-01-15",
                              lastUsed: "1 hour ago",
                              status: "active",
                            },
                            {
                              name: "Testing API Key",
                              created: "2024-01-20",
                              lastUsed: "Never",
                              status: "inactive",
                            },
                          ].map((key, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center justify-between p-3 ${currentTheme.classes.inputBg} rounded-lg border ${currentTheme.classes.inputBorder}`}
                            >
                              <div>
                                <div
                                  className={`font-medium ${currentTheme.classes.text}`}
                                >
                                  {key.name}
                                </div>
                                <div
                                  className={`text-xs ${currentTheme.classes.textMuted}`}
                                >
                                  Created: {key.created} • Last used:{" "}
                                  {key.lastUsed}
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    key.status === "active"
                                      ? "bg-green-500"
                                      : "bg-gray-400"
                                  }`}
                                />
                                <AnimatedButton
                                  variant="ghost"
                                  size="sm"
                                  icon={Eye}
                                />
                                <AnimatedButton
                                  variant="ghost"
                                  size="sm"
                                  icon={Copy}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <AnimatedButton
                          variant="accent"
                          className="w-full mt-4"
                          icon={Plus}
                        >
                          Generate New API Key
                        </AnimatedButton>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Rate Limiting
                        </label>
                        <div
                          className={`${currentTheme.classes.inputBg} rounded-lg p-4 border ${currentTheme.classes.inputBorder}`}
                        >
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div
                                className={`text-2xl font-bold ${currentTheme.classes.text}`}
                              >
                                2,847
                              </div>
                              <div
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                Requests Today
                              </div>
                            </div>
                            <div>
                              <div
                                className={`text-2xl font-bold ${currentTheme.classes.text}`}
                              >
                                97.2%
                              </div>
                              <div
                                className={`text-sm ${currentTheme.classes.textMuted}`}
                              >
                                Success Rate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Webhook Configuration */}
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Share2 className="w-6 h-6" />
                      <span>Webhooks & Events</span>
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Active Webhooks
                        </label>
                        <div className="space-y-3">
                          {[
                            {
                              url: "https://api.example.com/prompts",
                              events: ["prompt.created", "prompt.optimized"],
                              status: "active",
                            },
                            {
                              url: "https://slack.webhook.url",
                              events: ["test.completed"],
                              status: "active",
                            },
                            {
                              url: "https://internal.app/notify",
                              events: ["batch.finished"],
                              status: "inactive",
                            },
                          ].map((webhook, idx) => (
                            <div
                              key={idx}
                              className={`p-3 ${currentTheme.classes.inputBg} rounded-lg border ${currentTheme.classes.inputBorder}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <code
                                  className={`text-sm ${currentTheme.classes.text} font-mono truncate`}
                                >
                                  {webhook.url}
                                </code>
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    webhook.status === "active"
                                      ? "bg-green-500"
                                      : "bg-gray-400"
                                  }`}
                                />
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {webhook.events.map((event, eventIdx) => (
                                  <span
                                    key={eventIdx}
                                    className={`px-2 py-1 ${currentTheme.classes.accent} text-white text-xs rounded-full`}
                                  >
                                    {event}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <AnimatedButton
                          variant="accent"
                          className="w-full mt-4"
                          icon={Plus}
                        >
                          Add Webhook
                        </AnimatedButton>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Event Logs
                        </label>
                        <div
                          className={`${currentTheme.classes.inputBg} rounded-lg border ${currentTheme.classes.inputBorder} max-h-32 overflow-y-auto`}
                        >
                          {[
                            {
                              time: "14:23:45",
                              event: "prompt.created",
                              status: "success",
                            },
                            {
                              time: "14:22:31",
                              event: "test.completed",
                              status: "success",
                            },
                            {
                              time: "14:21:18",
                              event: "batch.finished",
                              status: "failed",
                            },
                            {
                              time: "14:20:55",
                              event: "prompt.optimized",
                              status: "success",
                            },
                          ].map((log, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 text-sm border-b border-gray-200 last:border-b-0"
                            >
                              <span
                                className={`${currentTheme.classes.textMuted} font-mono`}
                              >
                                {log.time}
                              </span>
                              <span className={currentTheme.classes.text}>
                                {log.event}
                              </span>
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  log.status === "success"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {log.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integration Marketplace */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                >
                  <h3
                    className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <Star className="w-6 h-6" />
                    <span>Integration Marketplace</span>
                  </h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        name: "Salesforce CRM",
                        description: "Sync prompts with customer data",
                        category: "CRM",
                        rating: 4.8,
                        installs: "12K+",
                      },
                      {
                        name: "HubSpot Marketing",
                        description: "Automate marketing campaigns",
                        category: "Marketing",
                        rating: 4.6,
                        installs: "8.5K+",
                      },
                      {
                        name: "Jira Project Mgmt",
                        description: "Track prompt development",
                        category: "Project",
                        rating: 4.4,
                        installs: "6.2K+",
                      },
                      {
                        name: "Google Analytics",
                        description: "Track prompt performance",
                        category: "Analytics",
                        rating: 4.7,
                        installs: "15K+",
                      },
                    ].map((app, idx) => (
                      <div
                        key={idx}
                        className={`p-4 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300 group`}
                      >
                        <div className="flex items-center mb-3 space-x-3">
                          <div
                            className={`w-10 h-10 ${currentTheme.classes.primary} rounded-xl flex items-center justify-center text-white font-bold`}
                          >
                            {app.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-bold ${currentTheme.classes.text} group-hover:text-blue-600 transition-colors`}
                            >
                              {app.name}
                            </h4>
                            <div
                              className={`text-xs ${currentTheme.classes.textMuted}`}
                            >
                              {app.category}
                            </div>
                          </div>
                        </div>
                        <p
                          className={`text-sm ${currentTheme.classes.textMuted} mb-3`}
                        >
                          {app.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span
                              className={`text-sm ${currentTheme.classes.text}`}
                            >
                              {app.rating}
                            </span>
                            <span
                              className={`text-xs ${currentTheme.classes.textMuted}`}
                            >
                              ({app.installs})
                            </span>
                          </div>
                          <AnimatedButton variant="accent" size="sm">
                            Install
                          </AnimatedButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeView === "industry" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <Briefcase className="w-8 h-8" />
                    <span>Industry Solutions</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton variant="secondary" icon={Download}>
                      Industry Reports
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Plus}>
                      Request Custom Solution
                    </AnimatedButton>
                  </div>
                </div>

                {/* Industry Categories */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      industry: "Healthcare & Pharma",
                      icon: "🏥",
                      description:
                        "HIPAA-compliant prompts for medical documentation, research, and patient communication",
                      templates: 23,
                      compliance: ["HIPAA", "FDA", "GxP"],
                      features: [
                        "Medical terminology",
                        "Clinical trials",
                        "Patient safety",
                      ],
                      growth: "+18%",
                    },
                    {
                      industry: "Financial Services",
                      icon: "🏦",
                      description:
                        "Regulatory-compliant prompts for banking, insurance, and investment services",
                      templates: 31,
                      compliance: ["SOX", "PCI DSS", "GDPR"],
                      features: [
                        "Risk assessment",
                        "Compliance reporting",
                        "Customer onboarding",
                      ],
                      growth: "+24%",
                    },
                    {
                      industry: "Legal & Law Firms",
                      icon: "⚖️",
                      description:
                        "Specialized prompts for legal research, document drafting, and case analysis",
                      templates: 19,
                      compliance: ["Attorney-Client Privilege", "Bar Ethics"],
                      features: [
                        "Contract analysis",
                        "Legal research",
                        "Brief writing",
                      ],
                      growth: "+15%",
                    },
                    {
                      industry: "Education & E-learning",
                      icon: "🎓",
                      description:
                        "Educational content creation, curriculum development, and student assessment",
                      templates: 28,
                      compliance: ["FERPA", "COPPA", "Accessibility"],
                      features: [
                        "Course creation",
                        "Assessment design",
                        "Learning analytics",
                      ],
                      growth: "+32%",
                    },
                    {
                      industry: "Technology & SaaS",
                      icon: "💻",
                      description:
                        "Technical documentation, API guides, and developer resources",
                      templates: 35,
                      compliance: ["SOC 2", "ISO 27001", "GDPR"],
                      features: [
                        "API documentation",
                        "Code analysis",
                        "Technical writing",
                      ],
                      growth: "+41%",
                    },
                    {
                      industry: "Marketing & Advertising",
                      icon: "📈",
                      description:
                        "Campaign creation, content marketing, and brand messaging strategies",
                      templates: 42,
                      compliance: ["FTC Guidelines", "CAN-SPAM", "GDPR"],
                      features: [
                        "Campaign optimization",
                        "A/B testing",
                        "Brand consistency",
                      ],
                      growth: "+28%",
                    },
                  ].map((industry, idx) => (
                    <div
                      key={idx}
                      className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300 group`}
                    >
                      <div className="flex items-start mb-4 space-x-4">
                        <span className="text-4xl">{industry.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3
                              className={`font-bold ${currentTheme.classes.text} group-hover:text-blue-600 transition-colors`}
                            >
                              {industry.industry}
                            </h3>
                            <span
                              className={`px-2 py-1 ${currentTheme.classes.success} text-white text-xs rounded-full font-bold`}
                            >
                              {industry.growth}
                            </span>
                          </div>
                          <p
                            className={`text-sm ${currentTheme.classes.textMuted} mb-3`}
                          >
                            {industry.description}
                          </p>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-sm font-medium ${currentTheme.classes.text}`}
                              >
                                Templates Available
                              </span>
                              <span
                                className={`text-lg font-bold ${currentTheme.classes.text}`}
                              >
                                {industry.templates}
                              </span>
                            </div>

                            <div>
                              <span
                                className={`text-sm font-medium ${currentTheme.classes.text} block mb-2`}
                              >
                                Compliance
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {industry.compliance.map((comp, compIdx) => (
                                  <span
                                    key={compIdx}
                                    className={`px-2 py-1 ${currentTheme.classes.accent} text-white text-xs rounded-full`}
                                  >
                                    {comp}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <span
                                className={`text-sm font-medium ${currentTheme.classes.text} block mb-2`}
                              >
                                Key Features
                              </span>
                              <div className="space-y-1">
                                {industry.features.map(
                                  (feature, featureIdx) => (
                                    <div
                                      key={featureIdx}
                                      className="flex items-center space-x-2"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                                      <span
                                        className={`text-sm ${currentTheme.classes.textSecondary}`}
                                      >
                                        {feature}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex pt-4 mt-4 space-x-2 border-t border-gray-200">
                        <AnimatedButton
                          variant="accent"
                          className="flex-1"
                          size="sm"
                        >
                          Explore Templates
                        </AnimatedButton>
                        <AnimatedButton
                          variant="secondary"
                          size="sm"
                          icon={FileText}
                        >
                          Industry Guide
                        </AnimatedButton>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Industry Insights */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <TrendingUp className="w-6 h-6" />
                      <span>Industry Trends</span>
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          trend: "AI Ethics in Healthcare",
                          growth: "+45%",
                          impact: "High",
                          timeframe: "Q1 2024",
                        },
                        {
                          trend: "Automated Compliance Reporting",
                          growth: "+32%",
                          impact: "Medium",
                          timeframe: "Q2 2024",
                        },
                        {
                          trend: "Real-time Legal Research",
                          growth: "+28%",
                          impact: "High",
                          timeframe: "Q1 2024",
                        },
                        {
                          trend: "Personalized Education Content",
                          growth: "+51%",
                          impact: "Very High",
                          timeframe: "Q2 2024",
                        },
                      ].map((trend, idx) => (
                        <div
                          key={idx}
                          className={`p-4 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4
                              className={`font-medium ${currentTheme.classes.text}`}
                            >
                              {trend.trend}
                            </h4>
                            <span
                              className={`px-2 py-1 ${currentTheme.classes.success} text-white text-xs rounded-full font-bold`}
                            >
                              {trend.growth}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span
                              className={`${currentTheme.classes.textMuted}`}
                            >
                              Impact: {trend.impact}
                            </span>
                            <span
                              className={`${currentTheme.classes.textMuted}`}
                            >
                              {trend.timeframe}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Award className="w-6 h-6" />
                      <span>Success Stories</span>
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          company: "MedTech Solutions",
                          industry: "Healthcare",
                          result: "40% faster clinical documentation",
                          template: "Medical Report Generator",
                        },
                        {
                          company: "Global Finance Corp",
                          industry: "Banking",
                          result: "60% reduction in compliance review time",
                          template: "Risk Assessment Framework",
                        },
                        {
                          company: "EduTech University",
                          industry: "Education",
                          result: "3x increase in course completion rates",
                          template: "Adaptive Learning Paths",
                        },
                      ].map((story, idx) => (
                        <div
                          key={idx}
                          className={`p-4 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder}`}
                        >
                          <div className="flex items-center mb-2 space-x-3">
                            <div
                              className={`w-8 h-8 ${currentTheme.classes.primary} rounded-lg flex items-center justify-center text-white font-bold`}
                            >
                              {story.company.charAt(0)}
                            </div>
                            <div>
                              <h4
                                className={`font-medium ${currentTheme.classes.text}`}
                              >
                                {story.company}
                              </h4>
                              <span
                                className={`text-xs ${currentTheme.classes.textMuted}`}
                              >
                                {story.industry}
                              </span>
                            </div>
                          </div>
                          <p
                            className={`text-sm ${currentTheme.classes.textSecondary} mb-2`}
                          >
                            {story.result}
                          </p>
                          <span
                            className={`text-xs ${currentTheme.classes.accent} px-2 py-1 rounded-full bg-blue-50`}
                          >
                            {story.template}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeView === "security" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2
                    className={`text-3xl font-bold ${currentTheme.classes.text} flex items-center space-x-3`}
                  >
                    <Shield className="w-8 h-8" />
                    <span>Security & Compliance</span>
                  </h2>
                  <div className="flex space-x-3">
                    <AnimatedButton variant="secondary" icon={FileText}>
                      Compliance Report
                    </AnimatedButton>
                    <AnimatedButton variant="accent" icon={Shield}>
                      Security Scan
                    </AnimatedButton>
                  </div>
                </div>

                {/* Security Overview */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Security Score",
                      value: "98.5%",
                      status: "excellent",
                      icon: Shield,
                      color: "text-green-600",
                    },
                    {
                      title: "Compliance Rate",
                      value: "100%",
                      status: "compliant",
                      icon: CheckCircle,
                      color: "text-green-600",
                    },
                    {
                      title: "Active Threats",
                      value: "0",
                      status: "secure",
                      icon: AlertCircle,
                      color: "text-green-600",
                    },
                    {
                      title: "Last Audit",
                      value: "7 days ago",
                      status: "recent",
                      icon: Calendar,
                      color: "text-blue-600",
                    },
                  ].map((metric, idx) => (
                    <div
                      key={idx}
                      className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder} hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 ${currentTheme.classes.cardBg} rounded-xl flex items-center justify-center border ${currentTheme.classes.cardBorder}`}
                        >
                          <metric.icon className={`w-6 h-6 ${metric.color}`} />
                        </div>
                        <span
                          className={`px-2 py-1 ${currentTheme.classes.success} text-white text-xs rounded-full font-bold`}
                        >
                          {metric.status}
                        </span>
                      </div>
                      <h3
                        className={`text-sm font-medium ${currentTheme.classes.textMuted}`}
                      >
                        {metric.title}
                      </h3>
                      <p
                        className={`text-3xl font-bold ${currentTheme.classes.text} mt-1`}
                      >
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Security Features */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Shield className="w-6 h-6" />
                      <span>Data Protection</span>
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          feature: "End-to-End Encryption",
                          status: "enabled",
                          description: "AES-256 encryption for all data",
                        },
                        {
                          feature: "Zero-Knowledge Architecture",
                          status: "enabled",
                          description: "We cannot access your prompt data",
                        },
                        {
                          feature: "SOC 2 Type II Compliance",
                          status: "certified",
                          description: "Annual third-party audits",
                        },
                        {
                          feature: "GDPR Compliance",
                          status: "enabled",
                          description: "EU data protection standards",
                        },
                        {
                          feature: "Data Residency Control",
                          status: "configurable",
                          description: "Choose your data storage location",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-4 ${currentTheme.classes.cardBg} rounded-xl border ${currentTheme.classes.cardBorder}`}
                        >
                          <div className="flex-1">
                            <div
                              className={`font-medium ${currentTheme.classes.text} mb-1`}
                            >
                              {item.feature}
                            </div>
                            <div
                              className={`text-sm ${currentTheme.classes.textMuted}`}
                            >
                              {item.description}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                item.status === "enabled" ||
                                item.status === "certified"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              }`}
                            />
                            <span
                              className={`text-sm font-medium ${currentTheme.classes.text} capitalize`}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                  >
                    <h3
                      className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                    >
                      <Users className="w-6 h-6" />
                      <span>Access Control</span>
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Role-Based Permissions
                        </label>
                        <div className="space-y-2">
                          {[
                            {
                              role: "Admin",
                              users: 2,
                              permissions: [
                                "Full access",
                                "User management",
                                "Security settings",
                              ],
                            },
                            {
                              role: "Editor",
                              users: 12,
                              permissions: [
                                "Create/edit prompts",
                                "View analytics",
                                "Export data",
                              ],
                            },
                            {
                              role: "Viewer",
                              users: 28,
                              permissions: [
                                "View prompts",
                                "Basic analytics",
                                "Download templates",
                              ],
                            },
                          ].map((role, idx) => (
                            <div
                              key={idx}
                              className={`p-3 ${currentTheme.classes.inputBg} rounded-lg border ${currentTheme.classes.inputBorder}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className={`font-medium ${currentTheme.classes.text}`}
                                >
                                  {role.role}
                                </span>
                                <span
                                  className={`text-sm ${currentTheme.classes.textMuted}`}
                                >
                                  {role.users} users
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {role.permissions.map((perm, permIdx) => (
                                  <span
                                    key={permIdx}
                                    className={`px-2 py-1 ${currentTheme.classes.accent} text-white text-xs rounded-full`}
                                  >
                                    {perm}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-bold ${currentTheme.classes.text} mb-2`}
                        >
                          Two-Factor Authentication
                        </label>
                        <div
                          className={`${currentTheme.classes.inputBg} rounded-lg p-4 border ${currentTheme.classes.inputBorder}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`font-medium ${currentTheme.classes.text}`}
                            >
                              2FA Status
                            </span>
                            <span
                              className={`px-3 py-1 ${currentTheme.classes.success} text-white text-sm rounded-full font-bold`}
                            >
                              Enabled
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div
                                className={`text-xl font-bold ${currentTheme.classes.text}`}
                              >
                                38/42
                              </div>
                              <div
                                className={`text-xs ${currentTheme.classes.textMuted}`}
                              >
                                Users with 2FA
                              </div>
                            </div>
                            <div>
                              <div
                                className={`text-xl font-bold ${currentTheme.classes.text}`}
                              >
                                90.5%
                              </div>
                              <div
                                className={`text-xs ${currentTheme.classes.textMuted}`}
                              >
                                Adoption Rate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Logs */}
                <div
                  className={`${currentTheme.classes.cardBg} backdrop-blur-sm rounded-2xl p-6 border ${currentTheme.classes.cardBorder}`}
                >
                  <h3
                    className={`text-xl font-bold ${currentTheme.classes.text} mb-6 flex items-center space-x-2`}
                  >
                    <FileText className="w-6 h-6" />
                    <span>Audit Logs</span>
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr
                          className={`border-b ${currentTheme.classes.cardBorder}`}
                        >
                          <th
                            className={`text-left py-3 px-4 font-medium ${currentTheme.classes.text}`}
                          >
                            Timestamp
                          </th>
                          <th
                            className={`text-left py-3 px-4 font-medium ${currentTheme.classes.text}`}
                          >
                            User
                          </th>
                          <th
                            className={`text-left py-3 px-4 font-medium ${currentTheme.classes.text}`}
                          >
                            Action
                          </th>
                          <th
                            className={`text-left py-3 px-4 font-medium ${currentTheme.classes.text}`}
                          >
                            Resource
                          </th>
                          <th
                            className={`text-left py-3 px-4 font-medium ${currentTheme.classes.text}`}
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            time: "2024-01-05 14:23:45",
                            user: "john.doe@company.com",
                            action: "Template Created",
                            resource: "Strategic Analysis v2",
                            status: "success",
                          },
                          {
                            time: "2024-01-05 14:22:31",
                            user: "jane.smith@company.com",
                            action: "API Key Generated",
                            resource: "Production Environment",
                            status: "success",
                          },
                          {
                            time: "2024-01-05 14:21:18",
                            user: "admin@company.com",
                            action: "User Role Changed",
                            resource: "mike.wilson@company.com",
                            status: "success",
                          },
                          {
                            time: "2024-01-05 14:20:55",
                            user: "sarah.lee@company.com",
                            action: "Batch Job Started",
                            resource: "Marketing Campaign Prompts",
                            status: "success",
                          },
                          {
                            time: "2024-01-05 14:19:42",
                            user: "system",
                            action: "Security Scan",
                            resource: "All Resources",
                            status: "completed",
                          },
                        ].map((log, idx) => (
                          <tr
                            key={idx}
                            className={`border-b ${currentTheme.classes.cardBorder} hover:bg-gray-50/50 transition-colors`}
                          >
                            <td
                              className={`py-3 px-4 text-sm font-mono ${currentTheme.classes.textMuted}`}
                            >
                              {log.time}
                            </td>
                            <td
                              className={`py-3 px-4 text-sm ${currentTheme.classes.text}`}
                            >
                              {log.user}
                            </td>
                            <td
                              className={`py-3 px-4 text-sm ${currentTheme.classes.text}`}
                            >
                              {log.action}
                            </td>
                            <td
                              className={`py-3 px-4 text-sm ${currentTheme.classes.textMuted}`}
                            >
                              {log.resource}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-1 text-xs rounded-full font-medium ${
                                  log.status === "success" ||
                                  log.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200">
                    <span
                      className={`text-sm ${currentTheme.classes.textMuted}`}
                    >
                      Showing 5 of 1,247 audit entries
                    </span>
                    <div className="flex space-x-2">
                      <AnimatedButton
                        variant="secondary"
                        size="sm"
                        icon={Download}
                      >
                        Export Logs
                      </AnimatedButton>
                      <AnimatedButton variant="accent" size="sm" icon={Eye}>
                        View All
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modals and Overlays */}
      <TemplateModal />
      <NotificationStack />

      {/* Keyboard Shortcuts Helper */}
      <div className="fixed z-50 bottom-6 left-6">
        <div
          className={`${currentTheme.classes.cardBg} backdrop-blur-xl rounded-xl p-3 border ${currentTheme.classes.cardBorder} text-xs ${currentTheme.classes.textMuted}`}
        >
          <div className="flex items-center space-x-4">
            <span>⌘K Templates</span>
            <span>⌘⏎ Copy</span>
            <span>⎋ Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskBetter;
