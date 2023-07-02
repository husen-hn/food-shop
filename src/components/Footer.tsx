function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="text-white dark:text-dark text-center p-12">{`Copyright © Mishka Code ${year}`}</footer>
    )
}

export default Footer
