import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { getHomePage } from "@/lib/auth";

export function NotFound() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const homePage = user ? getHomePage(user) : "/";

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="max-w-md w-full border-2 border-dashed border-slate-300 bg-white rounded-xl p-10 text-center space-y-6 shadow-sm">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-slate-800 tracking-tighter">404</h1>
          <h2 className="text-xl font-semibold text-slate-600">Page Not Found</h2>
        </div>

        <p className="text-slate-500 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="pt-4 border-t border-dashed border-slate-200">
          <Button
            onClick={() => navigate(homePage)}
            className="w-full bg-[#1a40a8] hover:bg-blue-800"
          >
            Return to Dashboard
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="w-full mt-2 text-slate-500 hover:text-slate-700"
          >
            Back to Login
          </Button>
        </div>
      </div>
    </div>
  );
}
