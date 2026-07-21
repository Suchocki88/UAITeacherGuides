/* ============================================================
   Understanding and Working with AI — Teacher Resource Data
   ------------------------------------------------------------
   This is the ONLY file you need to edit for content changes.

   Each entry:
     id           "1.1" for numbered lessons; "s" + slug for Spotlights
     title        Lesson title as it appears in the ToC
     type         "Core Lesson" | "Lab" | "Project" | "Reflection"
                  (leave "" to hide the badge)
     intro        true for the two Start Here teacher pages, which
                  have a guide but no standards document.
     spotlight    Omit for numbered lessons. For Spotlights, the
                  category label: "Case Study", "Perspective",
                  "Feature", "Game", "Exploration".
                  Spotlights are components of the surrounding lessons
                  and have NO guide/standards documents; they render
                  as context rows without links.
     guideRepo    GitHub repo holding the Teacher Guide (base/Alia
                  version -- the "na" repos are the no-Alia PocketLab
                  adaptations and are deliberately NOT used here).
                  Lesson 2.8 uses UAI0208TG2 (the later of two guides);
                  lesson 1.1 uses the pre-systematic CAAICA0101 repos.
     standardsRepo GitHub repo holding the State Standards page.
     guideUrl     Full deployed URL to the Teacher Guide
                  ("" = renders as an "in development" chip)
     standardsUrl Full deployed URL to the State Standards page
                  ("" = renders as an "in development" chip)
     PL-only repos not used by this hub: UAI0309 (Race for the
     Chocolate), UAI0408 (Documenting Bias), UAI0508b, UAI0805-0807
     (Portfolio/Sharing days), UAI0403Lab, all "na" variants.
   ============================================================ */

const CHAPTERS = [
  {
    num: 0,
    title: "Start Here",
    lessons: [
      { id: "intro-about", intro: true, title: "About This Program", type: "", guideRepo: "CAAICAAboutProgram", guideUrl: "https://suchocki88.github.io/CAAICAAboutProgram/" },
      { id: "intro-first-day", intro: true, title: "Understanding AI | First Day", type: "", guideRepo: "UAIFirstDayTG", guideUrl: "https://suchocki88.github.io/UAIFirstDayTG/" }
    ]
  },
  {
    num: 1,
    title: "Intelligence",
    lessons: [
      { id: "1.1", title: "Three Kinds of Intelligence", type: "Core Lesson", guideRepo: "CAAICA0101", standardsRepo: "CAAICA0101Standards", guideUrl: "https://suchocki88.github.io/CAAICA0101/", standardsUrl: "https://suchocki88.github.io/CAAICA0101Standards/" },
      { id: "s-clever-hans", spotlight: "Case Study", title: "Clever Hans", type: "" },
      { id: "1.2", title: "Three Types of AI Intelligence", type: "Core Lesson", guideRepo: "UAI0102TG", standardsRepo: "UAI0102Standards", guideUrl: "https://suchocki88.github.io/UAI0102TG/", standardsUrl: "https://suchocki88.github.io/UAI0102Standards/" },
      { id: "1.3", title: "Your AI Lab Partner", type: "Lab", guideRepo: "UAI0103TG", standardsRepo: "UAI0103Standards", guideUrl: "https://suchocki88.github.io/UAI0103TG/", standardsUrl: "https://suchocki88.github.io/UAI0103Standards/" },
      { id: "1.4", title: "AI vs. Traditional Software", type: "Core Lesson", guideRepo: "UAI0104TG", standardsRepo: "UAI0104Standards", guideUrl: "https://suchocki88.github.io/UAI0104TG/", standardsUrl: "https://suchocki88.github.io/UAI0104Standards/" },
      { id: "1.5", title: "Finding AI's Boundaries", type: "Lab", guideRepo: "UAI0105TG", standardsRepo: "UAI0105Standards", guideUrl: "https://suchocki88.github.io/UAI0105TG/", standardsUrl: "https://suchocki88.github.io/UAI0105Standards/" },
      { id: "1.6", title: "Launching Your Creative Journey", type: "Project", guideRepo: "UAI0106TG", standardsRepo: "UAI0106Standards", guideUrl: "https://suchocki88.github.io/UAI0106TG/", standardsUrl: "https://suchocki88.github.io/UAI0106Standards/" },
      { id: "1.7", title: "Intelligence All Around Us", type: "Reflection", guideRepo: "UAI0107TG", standardsRepo: "UAI0107Standards", guideUrl: "https://suchocki88.github.io/UAI0107TG/", standardsUrl: "https://suchocki88.github.io/UAI0107Standards/" }
    ]
  },
  {
    num: 2,
    title: "Teaching Machines",
    lessons: [
      { id: "2.1", title: "The Old Way\u2014Programming Rules", type: "Core Lesson", guideRepo: "UAI0201TG", standardsRepo: "UAI0201Standards", guideUrl: "https://suchocki88.github.io/UAI0201TG/", standardsUrl: "https://suchocki88.github.io/UAI0201Standards/" },
      { id: "2.2", title: "The AI Way\u2014Learning by Example", type: "Core Lesson", guideRepo: "UAI0202TG", standardsRepo: "UAI0202Standards", guideUrl: "https://suchocki88.github.io/UAI0202TG/", standardsUrl: "https://suchocki88.github.io/UAI0202Standards/" },
      { id: "s-ai-and-bitcoin", spotlight: "Perspective", title: "AI and Bitcoin", type: "" },
      { id: "2.3", title: "The Knock-Knock Joke Journey", type: "Core Lesson", guideRepo: "UAI0203TG", standardsRepo: "UAI0203Standards", guideUrl: "https://suchocki88.github.io/UAI0203TG/", standardsUrl: "https://suchocki88.github.io/UAI0203Standards/" },
      { id: "2.4", title: "The Knock-Knock Joke Journey", type: "Reflection", guideRepo: "UAI0204TG", standardsRepo: "UAI0204Standards", guideUrl: "https://suchocki88.github.io/UAI0204TG/", standardsUrl: "https://suchocki88.github.io/UAI0204Standards/" },
      { id: "2.5", title: "From Chaos to Comedy", type: "Lab", guideRepo: "UAI0205TG", standardsRepo: "UAI0205Standards", guideUrl: "https://suchocki88.github.io/UAI0205TG/", standardsUrl: "https://suchocki88.github.io/UAI0205Standards/" },
      { id: "2.6", title: "Building the Core", type: "Project", guideRepo: "UAI0206TG", standardsRepo: "UAI0206Standards", guideUrl: "https://suchocki88.github.io/UAI0206TG/", standardsUrl: "https://suchocki88.github.io/UAI0206Standards/" },
      { id: "2.7", title: "Pulling It All Together", type: "Core Lesson", guideRepo: "UAI0207TG", standardsRepo: "UAI0207Standards", guideUrl: "https://suchocki88.github.io/UAI0207TG/", standardsUrl: "https://suchocki88.github.io/UAI0207Standards/" },
      { id: "2.8", title: "What It Means To Be Creative", type: "Reflection", guideRepo: "UAI0208TG2", standardsRepo: "UAI0208Standards", guideUrl: "https://suchocki88.github.io/UAI0208TG2/", standardsUrl: "https://suchocki88.github.io/UAI0208Standards/" }
    ]
  },
  {
    num: 3,
    title: "Prompt Engineering",
    lessons: [
      { id: "3.1", title: "The New Communication Landscape", type: "Core Lesson", guideRepo: "UAI0301TG", standardsRepo: "UAI0301Standards", guideUrl: "https://suchocki88.github.io/UAI0301TG/", standardsUrl: "https://suchocki88.github.io/UAI0301Standards/" },
      { id: "3.2", title: "Basic Prompt Structures", type: "Core Lesson", guideRepo: "UAI0302TG", standardsRepo: "UAI0302Standards", guideUrl: "https://suchocki88.github.io/UAI0302TG/", standardsUrl: "https://suchocki88.github.io/UAI0302Standards/" },
      { id: "3.3", title: "Context and Clarity", type: "Core Lesson", guideRepo: "UAI0303TG", standardsRepo: "UAI0303Standards", guideUrl: "https://suchocki88.github.io/UAI0303TG/", standardsUrl: "https://suchocki88.github.io/UAI0303Standards/" },
      { id: "3.4", title: "Why Writing Still Matters", type: "Reflection", guideRepo: "UAI0304TG", standardsRepo: "UAI0304Standards", guideUrl: "https://suchocki88.github.io/UAI0304TG/", standardsUrl: "https://suchocki88.github.io/UAI0304Standards/" },
      { id: "3.5", title: "Recognizing Good Output", type: "Lab", guideRepo: "UAI0305TG", standardsRepo: "UAI0305Standards", guideUrl: "https://suchocki88.github.io/UAI0305TG/", standardsUrl: "https://suchocki88.github.io/UAI0305Standards/" },
      { id: "3.6", title: "AI Whispering Your Creativity", type: "Project", guideRepo: "UAI0306TG", standardsRepo: "UAI0306Standards", guideUrl: "https://suchocki88.github.io/UAI0306TG/", standardsUrl: "https://suchocki88.github.io/UAI0306Standards/" },
      { id: "3.7", title: "AI and Human Labor", type: "Reflection", guideRepo: "UAI0307TG", standardsRepo: "UAI0307Standards", guideUrl: "https://suchocki88.github.io/UAI0307TG/", standardsUrl: "https://suchocki88.github.io/UAI0307Standards/" },
      { id: "3.8", title: "Building Simulations", type: "Lab", guideRepo: "UAI0308TG", standardsRepo: "UAI0308Standards", guideUrl: "https://suchocki88.github.io/UAI0308TG/", standardsUrl: "https://suchocki88.github.io/UAI0308Standards/" },
      { id: "s-computer-use-agents", spotlight: "Feature", title: "Computer Use Agents", type: "" }
    ]
  },
  {
    num: 4,
    title: "AI Bias",
    lessons: [
      { id: "4.1", title: "What Is Bias?", type: "Core Lesson", guideRepo: "UAI0401TG", standardsRepo: "UAI0401Standards", guideUrl: "https://suchocki88.github.io/UAI0401TG/", standardsUrl: "https://suchocki88.github.io/UAI0401Standards/" },
      { id: "4.2", title: "AI Bias", type: "Core Lesson", guideRepo: "UAI0402TG", standardsRepo: "UAI0402Standards", guideUrl: "https://suchocki88.github.io/UAI0402TG/", standardsUrl: "https://suchocki88.github.io/UAI0402Standards/" },
      { id: "4.3", title: "Hidden Patterns", type: "Lab", guideRepo: "UAI0403TG", standardsRepo: "UAI0403Standards", guideUrl: "https://suchocki88.github.io/UAI0403TG/", standardsUrl: "https://suchocki88.github.io/UAI0403Standards/" },
      { id: "4.4", title: "Cultural Assumptions in AI", type: "Lab", guideRepo: "UAI0404TG", standardsRepo: "UAI0404Standards", guideUrl: "https://suchocki88.github.io/UAI0404TG/", standardsUrl: "https://suchocki88.github.io/UAI0404Standards/" },
      { id: "s-i-rise-to-speak", spotlight: "Case Study", title: "\u201CI Rise to Speak\u201D", type: "" },
      { id: "4.5", title: "The Flattery Problem", type: "Reflection", guideRepo: "UAI0405TG", standardsRepo: "UAI0405Standards", guideUrl: "https://suchocki88.github.io/UAI0405TG/", standardsUrl: "https://suchocki88.github.io/UAI0405Standards/" },
      { id: "4.6", title: "Some Final Thoughts on AI Bias", type: "Core Lesson", guideRepo: "UAI0406TG", standardsRepo: "UAI0406Standards", guideUrl: "https://suchocki88.github.io/UAI0406TG/", standardsUrl: "https://suchocki88.github.io/UAI0406Standards/" },
      { id: "4.7", title: "Bias In Creative AI", type: "Project", guideRepo: "UAI0407TG", standardsRepo: "UAI0407Standards", guideUrl: "https://suchocki88.github.io/UAI0407TG/", standardsUrl: "https://suchocki88.github.io/UAI0407Standards/" }
    ]
  },
  {
    num: 5,
    title: "Magic from Math",
    lessons: [
      { id: "5.1", title: "AI's Crystal Ball", type: "Core Lesson", guideRepo: "UAI0501TG", standardsRepo: "UAI0501Standards", guideUrl: "https://suchocki88.github.io/UAI0501TG/", standardsUrl: "https://suchocki88.github.io/UAI0501Standards/" },
      { id: "5.2", title: "Probability in Action", type: "Lab", guideRepo: "UAI0502TG", standardsRepo: "UAI0502Standards", guideUrl: "https://suchocki88.github.io/UAI0502TG/", standardsUrl: "https://suchocki88.github.io/UAI0502Standards/" },
      { id: "5.3", title: "The Nature of AI", type: "Core Lesson", guideRepo: "UAI0503TG", standardsRepo: "UAI0503Standards", guideUrl: "https://suchocki88.github.io/UAI0503TG/", standardsUrl: "https://suchocki88.github.io/UAI0503Standards/" },
      { id: "s-semantic-space", spotlight: "Game", title: "Semantic Space Activity", type: "" },
      { id: "5.4", title: "When Predictions Go Wrong", type: "Lab", guideRepo: "UAI0504TG", standardsRepo: "UAI0504Standards", guideUrl: "https://suchocki88.github.io/UAI0504TG/", standardsUrl: "https://suchocki88.github.io/UAI0504Standards/" },
      { id: "5.5", title: "Probability in Your Daily Life", type: "Reflection", guideRepo: "UAI0505TG", standardsRepo: "UAI0505Standards", guideUrl: "https://suchocki88.github.io/UAI0505TG/", standardsUrl: "https://suchocki88.github.io/UAI0505Standards/" },
      { id: "s-earthquake-trial", spotlight: "Case Study", title: "The Earthquake Trial", type: "" },
      { id: "5.6", title: "Story Predictions with AI", type: "Project", guideRepo: "UAI0506TG", standardsRepo: "UAI0506Standards", guideUrl: "https://suchocki88.github.io/UAI0506TG/", standardsUrl: "https://suchocki88.github.io/UAI0506Standards/" },
      { id: "5.7", title: "Building Critical Thinking Frameworks", type: "Lab", guideRepo: "UAI0507TG", standardsRepo: "UAI0507Standards", guideUrl: "https://suchocki88.github.io/UAI0507TG/", standardsUrl: "https://suchocki88.github.io/UAI0507Standards/" },
      { id: "5.8", title: "On Sentience", type: "Reflection", guideRepo: "UAI0508TG", standardsRepo: "UAI0508Standards", guideUrl: "https://suchocki88.github.io/UAI0508TG/", standardsUrl: "https://suchocki88.github.io/UAI0508Standards/" }
    ]
  },
  {
    num: 6,
    title: "AI Algorithms and People",
    lessons: [
      { id: "6.1", title: "High Stakes Decisions", type: "Core Lesson", guideRepo: "UAI0601TG", standardsRepo: "UAI0601Standards", guideUrl: "https://suchocki88.github.io/UAI0601TG/", standardsUrl: "https://suchocki88.github.io/UAI0601Standards/" },
      { id: "6.2", title: "The Hiring Algorithm", type: "Core Lesson", guideRepo: "UAI0602TG", standardsRepo: "UAI0602Standards", guideUrl: "https://suchocki88.github.io/UAI0602TG/", standardsUrl: "https://suchocki88.github.io/UAI0602Standards/" },
      { id: "6.3", title: "AI in Criminal Justice", type: "Reflection", guideRepo: "UAI0603TG", standardsRepo: "UAI0603Standards", guideUrl: "https://suchocki88.github.io/UAI0603TG/", standardsUrl: "https://suchocki88.github.io/UAI0603Standards/" },
      { id: "6.4", title: "What Does \u201CFair\u201D Mean?", type: "Lab", guideRepo: "UAI0604TG", standardsRepo: "UAI0604Standards", guideUrl: "https://suchocki88.github.io/UAI0604TG/", standardsUrl: "https://suchocki88.github.io/UAI0604Standards/" },
      { id: "6.5", title: "AI in Education", type: "Core Lesson", guideRepo: "UAI0605TG", standardsRepo: "UAI0605Standards", guideUrl: "https://suchocki88.github.io/UAI0605TG/", standardsUrl: "https://suchocki88.github.io/UAI0605Standards/" },
      { id: "6.6", title: "When Algorithms Fail", type: "Reflection", guideRepo: "UAI0606TG", standardsRepo: "UAI0606Standards", guideUrl: "https://suchocki88.github.io/UAI0606TG/", standardsUrl: "https://suchocki88.github.io/UAI0606Standards/" },
      { id: "s-algorithmic-scandal", spotlight: "Case Study", title: "An Algorithmic Scandal", type: "" },
      { id: "6.7", title: "Your Character Meets the Algorithm", type: "Project", guideRepo: "UAI0607TG", standardsRepo: "UAI0607Standards", guideUrl: "https://suchocki88.github.io/UAI0607TG/", standardsUrl: "https://suchocki88.github.io/UAI0607Standards/" },
      { id: "6.8", title: "You Know More Than You Think", type: "Reflection", guideRepo: "UAI0608TG", standardsRepo: "UAI0608Standards", guideUrl: "https://suchocki88.github.io/UAI0608TG/", standardsUrl: "https://suchocki88.github.io/UAI0608Standards/" }
    ]
  },
  {
    num: 7,
    title: "AI in Media",
    lessons: [
      { id: "7.1", title: "Real or Fake?", type: "Core Lesson", guideRepo: "UAI0701TG", standardsRepo: "UAI0701Standards", guideUrl: "https://suchocki88.github.io/UAI0701TG/", standardsUrl: "https://suchocki88.github.io/UAI0701Standards/" },
      { id: "7.2", title: "Lyric Detection", type: "Lab", guideRepo: "UAI0702TG", standardsRepo: "UAI0702Standards", guideUrl: "https://suchocki88.github.io/UAI0702TG/", standardsUrl: "https://suchocki88.github.io/UAI0702Standards/" },
      { id: "s-deepfake-that-didnt-work", spotlight: "Case Study", title: "The Deepfake that Didn't Work", type: "" },
      { id: "7.3", title: "AI vs. Human Writing", type: "Lab", guideRepo: "UAI0703TG", standardsRepo: "UAI0703Standards", guideUrl: "https://suchocki88.github.io/UAI0703TG/", standardsUrl: "https://suchocki88.github.io/UAI0703Standards/" },
      { id: "7.4", title: "Your Authentic Voice", type: "Project", guideRepo: "UAI0704TG", standardsRepo: "UAI0704Standards", guideUrl: "https://suchocki88.github.io/UAI0704TG/", standardsUrl: "https://suchocki88.github.io/UAI0704Standards/" },
      { id: "7.5", title: "Misinformation in the AI Age", type: "Reflection", guideRepo: "UAI0705TG", standardsRepo: "UAI0705Standards", guideUrl: "https://suchocki88.github.io/UAI0705TG/", standardsUrl: "https://suchocki88.github.io/UAI0705Standards/" },
      { id: "7.6", title: "Tools for Truth Verification", type: "Lab", guideRepo: "UAI0706TG", standardsRepo: "UAI0706Standards", guideUrl: "https://suchocki88.github.io/UAI0706TG/", standardsUrl: "https://suchocki88.github.io/UAI0706Standards/" },
      { id: "s-they-expect-you-to-fact-check", spotlight: "Case Study", title: "They Expect You to Fact-Check", type: "" },
      { id: "7.7", title: "Democracy and Information Quality", type: "Reflection", guideRepo: "UAI0707TG", standardsRepo: "UAI0707Standards", guideUrl: "https://suchocki88.github.io/UAI0707TG/", standardsUrl: "https://suchocki88.github.io/UAI0707Standards/" }
    ]
  },
  {
    num: 8,
    title: "An AI-Powered Future",
    lessons: [
      { id: "8.1", title: "The Speculative Chapter", type: "Core Lesson", guideRepo: "UAI0801TG", standardsRepo: "UAI0801Standards", guideUrl: "https://suchocki88.github.io/UAI0801TG/", standardsUrl: "https://suchocki88.github.io/UAI0801Standards/" },
      { id: "8.2", title: "The Next Ten Years", type: "Reflection", guideRepo: "UAI0802TG", standardsRepo: "UAI0802Standards", guideUrl: "https://suchocki88.github.io/UAI0802TG/", standardsUrl: "https://suchocki88.github.io/UAI0802Standards/" },
      { id: "s-ai-in-warfare", spotlight: "Case Study", title: "AI in Warfare", type: "" },
      { id: "8.3", title: "The Next Fifty Years", type: "Reflection", guideRepo: "UAI0803TG", standardsRepo: "UAI0803Standards", guideUrl: "https://suchocki88.github.io/UAI0803TG/", standardsUrl: "https://suchocki88.github.io/UAI0803Standards/" },
      { id: "8.4", title: "Power, Wealth, and Control", type: "Reflection", guideRepo: "UAI0804TG", standardsRepo: "UAI0804Standards", guideUrl: "https://suchocki88.github.io/UAI0804TG/", standardsUrl: "https://suchocki88.github.io/UAI0804Standards/" },
      { id: "s-cooling-the-cloud", spotlight: "Exploration", title: "Cooling the Cloud", type: "" },
      { id: "s-powering-the-cloud", spotlight: "Exploration", title: "Powering the Cloud", type: "" },
      { id: "8.5", title: "The Finish Line", type: "Project", guideRepo: "UAI0805TG", standardsRepo: "UAI0805Standards", guideUrl: "https://suchocki88.github.io/UAI0805TG/", standardsUrl: "https://suchocki88.github.io/UAI0805Standards/" }
    ]
  }
];
