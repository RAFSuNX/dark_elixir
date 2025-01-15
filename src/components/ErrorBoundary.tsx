import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-accent-500 mb-4">Something went wrong</h2>
        <pre className="text-neutral-400 mb-4">{error.message}</pre>
        <button
          onClick={() => window.location.reload()}
          className="bg-accent-500 text-neutral-900 px-4 py-2 rounded-lg hover:bg-accent-400"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}