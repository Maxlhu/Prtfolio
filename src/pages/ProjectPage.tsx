// import desjungles_preview from "../assets/desjungles_preview.png";

// interface ProjectPageProps {
//     projectId: string;
// }

// export function ProjectPage({ projectId }: ProjectPageProps) {
//     return (
//         <div className="min-h-screen w-screen bg-black">
//             {/* Hero */}
//             <div
//                 style={{ backgroundImage: `url(${desjungles_preview})` }}
//                 className="relative flex flex-col justify-end bg-cover bg-center h-screen"
//             >
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

//                 <div className="relative z-10 px-10 pb-16 max-w-4xl">
//                     <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-3 block">
//                         Case Study
//                     </span>
//                     <h1 className="text-7xl font-black text-white leading-none tracking-tight mb-4">
//                         Project Title
//                     </h1>
//                     <p className="text-xl text-gray-300 font-light max-w-xl leading-relaxed">
//                         Project description goes here. A short, punchy summary of what this is about.
//                     </p>
//                 </div>

//                 {/* Scroll hint */}
//                 <div className="absolute bottom-6 right-10 text-gray-400 font-mono text-xs tracking-widest animate-bounce">
//                     scroll ↓
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="max-w-4xl ml-10 px-6 pb-32">
//                 <SectionTitle title="What is Desjungles" />
//                 <SectionText text="Detailed information about the project goes here. This can include the technologies used, the challenges faced, and the outcomes achieved." />

//                 <MediumProjectImage imageUrl={desjungles_preview} alt="Project Screenshot" />

//                 <SectionText text="Additional information about the project can be added here, such as links to the source code, live demo, or any relevant documentation." />

//                 <SectionTitle title="What it does" />
//                 <ul className="mt-2">
//                     <BulletPoint text="A banking app where users can transfer money between their accounts and send funds to others." />
//                     <BulletPoint text="Adapts to the user's environment while expressing creativity in every interaction." />
//                     <BulletPoint text="Feature 1: Description of feature 1." />
//                     <BulletPoint text="Feature 2: Description of feature 2." />
//                     <BulletPoint text="Feature 3: Description of feature 3." />
//                 </ul>

//                 <SectionTitle title="How it works" />
//                 <SectionText text="Here we can provide a more technical explanation of how the project works — the architecture, algorithms used, and any interesting implementation details." />

//                 <CodeBlock code={`function example() {
//   console.log("This is an example code block.");
// }`} />
//             </div>
//         </div>
//     );
// }