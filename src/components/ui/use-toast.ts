import * as React from "react";

interface Toast {
  id: number;
  title?: string;
  description?: string;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: number) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, ...toast }]);
    // Auto remove after 3 seconds
    setTimeout(() => removeToast(id), 3000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const value: ToastContextType = { toasts, addToast, removeToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}

// Simple helper function to call outside component:
export const toast = (toast: Omit<Toast, 'id'>) => {
  const event = new CustomEvent("custom-toast", { detail: toast });
  window.dispatchEvent(event);
};

// Listen for global toast event and forward it into provider
export function GlobalToastConnector() {
  const { addToast } = useToast();

  React.useEffect(() => {
    const handler = (e: CustomEvent) => {
      addToast(e.detail);
    };
    window.addEventListener("custom-toast", handler as any);
    return () => window.removeEventListener("custom-toast", handler as any);
  }, [addToast]);

  return null;
}
