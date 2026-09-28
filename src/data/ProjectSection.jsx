const ProjectSectionData = [
  {
    id: 1,
    title: "Bidmesh",
    description:
      "A highly concurrent, microservices-based online auction platform designed for real-time engagement and strict data consistency.",
    image: process.env.PUBLIC_URL + "/images/BidMesCover.png",
    link: "/bidmesh",
  },
  {
    id: 2,
    title: "Vibecheck",
    description:
      "A deterministic verification framework that automatically audits LLM-generated workflows against formal specifications.",
    image: process.env.PUBLIC_URL + "/images/VibeCheckCover.png",
    link: "/vibecheck",
  }, 
  {
    id: 3,
    title: "FaceSync",
    description:
      "An automated attendance system using face recognition to ensure accurate, real‑time identity verification.",
    image: process.env.PUBLIC_URL + "/images/FaceSyncCover.png",
    link: "/facesync",
  },
];

export default ProjectSectionData;
