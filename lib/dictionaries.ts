// ============================================================================
// 网站全部文案的唯一来源（Single Source of Truth）
// 所有页面组件都从这里读取文字。要新增语言时，复制 en 这一块、翻译内容即可。
// 内容严格来自客户提供的文档与真实网站 www.wholevantage.com，不自动编造。
// ============================================================================

export type Dictionary = typeof en

const en = {
  brand: 'WholeVantage Advisory',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    languages: 'Languages',
    aboutItems: {
      story: 'My Story with WholeVantage',
      approach: 'Our Approach',
    },
    servicesItems: {
      content: 'Service Content',
      process: 'Service Process',
      fee: 'Service Fee',
    },
  },
  home: {
    heroTitle: 'Deeper understanding. Broader perspective.',
    heroText:
      'Reliable, practical Human Resources advisory support for businesses. Empowering organizations to navigate talent, management, and compliance challenges with stability.',
    bookConsultation: 'Book Consultation',
    exploreServices: 'Explore Services',
    introTitle: 'We serve business founders and management teams',
    introText:
      'Whether you are building your U.S. HR infrastructure from scratch, resolving a critical workplace issue, or looking for ongoing advisory support, we deliver clear, actionable, and localized guidance.',
    wechatTitle: 'WholeVantage Advisory',
    wechatText: 'SCAN TO ADD FRIEND',
  },
  story: {
    title: 'About WholeVantage Advisory',
    subtitle:
      'Explore the purpose, background, and values behind WholeVantage Advisory.',
    paragraphs: [
      'WholeVantage Advisory was established to support companies entering or already operating in the U.S. market, providing practical and reliable HR consulting services.',
      'Through WholeVantage, we aim to combine professional HR judgment, deep understanding of human nature, and support for real business scenarios to provide clients with clear, stable, and actionable solutions.',
      "We bring over twenty years of HR and organizational management leadership experience, deeply integrated with hands-on sales management and psychological counseling practice. Our principal, a Master's graduate in Psychology from Peking University, holds three prestigious U.S. advanced HR professional certifications and possesses a multidisciplinary perspective across cultures and geographies.",
      'In our approach, we combine deep understanding of management structures and employment compliance with business reality and organizational insights. We are committed to helping enterprises build solid management foundations, implement effective operational practices, and establish robust organizational support systems to maintain competitiveness in complex business environments.',
    ],
    highlightsTitle: 'Professional Highlights',
    highlights: [
      'HR leadership experience with Fortune 500 companies (Nielsen, BP, Nike, and others)',
      'Hands-on sales and team management experience (Lexus retail system)',
      'Psychological counseling and communication practice (major psychological consulting firm in Southern California)',
      "Master's degree in Psychology from Peking University",
      'Holds three prestigious U.S. advanced HR and global HR professional certifications',
      'Professional expertise spans organizational development, cross-border management, and compliance practices',
    ],
  },
  approach: {
    title: 'Our Approach',
    subtitle:
      "WholeVantage's approach is built on four core principles. These principles reflect our professional judgment, the way we collaborate with clients, and our fundamental attitude toward people and organizational matters.",
    principles: [
      {
        tag: 'Integrity and Principles',
        title: 'Integrity',
        text: 'We provide professional, steady, and trustworthy judgment in matters involving compliance, management, and employee relations. We uphold professional ethics and ensure that every recommendation can stand up to careful review and practical application.',
      },
      {
        tag: 'Insight and Understanding',
        title: 'Insight',
        text: 'We look beyond the issue itself and pay close attention to the organizational context, management practices, workplace relationships, and business realities behind the situation. This allows us to help clients understand matters more accurately and identify practical solutions.',
      },
      {
        tag: 'Empathy and Respect',
        title: 'Empathy',
        text: 'While maintaining professional judgment, we also respect people\u2019s circumstances and feelings. We understand that people are at the center of organizational development, and we approach complex management matters with a strong sense of human care and respect.',
      },
      {
        tag: 'Action and Momentum',
        title: 'Energy',
        text: 'We focus on execution and implementation, not just recommendations on paper. With strong action orientation, we help drive change and support businesses in turning management strategies into visible and practical business outcomes.',
      },
    ],
  },
  serviceContent: {
    title: 'Services',
    subtitle:
      "Our services can be flexibly tailored and combined according to your company's stage of growth, key priorities, and practical business needs.",
    items: [
      {
        title: 'U.S. HR Infrastructure Setup',
        intro:
          'Establish a solid management foundation for companies entering the U.S. market or in early stages.',
        points: [
          'Employee handbook and core policies establishment',
          'Offer letters, NDAs, job descriptions, and other document support',
          'Onboarding, probation, transfer, and offboarding process setup',
          'Employee files and common HR forms creation',
        ],
      },
      {
        title: 'Employment Compliance and Risk Prevention Support',
        intro:
          'Reduce employment risks and ensure compliant operations in the complex U.S. labor law environment.',
        points: [
          'I-9, FLSA, and basic compliance reviews',
          'Federal and state labor law compliance self-checks and recommendations',
          'Full-time vs. independent contractor, exempt vs. non-exempt classification guidance',
          'Working hours and compensation compliance recommendations',
          'Anti-harassment, anti-discrimination policies, and training support',
        ],
      },
      {
        title: 'Recruitment and Hiring Support',
        intro:
          'Assist companies in attracting, evaluating, and bringing in talent that aligns with business needs and cultural fit.',
        points: [
          'Recruitment channel recommendations and employer branding',
          'Key position interview support and candidate evaluation',
          'Background check process and compliance guidance',
          'Market compensation data reference and salary recommendations',
        ],
      },
      {
        title: 'Employee Relations and Management Support',
        intro:
          'Properly handle complex employee relations issues to maintain a healthy and efficient organizational atmosphere.',
        points: [
          'Daily employee relations consulting and handling advice',
          'Performance improvement plan (PIP) coaching for underperforming employees',
          'Disciplinary action and termination process compliance support',
          'Exit interviews and potential dispute risk assessment',
        ],
      },
      {
        title: 'Performance, Compensation, and Talent Management Support',
        intro:
          'Establish scientific evaluation and incentive mechanisms to unlock employee potential and retain core talent.',
        points: [
          'Performance evaluation system design and implementation coaching',
          'Compensation structure design and annual salary adjustment recommendations',
          'Bonus and comprehensive incentive plan design',
          'Core talent identification and long-term retention strategies',
        ],
      },
      {
        title: 'Training and Management Capability Development Support',
        intro:
          'Enhance leadership and team collaboration skills for managers at all levels to empower organizational development.',
        points: [
          'New employee onboarding training system setup',
          'Frontline manager skills training (interviewing, performance feedback, etc.)',
          'Cross-cultural communication and efficient collaboration training',
          'Customized internal management workshop design and facilitation',
        ],
      },
      {
        title: 'People Development and Talent Pipeline Support',
        intro:
          "Plan employee growth paths to build a reserve of key core strength for the company's long-term development.",
        points: [
          'Employee career development path system design',
          'Initial setup of succession planning for key positions',
          'Internal mentorship program design and implementation coaching',
          'Core employee individual development plan (IDP) guidance',
        ],
      },
      {
        title: 'Corporate Culture and Employee Engagement Enhancement',
        intro:
          'Shape a positive organizational atmosphere to enhance employee belonging and engagement.',
        points: [
          'Core corporate values refinement and implementation',
          'Employee satisfaction surveys and improvement plan development',
          'Internal communication mechanism establishment and optimization',
          'Employee recognition and diverse reward program design',
        ],
      },
      {
        title: 'HR Systems and Process Optimization Support',
        intro:
          'Leverage digital tools to improve management operational efficiency and optimize the employee service experience.',
        points: [
          'HR and payroll information system selection recommendations',
          'Core operational process review and automation optimization',
          'Employee self-service platform promotion and application',
          'Key management data metrics establishment and analysis',
        ],
      },
      {
        title: 'Ongoing HR Advisory Support',
        intro:
          'Serve as a long-term strategic partner for the company, providing flexible and in-depth professional management support.',
        points: [
          'On-demand senior management advisory consulting',
          'Participation in management meetings to provide organizational perspectives',
          'Response and resolution of sudden internal crisis events',
          'Follow-up and implementation of phased organizational change projects',
        ],
      },
    ],
  },
  serviceProcess: {
    title: 'Service Process',
    subtitle:
      'A clear, transparent, and flexible collaboration process that ensures every engagement aligns precisely with your business development goals.',
    steps: [
      {
        step: 'Step 01',
        title: 'Initial Consultation',
        text: 'Through a phone call, online meeting, or email communication, we learn about your company\u2019s current stage, key challenges, and the issues you would like to prioritize. This helps us initially identify the right support direction and cooperation focus.',
      },
      {
        step: 'Step 02',
        title: 'Needs Confirmation and Service Proposal',
        text: 'Based on the initial discussion, we further clarify the scope of support, priorities, cooperation approach, and expected goals. We then provide corresponding service recommendations, timeline arrangements, and fee proposals.',
      },
      {
        step: 'Step 03',
        title: 'Project Implementation and Phase-by-Phase Support',
        text: 'After the cooperation scope is confirmed, we begin the agreed project work or phased advisory support. The work focuses on implementing solutions for the HR and management issues most relevant to your company\u2019s current needs.',
      },
      {
        step: 'Step 04',
        title: 'Feedback, Optimization, and Ongoing Support',
        text: 'Based on implementation progress, management feedback, and business changes, we adjust the support focus as needed. After the project is completed, ongoing monthly or on-demand advisory support can also be provided according to your company\u2019s needs.',
      },
    ],
    ctaTitle: 'Not sure what the right first step is?',
    ctaText:
      'You are welcome to start with an initial conversation. Based on your current needs and situation, we can help identify the key priorities and determine the most suitable cooperation approach.',
    ctaButton: 'Contact Us',
  },
  serviceFee: {
    title: 'Collaboration and Pricing Models',
    subtitle:
      'To meet the diverse needs of companies at different stages of growth and with varying management priorities, we offer flexible collaboration models that ensure efficient use of resources.',
    models: [
      {
        title: 'Specialist Consultation and Guidance',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies with basic operational structures and teams in place, seeking professional judgment and solutions for specific challenges.',
        exampleLabel: 'Business Examples',
        example:
          'Guidance on sudden organizational changes, compensation setting for new positions, troubleshooting specific employee issues, and detailed payroll management analysis.',
        billingLabel: 'Billing Reference',
        billing:
          'Billing is based on the complexity and scope of the issue, charged either per consultation or as an annual retainer.',
      },
      {
        title: 'Project-Based Customized Services',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies with emerging teams focused on building comprehensive systems and processes within a specific timeframe.',
        exampleLabel: 'Business Examples',
        example:
          'Building foundational management systems (such as employee handbooks), establishing and optimizing recruitment systems, designing annual performance evaluation mechanisms.',
        billingLabel: 'Billing Reference',
        billing:
          'Project pricing is based on scope, deliverables, and expected collaboration timeline; installment payment options are available when needed.',
      },
      {
        title: 'Ongoing Management Advisory',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Growing companies with complete internal HR teams that need regular, stable, and in-depth ongoing support.',
        exampleLabel: 'Business Examples',
        example:
          'Teams requiring continuous support across recruitment, employment compliance, daily employee relations management, and other HR dimensions based on annual planning.',
        billingLabel: 'Billing Reference',
        billing:
          'Monthly or quarterly fixed service fees, with flexible adjustments based on service frequency and scope.',
      },
      {
        title: 'Training and Management Workshops',
        scenarioLabel: 'Applicable Scenarios',
        scenario:
          'Companies needing team management capability development, cultural awareness enhancement, and specialized training programs.',
        exampleLabel: 'Business Examples',
        example:
          'Front-line manager core competency training, team communication and collaboration workshops, corporate values and culture development sessions.',
        billingLabel: 'Billing Reference',
        billing:
          'Pricing is customized based on course design, duration, training format, and delivery method (online/in-person).',
      },
    ],
    ctaTitle: 'Need help determining the right collaboration model for your company?',
    ctaText:
      'We welcome an initial conversation. Based on your business priorities and budget, we can recommend the most suitable collaboration approach for your needs.',
    ctaButton: 'Contact Us',
  },
  contact: {
    title: 'Contact Us',
    subtitle:
      'Have any questions, collaboration ideas, or just want to say hello? Feel free to reach out to us.',
    emailLabel: 'Email',
    email: 'info@wholevantage.com',
    phoneLabel: 'Phone',
    phone: '+1-407-488-3915',
    officeLabel: 'Office Address',
    office: 'Orlando,Florida,USA',
    formTitle: 'Send Us a Message',
    formSubtitle:
      'Fill out the form below and we will get back to you as soon as possible.',
    fields: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
    },
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Thank you for your message!',
    successText:
      'We have received your message and will get back to you as soon as possible.',
    successClose: 'Close',
    errorText: 'Something went wrong. Please try again or email us directly.',
    configText:
      'The contact form is not fully configured yet. Please email us directly for now.',
  },
  blog: {
    title: 'Blog',
    subtitle:
      'Insights and perspectives on HR management, employment compliance, and organizational development.',
    comingSoon: 'Articles Coming Soon',
    comingSoonText:
      'We are preparing practical articles on HR management and the U.S. employment landscape. Please check back soon.',
  },
  footer: {
    about:
      'We are committed to providing high-quality business consulting and human resources solutions to help companies grow and operate more effectively.',
    contactTitle: 'Contact Us',
    followTitle: 'Follow Us',
    subscribeTitle: 'Subscribe to HR news',
    emailPlaceholder: 'your email address',
    subscribe: 'Subscribe',
    subscribeSuccess: 'Thanks for subscribing!',
    rights: '\u00A9 2026 WholeVantage Advisory. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
} as const

export const dictionaries = {
  en,
  // zh: { ... }  // 预留：补全中文翻译后在此添加
  // es: { ... }  // 预留：补全西班牙文翻译后在此添加
}

export function getDictionary(locale: string): Dictionary {
  return (dictionaries as Record<string, Dictionary>)[locale] ?? en
}
