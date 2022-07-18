interface IContainer {
    children: React.ReactNode;
}

export default function Layout({ children }: IContainer) {
    return (
        <div className="bootstrap-container mx-auto py-12 md:py-16 z-50">
            {children}
        </div>
    )
}