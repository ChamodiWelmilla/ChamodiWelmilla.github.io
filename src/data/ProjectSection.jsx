const ProjectSectionData = [
  {
    id: 1,
    title: "FlowBridge",
    description:
      "An event-driven enterprise B2B trade platform designed for asynchronous document processing, fraud prevention, and strict auditability.",
    image: process.env.PUBLIC_URL + "/images/FlowBridgeCover.png",
    link: "/flowbridge",
  },
  {
    id: 2,
    title: "Bidmesh",
    description:
      "A highly concurrent, microservices-based online auction platform designed for real-time engagement and strict data consistency.",
    image: process.env.PUBLIC_URL + "/images/BidMesCover.png",
    link: "/bidmesh",
  },
  {
    id: 3,
    title: "Vibecheck",
    description:
      "A deterministic verification framework that automatically audits LLM-generated workflows against formal specifications.",
    image: process.env.PUBLIC_URL + "/images/VibeCheckCover.png",
    link: "/vibecheck",
  }, 
];

export default ProjectSectionData;
