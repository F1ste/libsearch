import { Component, Suspense, type ErrorInfo } from 'react';
import { ErrorPage } from 'src/pages/ErrorPage';

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: React.ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info.componentStack);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return <Suspense fallback=''><ErrorPage /></Suspense>;
		}

		return children;
	}
}

export default ErrorBoundary;