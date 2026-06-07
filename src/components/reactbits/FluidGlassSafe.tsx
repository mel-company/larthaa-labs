import { Component, type ReactNode } from "react";
import FluidGlass from "./FluidGlass";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("FluidGlass crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="aspect-square w-full translate-y-1/4 scale-150 rounded-full bg-[#1B53E2]/30 blur-[6rem]" />
          <div className="absolute z-10 rounded bg-red-600 px-4 py-2 text-sm text-white">
            FluidGlass failed to load — check console
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function FluidGlassSafe(props: React.ComponentProps<typeof FluidGlass>) {
  return (
    <ErrorBoundary>
      <FluidGlass {...props} />
    </ErrorBoundary>
  );
}
