import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "motion/react";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbNameMap: { [key: string]: string } = {
    services: "Services",
    about: "About Us",
    "case-studies": "Case Studies",
    contact: "Contact",
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Breadcrumb"
      className="bg-white border-b py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home className="size-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const displayName = breadcrumbNameMap[value] || value;

            return (
              <li key={to} className="flex items-center gap-2">
                <ChevronRight className="size-4 text-gray-400" />
                {last ? (
                  <span className="text-gray-900 font-medium capitalize">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-gray-600 hover:text-blue-600 transition-colors capitalize"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </motion.nav>
  );
}
