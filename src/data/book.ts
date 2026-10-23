// Content for the book landing page. Sources: manuscript v4.3, chapter
// summaries (99_summaries) and the published page on mkrause.info.

export const book = {
  title: 'Claude Code Beyond the Prompt',
  subtitle: 'Build reusable skills and agentic workflows',
  author: 'Martin Krause',
  publisher: 'Packt',
  release: '2026-11-10',
  releaseLabel: 'November 10, 2026',
  formats: ['Print', 'eBook'],
  repo: 'https://github.com/PacktPublishing/Claude-Beyond-Prompting',
  buy: [
    { label: 'Pre-order on Amazon', href: 'https://www.amazon.com/Claude-Beyond-Prompt-reusable-workflows-ebook/dp/B0H7HXWTLJ' },
    { label: 'Pre-order from Packt', href: 'https://www.packtpub.com/en-us/product/claude-beyond-the-prompt-9781807782290' },
  ],
};

export const nav = [
  { href: '#shift', label: 'The shift' },
  { href: '#preface', label: 'Preface' },
  { href: '#contents', label: 'Contents' },
  { href: '#author', label: 'Author' },
];

// The progression shown on the cover: prompts → skills → workflows → agentic systems.
export const ladder = [
  { step: '1', title: 'Prompts', text: 'Powerful for one answer — but fragile, unrepeatable, and rebuilt from memory every time.', chapters: 'Ch. 1–2' },
  { step: '2', title: 'Skills', text: 'The method behind a recurring prompt, packaged in a SKILL.md that Claude recognizes and applies on its own.', chapters: 'Ch. 3–5' },
  { step: '3', title: 'Workflows', text: 'Several reliable steps with inputs, checks, decisions and a stopping point — tested, maintained and shared.', chapters: 'Ch. 6–8' },
  { step: '4', title: 'Agentic systems', text: 'Agents that gather, act and verify, connected to real tools through MCP — inside a supervised workbench.', chapters: 'Ch. 9–14' },
];

export const outcomes = [
  { title: 'Replace ad hoc prompting', text: 'Spot the stable structure under your prompts and turn it into an explicit, repeatable method.' },
  { title: 'Turn prompts into testable skills', text: 'Write, trigger-test and refine skills that activate on the right requests — and stay silent on near-misses.' },
  { title: 'Build context-aware workflows', text: 'Capture inputs, steps, checks and decisions in a WORKFLOW.md your whole team can rely on.' },
  { title: 'Orchestrate agents and subagents', text: 'Know when a task needs a prompt, a skill, a workflow or an agent — and pick the smallest structure that fits.' },
  { title: 'Connect tools through MCP', text: 'Give agents real evidence through MCP while keeping retrieved content as data, not instructions.' },
  { title: 'Design your own AI workbench', text: 'Combine CLAUDE.md, permissions, hooks and validators into a supervised setup you control.' },
];

export const audience = [
  'Developers, tech leads and product-minded builders who already use Claude or Claude Code and want consistent, repeatable results instead of lucky one-off answers.',
  'Engineers who keep pasting the same prompts and want to package that know-how as skills and workflows the whole team can share.',
  'Managers, founders and consultants who want a clear, practical picture of where agentic work is heading inside real teams.',
];

export const prerequisites = [
  { label: 'Claude Code', detail: 'installed and signed in. The chat examples work in any Claude interface.' },
  { label: 'Node.js 24 LTS', detail: 'or higher, for running ToDo Mate and the scripts in later chapters.' },
  { label: 'Docker', detail: 'to run Kamori, the log server that ships with the example app.' },
  { label: 'Git and a terminal', detail: 'to clone the companion repository and follow along chapter by chapter.' },
];

export const conventions = [
  { sample: 'CLAUDE.md', text: 'Code in text — file names, commands, folder names and user input.' },
  { sample: '```markdown', text: 'Code blocks — skills, workflows and prompts are plain Markdown files.' },
  { sample: 'trc_51y8un', text: 'Timestamps and trace IDs in log listings are examples. Yours will differ, so don’t copy them verbatim.' },
];

export type Chapter = { n: number; title: string; summary: string; build: string };
export type Part = { n: number; title: string; chapters: Chapter[] };

export const parts: Part[] = [
  {
    n: 1,
    title: 'Why prompting is no longer sufficient',
    chapters: [
      { n: 1, title: 'From Prompt to Skills: The Limits of One-off AI Use', summary: 'Why one-off prompting degrades through inconsistency, drift and context loss — and the ladder from prompt to pattern, method, template, skill, workflow and agent.', build: 'A structured diagnostic prompt' },
      { n: 2, title: 'What Agentic Engineering Actually Means', summary: 'A precise vocabulary for model, tool, agent, subagent, context and memory — and the agentic loop that connects them.', build: 'A workflow map of a recurring task' },
    ],
  },
  {
    n: 2,
    title: 'Building reusable skills',
    chapters: [
      { n: 3, title: 'What a Skill Is: Instructions, Context, and Reuse', summary: 'When a prompt earns promotion to a skill, the three-layer structure of metadata, instructions and resources, and progressive disclosure.', build: 'Your first SKILL.md skeleton' },
      { n: 4, title: 'Your First Skill', summary: 'The smallest complete loop: a narrow task, a description that is both trigger and promise, concrete steps, light guardrails and real tests.', build: 'A working bug-ticket-from-logs skill' },
      { n: 5, title: 'Designing Skills That Actually Help', summary: 'Scope with Always / Ask first / Never, move depth into reference files, and tighten triggers so a skill activates only when it should.', build: 'A refined, more reliable skill' },
      { n: 6, title: 'From Personal Prompt to Reusable Workflow', summary: 'Separate the moment from the method and expose inputs, steps, checks, decisions and outputs as a shareable process.', build: 'A WORKFLOW.md for a repeated repo task' },
      { n: 7, title: 'A Skill, an Agent, or a Connected Workflow?', summary: 'A decision framework where the task defines the structure: the smallest shape that fits, worked through one bug at every level.', build: 'A task decision matrix' },
      { n: 8, title: 'Testing, Maintaining, and Sharing AI Workflows', summary: 'Behavioral tests, maintenance notes and review boundaries that make a workflow explain itself once others depend on it.', build: 'A tested, shareable workflow pack' },
    ],
  },
  {
    n: 3,
    title: 'How modern AI agents work in practice',
    chapters: [
      { n: 9, title: 'The Agentic Loop in Practice', summary: 'Gather, act, verify: run a real investigation end to end and fix the ToDo Mate persistence bug at its root.', build: 'An agentic debugging path' },
      { n: 10, title: 'Chat Assistant, IDE Agent, and Background Agent', summary: 'Choose the environment from the work itself — what the agent must see, do, and when you need to step in.', build: 'An environment comparison for one task' },
      { n: 11, title: 'Claude Code and the New Working Environment', summary: 'The agentic harness and its control plane: CLAUDE.md, context coordination, reusable capabilities, extensions and permissions.', build: 'A project-level Claude Code setup' },
    ],
  },
  {
    n: 4,
    title: 'From local workflow to connected capability',
    chapters: [
      { n: 12, title: 'From Response to Action: Designing Tool-Backed Workflows', summary: 'Action contracts, output contracts and a deterministic validator — with tighter approval the further a tool can reach.', build: 'A validator-backed action step' },
      { n: 13, title: 'MCP, RAG, and the Rise of Connected Agent Systems', summary: 'Connect the investigation to Kamori through MCP, tell retrieval from connection, and treat what comes back as data.', build: 'A read-only Kamori MCP connection' },
      { n: 14, title: 'Designing Your Own AI Workbench', summary: 'Assemble subagents, MCP, hooks and a human approval gate into one supervised setup — instruction steers, the harness enforces.', build: 'Your supervised AI workbench' },
    ],
  },
];

export const authorBio = [
  'Martin Krause is an AI consultant, full-stack solution architect and engineering leader with over 20 years of experience delivering scalable digital platforms and advising global organisations.',
  'Trained at Oxford Saïd Business School and LSE-certified in AI ethics, he applies AI and modern architectures to real-world business challenges. He writes regularly for Germany’s largest IT magazine, is the author of The Complete Developer, and builds AI-driven products that bridge cutting-edge technology with practical impact.',
];
