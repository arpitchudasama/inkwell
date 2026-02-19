import { AUTHORS } from './authors'

export const BLOGS = [
  {
    id: 1,
    featured: true,
    title: 'The Architecture of Attention: How Modern AI Really Works',
    excerpt:
      'A deep dive into transformer models, self-attention mechanisms, and why they have fundamentally changed everything we thought we knew about machine intelligence.',
    category: 'Technology',
    author: AUTHORS[0],
    readTime: '12 min',
    date: 'Jan 14, 2026',
    tags: ['AI', 'Machine Learning', 'Deep Dive'],
    likes: 2847,
    comments: 143,
    content: `The transformer architecture, introduced in the landmark paper "Attention Is All You Need" (2017), didn't just improve upon existing neural networks—it rendered an entire class of them obsolete overnight.

At the heart of every large language model today lies a deceptively simple idea: instead of processing tokens sequentially, let every token attend to every other token simultaneously. This "self-attention" mechanism allows the model to capture long-range dependencies that recurrent networks struggled with.

## How Self-Attention Works

Given an input sequence, self-attention computes three matrices for each token: Query (Q), Key (K), and Value (V). The attention score between any two tokens is computed as the dot product of their Q and K vectors, scaled and softmaxed. This score weights the V vectors to produce a context-aware representation.

The magic: a token representing "bank" knows whether it's a financial institution or a riverbank by attending to the surrounding tokens. This context-sensitivity is what makes transformers so powerful.

## Multi-Head Attention

Rather than computing a single attention function, transformers run multiple attention heads in parallel. Each head can specialize—one might learn syntactic relationships, another semantic ones, another coreference resolution. The outputs are concatenated and projected, giving the model a rich, multi-faceted view of each token.

## Why This Changes Everything

The parallelism of self-attention made transformers massively scalable on modern GPU hardware. Combined with the "scaling hypothesis"—that simply making models bigger yields better performance—this gave us GPT-4, Claude, Gemini, and the current AI revolution.

Understanding attention is understanding the foundation upon which our entire AI moment is built.`,
  },
  {
    id: 2,
    featured: true,
    title: 'Design Systems That Scale: Lessons from Building Enterprise Component Libraries',
    excerpt:
      'After three years building and maintaining enterprise design systems, here\'s everything I wish someone had told me about tokens, component APIs, and keeping designers happy.',
    category: 'Design',
    author: AUTHORS[1],
    readTime: '9 min',
    date: 'Jan 10, 2026',
    tags: ['Design Systems', 'Figma', 'UI/UX'],
    likes: 1923,
    comments: 87,
    content: `A design system is not a component library. This is the first and most important thing to understand. A design system is a shared language—a contract between design and engineering that ensures a consistent user experience at scale.

## Start With Tokens, Not Components

Design tokens are the atoms of your system: color primitives, spacing scales, type ramps, border radii, shadow elevations. Before you build a single component, you need to nail your tokens. They're the DNA of everything else.

A well-structured token architecture has three layers:

**Primitive tokens** — Raw values (color: #6366f1, spacing: 16px)

**Semantic tokens** — Intent-based aliases (color-primary, spacing-md)

**Component tokens** — Component-specific overrides (button-bg, input-border)

This layering means you can swap themes by changing semantic tokens without touching components.

## Component API Design

Your components are an API. Treat them like one. Every prop is a decision that you'll have to maintain forever. Ask: does this prop belong in the design system, or is it a one-off product concern?

The best components are maximally flexible at the composition layer, not the prop layer. Use compound components, render props, and polymorphic "as" props instead of endlessly growing prop interfaces.

## Documentation Is Half the Work

The best design system in the world fails if people don't know how to use it. Interactive documentation with real usage examples, do/don't guidelines, and accessibility notes is non-negotiable.`,
  },
  {
    id: 3,
    featured: false,
    title: 'The Founder Paradox: Why the Skills That Get You to $1M Kill You at $10M',
    excerpt:
      'Every startup founder I\'ve coached hits the same invisible wall. The hustle, speed, and control that built your company will destroy it if you don\'t change.',
    category: 'Business',
    author: AUTHORS[2],
    readTime: '7 min',
    date: 'Jan 8, 2026',
    tags: ['Startups', 'Leadership', 'Growth'],
    likes: 3102,
    comments: 201,
    content: `I've now advised over 200 startups through seed to Series B, and I've watched brilliant founders fail the same way, over and over. They don't fail because the market changes. They fail because they don't.

## The First $1M: Being Everything

In the early days, the founder's superpower is omniscience and omnipresence. You write code, close deals, do customer support, hire, fire, and somehow still think about product strategy at 2am. This works. It has to work—you're too small for anything else.

## The Death Zone: $1M–$10M ARR

This is where most founders hit the wall. The team is now 15–40 people. You can't be in every conversation. But you still act like you can.

You second-guess your VP of Sales' deals. You rewrite the engineer's code. You're in every customer call. And paradoxically, by doing everything, you've become the bottleneck to everything.

## The Transformation

Scaling past $10M requires becoming a fundamentally different operator. You're now in the business of building systems and people, not products. Your job is to make yourself unnecessary in every function except vision and culture.

This is harder than it sounds. It requires giving up control, tolerating decisions you wouldn't have made, and trusting data over gut. For founders, this feels like dying. It's actually the only way to survive.`,
  },
  {
    id: 4,
    featured: false,
    title: 'CRISPR 3.0: The Gene Editing Revolution Nobody Is Talking About',
    excerpt:
      'Base editing, prime editing, and epigenome editing are making the original CRISPR-Cas9 look crude. Here\'s what the next decade of biological engineering looks like.',
    category: 'Science',
    author: AUTHORS[3],
    readTime: '11 min',
    date: 'Jan 6, 2026',
    tags: ['Biology', 'CRISPR', 'Medicine'],
    likes: 1456,
    comments: 92,
    content: `When Jennifer Doudna and Emmanuelle Charpentier won the 2020 Nobel Prize for CRISPR-Cas9, many assumed the gene editing story was written. It was barely the prologue.

## The Problem With Classic CRISPR

CRISPR-Cas9 works by making a double-strand break in DNA, then letting the cell's repair machinery fix it. The problem: double-strand breaks cause off-target cuts, chromosomal rearrangements, and cell death.

## Base Editing: Chemistry Over Cuts

Base editors change individual DNA letters without cutting both strands. An adenine base editor converts A•T to G•C; cytosine base editors convert C•G to T•A. These four transitions cover a huge fraction of known disease-causing mutations.

The clinical implications are staggering. Base editing trials for sickle cell disease and T-cell leukemia have shown remarkable early results.

## Prime Editing: The Search-and-Replace

If base editing is a precision pencil, prime editing is a word processor. Developed in 2019, prime editors can make all 12 types of point mutations, small insertions, and small deletions—all without double-strand breaks.

Prime editing efficiency in vivo remains a challenge, but 2025 saw several breakthrough delivery methods that brought it closer to clinical viability.`,
  },
  {
    id: 5,
    featured: false,
    title: 'The Quiet Death of Monoculture: How Niche Became the New Mass Market',
    excerpt:
      'Spotify Wrapped revealed something profound. We\'re not living in cultural moments anymore—we\'re living in thousands of parallel universes, each perfectly personalized.',
    category: 'Culture',
    author: AUTHORS[0],
    readTime: '6 min',
    date: 'Jan 4, 2026',
    tags: ['Culture', 'Media', 'Technology'],
    likes: 2213,
    comments: 167,
    content: `In 1983, M*A*S*H's series finale drew 106 million viewers. One show. A third of the country. In 2025, no single piece of content commands that kind of collective attention anymore.

## The Recommendation Engine as Cultural Force

Spotify, TikTok, Netflix, YouTube—their recommendation engines have become the most powerful cultural curators in human history. Not critics. Not radio DJs. Algorithms optimizing for your next 30 seconds of engagement.

## The Paradox of Infinite Choice

Paradoxically, the death of monoculture hasn't made us more culturally diverse—it's made us more culturally atomized. Diversity requires encounter with the genuinely other. Recommendation engines optimize for comfort.

The micro-communities that emerge are internally rich but externally isolated. K-pop stans, Soulsborne players, Dark Academia TikTok—each a vibrant universe, largely invisible to the others.

## What We Lose

Monoculture had real costs: it silenced minorities, it amplified the mainstream. But it also created shared reference points that allowed strangers to connect. "Did you see last night's episode?" is a dying question.`,
  },
  {
    id: 6,
    featured: false,
    title: 'Longevity Science in 2026: What\'s Hype, What\'s Real',
    excerpt:
      'From senolytics to NAD+ boosters to rapamycin, the longevity supplement space is worth $60B and mostly hype. Here\'s how to separate signal from noise.',
    category: 'Health',
    author: AUTHORS[3],
    readTime: '10 min',
    date: 'Jan 2, 2026',
    tags: ['Longevity', 'Health', 'Science'],
    likes: 1789,
    comments: 134,
    content: `Bryan Johnson spends $2 million a year trying not to die. He is a fascinating data point and an extremely poor role model.

## The Longevity Landscape

Let's organize the field by evidence quality, not marketing budget.

**Strong evidence (in humans):** Exercise, sleep quality, not smoking, social connection. Notice anything? None of these are available for purchase from a longevity startup.

**Promising preclinical evidence:** Rapamycin, senolytics (dasatinib + quercetin), Metformin. Human trials are underway but incomplete. Self-prescribing is reckless.

**Mostly hype:** NAD+ precursors (NMN, NR). Billions in sales, limited human evidence.

## The Honest Bottom Line

The interventions with the best human evidence remain: don't smoke, sleep 7–9 hours, exercise regularly, eat mostly whole foods, maintain social bonds. The boring answer is the right answer. Everything else is speculation.`,
  },
  {
    id: 7,
    featured: false,
    title: 'The Carry Trade Unwind: What November\'s Market Carnage Actually Meant',
    excerpt:
      'When yen-funded carry trades collapsed, markets moved in ways that defied conventional wisdom. Here\'s the mechanism most analysts missed.',
    category: 'Finance',
    author: AUTHORS[2],
    readTime: '8 min',
    date: 'Dec 28, 2025',
    tags: ['Finance', 'Markets', 'Analysis'],
    likes: 987,
    comments: 56,
    content: `On November 3rd, 2025, the Nikkei fell 4.2% in a single session. Analysts blamed "risk-off sentiment." They were technically correct and completely wrong.

## What Is a Carry Trade?

Borrow in a low-interest-rate currency, convert to a high-interest-rate currency, invest in that market, and pocket the differential. For decades, the Bank of Japan's near-zero rates made yen the world's favorite funding currency.

## The Unwind Mechanism

When the BOJ surprised markets with a hawkish signal, yen strengthened rapidly. Suddenly, dollar-denominated assets had to be sold to buy back yen and repay loans. The selling was mechanical, forced, and correlated across all assets simultaneously.

This is why seemingly unrelated assets—Brazilian real, US small-caps, Bitcoin—all fell together. They shared a common funding source being withdrawn simultaneously.

## What This Means for Portfolio Construction

In a carry-funded world, correlation is not a fixed property of assets but a dynamic one that spikes precisely when you need diversification most.`,
  },
  {
    id: 8,
    featured: false,
    title: 'Web Components vs. React in 2026: An Honest Comparison',
    excerpt:
      'Five years after Web Components were supposed to kill React, let\'s take an honest look at where the platform API stands versus the framework ecosystem.',
    category: 'Technology',
    author: AUTHORS[1],
    readTime: '8 min',
    date: 'Dec 22, 2025',
    tags: ['Web Dev', 'React', 'Standards'],
    likes: 1632,
    comments: 119,
    content: `Every few years, someone publishes a "React is dead" post and watches it go viral among developers who confuse "technically superior" with "strategically correct."

## What Web Components Actually Are

Custom Elements, Shadow DOM, HTML Templates, and ES Modules. Together, they let you build encapsulated, reusable UI elements that work in any framework—or no framework.

## Where Web Components Excel

Design systems at enterprise scale. Google, Adobe, and SAP ship design system components as Web Components precisely because of framework agnosticism. This is the killer use case.

## Where React Still Wins

Developer experience, ecosystem, React Server Components, composability. React's component model with hooks is still more ergonomic for complex application logic.

## The Honest Take

The future isn't Web Components vs. React—it's Web Components for design systems, React for applications. The ecosystem is converging on this division, not a winner-take-all outcome.`,
  },
  {
    id: 9,
    featured: false,
    title: 'Brutalism in Interface Design: When Ugly Is a Feature, Not a Bug',
    excerpt:
      'Anti-design is having a moment. From Craigslist\'s cult following to Bloomberg\'s terminal aesthetic, sometimes the most memorable design refuses to please.',
    category: 'Design',
    author: AUTHORS[1],
    readTime: '5 min',
    date: 'Dec 18, 2025',
    tags: ['Design', 'Brutalism', 'UI Trends'],
    likes: 2451,
    comments: 188,
    content: `There is a particular brand of design that design Twitter can't stop arguing about: sites that look like they were built in 1997, by someone who actively disliked you, and somehow this makes them compelling.

## What Is Brutalist Web Design?

Borrowed from architecture, brutalism means exposing structure, rejecting ornamentation, and refusing to soften. Where conventional UI says "make the user comfortable," brutalism says "make the user pay attention."

## Why It Works

**Memorability:** In a sea of identical SaaS landing pages, rawness is differentiation.

**Authenticity signals:** Brutalism signals "we don't care about impressing you with polish." Paradoxically, this builds trust with certain audiences.

**Bloomberg Terminal:** The greatest brutalist interface in history. Ugly, dense, incomprehensible to outsiders, loved obsessively by its users.

## When Not to Use It

Brutalism works when the product's credibility doesn't depend on looking premium. For a medical app or consumer fintech, ugliness isn't a feature—it's a trust killer.`,
  },
  {
    id: 10,
    featured: false,
    title: 'How Remote Work Is Quietly Reshaping Urban Geography',
    excerpt:
      'The migration data is finally in. Three years after the great remote work experiment, the geographic shifts are permanent, profound, and nothing like what pundits predicted.',
    category: 'Business',
    author: AUTHORS[2],
    readTime: '7 min',
    date: 'Dec 12, 2025',
    tags: ['Remote Work', 'Economics', 'Cities'],
    likes: 1876,
    comments: 143,
    content: `Everyone knew remote work would shift people from cities to suburbs. That turned out to be the least interesting part of the story.

## What the Data Actually Shows

The more significant story is the rise of "the 15 cities"—mid-tier metros that have absorbed a disproportionate share of remote-work migration. Austin, Boise, Asheville, Chattanooga, Tulsa, Richmond, Spokane, Columbus.

## The Second-Order Effects

**Housing markets:** Rapid in-migration has driven housing costs up 40–80% in many of these cities.

**Political realignment:** Influxes of younger, more educated migrants are shifting the political composition of historically red states.

**Local culture:** The backlash—longtime residents feeling their cities are being overwritten—is a genuine cultural tension playing out in city councils across the country.

## What's Not Going Back

The 2025 data shows a stable equilibrium at roughly 35% fully remote, 45% hybrid, 20% fully in-office for knowledge workers.`,
  },
  {
    id: 11,
    featured: false,
    title: 'The Serotonin Myth: What We Actually Know About Antidepressants',
    excerpt:
      'The 2022 paper questioning the serotonin hypothesis sparked a culture war. Three years later, what do we actually know—and does mechanism matter when drugs work?',
    category: 'Health',
    author: AUTHORS[3],
    readTime: '9 min',
    date: 'Dec 5, 2025',
    tags: ['Neuroscience', 'Mental Health', 'Medicine'],
    likes: 3241,
    comments: 278,
    content: `In 2022, a meta-analysis in Molecular Psychiatry made a simple claim: there is no convincing evidence that depression is caused by low serotonin levels. The popular media responded as though antidepressants had been proven useless. Scientists responded with exasperation. Both responses were wrong.

## What the Paper Actually Said

The Moncrieff et al. review found no consistent evidence that people with depression have lower serotonin levels. This was largely not news to researchers—the "chemical imbalance" framing had been abandoned in academic psychiatry for 20+ years.

What it didn't say: that SSRIs don't work.

## Do SSRIs Actually Work?

Yes, for many people, better than placebo—the evidence for this is solid across thousands of randomized controlled trials. Roughly 40–60% of patients respond to the first SSRI tried.

## The Mechanism Mystery

If serotonin isn't the mechanism, what is? Current hypotheses include neurogenesis in the hippocampus, anti-inflammatory effects, or changes in emotional processing. One of the most widely prescribed drug classes in history works for reasons we don't fully understand.`,
  },
  {
    id: 12,
    featured: false,
    title: 'Option Pricing Beyond Black-Scholes: A Guide to Volatility Surfaces',
    excerpt:
      'Thirty years after the Nobel, traders know Black-Scholes is wrong. Here\'s what they use instead—and why the math of implied volatility is some of the most interesting in finance.',
    category: 'Finance',
    author: AUTHORS[2],
    readTime: '13 min',
    date: 'Nov 28, 2025',
    tags: ['Derivatives', 'Options', 'Quant Finance'],
    likes: 743,
    comments: 41,
    content: `The Black-Scholes model won a Nobel Prize and is wrong. Both of these facts are important, and understanding how they're compatible is the beginning of real options education.

## Why Black-Scholes Is Wrong

It assumes log-normal returns with constant volatility. In reality: returns have fat tails, volatility is not constant, and it varies across strikes. The 1987 crash proved this in the most dramatic possible way.

## The Volatility Surface

Instead of a single implied volatility, the market prices a full surface: implied vol as a function of both strike and expiration. This surface encodes the market's consensus view on tail risks.

The skew reveals how the market prices downside risk. Equity skew is typically negative—puts are more expensive than calls at the same distance—because crashes are more common than blow-ups.

## Local Vol and Stochastic Vol

Local volatility models perfectly fit market prices but fail to predict vol surface dynamics correctly. Stochastic vol models have better dynamics but are harder to calibrate.

The practitioner reality: most desks use a combination, calibrated daily, with overlaid market intuition.`,
  },
]

export const COMMENTS = [
  {
    id: 1,
    author: 'Jamie R.',
    avatar: 'JR',
    date: '2 days ago',
    text: "This is one of the clearest explanations I've read. The way you break down the attention mechanism is perfect for someone coming from a non-ML background.",
    likes: 24,
  },
  {
    id: 2,
    author: 'Dev K.',
    avatar: 'DK',
    date: '3 days ago',
    text: "Great writeup. I'd add that positional encodings are the other non-obvious piece—without them, transformers are permutation-invariant to the input sequence.",
    likes: 18,
  },
  {
    id: 3,
    author: 'Sarah M.',
    avatar: 'SM',
    date: '4 days ago',
    text: "Would love a follow-up on how RLHF changes the picture. The pretraining story makes sense here but it's a different beast after fine-tuning.",
    likes: 31,
  },
]
