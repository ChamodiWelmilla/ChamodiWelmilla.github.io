import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollAnimator() {
  const location = useLocation();

  useEffect(() => {
    // Only run on project pages
    if (!location.pathname.startsWith('/projects/')) return;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        ".project-page-wrapper .card-title, .project-page-wrapper img, .project-page-wrapper iframe, .project-page-wrapper video, .project-page-wrapper .react-player, .project-page-wrapper p, .project-page-wrapper .card-text, .project-page-wrapper ul, .project-page-wrapper span, .project-page-wrapper h1, .project-page-wrapper h2, .project-page-wrapper h3, .project-page-wrapper h4, .project-page-wrapper h5, .project-page-wrapper h6, .project-page-wrapper div"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("project-animate-in");
              entry.target.style.opacity = 1;
            } else {
              entry.target.classList.remove("project-animate-in");
              entry.target.style.opacity = 0;
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => {
        // Filter out layout wrappers
        if (
          el.classList.contains("project-page-wrapper") || 
          el.classList.contains("container") || 
          el.classList.contains("container-fluid") || 
          el.classList.contains("row") || 
          el.classList.contains("col") || 
          el.classList.contains("card") || 
          el.classList.contains("card-body")
        ) {
           return;
        }
        el.style.opacity = 0;
        el.classList.add("project-animate-pending");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
