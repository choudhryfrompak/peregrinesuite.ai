"use client";

import Link from "next/link";
import Image from "next/image";

const F = '"Mazzard H", sans-serif';

export default function Blog1() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-[-1]" style={{ height: "843px", background: "linear-gradient(180deg, rgb(235, 243, 255) 0%, rgb(255, 255, 255) 100%)" }}></div>
      <article className="max-w-[700px] mx-auto px-5 pt-20 pb-24 flex flex-col items-center">
        <div className="bg-[rgb(240,240,240)] rounded-[6px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(0,0,0,0.05)] px-3 py-1.5 mb-6 mt-4">
          <p style={{ fontFamily: '"Inter", sans-serif', color: "rgba(0,0,0,0.4)", fontSize: 14, letterSpacing: "-0.3px", lineHeight: "14px" }}>Blogs</p>
        </div>
        <h1 style={{ fontFamily: F, color: "#0099FF", fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 600, textAlign: "center", lineHeight: 1.2, letterSpacing: "-1px", marginBottom: 20 }}>
          Why accounting firms are primed to use AI agents in their work Copy
        </h1>
        <p style={{ fontFamily: '"Inter", sans-serif', color: "rgba(0,0,0,0.4)", fontSize: 14, marginBottom: 40 }}>Sep 5, 2025</p>

        <div className="w-full relative overflow-hidden rounded-[20px] mb-12" style={{ aspectRatio: "2444/1564" }}>
          <Image src="/images/blog1-hero.jpg" alt="" fill className="object-cover" />
        </div>

        <div className="w-full flex flex-col gap-6 text-[16px] leading-[1.7] text-left" style={{ color: "rgb(133, 133, 133)", fontFamily: F }}>
          <h4 className="font-semibold italic text-[18px]">Australia’s accounting sector is emerging as an early adopter of Agentic AI, so how is this working in practice, writes Bart Thomas.</h4>
          <p>The finance domain in general has always been a strong candidate for automation, and accounting is no exception.</p>
          <p>Consider an accounting firm where digital assistants handle 50 per cent of the manual work, logging into clients’ systems, downloading reports, and flagging anomalies, before an accountant even starts their day. This is no longer fiction. Agentic AI is already streamlining practice management for forward-thinking firms across Australia.</p>
          <p>A 2023 Australian report estimated that “36 per cent of an accountant’s tasks may be automated, and 26 per cent assisted by generative AI, [which] could lead to a shift towards a more advisory and strategic role for accountants.”</p>
          <p>Notably, this research pre-dates the arrival of Agentic AI, which represents a significant leap in automation and AI usage.</p>
          <p>Agentic AI is shifting the goalposts for what was previously thought as achievable from an automation and AI perspective. As is the case with other sectors, including finance more broadly, accounting is undergoing its own Agentic AI-driven metamorphosis, with both accountants and their clients set to be big winners from this shift.</p>

          <h3 className="text-[#3B82F6] text-[24px] font-medium leading-[1.3] mt-6 mb-2">Automation: old versus new</h3>
          <div className="w-full overflow-hidden rounded-lg border border-gray-200 my-4">
            <table className="w-full text-left border-collapse text-[15px]">
              <tbody>
                <tr className="border-b"><td className="p-4 border-r font-semibold">Traditional Automation (RPA)</td><td className="p-4 font-semibold">Agentic AI agents</td></tr>
                <tr className="border-b"><td className="p-4 border-r">Execute set rules</td><td className="p-4">Can reason and adapt</td></tr>
                <tr className="border-b"><td className="p-4 border-r">Needs structured data</td><td className="p-4">Can handle unstructured information such as emails</td></tr>
                <tr className="border-b"><td className="p-4 border-r">Struggles with exceptions</td><td className="p-4">Can handle new formats/information</td></tr>
                <tr className="border-b"><td className="p-4 border-r">Needs manual oversight</td><td className="p-4">Flags issues for review</td></tr>
                <tr><td className="p-4 border-r">Single task focus</td><td className="p-4">Multi-step workflows</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-[#3B82F6] text-[24px] font-medium leading-[1.3] mt-6 mb-2">So, what’s changed?</h3>
          <p>Unlike previous iterations of automation, such as the use of general-purpose chatbots or robotic process automation (RPA) workflows that execute predefined processes, Agentic AI combines the reasoning power of large language models (LLMs) with a structured, task-specific approach.</p>
          <p>AI Agents are effectively intelligent digital workers. Like all forms of automation, they are still handling repetitive tasks, but they are also capable of reasoning, within clear boundaries set by the firm. That makes them capable of recognising and handling variations they might encounter, such as in the naming conventions of data reports or fields in the accounting software packages used by clients. This enables the agents to work seamlessly, without interrupting the workflow when they encounter something new or different.</p>
          <p>And, to be clear, this is not theoretical: We are already observing Australian accounting firms adopting Agentic AI technology for this specific use case.</p>
          <p>Accountants today can typically spend an inordinate amount of time logging in and out of the accounting software instances used by clients, whether that’s Xero, MYOB or something else, to extract data and reports for their work.</p>
          <p>AI agents today aren’t just extracting data—they’re analysing reports, summarising findings, and alerting accountants to anomalies, all with minimal oversight. As this technology matures and organisations become more comfortable with its capabilities, the role will shift from routine admin to deep analysis, freeing up accountants for strategic, value-added work.</p>

          <h3 className="text-[#3B82F6] text-[24px] font-medium leading-[1.3] mt-6 mb-2">Getting into the specifics</h3>
          <p>To set up an AI agent of this nature in your own firm, it’s important to understand some overarching principles around how the technology works to get the most out of it.</p>
          <p>A key characteristic or requirement of AI agents is specificity.</p>
          <p>It’s important to keep the operational context of an AI agent very tight, constraining the agent to do one thing, and only one thing, really well. Giving an AI agent too expansive a remit invites the possibility of errors and hallucinations. Practically speaking, this means limiting an agent to reading the P&amp;L or balance sheet of a single accounting software package, not multiple packages for example. If multiple software suites need to be accessed, there would need to be an AI agent for each suite.</p>
          <p>The other thing an AI Agent needs is arms and legs – it’s no good having a brain if you can’t take action. You connect an AI agent to your systems safely by equipping it with a variety of tools (automated flows) that interact with your software. One flow might let it connect to your CRM to look up (but not change) customer information. Another flow might give it the ability to create new support tickets. Yet another flow might let it connect to a mailbox to read and send emails. These flows can be built to interact with software and systems using an API or if appropriate, by logging in via the user interface to complete tasks, just as your team do.</p>
          <p>Specificity is all about design and prompt engineering. Accountants who either use or have experimented with generative AI will have learned some lessons around how to structure a prompt - the set of instructions given to the AI - for it to produce the most accurate or tailored outcome.</p>
          <p>AI agents are significantly more complex and require more detailed prompts than a standard generative AI tool. While the prompt that drives the AI agent is still written in natural language, a comprehensive instruction of 600-to-800 words in length, detailing what the AI agent needs to look for and how it should behave, is not unusual. The length of the prompt has a direct relationship to the complexity of the task: constraining that AI agent and training it how to behave in certain situations.</p>
          <p>It’s unlikely that accountants themselves will be writing, managing or maintaining the system prompts underpinning an AI agent. External specialist skills and assistance are likely to be required to get this particular prompt right, given its specificity and length.</p>
          <p>This does not mean every single accounting firm will need to design its own agents, however. By working with organisations like Customer Science Group that have already built such agents, these designs can be leveraged to reduce the time needed to implement an AI agent and have it produce value quickly.</p>

          <h3 className="text-[#3B82F6] text-[24px] font-medium leading-[1.3] mt-6 mb-2">The future of AI agents in accounting</h3>
          <p>As Agentic AI technology evolves, agents won’t just be about pulling data or reports from accounting systems, but also potentially be involved in aspects of data analysis as well.</p>
          <p>Accountants will also be able to interact directly with the AI agent and ask it questions using natural language prompts of their own.</p>
          <p>The potential is limitless. An accountant could have AI agents continuously monitoring client accounts, for example, alerting the accounting team as soon as anomalies pop up, particularly outside of regular reporting intervals. What else might they do?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automate workflows and complete tasks (independently, but always with human oversight)</li>
            <li>Monitoring tax law changes &amp; identifying compliance risks</li>
            <li>Gather and categorise transaction data</li>
            <li>Perform large-scale document analysis</li>
            <li>Automated invoice and statement processing</li>
            <li>Provide custom knowledge leveraging your firm&apos;s policies and unique IP</li>
          </ul>
          <br/>
          <p>AI agents will become an indispensable tool for accountants as the technology progresses, handling administrative work and leaving accountants to build client relationships, oversee more accounts, and handle only the highest value-added work. As this occurs, the long-term promise of automation in the accounting space will finally be realised.</p>

          <h5 className="font-semibold italic mt-4">Bart Thomas is the principal of automation at Customer Science Group.</h5>
        </div>

        {/* Pagination / Links */}
        <div className="w-full flex justify-between items-center mt-12 pt-4">
          <div></div>
          <Link href="/blog/unlocking-transformative-potential-across-every-industry" className="text-[rgb(133,133,133)] hover:text-blue-500 transition-colors text-[16px]" style={{ fontFamily: F }}>
            The Age of AI Agents: Unlocking Transformative Potential Across Every Industry ›
          </Link>
        </div>
      </article>
    </>
  );
}
