import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="inline-flex items-center justify-center size-16 bg-red-100 rounded-full mb-6">
                <AlertCircle className="size-8 text-red-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 mb-8">
                We're experiencing technical difficulties. Our team has been
                notified and we're working on a fix.
              </p>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-left">
                  <p className="text-sm font-mono text-red-900 break-all">
                    {this.state.error.message}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.location.href = "/"}
                >
                  Go to Homepage
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  Reload Page
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-gray-600 mb-2">
                  Need immediate assistance?
                </p>
                <a
                  href="tel:+18885551234"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Call (888) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
