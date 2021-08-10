import * as React from "react"

const Layout = ({children}) => {
    return (
        <div>
            <header>
                header
            </header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout;