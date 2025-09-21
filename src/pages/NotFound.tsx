import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-subtle">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-6 text-2xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to growing success.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-smooth shadow-medium hover:shadow-strong"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
